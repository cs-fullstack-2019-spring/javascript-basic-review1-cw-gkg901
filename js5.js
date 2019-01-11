

var LOANAMT = parseInt(prompt ("ENTER OUTSTANDING LOAN AMOUNT"))
var NUMMONTHS = parseInt(prompt ("ENTER MONTHS TO PAY"))

var PMT  = (LOANAMT / NUMMONTHS)

console.log("To pay off a loan of " + LOANAMT + " it will take " + PMT + " per month.")