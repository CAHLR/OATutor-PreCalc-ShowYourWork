var hints = [{id: "matrices7a-h1", type: "hint", dependencies: [], title: "Product of Matrices", text: "Finding the product of two matrices is only possible when the inner dimensions are the same, meaning that the number of columns of the first matrix is equal to the number of rows of the second matrix. If A is an m×r matrix and B is an r×n matrix, then the product matrix AB is an m×n matrix. For example, the product AB is possible because the number of columns in A is the same as the number of rows in B. If the inner dimensions do not match, the product is not defined.\n##figure1.gif##", variabilization: {}}, {id: "matrices7a-h2", type: "hint", dependencies: ["matrices7a-h1"], title: "Product of Matrices:Computing Entries", text: "For a matrix $$AB=C$$, we can obtain entry c_{i,j} by multipying the entries in row i of A by column of j in B and adding them. For example, given matrices A and B, where the dimensions of A are 2x3 and the dimensions of B are 3x3, the product of AB will be a 2x3 matrix.\\nA=//mat{(a_{1,1},a_{1,2},a_{1,3}),(a_{2,1},a_{2,2},a_{2,3})} and B=/mat{(b_{1,1},b_{1,2},b_{1,3}),(b_{2,1},b_{2,2},b_{2,3}),(b_{3,1},b_{3,2},b_{3,3})}.\\nTo obtain c_{1,1} we multiply the first row of A with the first column of B and add. Thus, c_{1,1}=a_{1,1}*b_{1,1}+a_{1,2}*b_{2,1}+a_{1,3}*b_{3,1}.", variabilization: {}}, {id: "matrices7a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["60"], dependencies: ["matrices7a-h2"], title: "Product of Matrices:Computing Entries", text: "We will start by computing the top left entry of BD. We can do so by calculating b_{1,1}*d_{1,1}+b_{1,2}*d_{2,1}+b_{1,3}*d_{3,1}. What is the value?", variabilization: {}}, {id: "matrices7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-16"], dependencies: ["matrices7a-h3"], title: "Product of Matrices:Computing Entries", text: "We will next compute the bottom left entry of BD. We can do so by calculating b_{2,1}*d_{1,1}+b_{2,2}*d_{2,1}+b_{2,3}*d_{3,1}. What is the value?", variabilization: {}}, {id: "matrices7a-h5", type: "hint", dependencies: ["matrices7a-h4"], title: "Product of Matrices:Computing Entries", text: "Repeat the same process for each corresponding entries.", variabilization: {}}, ]; export {hints};