(function createNoteLists(){
  var list = new List();
  assert.isTrue(Object.prototype.toString.call(list.noteList()) === '[object Array]');
})();

(function createNoteLists(){
  var list = new List();
  list.createNote("Buy Milk");
  list.createNote("Buy Bread");
  assert.isTrue(list.noteList().length === 2);
})();

(function incrementId() {
  var list = new List();
  list.createNote("Buy Milk");
  list.createNote("Buy Bread");
  assert.isTrue(list.listOfNotes[1].getId() === 2);
})();
