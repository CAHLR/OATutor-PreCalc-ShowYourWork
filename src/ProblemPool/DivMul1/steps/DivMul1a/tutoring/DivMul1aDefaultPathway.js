var hints = [{id: "DivMul1a-h1", type: "hint", dependencies: [], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul1a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(5/5)x=-27/5"], dependencies: ["DivMul1a-h1"], title: "Division", text: "Divide 5 from each side.", variabilization: {}}, {id: "DivMul1a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-27/5"], dependencies: ["DivMul1a-h2"], title: "Simplification", text: "What do we get for x after simplifying the equation?", variabilization: {}}, {id: "DivMul1a-h4", type: "hint", dependencies: ["DivMul1a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul1a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul1a-h4"], title: "Verification", text: "Check whether $$\\left(5\\right) \\frac{\\left(-2\\right)7}{5}$$ equals -27.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};