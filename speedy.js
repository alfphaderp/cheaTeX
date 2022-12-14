const SPEEDUP = 100;

realSetTimeout = setTimeout;
setTimeout = function(f, t) {
  realSetTimeout(f, t / SPEEDUP);
}

realLoadProblem = loadProblem;
loadProblem = function() {
  realLoadProblem();
  $("#user-input").val(problems[problemsOrder[(problemNumber - 1) % problemsOrder.length]].latex);
  validateProblem();
}
