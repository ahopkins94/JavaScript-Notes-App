describe("NoteController", function() {
  var noteList = new NoteList();
  noteList.create("Favourite drink: seltzer");
  var controller = new NoteController(noteList);

  describe("On initialization", function() {
    it("creates notelist view with notelist", function() {
      expect(controller.noteListView.noteList).toBe(noteList);
    });
  });

  describe(".displayNewNote()", function() {
    it("displays text of new note", function() {
      var element = document.createElement('div');
      element.id = 'app';
      document.body.appendChild(element);
      controller.displayNewNote("lemonade");
      expect(element.innerHTML).toBe("<ul><li><a href=\"#notes/0\">Favourite drink: sel...</a></li><li><a href=\"#notes/1\">lemonade</a></li></ul>")
      controller.noteListView.noteList._notes.pop()
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

  describe(".displayCurrentNote()", function() {
    it("displays text of note on page", function() {
      var htmlMock = {
        innerHTML: "string"
      };
      document.getElementById = function() { return htmlMock; };
      window.location.hash = "#notes/0";
      controller.displayCurrentNote();
      var expression = (htmlMock.innerHTML == "<div>Favourite drink: seltzer</div>");
      expect(expression).toBe(true);
    });
  });

  describe(".displayNoteOnClick()", function() {
    it("adds event listener to display current note on hashchange", function() {
      var callbackMock = (() => {this.displayCurrentNote();});
      var expectedArguments = ["hashchange", callbackMock].toString();
      var eventListenerArguments = [];
      window.addEventListener = function(event, callback) {
         eventListenerArguments = [event, callback.toString()].toString();
      };
      controller.displayNoteOnClick();
      expect(eventListenerArguments).toBe(expectedArguments);
    });
  });

  describe(".displayNoteOnSubmit()", function() {
    // it("adds event listener to display new note on submit", function() {
    //   window.preventDefault = () => {}
    //   var submitEvent = "event"
    //   var callbackMock = (submitEvent => {this.displayNewNote();});
    //   var expectedArguments = ["submit", callbackMock].toString();
    //   var eventListenerArguments = [];
    //   window.addEventListener = function(event, callback) {
    //      eventListenerArguments = [event, callback.toString()].toString();
    //   };
    //   controller.displayNoteOnSubmit();
    //   expect(eventListenerArguments).toBe(expectedArguments);
    // });
  });
});
