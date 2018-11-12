(function(exports){
  function NoteListView(noteList){
    this.noteList = noteList
  }

  NoteListView.prototype.html= function(){
    var html = '<ul>';
    this.noteList.notes().forEach(function(note) {
      html += "<li>" + note.text() + "</li>"
    })
    html += '</ul>'
    return html
  }
  exports.NoteListView = NoteListView
})(this);
