
describe('Note', function(){
  var note = new Note('Javascript');
  describe('.text', function(){
    it('returns string with text of note', function(){

      expect(note.text()).toBe('Javascript')
    });
  });
});
