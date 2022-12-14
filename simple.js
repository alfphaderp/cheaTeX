realLoadProblem = loadProblem;
loadProblem = function() {
  realLoadProblem();
  $("#user-input").val(problems[problemsOrder[(problemNumber - 1) % problemsOrder.length]].latex);
  validateProblem();
}
