var test = require('tap').test;
var Query = require(__dirname + '/../lib/node/query');
var Table = require(__dirname + '/../lib/table');

test('query', function(t) {
  var table = Table.define({
    name: 'bang',
    columns: ['boom']
  });
  var query = new Query(table).select('*');

  t.equal(query.text, 'SELECT * FROM "bang"');
  t.equal(query.values.length, 0);

  query.where(table.boom.equals('ouch'));
  t.equal(query.text, 'SELECT * FROM "bang" WHERE ("bang"."boom" = $1)');
  t.equal(query.values.length, 1);
  t.equal(query.values[0], 'ouch');
  t.end();
});
