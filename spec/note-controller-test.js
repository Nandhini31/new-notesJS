(function testingNoteController(){
  var list = new List();
  list.createNote("buy bread honey, sugar, cucumber,");
  var controller = new NoteController(list);
  controller.render();
  assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div><a href=\"#notes/1\">buy bread honey, su</a></div></li></ul>");
})();

(function controllerReturnsSingleNote(){
  var list = new List();
  list.createNote("buy bread honey, sugar, cucumber");
  var controller = new NoteController(list);
  controller.urlDisplaysNoteContent();
  console.log(controller.urlDisplaysNoteContent());
  assert.isTrue(document.getElementById("app").innerHTML === "<div>buy bread honey, sugar, cucumber</div>");
})();
