/* =========================================================
   app.js
   سامانه آزمون آنلاین - نسخه پایدار
   ========================================================= */

"use strict";

/* =========================================================
   تنظیمات پایه
   ========================================================= */

const DEFAULT_CONFIG = {
    title: "سامانه آزمون آنلاین",
    durationMinutes: 100,
    maxExits: 3,
    autoFinishOnMaxExits: true
};


/* =========================================================
   تنظیمات مدیر
   ========================================================= */

function getAdminSettings() {
    try {
        return JSON.parse(
            localStorage.getItem("admin_settings") || "{}"
        );
    } catch (e) {
        return {};
    }
}


const ADMIN_SETTINGS = getAdminSettings();

const EXAM_TIME =
    Number(ADMIN_SETTINGS.duration) > 0
        ? Number(ADMIN_SETTINGS.duration)
        : DEFAULT_CONFIG.durationMinutes;

const EXAM_MAX_EXITS =
    ADMIN_SETTINGS.maxExits !== undefined
        ? Number(ADMIN_SETTINGS.maxExits)
        : DEFAULT_CONFIG.maxExits;

const EXAM_TITLE =
    ADMIN_SETTINGS.title ||
    DEFAULT_CONFIG.title;


/* =========================================================
   کلید پاسخ‌ها
   گزینه‌ها از 1 تا 4
   ========================================================= */

const ANSWERS = {

    1: 4,
    2: 4,
    3: 1,
    4: 2,
    5: 1,
    6: 2,
    7: 3,
    8: 4,
    9: 3,
    10: 1,

    11: 2,
    12: 3,
    13: 1,
    14: 4,
    15: 2,
    16: 1,
    17: 3,
    18: 1,
    19: 2,
    20: 3,

    21: 2,
    22: 4,
    23: 3,
    24: 2,
    25: 1,
    26: 1,
    27: 4,
    28: 3,
    29: 4,
    30: 1,

    31: 2,
    32: 1,
    33: 2,
    34: 3,
    35: 2,
    36: 4,
    37: 1,
    38: 2,
    39: 1,
    40: 2,

    41: 3,
    42: 4,
    43: 1,
    44: 2,
    45: 1,
    46: 2,
    47: 1,
    48: 4,
    49: 1,
    50: 3,

    51: 3,
    52: 2,
    53: 4,
    54: 1,
    55: 2,
    56: 3,
    57: 4,
    58: 1,
    59: 2,
    60: 2,

    61: 3,
    62: 4,
    63: 2,
    64: 1,
    65: 4,
    66: 3,
    67: 2,
    68: 1,
    69: 4,
    70: 2,

    71: 1,
    72: 4,
    73: 2,
    74: 3,
    75: 4,
    76: 3,
    77: 1,
    78: 4,
    79: 2,
    80: 2,

    81: 3,
    82: 4,
    83: 2,
    84: 1,
    85: 3,
    86: 4,
    87: 1,
    88: 2,
    89: 4,
    90: 3,

    91: 1,
    92: 3,
    93: 2,
    94: 4,
    95: 1,
    96: 1,
    97: 3,
    98: 3,
    99: 2,
    100: 3
};


/* =========================================================
   وضعیت آزمون
   ========================================================= */

let currentQuestion = 0;

let userAnswers = {};

let seconds = EXAM_TIME * 60;

let exits = 0;

let started = false;

let finished = false;

let timer = null;

let candidate = null;

let startTime = null;


/* =========================================================
   ابزارها
   ========================================================= */

function $(id) {
    return document.getElementById(id);
}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(/[&<>"']/g, function (char) {

            const chars = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return chars[char];
        });
}


/* =========================================================
   بارگذاری questions.js
   ========================================================= */

function loadQuestionsFile() {

    return new Promise(function (resolve, reject) {

        if (
            typeof window.QUESTIONS !== "undefined" &&
            Array.isArray(window.QUESTIONS)
        ) {
            resolve(window.QUESTIONS);
            return;
        }


        const script =
            document.createElement("script");

        script.src = "questions.js";

        script.onload = function () {

            if (
                typeof window.QUESTIONS !== "undefined" &&
                Array.isArray(window.QUESTIONS)
            ) {
                resolve(window.QUESTIONS);
            } else {
                reject(
                    new Error(
                        "QUESTIONS در questions.js پیدا نشد."
                    )
                );
            }
        };


        script.onerror = function () {

            reject(
                new Error(
                    "فایل questions.js پیدا نشد."
                )
            );
        };


        document.head.appendChild(script);

    });
}


