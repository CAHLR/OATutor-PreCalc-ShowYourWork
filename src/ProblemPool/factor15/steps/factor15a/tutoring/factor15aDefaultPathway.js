var hints = [{id: "factor15a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: [], title: "Factor the expression", text: "What is the biggest factor of 6, 2, 3, 1", variabilization: {}}, {id: "factor15a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y"], dependencies: ["factor15a-h1"], title: "Factor the expression", text: "What is the biggest factor of $$y^4$$, $$y^3$$, $$y^2$$, y", variabilization: {}}, {id: "factor15a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y"], dependencies: ["factor15a-h2"], title: "The greatest common factor", text: "Multiply the two biggest factors previously mentioned", variabilization: {}}, ]; export {hints};