var fs = require('fs'),
    md5 = require('MD5');
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
			src: "assets.zip"
		});

		var done = this.async();

		fs.readFile(options.src, function(err, buf) {
			if (err) {
				grunt.log.error(err);
				return done(false);
			}

			var revision = md5(buf);
			grunt.config(options.property, revision);
			grunt.log.writeln(options.src + ' at revision ' + revision);
			done(true);
		});
	});
};
