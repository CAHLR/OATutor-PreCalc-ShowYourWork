var hints = [{id: "VarCon17a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon17a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["k=-11"], dependencies: ["VarCon17a-h1"], title: "Subtraction", text: "Subtract 20k from each side.", variabilization: {}}, {id: "VarCon17a-h3", type: "hint", dependencies: ["VarCon17a-h2"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon17a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon17a-h3"], title: "Verification", text: "Check whether $$\\left(21\\right) \\left(-1\\right)1$$ equals $$\\left(20\\right) \\left(-1\\right)1-\\left(11\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};