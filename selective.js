const THRESHOLD = 21;

realLoadProblem = loadProblem;
loadProblem = function() {
  realLoadProblem();
  while (problemPoints < THRESHOLD) {
    realLoadProblem();
  }
  $("#user-input").val(problems[problemsOrder[(problemNumber - 1) % problemsOrder.length]].latex);
  validateProblem();
}
