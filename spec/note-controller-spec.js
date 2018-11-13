describe("NoteController", function() {
  var noteList = new NoteList();
  var controller = new NoteController(noteList);

  describe("On initialization", function() {
    it("adds seltzer note to notelist", function() {
      expect(noteList.notes()[0].text()).toBe("Favourite drink: seltzer");
    });
    it("creates notelist view with notelist", function() {
      expect(controller.noteListView.noteList).toBe(noteList);
    });
  });

  describe(".loadNotesHTML", function() {
    it("adds list to div on page", function() {
      controller.loadNotesHTML();
      
      var app = document.getElementById("app");
      var html = app.innerHTML;
      var expression = (html == "<ul><li>Favourite drink: seltzer</li></ul>");
      expect(expression).toBe(true);
    });
  });
});
