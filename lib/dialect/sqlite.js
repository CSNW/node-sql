var util = require('util');
var Postgres = require(__dirname + '/postgres');

var Sqlite = function() {
  this.output = [];
  this.params = [];
}

util.inherits(Sqlite, Postgres);

Sqlite.prototype.visitDropColumn = function(dropColumn) {
  notSupported('DROP COLUMN');
}

Sqlite.prototype.visitRenameColumn = function(renameColumn) {
  notSupported('RENAME COLUMN');
}

Sqlite.prototype.visitReturning = function(returning) {
  notSupported('RETURNING');
}

function notSupported(operation) {
  throw new Error(operation + ' is not supported in SQLite');
}

module.exports = Sqlite;