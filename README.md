# grunt-asset-revision

> Get current assets revision

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-asset-revision --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-asset-revision');
```

## The "revision" task

### Overview
In your project's Gruntfile, add a section named `revision` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  revision: {
    options: {
      property: 'meta.revision',
      src: "assets/"
    }
  },
})
```

### Options

#### options.property
Type: `String`
Default value: `'meta.revision'`

What configuration property to write the revision to.

#### options.src
Type: `String`
Default value: `assets/`

What file or folder to calculate the revision for.

