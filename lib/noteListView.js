(function(exports){
  function NoteListView(noteList){
    this.noteList = noteList;
  }

  NoteListView.prototype.html= function(){
    var html = '<ul>';
    this.noteList.notes().forEach((note) => {
      html += "<li>" + this.formatNote(note.text()) + "</li>";
    });
    html += '</ul>';
    return html;
  };

  NoteListView.prototype.formatNote = function(text) {
    if (text.length > 20) { return text.slice(0, 20) + "..."; }
    return text;
  };
  exports.NoteListView = NoteListView;
})(this);