/* =========================================================
   دریافت سوالات
   ========================================================= */

function getQuestions() {

    if (
        typeof window.QUESTIONS !== "undefined" &&
        Array.isArray(window.QUESTIONS)
    ) {
        return window.QUESTIONS;
    }

    return [];
}


/* =========================================================
   داوطلب‌ها
   ========================================================= */

function getCandidates() {

    try {

        return JSON.parse(
            localStorage.getItem("candidates") || "[]"
        );

    } catch (e) {

        return [];
    }
}


function findCandidate(name, code) {

    const candidates = getCandidates();

    return candidates.find(function (item) {

        return (
            String(item.name).trim() ===
            String(name).trim()
        ) &&
        (
            String(item.code).trim() ===
            String(code).trim()
        );

    });
}


/* =========================================================
   ذخیره وضعیت
   ========================================================= */

function saveExamState() {

    if (
        !started ||
        finished ||
        !candidate
    ) {
        return;
    }


    const state = {

        currentQuestion,

        userAnswers,

        seconds,

        exits,

        candidate,

        startTime

    };


    localStorage.setItem(

        "exam_state_" + candidate.code,

        JSON.stringify(state)

    );
}


/* =========================================================
   بازیابی وضعیت
   ========================================================= */

function loadExamState() {

    if (!candidate) {
        return false;
    }


    try {

        const saved =
            localStorage.getItem(
                "exam_state_" + candidate.code
            );


        if (!saved) {
            return false;
        }


        const state =
            JSON.parse(saved);


        if (!state) {
            return false;
        }


        currentQuestion =
            Number(state.currentQuestion) || 0;

        userAnswers =
            state.userAnswers || {};

        seconds =
            Number(state.seconds);

        exits =
            Number(state.exits) || 0;

        startTime =
            state.startTime || new Date().toISOString();


        if (seconds <= 0) {
            seconds = 1;
        }


        return true;

    } catch (e) {

        return false;
    }
}


/* =========================================================
   محاسبه نمره
   ========================================================= */

function calculateScore() {

    const questions =
        getQuestions();


    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    for (
        let n = 1;
        n <= questions.length;
        n++
    ) {

        const correctAnswer =
            ANSWERS[n];


        const selected =
            userAnswers[n];


        if (
            correctAnswer === undefined ||
            selected === undefined
        ) {

            unanswered++;

        } else if (
            selected === correctAnswer - 1
        ) {

            correct++;

        } else {

            wrong++;
        }
    }


    const percent =
        questions.length > 0
            ? (correct / questions.length) * 100
            : 0;


    return {

        correct,

        wrong,

        unanswered,

        percent:
            Number(percent.toFixed(2))
    };
}


/* =========================================================
   تایمر
   ========================================================= */

function formatTime(totalSeconds) {

    totalSeconds =
        Math.max(
            0,
            Number(totalSeconds) || 0
        );


    const minutes =
        Math.floor(totalSeconds / 60);


    const secondsPart =
        totalSeconds % 60;


    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secondsPart).padStart(2, "0")
    );
}


function updateTimer() {

    const timerElement =
        $("timer");


    if (timerElement) {

        timerElement.textContent =
            formatTime(seconds);


        if (seconds <= 60) {

            timerElement.classList.add(
                "danger"
            );

        } else {

            timerElement.classList.remove(
                "danger"
            );
        }
    }
}


/* =========================================================
   ساخت رابط آزمون
   ========================================================= */

function createExamInterface() {

    if ($("exam")) {
        return;
    }


    const startSection =
        $("start");


    if (!startSection) {
        return;
    }


    const exam =
        document.createElement("section");


    exam.id = "exam";

    exam.className = "hidden";


    exam.innerHTML = `

        <div class="exam-header">

            <div>

                <h2 id="examTitle">
                    ${escapeHTML(EXAM_TITLE)}
                </h2>

                <div id="meta"></div>

            </div>


            <div>

                <div class="timer-label">
                    زمان باقی‌مانده
                </div>

                <div id="timer">
                    ${formatTime(seconds)}
                </div>

            </div>

        </div>


        <div class="progress-wrap">

            <div class="progress">

                <div
                    id="progressBar"
                    class="progress-bar">
                </div>

            </div>

        </div>


        <div id="question"></div>

        <div id="options"></div>


        <div class="controls">

            <button
                type="button"
                onclick="prev()">
                قبلی
            </button>


            <button
                type="button"
                onclick="next()">
                بعدی
            </button>

        </div>


        <div class="question-navigation">

            <h3>
                شماره سؤال
            </h3>

            <div id="nav"></div>

        </div>

    `;


    document.body.appendChild(exam);


    const result =
        document.createElement("section");


    result.id = "result";

    result.className = "hidden";


    result.innerHTML = `

        <div class="result-card">

            <h2>
                آزمون به پایان رسید
            </h2>

            <div id="summary"></div>

            <button
                type="button"
                onclick="location.reload()">
                بازگشت
            </button>

        </div>

    `;


    document.body.appendChild(result);


    addExamStyles();
}


