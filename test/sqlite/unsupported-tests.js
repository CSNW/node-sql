var tap = require('tap').test;
var Sqlite = require('../../lib/dialect/sqlite');
var Table = require(__dirname + '/../../lib/table');

var post = definePostTable();
var tests = {
  'RETURNING': post.insert({'id': 'test1', 'userId': 'test2'}).returning(post.star()),
  'RENAME COLUMN': post.alter().renameColumn('userId', 'user_id'),
  'DROP COLUMN': post.alter().dropColumn('userId')
};

for (var stmt in tests) {
  tap(stmt + ' should throw', function(t) {
    t.throws(function() {
      new Sqlite().getQuery(tests[stmt]);
    });
    t.end();
  });
}

function definePostTable() {
  return Table.define({
    name: 'post',
    columns: ['id', 'userId', 'content']
  });
}