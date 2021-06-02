var hints = [{id: "DivMul16e-h1", type: "hint", dependencies: [], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul16e-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.25z/0.25=3.25/0.25"], dependencies: ["DivMul16e-h1"], title: "Division", text: "Divide 0.25 from each side.", variabilization: {}}, {id: "DivMul16e-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["13"], dependencies: ["DivMul16e-h2"], title: "Simplification", text: "What do we get for z after simplifying the equation?", variabilization: {}}, {id: "DivMul16e-h4", type: "hint", dependencies: ["DivMul16e-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul16e-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul16e-h4"], title: "Verification", text: "Check whether $$\\left(0.25\\right) \\left(13\\right)$$ equals 3.25.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};