/* =========================================================
   استایل آزمون
   ========================================================= */

function addExamStyles() {

    if ($("examStyles")) {
        return;
    }


    const style =
        document.createElement("style");


    style.id = "examStyles";


    style.textContent = `

        .hidden {
            display: none !important;
        }

        #exam,
        #result {
            max-width: 1000px;
            margin: 25px auto;
            padding: 20px;
        }

        .exam-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            padding: 20px;
            border-radius: 18px;
            background: #172554;
            color: white;
            margin-bottom: 18px;
        }

        .exam-header h2 {
            margin: 0 0 8px;
        }

        #meta {
            opacity: .85;
            font-size: 14px;
        }

        .timer-label {
            font-size: 12px;
            opacity: .8;
            text-align: center;
            margin-bottom: 4px;
        }

        #timer {
            font-size: 30px;
            font-weight: bold;
            direction: ltr;
        }

        #timer.danger {
            color: #fecaca;
        }

        .progress-wrap {
            margin-bottom: 18px;
        }

        .progress {
            height: 9px;
            background: #e5e7eb;
            border-radius: 99px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            width: 0%;
            background: #4f46e5;
            transition: width .25s;
        }

        #question {
            background: white;
            border-radius: 18px;
            padding: 25px;
            margin-bottom: 15px;
            box-shadow: 0 8px 30px rgba(0,0,0,.08);
        }

        .q {
            font-size: 20px;
            line-height: 2;
            font-weight: bold;
        }

        #options {
            display: grid;
            gap: 12px;
        }

        .option {
            display: block;
            padding: 17px;
            border: 2px solid #e5e7eb;
            border-radius: 14px;
            background: white;
            cursor: pointer;
            transition: .2s;
            line-height: 1.8;
        }

        .option:hover {
            border-color: #6366f1;
            transform: translateY(-1px);
        }

        .option.selected {
            border-color: #4f46e5;
            background: #eef2ff;
        }

        .option input {
            margin-left: 10px;
        }

        .controls {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            margin-top: 20px;
        }

        .controls button,
        .result-card button {
            border: 0;
            border-radius: 12px;
            padding: 13px 28px;
            background: #4f46e5;
            color: white;
            cursor: pointer;
            font-size: 16px;
        }

        .question-navigation {
            background: white;
            padding: 18px;
            margin-top: 20px;
            border-radius: 16px;
        }

        .question-navigation h3 {
            margin-top: 0;
        }

        .nav {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
        }

        .nav button {
            width: 39px;
            height: 39px;
            border: 1px solid #d1d5db;
            border-radius: 9px;
            background: white;
            cursor: pointer;
        }

        .nav button.cur {
            background: #4f46e5;
            color: white;
        }

        .nav button.ans {
            border-color: #16a34a;
            background: #dcfce7;
        }

        .result-card {
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,.1);
            text-align: center;
        }

        @media(max-width:650px) {

            #exam,
            #result {
                padding: 10px;
                margin: 10px auto;
            }

            .exam-header {
                flex-direction: column;
                align-items: stretch;
            }

            #timer {
                text-align: center;
            }

            .q {
                font-size: 17px;
            }

            .option {
                padding: 14px;
            }
        }

    `;


    document.head.appendChild(style);
}


/* =========================================================
   شروع آزمون
   ========================================================= */

