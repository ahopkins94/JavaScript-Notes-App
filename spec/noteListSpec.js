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
  });
});
