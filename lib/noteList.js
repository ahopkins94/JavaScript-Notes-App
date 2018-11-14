(function(exports) {
  function NoteList() {
  this._notes = [];
  }

  NoteList.prototype.notes = function() {
    return this._notes;
  };

  NoteList.prototype.create = function(text) {
    this._notes.push(new Note(text, this._nextID()));
  };

  NoteList.prototype._nextID = function() {
    return this._notes.length;
  };

  exports.NoteList = NoteList;
})(this);
