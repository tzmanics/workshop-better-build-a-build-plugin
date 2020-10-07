# ˭̡̞(◞⁎˃ᆺ˂)◞₎₎=͟͟͞͞˳˚॰°ₒ৹๐ Start Your Plugin!

It's time to jump in and we're going straight to Build Plugin creation.

## Building Basics

There are three main files that each Build Plugin should have:

* `index.js`: this is the entry point for the plugin
* `manifest.yml`: a file to hold information about the plugin
* `package.json`: a file containing the metadata of the plugin

### `index.js`

The heart of a Build Plugin is a JavaScript file, `index.js`, that exports all the functionality we want to apply to the build events. Yup, just a friendly, familiar, JavaScript file 😍. As Build Plugins get more detailed we can add helper functions imported from other files. However, the `index.js` will always be what Netlify reads first.

```js
// index.js

module.exports = {};
```

### `manifest.yml`

Each plugin needs to have a `manifest.yml` file that provides information about the plugin. This file will also describe the information it expects to receive from the project using the plugin. At the very least, the `manifest.yml` file needs to list the plugin name. It's generally best practice to have the plugin name begin with 'netlify-plugin'. So, if our plugin was named 'cool-plugin' it would then become 'netlify-plugin-cool-plugin'. Plug it in, plug it in.

```yml
# manifest.yml

name: netlify-plugin-to-all-events
```

### `package.json`

We can setup the `package.json` file by running `npm init` and answering the questions to the prompts. It's best practice to have `netlify` and `netlify-plugin` in the keywords of this file. Also, we recommend having the `repository` and `bugs` fields filled out to guide users to the Build Plugin's repository. Here's the `package.json` for the plugin we're creating:

```json
{
  "name": "netlify-plugin-to-all-events",
  "version": "1.3.0",
  "description": "An example project to plugin to all the Netlify build events 🔌!",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tzmanics/netlify-plugin-to-all-events.git"
  },
  "keywords": ["netlify", "netlify-plugin", "build", "plugins"],
  "author": "Tara Z. Manicsic <tzmanics@gmail.com> (https://tzmanics.dev)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/tzmanics/netlify-plugin-to-all-events/issues"
  },
  "homepage": "https://github.com/tzmanics/netlify-plugin-to-all-events#readme"
}
```

> 🔬 If you want some more information about the `package.json` files in general, [here's a great post from the npm team](https://docs.npmjs.com/creating-a-package-json-file).

Now that we have all the essential files we can start digging into functionality. Here's a [link to the 🐙 initial commit](https://github.com/tzmanics/netlify-plugin-to-all-events/commit/8c1bb9e430b11cca7705a21ec65886d68550f687) in the project repo where these base files have been created.

## Keep It Simple, Smarty

## All The Things!