var hints = [{id: "measure13a-h1", type: "hint", dependencies: [], title: "Convert", text: "Multiply by a unit conversion factor relating km and mi.", variabilization: {}}, {id: "measure13a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1.61"], dependencies: ["measure13a-h1"], title: "Convert", text: "How many km are in one mile?", variabilization: {}}, {id: "measure13a-h3", type: "hint", dependencies: ["measure13a-h2"], title: "Multiply", text: "Multiply 100 km by 1 $$\\frac{mile}{1.61}$$ km (km should be in the denominator so that km will divide out).", variabilization: {}}, {id: "measure13a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["62"], dependencies: ["measure13a-h3"], title: "Multiply", text: "What do we get after the multiplication?", variabilization: {}}, ]; export {hints};