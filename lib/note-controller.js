(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.create("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.loadNotesHTML = function() {
    var app = document.getElementById("app");
    app.innerHTML = this.noteListView.html();
  };

  NoteController.prototype.displayNoteOnClick = function() {
    window.addEventListener("hashchange", () => {
      var id = window.location.hash.split("/")[1];
      console.log(id);
      this.loadSingleNoteHTML(id);
    });
  };

  NoteController.prototype.loadSingleNoteHTML = function(id) {
    var note = this._findNoteByID(id);
    console.log(note);
    var view = new SingleNoteView(note);
    document.getElementById("app").innerHTML = view.html();
    console.log("HELLO");
  };

  NoteController.prototype._findNoteByID = function(id) {
    return this.noteList.notes().find((note) => {
      return String(note.id) === id;
    });
  };

  exports.NoteController = NoteController;
})(this);