async function startExam() {

    const nameElement =
        $("name");

    const codeElement =
        $("code");


    if (!nameElement || !codeElement) {

        alert(
            "فیلد نام یا کد داوطلب در صفحه پیدا نشد."
        );

        return;
    }


    const name =
        nameElement.value.trim();


    const code =
        codeElement.value.trim();


    if (!name || !code) {

        alert(
            "لطفاً نام و کد داوطلب را وارد کنید."
        );

        return;
    }


    const found =
        findCandidate(name, code);


    if (!found) {

        alert(
            "نام و کد داوطلب صحیح نیست یا داوطلب در پنل مدیریت ثبت نشده است."
        );

        return;
    }


    try {

        await loadQuestionsFile();

    } catch (error) {

        console.error(error);

        alert(
            "فایل questions.js پیدا نشد یا به‌درستی بارگذاری نشده است."
        );

        return;
    }


    const questions =
        getQuestions();


    if (!questions.length) {

        alert(
            "هیچ سؤالی در questions.js پیدا نشد."
        );

        return;
    }


    candidate = found;


    const oldState =
        localStorage.getItem(
            "exam_state_" + candidate.code
        );


    if (oldState) {

        const resume =
            confirm(
                "برای این داوطلب آزمون ناتمام وجود دارد.\nآیا می‌خواهید ادامه دهید؟"
            );


        if (resume) {

            started = true;

            finished = false;

            if (!loadExamState()) {

                startFreshExam();

            }

        } else {

            localStorage.removeItem(
                "exam_state_" + candidate.code
            );

            startFreshExam();
        }

    } else {

        startFreshExam();
    }


    createExamInterface();


    if ($("start")) {

        $("start").classList.add(
            "hidden"
        );
    }


    if ($("exam")) {

        $("exam").classList.remove(
            "hidden"
        );
    }


    updateTimer();

    draw();


    if (timer) {
        clearInterval(timer);
    }


    timer =
        setInterval(function () {

            if (!started || finished) {
                return;
            }


            seconds--;


            updateTimer();

            saveExamState();


            if (seconds <= 0) {

                finish(true);
            }

        }, 1000);
}


/* =========================================================
   شروع تازه
   ========================================================= */

function startFreshExam() {

    started = true;

    finished = false;

    currentQuestion = 0;

    userAnswers = {};

    exits = 0;

    seconds =
        EXAM_TIME * 60;

    startTime =
        new Date().toISOString();
}


/* =========================================================
   نمایش سؤال
   ========================================================= */

function draw() {

    const questions =
        getQuestions();


    if (!questions.length) {
        return;
    }


    if (
        currentQuestion < 0 ||
        currentQuestion >= questions.length
    ) {
        currentQuestion = 0;
    }


    const q =
        questions[currentQuestion];


    if (!q) {
        return;
    }


    createExamInterface();


    const meta =
        $("meta");


    if (meta) {

        meta.textContent =
            `داوطلب: ${candidate.name} | سؤال ${currentQuestion + 1} از ${questions.length} | پاسخ داده‌شده: ${Object.keys(userAnswers).length}`;
    }


    const questionBox =
        $("question");


    if (questionBox) {

        questionBox.innerHTML =
            `
                <div class="q">
                    ${escapeHTML(q.text)}
                </div>
            `;
    }


    const options =
        $("options");


    if (options) {

        options.innerHTML =
            q.options.map(
                function (option, index) {

                    const selected =
                        userAnswers[q.id] === index;


                    return `

                        <label
                            class="option ${selected ? "selected" : ""}"
                        >

                            <input
                                type="radio"
                                name="answer"
                                ${selected ? "checked" : ""}
                                onchange="pick(${index})"
                            >

                            <strong>
                                ${index + 1})
                            </strong>

                            ${escapeHTML(option)}

                        </label>

                    `;
                }
            ).join("");
    }


    const nav =
        $("nav");


    if (nav) {

        nav.innerHTML =
            questions.map(
                function (item, index) {

                    const current =
                        index === currentQuestion
                            ? "cur"
                            : "";


                    const answered =
                        userAnswers[item.id] !== undefined
                            ? "ans"
                            : "";


                    return `

                        <button
                            type="button"
                            class="${current} ${answered}"
                            onclick="go(${index})"
                        >
                            ${index + 1}
                        </button>

                    `;
                }
            ).join("");
    }


    const progress =
        $("progressBar");


    if (progress) {

        const percent =
            ((currentQuestion + 1) / questions.length) * 100;


        progress.style.width =
            percent + "%";
    }
}


/* =========================================================
   انتخاب گزینه
   ========================================================= */

function pick(index) {

    const questions =
        getQuestions();


    if (!questions[currentQuestion]) {
        return;
    }


    const id =
        questions[currentQuestion].id;


    userAnswers[id] =
        index;


    saveExamState();

    draw();
}


/* =========================================================
   رفتن به سؤال
   ========================================================= */

function go(index) {

    const questions =
        getQuestions();


    if (
        index < 0 ||
        index >= questions.length
    ) {
        return;
    }


    currentQuestion =
        index;


    draw();
}


/* =========================================================
   قبلی
   ========================================================= */

function prev() {

    if (currentQuestion > 0) {

        currentQuestion--;

        draw();
    }
}


