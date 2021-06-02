var hints = [{id: "linearmodels18a-h1", type: "hint", dependencies: [], title: "Graphing the Problem", text: "Graphing the problem is useful to understand the geometry we are working with. First, label a point T to represent the town of Timpson. We know that Ashburn is 60 miles east and 12 miles north of Timpson, so indicate a point A for Ashburn 60 units right of Timpson and 12 units up. This can be done by setting point T at the origin, (0,0), and setting point A at (60,12). We know that Garrison is perpendicular to the line connecting (0,0) and (60,12), based on the problem's given $$information$$. We can label Garrison as point G, at (20,0) to represent being 20 units east of point T. From the graph, we can tell that we are trying to find the point of the intersection between the line perpendicular to the line connecting T and A, that also goes through (20,0).", variabilization: {}}, {id: "linearmodels18a-h2", type: "hint", dependencies: ["linearmodels18a-h1"], title: "Slope Between T and A", text: "The slope of the line between A and T is $$\\frac{60}{12}=5$$.", variabilization: {}}, {id: "linearmodels18a-h3", type: "hint", dependencies: ["linearmodels18a-h2"], title: "Finding the Relevant Line", text: "The slope of the perpendicular line is $$\\frac{-\\left(1\\right)}{5}$$. $$0=\\frac{-\\left(1\\right)}{5} \\left(20\\right)+b$$, so $$b=4$$. The line is $$y=\\frac{-\\left(1\\right)}{5} x+\\left(4\\right)$$.", variabilization: {}}, {id: "linearmodels18a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10/13"], dependencies: ["linearmodels18a-h3"], title: "Finding the Intersection", text: "$$\\frac{-\\left(1\\right)}{5} x+\\left(4\\right)=5x$$, $$x=$$?", variabilization: {}}, {id: "linearmodels18a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["50/13"], dependencies: ["linearmodels18a-h4"], title: "Finding the Y Coordinate of the Intersection", text: "$$x=\\frac{10}{13}$$, $$f \\frac{10}{13}=$$?", variabilization: {}}, {id: "linearmodels18a-h6", type: "hint", dependencies: ["linearmodels18a-h5"], title: "Using the Pythagorean Theorem", text: "$$\\sqrt{{\\left(\\frac{50}{13}\\right)}^2+{\\left(\\frac{10}{13}\\right)}^2}=$$?", variabilization: {}}, ]; export {hints};