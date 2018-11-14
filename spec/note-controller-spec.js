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

  describe(".loadNotesHTML()", function() {
    it("adds list to div on page", function() {
      var htmlMock = {
        innerHTML: "string"
      };
      document.getElementById = function() { return htmlMock; };
      controller.loadNotesHTML();
      var expression = (htmlMock.innerHTML == "<ul><li><a href='#notes/0'>Favourite drink: sel...</a></li></ul>");
      expect(expression).toBe(true);
    });
  });

  describe(".loadSingleNoteHTML()", function() {
    it("displays text of note on page", function() {
      var htmlMock = {
        innerHTML: "string"
      };
      document.getElementById = function() { return htmlMock; };
      controller.loadSingleNoteHTML(0);
      var expression = (htmlMock.innerHTML == "<div>Favourite drink: seltzer</div>");
      expect(expression).toBe(true);
    });
  });

  describe(".displayNoteOnClick()", function() {
    it("adds event listener to window", function() {
      var counter = 0;
      window.addEventListener = function(event, callback) {
        if (callback === controller.loadSingleNoteHTML) { counter += 1 };
      };
      controller.displayNoteOnClick();
      expect(counter).toBe(1);
    });
  });
});