/* =========================================================
   بعدی
   ========================================================= */

function next() {

    const questions =
        getQuestions();


    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        draw();

    } else {

        finish(false);
    }
}


/* =========================================================
   پایان آزمون
   ========================================================= */

function finish(autoFinish) {

    if (finished) {
        return;
    }


    if (!autoFinish) {

        const confirmFinish =
            confirm(
                "آیا از پایان آزمون مطمئن هستید؟"
            );


        if (!confirmFinish) {
            return;
        }
    }


    finished = true;

    started = false;


    if (timer) {

        clearInterval(timer);

        timer = null;
    }


    const score =
        calculateScore();


    const endTime =
        new Date().toISOString();


    const result = {

        candidateName:
            candidate.name,

        candidateCode:
            candidate.code,

        startTime,

        endTime,

        answered:
            Object.keys(userAnswers).length,

        totalQuestions:
            getQuestions().length,

        correct:
            score.correct,

        wrong:
            score.wrong,

        unanswered:
            score.unanswered,

        percent:
            score.percent,

        exits,

        answers:
            userAnswers,

        autoFinished:
            autoFinish
    };


    let results = [];


    try {

        results =
            JSON.parse(
                localStorage.getItem(
                    "exam_results"
                ) || "[]"
            );

    } catch (e) {

        results = [];
    }


    results.push(result);


    localStorage.setItem(
        "exam_results",
        JSON.stringify(results)
    );


    localStorage.removeItem(
        "exam_state_" + candidate.code
    );


    const exam =
        $("exam");


    const resultBox =
        $("result");


    if (exam) {

        exam.classList.add(
            "hidden"
        );
    }


    if (resultBox) {

        resultBox.classList.remove(
            "hidden"
        );
    }


    const summary =
        $("summary");


    if (summary) {

        summary.innerHTML = `

            <p>
                داوطلب:
                <strong>
                    ${escapeHTML(candidate.name)}
                </strong>
            </p>

            <p>
                کد داوطلب:
                <strong>
                    ${escapeHTML(candidate.code)}
                </strong>
            </p>

            <p>
                صحیح:
                <strong>
                    ${score.correct}
                </strong>
            </p>

            <p>
                غلط:
                <strong>
                    ${score.wrong}
                </strong>
            </p>

            <p>
                بدون پاسخ:
                <strong>
                    ${score.unanswered}
                </strong>
            </p>

            <p>
                درصد:
                <strong>
                    ${score.percent}%
                </strong>
            </p>

            <p>
                تعداد خروج:
                <strong>
                    ${exits}
                </strong>
            </p>

            ${
                autoFinish
                    ? `
                        <p>
                            <strong>
                                آزمون به دلیل پایان زمان
                                به‌صورت خودکار تمام شد.
                            </strong>
                        </p>
                    `
                    : ""
            }

        `;
    }
}


/* =========================================================
   کنترل خروج از صفحه
   ========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            !started ||
            finished
        ) {
            return;
        }


        if (document.hidden) {

            document.body.dataset.examLeft =
                "1";

            return;
        }


        if (
            document.body.dataset.examLeft ===
            "1"
        ) {

            document.body.dataset.examLeft =
                "0";


            exits++;


            saveExamState();


            alert(
                `خروج از صفحه ثبت شد.\nتعداد خروج: ${exits} از ${EXAM_MAX_EXITS}`
            );


            if (
                EXAM_MAX_EXITS > 0 &&
                exits >= EXAM_MAX_EXITS &&
                DEFAULT_CONFIG.autoFinishOnMaxExits
            ) {

                finish(true);
            }
        }

    }
);


/* =========================================================
   ذخیره هنگام بستن صفحه
   ========================================================= */

window.addEventListener(
    "beforeunload",
    function () {

        saveExamState();

    }
);


/* =========================================================
   جلوگیری از کلیک راست در زمان آزمون
   ========================================================= */

document.addEventListener(
    "contextmenu",
    function (event) {

        if (started && !finished) {

            event.preventDefault();
        }
    }
);


/* =========================================================
   آماده‌سازی اولیه
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createExamInterface();


        const title =
            $("title");


        if (
            title &&
            title.tagName !== "INPUT"
        ) {

            title.textContent =
                EXAM_TITLE;
        }


        const info =
            $("info");


        if (info) {

            info.textContent =
                `آزمون ${EXAM_TITLE} | ${EXAM_TIME} دقیقه | حداکثر ${EXAM_MAX_EXITS} خروج`;
        }

    }
);
