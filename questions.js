"use strict";

const QUESTIONS = [
  {
    id: 1,
    text: "The committee rejected the proposal because its financial assumptions were considered ______.",
    options: ["tenable", "flawed", "lucrative", "conclusive"],
    answer: 2
  },
  {
    id: 2,
    text: "The researcher was unable to ______ the results of the original experiment.",
    options: ["replicate", "withdraw", "allocate", "compile"],
    answer: 1
  },
  {
    id: 3,
    text: "His explanation was so ______ that nobody could determine what he actually meant.",
    options: ["explicit", "ambiguous", "coherent", "precise"],
    answer: 2
  },
  {
    id: 4,
    text: "The new evidence casts serious ______ on the reliability of the witness.",
    options: ["doubt", "confidence", "approval", "certainty"],
    answer: 1
  },
  {
    id: 5,
    text: "The government introduced new measures to ______ the effects of inflation.",
    options: ["aggravate", "mitigate", "duplicate", "provoke"],
    answer: 2
  },
  {
    id: 6,
    text: "The professor's argument was persuasive because it was supported by ______ evidence.",
    options: ["circumstantial", "substantial", "irrelevant", "obsolete"],
    answer: 2
  },
  {
    id: 7,
    text: "The company decided to ______ the launch until the technical problems had been resolved.",
    options: ["put off", "bring about", "look after", "carry out"],
    answer: 1
  },
  {
    id: 8,
    text: "The two reports are broadly ______ with one another.",
    options: ["consistent", "reluctant", "arbitrary", "pervasive"],
    answer: 1
  },
  {
    id: 9,
    text: "The witness gave an account that was completely ______ with the available evidence.",
    options: ["compatible", "incompatible", "plausible", "relevant"],
    answer: 2
  },
  {
    id: 10,
    text: "The scientist refused to draw any ______ conclusions from such a limited sample.",
    options: ["tentative", "sweeping", "modest", "partial"],
    answer: 2
  },

  {
    id: 11,
    text: "Had the authorities acted sooner, the damage ______ considerably less severe.",
    options: ["would be", "would have been", "will have been", "had been"],
    answer: 2
  },
  {
    id: 12,
    text: "Rarely ______ a discovery of such significance been made by accident.",
    options: ["has", "have", "did", "was"],
    answer: 1
  },
  {
    id: 13,
    text: "It is essential that every participant ______ informed of the potential risks.",
    options: ["is", "was", "be", "will be"],
    answer: 3
  },
  {
    id: 14,
    text: "By next month, the research team ______ the project for two years.",
    options: ["will conduct", "will have been conducting", "has conducted", "conducted"],
    answer: 2
  },
  {
    id: 15,
    text: "No sooner ______ the results than the media began reporting them.",
    options: ["had they released", "they had released", "did they release", "they released"],
    answer: 1
  },
  {
    id: 16,
    text: "The proposal requires that all expenses ______ carefully documented.",
    options: ["are", "be", "were", "will be"],
    answer: 2
  },
  {
    id: 17,
    text: "She speaks as though she ______ personally responsible for the entire project.",
    options: ["is", "were", "has been", "will be"],
    answer: 2
  },
  {
    id: 18,
    text: "The report, ______ was published last week, has already attracted considerable criticism.",
    options: ["that", "what", "which", "where"],
    answer: 3
  },
  {
    id: 19,
    text: "Only after the investigation ______ did the company issue an official statement.",
    options: ["had ended", "has ended", "would end", "ending"],
    answer: 1
  },
  {
    id: 20,
    text: "The equipment is believed ______ during transportation.",
    options: ["to damage", "to have damaged", "to have been damaged", "having damaged"],
    answer: 3
  },

  {
    id: 21,
    text: "The more carefully the data are examined, ______ the original hypothesis appears.",
    options: ["less convincing", "the less convincing", "the least convincing", "less convinced"],
    answer: 2
  },
  {
    id: 22,
    text: "The manager denied ______ any confidential documents to the competitors.",
    options: ["to send", "having sent", "send", "having been sent"],
    answer: 2
  },
  {
    id: 23,
    text: "Were the company ______ its current policy, it could face serious consequences.",
    options: ["to ignore", "ignored", "ignoring", "ignore"],
    answer: 1
  },
  {
    id: 24,
    text: "The researchers are unlikely to publish the findings until they ______ independently verified.",
    options: ["are", "have been", "will be", "were"],
    answer: 2
  },
  {
    id: 25,
    text: "He would rather the committee ______ the decision until further evidence became available.",
    options: ["postpones", "postponed", "has postponed", "will postpone"],
    answer: 2
  },
  {
    id: 26,
    text: "The article raises several questions, none of ______ can be answered easily.",
    options: ["that", "what", "which", "them"],
    answer: 3
  },
  {
    id: 27,
    text: "Much as the researchers ______ to eliminate bias, some limitations remained.",
    options: ["try", "tried", "have tried", "would try"],
    answer: 2
  },
  {
    id: 28,
    text: "Having ______ the original documents, the historian revised his interpretation.",
    options: ["examined", "been examined", "examining", "examine"],
    answer: 1
  },
  {
    id: 29,
    text: "The results would have been different if the researchers ______ a larger sample.",
    options: ["use", "used", "had used", "have used"],
    answer: 3
  },
  {
    id: 30,
    text: "Not until all the evidence had been reviewed ______ the final decision.",
    options: ["they announced", "did they announce", "they had announced", "announced they"],
    answer: 2
  },

  {
    id: 31,
    text: "The scientist's findings have been widely ______ by subsequent studies.",
    options: ["corroborated", "concealed", "rejected", "withdrawn"],
    answer: 1
  },
  {
    id: 32,
    text: "The evidence was too ______ to support such a serious accusation.",
    options: ["conclusive", "inconclusive", "decisive", "definite"],
    answer: 2
  },
  {
    id: 33,
    text: "The government should take steps to ______ the growing gap between rich and poor.",
    options: ["bridge", "widen", "duplicate", "generate"],
    answer: 1
  },
  {
    id: 34,
    text: "The professor attempted to ______ the distinction between fact and opinion.",
    options: ["blur", "clarify", "conceal", "invalidate"],
    answer: 2
  },
  {
    id: 35,
    text: "The policy may have ______ consequences that were not anticipated by its authors.",
    options: ["unintended", "deliberate", "obvious", "reversible"],
    answer: 1
  },
  {
    id: 36,
    text: "The new regulations are intended to prevent companies from ______ consumers.",
    options: ["exploiting", "complying", "endorsing", "allocating"],
    answer: 1
  },
  {
    id: 37,
    text: "The author's conclusion does not necessarily ______ from the evidence presented.",
    options: ["follow", "withdraw", "allocate", "compile"],
    answer: 1
  },
  {
    id: 38,
    text: "The researchers attempted to ______ the possibility that the results were caused by chance.",
    options: ["rule out", "bring about", "put off", "take after"],
    answer: 1
  },
  {
    id: 39,
    text: "The politician's statement was deliberately ______, allowing him to avoid making a definite commitment.",
    options: ["unequivocal", "evasive", "transparent", "conclusive"],
    answer: 2
  },
  {
    id: 40,
    text: "The findings are broadly ______ line with those of previous investigations.",
    options: ["at", "in", "on", "by"],
    answer: 2
  },

  {
    id: 41,
    text: "The committee came ______ the conclusion that further research was necessary.",
    options: ["at", "to", "on", "into"],
    answer: 2
  },
  {
    id: 42,
    text: "The new evidence bears ______ the question of whether the theory is valid.",
    options: ["on", "at", "for", "with"],
    answer: 1
  },
  {
    id: 43,
    text: "The researchers carried ______ several experiments to test the hypothesis.",
    options: ["out", "on", "over", "away"],
    answer: 1
  },
  {
    id: 44,
    text: "The final decision rests ______ the board of directors.",
    options: ["in", "at", "with", "by"],
    answer: 3
  },
  {
    id: 45,
    text: "The author takes issue ______ the assumption that economic growth is always beneficial.",
    options: ["to", "with", "for", "about"],
    answer: 2
  },
  {
    id: 46,
    text: "The new data seem to bear ______ the researchers' original hypothesis.",
    options: ["out", "up", "off", "away"],
    answer: 1
  },
  {
    id: 47,
    text: "The company had to cut ______ its operating costs.",
    options: ["back", "through", "over", "away"],
    answer: 1
  },
  {
    id: 48,
    text: "The witness's account was at ______ with the official report.",
    options: ["risk", "odds", "stake", "issue"],
    answer: 2
  },
  {
    id: 49,
    text: "The researchers accounted ______ every possible source of error.",
    options: ["for", "with", "on", "to"],
    answer: 1
  },
  {
    id: 50,
    text: "The professor advised students to refrain ______ making unsupported claims.",
    options: ["of", "from", "to", "with"],
    answer: 2
  },

  {
    id: 51,
    text: "Although the experiment was carefully designed, the sample size was too small to make the results ______.",
    options: ["generalizable", "irrelevant", "arbitrary", "obsolete"],
    answer: 1
  },
  {
    id: 52,
    text: "The researcher emphasized that correlation should not be ______ with causation.",
    options: ["confused", "confirmed", "compared", "compiled"],
    answer: 1
  },
  {
    id: 53,
    text: "The article provides a ______ analysis of the social consequences of technological change.",
    options: ["superficial", "comprehensive", "sporadic", "negligible"],
    answer: 2
  },
  {
    id: 54,
    text: "The claim became increasingly difficult to defend as contradictory evidence began to ______.",
    options: ["accumulate", "withdraw", "vanish", "diminish"],
    answer: 1
  },
  {
    id: 55,
    text: "The researchers remained ______ about the significance of their findings.",
    options: ["cautious", "reckless", "definitive", "indifferent"],
    answer: 1
  },
  {
    id: 56,
    text: "The new theory is appealing because it provides a ______ explanation for several previously unrelated observations.",
    options: ["unified", "fragmented", "arbitrary", "peripheral"],
    answer: 1
  },
  {
    id: 57,
    text: "The report was criticized for failing to distinguish between evidence and ______.",
    options: ["speculation", "verification", "observation", "measurement"],
    answer: 1
  },
  {
    id: 58,
    text: "The evidence is ______ enough to justify further investigation, but not to establish the claim conclusively.",
    options: ["suggestive", "conclusive", "irrelevant", "redundant"],
    answer: 1
  },
  {
    id: 59,
    text: "The policy was introduced in an attempt to ______ the burden placed on low-income households.",
    options: ["alleviate", "intensify", "duplicate", "prolong"],
    answer: 1
  },
  {
    id: 60,
    text: "The historian warned that the absence of evidence should not automatically be interpreted as evidence of ______.",
    options: ["absence", "accuracy", "certainty", "consistency"],
    answer: 1
  },

  {
    id: 61,
    text: "Many people assume that technological progress is inherently beneficial, but this assumption is far from ______.",
    options: ["self-evident", "irrelevant", "obsolete", "temporary"],
    answer: 1
  },
  {
    id: 62,
    text: "The study suggests that people tend to underestimate risks that are unfamiliar and ______.",
    options: ["invisible", "obvious", "frequent", "measurable"],
    answer: 1
  },
  {
    id: 63,
    text: "The researchers found that participants remembered emotionally charged events more vividly, although vividness did not necessarily imply ______.",
    options: ["accuracy", "frequency", "complexity", "duration"],
    answer: 1
  },
  {
    id: 64,
    text: "The effectiveness of a public policy depends not only on its design but also on how successfully it is ______.",
    options: ["implemented", "contradicted", "concealed", "postponed"],
    answer: 1
  },
  {
    id: 65,
    text: "The study's conclusions should be interpreted with ______ because the participants were not randomly selected.",
    options: ["caution", "certainty", "confidence", "enthusiasm"],
    answer: 1
  },
  {
    id: 66,
    text: "The discovery challenged the long-standing ______ that the species was incapable of adapting to extreme conditions.",
    options: ["assumption", "evidence", "observation", "measurement"],
    answer: 1
  },
  {
    id: 67,
    text: "The researcher argued that the apparent contradiction could be ______ by considering differences in methodology.",
    options: ["resolved", "generated", "prevented", "withdrawn"],
    answer: 1
  },
  {
    id: 68,
    text: "The results are difficult to interpret because several variables changed ______.",
    options: ["simultaneously", "occasionally", "independently", "rarely"],
    answer: 1
  },
  {
    id: 69,
    text: "The author does not reject the theory entirely; rather, he proposes that it be ______ in light of new evidence.",
    options: ["revised", "abandoned", "concealed", "duplicated"],
    answer: 1
  },
  {
    id: 70,
    text: "A convincing scientific explanation must account for observations that might otherwise appear ______.",
    options: ["anomalous", "ordinary", "irrelevant", "predictable"],
    answer: 1
  },

  {
    id: 71,
    text: "Urban planners increasingly recognize that simply expanding roads may ______ rather than solve congestion.",
    options: ["exacerbate", "mitigate", "prevent", "eliminate"],
    answer: 1
  },
  {
    id: 72,
    text: "The availability of information does not necessarily make people better informed; they must also be able to ______ reliable sources from unreliable ones.",
    options: ["distinguish", "combine", "ignore", "duplicate"],
    answer: 1
  },
  {
    id: 73,
    text: "The experiment was repeated several times to ensure that the original result was not merely a statistical ______.",
    options: ["fluke", "pattern", "constant", "principle"],
    answer: 1
  },
  {
    id: 74,
    text: "The scientist's cautious wording reflects the fact that the available evidence remains ______.",
    options: ["limited", "conclusive", "absolute", "unquestionable"],
    answer: 1
  },
  {
    id: 75,
    text: "The researchers were surprised to find that the intervention had virtually no ______ effect on behavior.",
    options: ["discernible", "permanent", "dramatic", "deliberate"],
    answer: 1
  },
  {
    id: 76,
    text: "The argument rests on the ______ that all participants have equal access to the necessary resources.",
    options: ["assumption", "conclusion", "exception", "contradiction"],
    answer: 1
  },
  {
    id: 77,
    text: "The historical account should be treated cautiously because it was written long after the events it ______ to describe.",
    options: ["purports", "prevents", "withdraws", "allocates"],
    answer: 1
  },
  {
    id: 78,
    text: "The researchers discovered that the effect was considerably more ______ among older participants.",
    options: ["pronounced", "obsolete", "arbitrary", "negligible"],
    answer: 1
  },
  {
    id: 79,
    text: "The findings provide further ______ for the argument that early intervention is beneficial.",
    options: ["support", "opposition", "ambiguity", "disruption"],
    answer: 1
  },
  {
    id: 80,
    text: "The report was rejected because its conclusions were not sufficiently ______ by the data.",
    options: ["substantiated", "concealed", "postponed", "reversed"],
    answer: 1
  },

  {
    id: 81,
    text: "The passage suggests that scientific knowledge is provisional because theories may be modified when new evidence ______.",
    options: ["emerges", "vanishes", "declines", "withdraws"],
    answer: 1
  },
  {
    id: 82,
    text: "The author implies that technological solutions should be evaluated according to their broader social ______.",
    options: ["implications", "duplicates", "assumptions", "exceptions"],
    answer: 1
  },
  {
    id: 83,
    text: "The researchers found that repeated exposure to a claim can increase its perceived truth, even when the claim is ______.",
    options: ["false", "verified", "objective", "conclusive"],
    answer: 1
  },
  {
    id: 84,
    text: "The passage emphasizes that historical records may reflect the priorities of those who had the power to ______ them.",
    options: ["produce", "contradict", "forget", "invalidate"],
    answer: 1
  },
  {
    id: 85,
    text: "The study indicates that sleep may play a role in the ______ of newly acquired memories.",
    options: ["consolidation", "elimination", "distortion", "prevention"],
    answer: 1
  },
  {
    id: 86,
    text: "The researchers caution that a strong association between two variables does not necessarily ______ that one causes the other.",
    options: ["imply", "exclude", "prevent", "reverse"],
    answer: 1
  },
  {
    id: 87,
    text: "The passage argues that effective communication requires speakers to consider not only what they say but also how their message is ______.",
    options: ["interpreted", "allocated", "replicated", "withdrawn"],
    answer: 1
  },
  {
    id: 88,
    text: "The evidence suggests that individual behavior is often influenced by social norms that people may not even be ______ of.",
    options: ["aware", "certain", "capable", "independent"],
    answer: 1
  },
  {
    id: 89,
    text: "The author warns that policies designed to solve one problem may create ______ consequences elsewhere.",
    options: ["unintended", "identical", "irrelevant", "temporary"],
    answer: 1
  },
  {
    id: 90,
    text: "The researchers argue that diversity within a population can increase its capacity to ______ environmental change.",
    options: ["adapt to", "withdraw from", "prevent", "duplicate"],
    answer: 1
  },

  {
    id: 91,
    text: "The study's methodology was criticized because the researchers failed to establish a suitable ______ group.",
    options: ["control", "random", "dependent", "experimental"],
    answer: 1
  },
  {
    id: 92,
    text: "The author maintains that the apparent decline may be an artifact of how the data were ______.",
    options: ["measured", "ignored", "prevented", "contradicted"],
    answer: 1
  },
  {
    id: 93,
    text: "The evidence is insufficient to ______ the possibility that other factors contributed to the outcome.",
    options: ["rule out", "bring about", "put off", "carry on"],
    answer: 1
  },
  {
    id: 94,
    text: "The researcher noted that the apparent improvement was not statistically ______.",
    options: ["significant", "irrelevant", "obsolete", "arbitrary"],
    answer: 1
  },
  {
    id: 95,
    text: "The passage indicates that public opinion can be ______ by repeated exposure to persuasive messages.",
    options: ["influenced", "eliminated", "isolated", "reversed"],
    answer: 1
  },
  {
    id: 96,
    text: "The historian compared several independent accounts in order to ______ the reliability of the original narrative.",
    options: ["assess", "conceal", "postpone", "allocate"],
    answer: 1
  },
  {
    id: 97,
    text: "The results should not be generalized beyond the population from which the sample was ______.",
    options: ["drawn", "withdrawn", "excluded", "allocated"],
    answer: 1
  },
  {
    id: 98,
    text: "The passage suggests that a useful theory must be capable of making predictions that could, in principle, be ______ by evidence.",
    options: ["tested", "concealed", "ignored", "postponed"],
    answer: 1
  },
  {
    id: 99,
    text: "The researcher revised the original conclusion after discovering that one of the assumptions underlying the analysis was ______.",
    options: ["incorrect", "conclusive", "permanent", "objective"],
    answer: 1
  },
  {
    id: 100,
    text: "Critical reading requires readers to distinguish between what a writer explicitly states and what can reasonably be ______ from the text.",
    options: ["inferred", "allocated", "withdrawn", "duplicated"],
    answer: 1
  }
];

/* مهم: exam.html دقیقاً این متغیر را می‌خواهد */
window.QUESTIONS = QUESTIONS;
