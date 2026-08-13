const QUESTIONS = [
    {
        id: 1,
        text: "The committee's decision was met with widespread ______ because the evidence presented was far from conclusive.",
        options: ["acclaim", "skepticism", "compliance", "gratitude"],
        answer: 2
    },
    {
        id: 2,
        text: "The scientist's explanation was so ______ that even specialists struggled to follow the chain of reasoning.",
        options: ["lucid", "intricate", "mundane", "plausible"],
        answer: 2
    },
    {
        id: 3,
        text: "The new policy is intended to ______ the disparity between urban and rural schools.",
        options: ["exacerbate", "mitigate", "duplicate", "conceal"],
        answer: 2
    },
    {
        id: 4,
        text: "His remarks were deliberately ______, allowing him to deny responsibility if the proposal failed.",
        options: ["ambiguous", "coherent", "explicit", "concise"],
        answer: 1
    },
    {
        id: 5,
        text: "The historian warned against drawing ______ conclusions from a handful of incomplete documents.",
        options: ["tentative", "sweeping", "marginal", "empirical"],
        answer: 2
    },
    {
        id: 6,
        text: "The manager's refusal to reconsider the proposal seemed ______ rather than principled.",
        options: ["arbitrary", "innovative", "credible", "reciprocal"],
        answer: 1
    },
    {
        id: 7,
        text: "The medication may produce ______ side effects in patients with pre-existing conditions.",
        options: ["negligible", "adverse", "obsolete", "versatile"],
        answer: 2
    },
    {
        id: 8,
        text: "The lawyer attempted to ______ the witness's testimony by pointing out several contradictions.",
        options: ["corroborate", "undermine", "compile", "allocate"],
        answer: 2
    },
    {
        id: 9,
        text: "The report provides a ______ account of the negotiations, including details previously omitted.",
        options: ["comprehensive", "sporadic", "superficial", "redundant"],
        answer: 1
    },
    {
        id: 10,
        text: "The professor's criticism was ______; it exposed weaknesses without dismissing the entire theory.",
        options: ["constructive", "hostile", "irrelevant", "evasive"],
        answer: 1
    },

    {
        id: 11,
        text: "The factory was closed after inspectors discovered ______ violations of safety regulations.",
        options: ["incidental", "systematic", "ornamental", "tentative"],
        answer: 2
    },
    {
        id: 12,
        text: "The speaker's argument was persuasive because every major claim was ______ by independent evidence.",
        options: ["substantiated", "exaggerated", "inferred", "withheld"],
        answer: 1
    },
    {
        id: 13,
        text: "The company's profits began to ______ once demand for its flagship product declined.",
        options: ["deteriorate", "proliferate", "stabilize", "accelerate"],
        answer: 1
    },
    {
        id: 14,
        text: "Her response was deliberately ______; she answered the question without revealing confidential information.",
        options: ["discreet", "reckless", "redundant", "obsolete"],
        answer: 1
    },
    {
        id: 15,
        text: "The discovery was considered ______ because it challenged several assumptions accepted for decades.",
        options: ["conventional", "paradigm-shifting", "trivial", "predictable"],
        answer: 2
    },
    {
        id: 16,
        text: "The committee rejected the proposal as financially ______ in the long term.",
        options: ["viable", "tenuous", "audible", "pervasive"],
        answer: 1
    },
    {
        id: 17,
        text: "The author's tone becomes increasingly ______ as he describes the government's failure to act.",
        options: ["indignant", "indifferent", "tentative", "playful"],
        answer: 1
    },
    {
        id: 18,
        text: "The two studies appear to ______ each other, although they used different methodologies.",
        options: ["contradict", "corroborate", "precede", "exclude"],
        answer: 2
    },
    {
        id: 19,
        text: "The instructions were sufficiently ______ that several participants interpreted them differently.",
        options: ["precise", "ambiguous", "rigorous", "consistent"],
        answer: 2
    },
    {
        id: 20,
        text: "The researcher was reluctant to ______ the findings before the data had been independently verified.",
        options: ["publicize", "retrieve", "compile", "subtract"],
        answer: 1
    },

    {
        id: 21,
        text: "The politician's promise proved ______ when the economic situation changed.",
        options: ["binding", "tenable", "untenable", "permanent"],
        answer: 3
    },
    {
        id: 22,
        text: "The article attempts to ______ a distinction between correlation and causation.",
        options: ["blur", "preserve", "establish", "invalidate"],
        answer: 3
    },
    {
        id: 23,
        text: "The evidence was too ______ to justify such a sweeping accusation.",
        options: ["conclusive", "circumstantial", "abundant", "explicit"],
        answer: 2
    },
    {
        id: 24,
        text: "The old regulations have become ______ because newer legislation addresses the same issues.",
        options: ["obsolete", "mandatory", "relevant", "binding"],
        answer: 1
    },
    {
        id: 25,
        text: "The witness gave a remarkably ______ account despite having been questioned for several hours.",
        options: ["consistent", "volatile", "fragmentary", "dubious"],
        answer: 1
    },

    {
        id: 26,
        text: "Had the researchers ______ the anomaly earlier, they might have prevented the entire experiment from being repeated.",
        options: ["noticed", "been noticed", "notice", "noticing"],
        answer: 1
    },
    {
        id: 27,
        text: "No sooner ______ the announcement than the company's share price began to fall.",
        options: ["they had made", "had they made", "they made", "did they make"],
        answer: 2
    },
    {
        id: 28,
        text: "The proposal, ______ several experts had initially opposed, was eventually approved.",
        options: ["which", "what", "whose", "where"],
        answer: 1
    },
    {
        id: 29,
        text: "It is essential that every applicant ______ the required documents before the deadline.",
        options: ["submits", "submitted", "submit", "will submit"],
        answer: 3
    },
    {
        id: 30,
        text: "By the time the auditors arrive, the accountants ______ the records for three consecutive weeks.",
        options: ["will review", "will have been reviewing", "reviewed", "have reviewed"],
        answer: 2
    },

    {
        id: 31,
        text: "Rarely ______ such a dramatic change in public opinion within such a short period.",
        options: ["we witness", "do we witness", "we have witnessed", "witnessed we"],
        answer: 2
    },
    {
        id: 32,
        text: "The manager insisted that the report ______ before it was distributed to clients.",
        options: ["be revised", "is revised", "was revising", "has revised"],
        answer: 1
    },
    {
        id: 33,
        text: "The more carefully the evidence is examined, ______ the original conclusion appears.",
        options: ["less convincing", "the less convincing", "the least convincing", "less convinced"],
        answer: 2
    },
    {
        id: 34,
        text: "If the data ______ accurate, the researchers would not have reached such contradictory results.",
        options: ["had been", "were", "have been", "would be"],
        answer: 1
    },
    {
        id: 35,
        text: "The scientist denied ______ any confidential information to the press.",
        options: ["to disclose", "having disclosed", "disclose", "having been disclosed"],
        answer: 2
    },
    {
        id: 36,
        text: "Not until the final experiment ______ the researchers realize that their initial assumption was flawed.",
        options: ["they completed", "did they complete", "had they completed", "they had completed"],
        answer: 2
    },
    {
        id: 37,
        text: "The device is believed ______ by exposure to extreme temperatures.",
        options: ["to damage", "to have damaged", "to have been damaged", "having damaged"],
        answer: 3
    },
    {
        id: 38,
        text: "She would rather the committee ______ the matter until more evidence became available.",
        options: ["postpones", "postponed", "has postponed", "will postpone"],
        answer: 2
    },
    {
        id: 39,
        text: "The report contains several recommendations, none of ______ has yet been implemented.",
        options: ["that", "which", "them", "what"],
        answer: 2
    },
    {
        id: 40,
        text: "Were the company ______ its policy, it could face serious legal consequences.",
        options: ["to ignore", "ignored", "ignoring", "ignore"],
        answer: 1
    },

    {
        id: 41,
        text: "The lecture was so demanding that few students could recall ______ the professor had discussed.",
        options: ["what", "which", "that", "whose"],
        answer: 1
    },
    {
        id: 42,
        text: "Having ______ the original manuscript, the archivist immediately contacted the university.",
        options: ["found", "been found", "finding", "find"],
        answer: 1
    },
    {
        id: 43,
        text: "The results are unlikely to be reliable unless the experiment ______ under identical conditions.",
        options: ["repeats", "is repeated", "will repeat", "has repeating"],
        answer: 2
    },
    {
        id: 44,
        text: "The candidate objected to ______ treated as though he had already been found guilty.",
        options: ["be", "being", "have been", "having"],
        answer: 2
    },
    {
        id: 45,
        text: "Much as the researchers ______ to avoid bias, their sample was not completely representative.",
        options: ["try", "tried", "had tried", "were trying"],
        answer: 3
    },
    {
        id: 46,
        text: "The article suggests that the phenomenon may be more complex than ______ previously assumed.",
        options: ["is", "being", "was", "has been"],
        answer: 3
    },
    {
        id: 47,
        text: "Only after the data ______ independently analyzed did the researchers publish the paper.",
        options: ["had been", "have been", "were being", "would be"],
        answer: 1
    },
    {
        id: 48,
        text: "The professor recommended that students ______ the original sources rather than rely solely on summaries.",
        options: ["consult", "consulted", "consulting", "would consult"],
        answer: 1
    },
    {
        id: 49,
        text: "The two theories differ considerably, but they are not necessarily ______ with each other.",
        options: ["compatible", "incompatible", "mutual", "identical"],
        answer: 2
    },
    {
        id: 50,
        text: "He spoke as though he ______ personally involved in the negotiations.",
        options: ["has been", "had been", "were", "would be"],
        answer: 2
    },

    {
        id: 51,
        text: "The committee came ______ the conclusion that the evidence was insufficient.",
        options: ["at", "to", "on", "into"],
        answer: 2
    },
    {
        id: 52,
        text: "The new evidence bears ______ the question of whether the original claim was valid.",
        options: ["on", "at", "for", "to"],
        answer: 1
    },
    {
        id: 53,
        text: "The professor's explanation was difficult to ______ because several technical terms were left undefined.",
        options: ["make out", "make up", "make over", "make off"],
        answer: 1
    },
    {
        id: 54,
        text: "The company is trying to cut ______ on unnecessary administrative costs.",
        options: ["away", "back", "off", "through"],
        answer: 2
    },
    {
        id: 55,
        text: "The witness's statement is at ______ with the physical evidence.",
        options: ["odds", "risk", "stake", "issue"],
        answer: 1
    },
    {
        id: 56,
        text: "The researchers carried ______ a series of controlled experiments.",
        options: ["out", "on", "over", "through"],
        answer: 1
    },
    {
        id: 57,
        text: "The final decision rests ______ the board of directors.",
        options: ["in", "on", "with", "by"],
        answer: 3
    },
    {
        id: 58,
        text: "The author takes ______ the assumption that economic growth is always beneficial.",
        options: ["issue with", "care of", "place of", "advantage of"],
        answer: 1
    },
    {
        id: 59,
        text: "The evidence does not ______ the claim that the treatment is effective.",
        options: ["bear out", "bring about", "break down", "call off"],
        answer: 1
    },
    {
        id: 60,
        text: "The researchers ruled ______ the possibility of contamination.",
        options: ["in", "out", "up", "over"],
        answer: 2
    },

    {
        id: 61,
        text: "The new findings are broadly ______ line with previous studies.",
        options: ["at", "by", "in", "on"],
        answer: 3
    },
    {
        id: 62,
        text: "The committee decided to put the proposal ______ until further notice.",
        options: ["away", "off", "aside", "through"],
        answer: 2
    },
    {
        id: 63,
        text: "His explanation does not account ______ the discrepancy between the two figures.",
        options: ["for", "with", "to", "on"],
        answer: 1
    },
    {
        id: 64,
        text: "The researcher was accused ______ manipulating the results.",
        options: ["for", "of", "with", "by"],
        answer: 2
    },
    {
        id: 65,
        text: "The policy was introduced with a view ______ reducing unnecessary expenditure.",
        options: ["for", "at", "to", "on"],
        answer: 3
    },

    {
        id: 66,
        text: "Scientific progress rarely occurs in a straight line. Researchers often encounter results that appear to contradict their initial hypotheses. Rather than regarding such findings as failures, experienced scientists tend to see them as opportunities to ______ their assumptions.",
        options: ["reassess", "abandoning", "conceal", "postpone"],
        answer: 1
    },
    {
        id: 67,
        text: "A hypothesis becomes scientifically useful only when it can be tested against evidence. If a claim is formulated so vaguely that no possible observation could ______ it, the claim has little explanatory value.",
        options: ["support", "falsify", "summarize", "duplicate"],
        answer: 2
    },
    {
        id: 68,
        text: "Even a well-designed study may produce misleading results if its sample is not representative. Researchers must therefore consider whether the participants ______ the wider population.",
        options: ["reflect", "are reflecting", "have reflected", "were reflected"],
        answer: 1
    },
    {
        id: 69,
        text: "Correlation alone cannot establish causation. Two variables may change together simply because both are influenced by a third factor that has not been ______.",
        options: ["accounted for", "taken off", "called in", "put aside"],
        answer: 1
    },
    {
        id: 70,
        text: "Academic arguments are strongest when conclusions follow logically from evidence. A persuasive writer must therefore distinguish clearly between what the data demonstrate and what can merely be ______ from them.",
        options: ["inferred", "prevented", "allocated", "excluded"],
        answer: 1
    },
    {
        id: 71,
        text: "Memory is not a perfect recording of past events. Each time people recall an experience, the memory may be subtly ______ by later information.",
        options: ["modified", "prevented", "exhausted", "isolated"],
        answer: 1
    },
    {
        id: 72,
        text: "Although technology can increase access to information, abundance does not automatically produce understanding. Without critical evaluation, people may become more vulnerable to information that is misleading or ______.",
        options: ["irrelevant", "unverified", "transparent", "objective"],
        answer: 2
    },
    {
        id: 73,
        text: "Effective communication requires more than accurate vocabulary. Speakers must also consider context, audience, and the assumptions that listeners may ______ to the conversation.",
        options: ["bring", "take", "put", "carry"],
        answer: 1
    },
    {
        id: 74,
        text: "Historical evidence is often incomplete. Scholars therefore compare sources and examine their origins before deciding how much weight should be ______ to a particular account.",
        options: ["given", "made", "done", "taken"],
        answer: 1
    },
    {
        id: 75,
        text: "A theory may remain useful even when some of its predictions fail, provided that researchers can identify the conditions under which it works and those under which it ______.",
        options: ["does not", "has not", "will not", "wouldn't"],
        answer: 1
    },

    {
        id: 76,
        text: "Many cities have invested heavily in public transportation to reduce congestion. Yet simply adding buses or trains does not guarantee that commuters will abandon private cars. Researchers have found that reliability, frequency, convenience, and the ease of transferring between routes can matter as much as the number of vehicles available. What is the main idea?",
        options: [
            "Public transportation is always cheaper than driving.",
            "Increasing the number of vehicles is sufficient to change commuter behavior.",
            "The effectiveness of public transportation depends on several service qualities.",
            "Private cars are impossible to replace in modern cities."
        ],
        answer: 3
    },
    {
        id: 77,
        text: "A study of workplace productivity found that employees who took short, regular breaks often completed complex tasks more accurately than those who worked continuously. The researchers suggested that brief interruptions may reduce mental fatigue and allow attention to recover. Which inference is best supported?",
        options: [
            "Long working hours always increase accuracy.",
            "Breaks may improve performance on demanding tasks.",
            "Employees should avoid difficult tasks after lunch.",
            "Mental fatigue has no effect on accuracy."
        ],
        answer: 2
    },
    {
        id: 78,
        text: "Some historians argue that technological inventions should not be attributed solely to exceptional individuals. Innovations often emerge from networks of engineers, users, institutions, and earlier discoveries. What does the passage imply?",
        options: [
            "Individual inventors never contribute significantly.",
            "Technological change is often cumulative and collaborative.",
            "Earlier discoveries are irrelevant to innovation.",
            "Institutions usually prevent technological progress."
        ],
        answer: 2
    },
    {
        id: 79,
        text: "In ecology, removing a predator from an ecosystem can produce effects far beyond the immediate increase in prey. As prey populations grow, vegetation may decline, altering habitats for numerous other species. This illustrates how changes at one trophic level can propagate through an ecosystem. What does this example demonstrate?",
        options: [
            "Predators are always harmful to ecosystems.",
            "Prey populations never regulate vegetation.",
            "Ecological systems contain interconnected relationships.",
            "Vegetation determines predator populations exclusively."
        ],
        answer: 3
    },
    {
        id: 80,
        text: "Digital archives have made historical documents accessible to researchers who previously needed to travel long distances. However, digitization can also remove information contained in physical characteristics such as paper quality, annotations, binding, or the order in which pages were assembled. What is the author's attitude toward digitization?",
        options: [
            "Entirely negative",
            "Entirely enthusiastic",
            "Balanced and qualified",
            "Indifferent"
        ],
        answer: 3
    },

    {
        id: 81,
        text: "Economists sometimes distinguish between a temporary decline in demand and a structural change in consumer preferences. The former may reverse when conditions improve, whereas the latter can persist even after prices or incomes return to previous levels. What is the key distinction?",
        options: [
            "Price is irrelevant to consumer behavior.",
            "Temporary and structural changes differ in persistence and causes.",
            "Income always determines demand.",
            "Structural changes occur only during recessions."
        ],
        answer: 2
    },
    {
        id: 82,
        text: "A placebo effect does not mean that a patient's symptoms are imaginary. Expectations can influence perception, stress responses, and certain physiological processes. For this reason, clinical trials often use placebo groups to separate treatment effects from changes that might occur for other reasons. Why are placebo groups used?",
        options: [
            "To prove that all symptoms are psychological.",
            "To eliminate the need for medical treatment.",
            "To help distinguish treatment effects from other changes.",
            "To guarantee that every participant improves."
        ],
        answer: 3
    },
    {
        id: 83,
        text: "Languages change continuously. Words may acquire new meanings, grammatical patterns may shift, and sounds may be pronounced differently by younger generations. Linguists generally regard such change as a natural property of living languages rather than as evidence of linguistic decline. What is the main point?",
        options: [
            "Language change is inevitable and not necessarily deterioration.",
            "Younger speakers always use language incorrectly.",
            "Grammar never changes over time.",
            "Only pronunciation changes."
        ],
        answer: 1
    },
    {
        id: 84,
        text: "When people evaluate risks, they often rely on vivid examples rather than statistical frequencies. A rare event that receives extensive media coverage may therefore seem more common than a frequent but less dramatic event. Which cognitive tendency is described?",
        options: [
            "Confirmation bias",
            "Availability heuristic",
            "Anchoring effect",
            "Group polarization"
        ],
        answer: 2
    },
    {
        id: 85,
        text: "Renewable energy sources such as wind and solar produce electricity without directly burning fossil fuels, but their output varies with weather conditions. Consequently, grids with high shares of these sources may require storage, flexible generation, or stronger connections between regions. What problem is emphasized?",
        options: [
            "Renewable energy cannot produce electricity.",
            "Variable output creates grid-management challenges.",
            "Solar energy always damages the grid.",
            "Regional connections reduce renewable generation."
        ],
        answer: 2
    },

    {
        id: 86,
        text: "A company introduced a flexible work policy expecting productivity to increase. After six months, productivity had risen in some teams but fallen in others. Managers discovered that the policy worked best where employees had clear goals and frequent communication. What can be inferred?",
        options: [
            "Flexible work is universally ineffective.",
            "Communication and goal clarity may influence the success of flexible work.",
            "Productivity depends only on location.",
            "Employees prefer unclear goals."
        ],
        answer: 2
    },
    {
        id: 87,
        text: "In scientific writing, uncertainty is not necessarily a weakness. Statements such as 'the evidence suggests' or 'the results are consistent with' can accurately reflect limitations in the data. Why might scientists use cautious language?",
        options: [
            "To avoid presenting any evidence.",
            "To communicate the strength and limits of evidence accurately.",
            "Because scientific results are never useful.",
            "Because readers dislike definite conclusions."
        ],
        answer: 2
    },
    {
        id: 88,
        text: "Urban trees can reduce local temperatures by providing shade and through evapotranspiration. However, their benefits depend on species, placement, water availability, and maintenance. What does the passage suggest?",
        options: [
            "All trees have identical effects.",
            "Urban trees can help reduce heat, but their effectiveness depends on conditions.",
            "Trees increase urban temperatures.",
            "Maintenance has no relevance."
        ],
        answer: 2
    },
    {
        id: 89,
        text: "Some educational researchers distinguish between recognizing an answer and being able to generate it without prompts. A student may correctly identify a concept in a multiple-choice test but struggle to explain it independently. What distinction is being made?",
        options: [
            "Recognition versus retrieval",
            "Reading versus writing",
            "Speed versus accuracy",
            "Memory versus perception"
        ],
        answer: 1
    },
    {
        id: 90,
        text: "Historical narratives are shaped partly by which sources survive. Records produced by governments or wealthy institutions are often more likely to remain than informal accounts from marginalized groups. What methodological caution follows?",
        options: [
            "Surviving records should automatically be trusted.",
            "Historians should consider whose perspectives may be missing.",
            "Official documents are never useful.",
            "Marginalized groups left no records."
        ],
        answer: 2
    },

    {
        id: 91,
        text: "Antibiotic resistance can spread when bacteria carrying resistance genes survive treatment and reproduce. Unnecessary antibiotic use can increase this selective pressure. Which statement is best supported?",
        options: [
            "Antibiotics directly create every resistance gene.",
            "Unnecessary use can favor resistant bacteria.",
            "Resistance occurs only in hospitals.",
            "Stopping all antibiotics immediately eliminates resistance."
        ],
        answer: 2
    },
    {
        id: 92,
        text: "A market may appear competitive because many firms operate within it, yet competition can remain weak if customers face high switching costs. When changing providers is expensive or inconvenient, firms may have less incentive to improve their services. What is the implication?",
        options: [
            "The number of firms alone does not determine competitive pressure.",
            "Switching costs always benefit consumers.",
            "Markets with many firms are never competitive.",
            "Customers never respond to service quality."
        ],
        answer: 1
    },
    {
        id: 93,
        text: "Sleep researchers have found that sleep is involved in memory consolidation. Information learned during the day may be reorganized and strengthened during subsequent sleep. Which conclusion is most reasonable?",
        options: [
            "Learning ends when a person falls asleep.",
            "Sleep may contribute to the stabilization of newly learned information.",
            "Memory is unrelated to sleep.",
            "Only physical skills benefit from sleep."
        ],
        answer: 2
    },
    {
        id: 94,
        text: "A forecast is not necessarily wrong simply because the predicted event fails to occur. A probabilistic forecast may have assigned a low but nonzero probability to that event. Evaluating forecasts therefore requires examining calibration across many predictions rather than judging a single outcome. What is the main lesson?",
        options: [
            "Every forecast should be perfectly accurate.",
            "Probabilistic forecasts should be evaluated over multiple predictions.",
            "A failed prediction proves the model is useless.",
            "Probability cannot be used for forecasting."
        ],
        answer: 2
    },
    {
        id: 95,
        text: "The spread of a rumor can accelerate when people repeatedly encounter it from different sources, even if those sources ultimately trace back to the same original claim. Repetition can create an impression of independent confirmation. What is the danger?",
        options: [
            "Repeated information is always false.",
            "Apparent multiple confirmations may not be independent.",
            "People never believe repeated claims.",
            "Independent sources always share one origin."
        ],
        answer: 2
    },

    {
        id: 96,
        text: "In translation, preserving every word literally can sometimes distort the intended meaning because expressions depend on cultural and contextual conventions. Skilled translators therefore balance fidelity to the source with naturalness in the target language. What principle is emphasized?",
        options: [
            "Literal translation is always superior.",
            "Good translation may require balancing literal fidelity with intended meaning.",
            "Culture has no effect on translation.",
            "Translators should ignore the source text."
        ],
        answer: 2
    },
    {
        id: 97,
        text: "A well-designed experiment attempts to isolate the effect of one variable by controlling others. If several variables change simultaneously, it becomes difficult to determine which change caused the observed outcome. Why are control conditions important?",
        options: [
            "They make experiments unnecessary.",
            "They help isolate causal effects.",
            "They guarantee the hypothesis is correct.",
            "They eliminate all measurement error."
        ],
        answer: 2
    },
    {
        id: 98,
        text: "Some species survive environmental change not because every individual can tolerate new conditions, but because populations contain genetic variation. Individuals with advantageous traits may leave more offspring, causing those traits to become more common. Which process is described?",
        options: [
            "Natural selection",
            "Random sampling",
            "Cultural diffusion",
            "Artificial language change"
        ],
        answer: 1
    },
    {
        id: 99,
        text: "A policy may produce an intended benefit while creating an unintended cost elsewhere. For example, a measure that reduces traffic in one district may divert vehicles into neighboring areas. What broader lesson does this illustrate?",
        options: [
            "Policies always fail.",
            "Interventions can have indirect and geographically distributed effects.",
            "Traffic can never be reduced.",
            "Unintended effects occur only in transportation."
        ],
        answer: 2
    },
    {
        id: 100,
        text: "Critical reading involves more than understanding what a text says. Readers must examine the evidence offered, identify assumptions, distinguish claims from interpretations, and consider whether alternative explanations have been ignored. Which skill is central to this process?",
        options: [
            "Memorizing every sentence",
            "Evaluating arguments and evidence",
            "Reading as quickly as possible",
            "Avoiding alternative interpretations"
        ],
        answer: 2
    }
];

window.QUESTIONS = QUESTIONS;
