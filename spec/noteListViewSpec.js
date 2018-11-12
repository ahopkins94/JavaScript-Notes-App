
describe('NoteListView', function(){
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
  describe('.html()', function(){
    it('returns html list for 0 items', function(){
      expect(noteListView.html()).toBe('<ul></ul>');
    });
    it('returns html list for one item', function(){
      noteList.create('Ruby');
      expect(noteListView.html()).toBe('<ul><li>Ruby</li></ul>');
    });
    it('returns html list for two items', function(){
      noteList.create('Javascript');
      expect(noteListView.html()).toBe('<ul><li>Ruby</li><li>Javascript</li></ul>');
    });


  });

});
