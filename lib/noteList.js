(function(exports) {
  function NoteList() {
  this._notes = [];
  }

  NoteList.prototype.notes = function() {
    return this._notes;
  };

  NoteList.prototype.create = function(text) {
    this._notes.push(new Note(text));
  };

  exports.NoteList = NoteList;
})(this);
