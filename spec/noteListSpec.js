describe("NoteList", function() {
  var noteList = new NoteList();
  describe(".notes()", function() {
    it("returns an array of note models", function() {
      expect(noteList.notes() instanceof Array).toBe(true);
    });
  });
  describe(".create()", function() {
    it("stores a new note with the text given", function() {
      noteList.create("Javascript");
      var note1 = noteList.notes()[0];
      expect(note1 instanceof Note).toBe(true);
      expect(note1.text()).toBe("Javascript");
    });
    it("creates each note with a unique id", function() {
      noteList.create("Ruby");
      expect(noteList.notes()[0].id).toBe(0);
      expect(noteList.notes()[1].id).toBe(1);
    });
  });
});
