'use strict';

var debug = require('debug')('changelog:printHeader');
var format = require('util').format;

//Templates
var logoTemplate = '# <img width="24px" src="%s" /> ';
var titleTemplate = '%s\n\n';
var subtitleTemplate = '_%s_\n\n';
var versionTemplate = '(%s)\n\n';

function printHeader(stream, options, date) {

  debug('printing header');
  if (options.logo) {
    stream.write(format(logoTemplate, options.logo));
  }

  stream.write(format(titleTemplate, options.app_name));

  if (options.intro) {
    stream.write(format(subtitleTemplate, options.intro));
  }

  stream.write(format(versionTemplate, date));
  stream.write('---\n');
}

module.exports = printHeader;