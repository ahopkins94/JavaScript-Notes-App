
describe('NoteListView', function(){
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
  describe('.html()', function(){
    it('returns html list', function(){
      noteList.create('Ruby');
      expect(noteListView.html()).toBe('<ul><li>Ruby</li></ul>')

    });

  });

});
