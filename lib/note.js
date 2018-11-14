(function(exports) {
  function Note(text, id){
    this._text = text;
    this.id = id;
  }
  Note.prototype.text = function(){
    return this._text;
  };

  exports.Note = Note;
  })(this);
