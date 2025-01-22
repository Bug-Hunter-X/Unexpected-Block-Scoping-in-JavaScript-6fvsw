# Unexpected Block Scoping in JavaScript

This repository demonstrates a common, yet sometimes confusing, aspect of JavaScript's variable scoping.  Specifically, it highlights the behavior of `let` declarations within nested blocks (like `if` statements).  The `bug.js` file contains the problematic code, and `bugSolution.js` offers a corrected version.

## Understanding the Issue

In JavaScript, `let` variables are block-scoped.  This means their visibility is limited to the block of code (defined by curly braces `{}`) in which they are declared.  If a variable is declared with `let` inside an `if` statement, it's only accessible within that `if` block.  This can lead to unexpected behavior if you assume the variable will be accessible outside the block.