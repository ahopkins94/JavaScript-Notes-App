(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.create("Favourite drink: seltzer.");
    this.noteListView = new NoteListView(noteList);
  }
  NoteController.prototype.loadNotelistHTML = function() {
    var app = document.getElementById('app');
    app.innerHTML = this.noteListView.html();
  };

  exports.NoteController = NoteController;
})(this);
