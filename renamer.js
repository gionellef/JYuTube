/*
 This is a helper script that can be used to recursively rename all
 JavaScript files within a given directory into TypeScript files.
 call:
 node renamer <directory>
 */

var fs = require('fs');
var path = require('path');
var ANSI_GREEN = '\x1b[32m';
var ANSI_DEFAULT = '\x1b[0m';
var ANSI_RED = '\x1b[35m';

var walkSync = function(dir, filelist) {
  var files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if(getFileExtension(file) === 'tsx' || getFileExtension(file) === 'ts'){
        var renamed = file.slice(0, -3) + '.js';
        fs.rename(path.join(dir, file), path.join(dir, renamed), function(err){
          err ? console.log(err) : null;

        });
        path.join(dir, renamed)
      }
    }
  });
  return filelist;
};

var getFileExtension = function(file){
  var splitted = file.split('.');
  return splitted[splitted.length - 1];
};

try {
  walkSync(process.argv[2]);
  console.log(ANSI_GREEN, 'finished renaming js files to ts', ANSI_DEFAULT);
} catch(err){
  console.log(ANSI_RED, 'something went wrong wile renaming js files', ANSI_DEFAULT);
}
