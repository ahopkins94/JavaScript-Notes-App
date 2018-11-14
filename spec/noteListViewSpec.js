
describe('NoteListView', function(){
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
  describe('.html()', function(){
    it('returns html list for 0 items', function(){
      expect(noteListView.html()).toBe('<ul></ul>');
    });
    it('returns html list for one item', function(){
      noteList.create('Ruby');
      expect(noteListView.html()).toBe("<ul><li><a href='#notes/0'>Ruby</a></li></ul>");
    });
    it('returns html list for two items', function(){
      noteList.create('Javascript');
      expect(noteListView.html()).toBe("<ul><li><a href='#notes/0'>Ruby</a></li><li><a href='#notes/1'>Javascript</a></li></ul>");
    });
    it('returns only first 20 characters of note', function() {
      noteList.create("Hello my name is Chris");
      expect(noteListView.html()).toBe("<ul><li><a href='#notes/0'>Ruby</a></li><li><a href='#notes/1'>Javascript</a></li><li><a href='#notes/2'>Hello my name is Chr...</a></li></ul>");
    });


  });

});
