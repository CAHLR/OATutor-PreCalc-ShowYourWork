var hints = [{id: "rational11a-h1", type: "hint", dependencies: [], title: "Factoring Trinomials", text: "Factor the trinomial in the numerator.", variabilization: {}}, {id: "rational11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(2x-1)(x+4)"], dependencies: ["rational11a-h1"], title: "Factoring Trinomials", text: "What are the two binomial factors of numerator?", variabilization: {}}, {id: "rational11a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2(2x-1)(x+1)"], dependencies: ["rational11a-h2"], title: "Factoring Trinomials", text: "What are the two binomial factors of denominator?", variabilization: {}}, {id: "rational11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(2x-1)"], dependencies: ["rational11a-h3"], title: "Common Factor", text: "What is the common factor?", variabilization: {}}, {id: "rational11a-h5", type: "hint", dependencies: ["rational11a-h4"], title: "Common Factor", text: "Cancel the common factor from the numerator and denominator.", variabilization: {}}, {id: "rational11a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x+4)"], dependencies: ["rational11a-h5"], title: "Simplifying Expressions", text: "What is remaining in the numerator?", variabilization: {}}, {id: "rational11a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2(x+1)"], dependencies: ["rational11a-h6"], title: "Simplifying Expressions", text: "What is remaining in the denominator?", variabilization: {}}, {id: "rational11a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x+4)/(2x+2)"], dependencies: ["rational11a-h7"], title: "Simplifying Expressions", text: "What is the simplified expression?", variabilization: {}}, ]; export {hints};