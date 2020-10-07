# ˭̡̞(◞⁎˃ᆺ˂)◞₎₎=͟͟͞͞˳˚॰°ₒ৹๐ Start Your Plugin!

It's time to jump in and we're going straight to Build Plugin creation. Let's run thru the first things we need.

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

We can setup the `package.json` file by running `npm init` and answering the questions to the prompts. It's best practice to have `netlify` and `netlify-plugin` in the keywords of this file. Also, we recommend having the `repository` and `bugs` fields filled out to guide users to the Build Plugin's repository.

> 🔬 If you want some more information about the `package.json` files in general, [here's a great post from the npm team](https://docs.npmjs.com/creating-a-package-json-file).

Okay, information stored in our brilliant brains? Let's get coding.

## Keep It Simple, Smarty

To keep it really simple we could create those three files with the basic information we need.

I made a template repo so we can just use that. Let's go take a look at it: [https://github.com/tzmanics/netlify-plugin-simple-starter](https://github.com/tzmanics/netlify-plugin-simple-starter)

Since it's a template repo, feel free to hit the 'Use this template' button to clone it into a repo of your own. This will be our starting point for building out a plugin.


## All The Things!

So, you want allll the things immediately? Well, you're in luck. We can also use the [Build Plugin Template](https://github.com/netlify/build-plugin-template) created by the Netlify team ([Mickael](https://github.com/ehmicky) in particular <3). This template has lots of things.

Let's go take a look: [https://github.com/netlify/build-plugin-template](https://github.com/netlify/build-plugin-template)

Definitely feel free to use this template for this workshop! It holds a lot of information. With that in mind, it may help your brain out to copy the index file and start with a brand new one.

`mv index.js ./reference-index.js`

`touch index.js`

Alrighty then, let's see what this looks like!