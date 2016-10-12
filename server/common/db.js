'use strict';

/**
 * Module dependencies.
 */

var leveldb = require('levelup');
var memdown = require('memdown');
var leveldown = require('leveldown');
var config = require('../config');
var thunkify = require('thunkify-wrap');

var db = leveldb('./leveldb', {
  valueEncoding: 'json',
  db: config.debug && process.env.NODE_ENV !== 'test' ? memdown : leveldown
});

thunkify(db, ['get', 'put', 'del', 'batch']);
module.exports = db;
