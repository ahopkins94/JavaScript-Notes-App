describe('SingleNoteView', function(){
  var note = new Note('New note');
  var singleNoteView = new SingleNoteView(note);
  describe('.html', function(){
    it('returns html for note', function(){
      var html = singleNoteView.html();
      expect(html).toBe('<div>New note</div>')
    });
  });


});
