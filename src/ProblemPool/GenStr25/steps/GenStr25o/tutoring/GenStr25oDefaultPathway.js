var hints = [{id: "GenStr25o-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr25o-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-10w-5=-10"], dependencies: ["GenStr25o-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr25o-h3", type: "hint", dependencies: ["GenStr25o-h2"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr25o-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-10w=-5"], dependencies: ["GenStr25o-h3"], title: "Addition", text: "Add -5 to each side of the equation.", variabilization: {}}, {id: "GenStr25o-h5", type: "hint", dependencies: ["GenStr25o-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr25o-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["w=1/2"], dependencies: ["GenStr25o-h5"], title: "Division", text: "Divide -10 from each side.", variabilization: {}}, {id: "GenStr25o-h7", type: "hint", dependencies: ["GenStr25o-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr25o-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr25o-h7"], title: "Verification", text: "Check whether $$\\left(35\\right)-\\left(5\\right) \\left(\\left(2\\right) \\frac{1}{2}+\\left(8\\right)\\right)$$ equals -10.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};