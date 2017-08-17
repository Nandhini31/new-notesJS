(function(exports) {
  function NoteController(list) {
    this.list = list;
    this.view = new NoteListView(list);
  }
  NoteController.prototype.render = function () {
    exports.document.getElementById("app").innerHTML = this.view.renderList();
  };

  NoteController.prototype.urlDisplaysNoteContent = function(){
    var self = this;
    window.addEventListener("hashchange",function(){
      self.showNoteContentForCurrentlocation();
    });
  };

  NoteController.prototype.showNoteContentForCurrentlocation = function(){
    this.showNoteText(this.getNoteidFromUrl(window.location));
  };

  NoteController.prototype.getNoteidFromUrl = function () {
    return location.hash.split("/")[1];
  };

  NoteController.prototype.showNoteText = function(noteId){
    var currentnote = this.list.getNoteforId(noteId);
    console.log(currentnote);
    var noteview = new NoteView(currentnote);
    exports.document.getElementById("app").innerHTML = noteview.renderNote();
    console.log(exports.document.getElementById("app").innerHTML);
  };

  NoteController.prototype.listenToSubmit = function () {
    exports.document.getElementById("submitbutton").addEventListener("submit", function(submitEvent){
      console.log(this.textarea.value);
      cosole.log(submitEvent);
      submitEvent.preventDefault();
    });
  };


  exports.NoteController = NoteController;
})(this);
