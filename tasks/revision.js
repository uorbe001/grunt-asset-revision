var fs = require('fs'),
    md5 = require('MD5'),
    dirsum = require('dirsum');
/*
 * grunt-asset-revision
 * https://github.com/uorbe001/grunt-asset-revision
 *
 * Copyright (c) 2013 Unai Orbe
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
	grunt.registerTask('revision', 'Retrieves the current asset revision', function(property) {
		var options = this.options({
			property: 'meta.revision',
			src: "assets/"
		});

		var done = this.async(),
			src = options.src;

		fs.stat(src, function (err, stats) {
			var execute;

			if (stats && stats.isFile()) {
				execute = calculateMd5OfFile;
			} else {
				execute = calculateMd5OfFolder;
			}

			execute(src, function (err, revision) {
				if (err) {
					grunt.log.error(err);
					done(false);
				}

				grunt.config(options.property, revision);
				grunt.log.writeln(src + ' at revision ' + revision);
				done(true);
			});
		});
	});

	function calculateMd5OfFile(src, callback) {
		fs.readFile(src, function(err, buf) {
			if (err) {
				return callback(err);
			}

			var revision = md5(buf);
			callback(null, revision);
		});
	}

	function calculateMd5OfFolder(src, callback) {
		dirsum.digest(src, 'md5', function(err, hashes) {
			if (err) {
				callback(err);
			}

			callback(null, hashes.hash);
		});
	}
};
