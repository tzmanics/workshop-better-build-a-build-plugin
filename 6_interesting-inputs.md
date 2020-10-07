# ( ｡･-･｡｀) Interesting Inputs

## User inputs

Each plugin has an `inputs` property. With `inputs`, users can assign variables via their project's [`netlify.toml`](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex) configuration file. Here's an example. 

```toml
[[plugins]]
package = "netlify-plugin-to-all-events"
  [plugins.inputs]
  triggerAll = true
  keyword = "toshi"
  databaseUrl = "https://database.com/v1/projects/1234/db/thingy"
```

We want to provide a few details for each input being passed to the plugin in the plugin's `manifest.yml` file. Every input must have a name and description. It is also best practice to have a default value and mark if it is required. To recap, each input should have:

* `name`: {string} an identifying name that will be used for referring to the input
* `description`: {string} a short explanation of the input
* `default`: {any} a value that will be set if none is provided
* `required`: {boolean} to signify if a user *must* provide this input value

For our plugin we'll be asking for three inputs: `triggerAll` is a boolean asking if we want to trigger all events, `keyword` is just a string we'll log, and `databaseUrl` is also a string that we'll log. In an IRL application we could use `keyword` to search files or a database for a certain word or item, and use `databaseUrl` to aid in loading database information. We will add the information needed of each input to the plugin's `manifest.yml`:

```yaml
# manifest.yml

name: netlify-plugin-to-all-events
inputs:
  - name: keyword
    description: Describe what keyword to look for
    default: toshi
  - name: databaseUrl
    description: The URL of the database, duh
    required: true
  - name: triggerAll
    description: Boolean to decided whether to run all the event code
    default: true
    required: true
```

### Accessing User Input

With everything properly declared we can now use `inputs` inside of our Build Plugin. We can pass the `inputs` object as a parameter to whichever event we plan to use it in. We have the option of either passing in the whole `inputs` object or a specific input. Here's what it looks like for each of those scenarios:

```js
// index.js

...
onPreBuild: ({ inputs: { keyword } }) => {
  console.log('onPreBuild: I run_before_ build commands are executed 🌤');
  console.log('I will only use the keyword input: ', keyword);
},
onBuild: ({ inputs }) => {
  console.log(
    'onBuild: I run while build commands are being executed ⚙️'
  );
  console.log(`I also know your keyword is: ${inputs.keyword}.`);
  console.log(`Oh, and your database URL is: ${inputs.databaseUrl}.`);
},
...
```

## Dynamic Events

Do you remember how Build Plugins can take input from the user via `input`? Well, I really hope so because we *just* talked about it. One way in which inputs can be handy is to check when or if the logic in our build plugin should run at all. Let's examine what that looks like:

```js
module.exports = function runPlugin(inputs) {
  if (!inputs.triggerAll) {
    return {
      onPreBuild: () => {
        console.log(`triggerAll set to ${inputs.triggerAll}, no fun 🤷🏻‍♀️!`);
      },
    };
  } else {
    return {
      onPreBuild: ({ inputs: { keyword } }) => {
        console.log('onPreBuild: I run_before_ build commands are executed 🌤')
...
```

The code above checks to see if the user set the input `triggerAll` to false with `!inputs.triggerAll` and only runs code for `onInit` if so. With this functionality we can conditionally choose what to do at different stages of the build. This doesn't have to be a boolean, we could ask the user for a variable that delineates the framework their project is using and run different `onBuild` code for each type. With this process you can dynamically adapt your plugin specifically to each project's needs.

## Netlify UI Caveat (◍•﹏•)

Currently, users cannot set inputs when [installing plugins from the Netlify UI](https://docs.netlify.com/configure-builds/build-plugins/#ui-installation). If we want our plugin to be listed in the plugins directory, it's recommend we set  [zero-config defaults](https://github.com/netlify/plugins/blob/master/docs/guidelines.md) where possible, falling back to accepting values from [build environment variables](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables) if needed.
 
Let's walk through each of these documents.

## Plugin Wrap Up

This is one of the Build Plugin features that makes me really excited to see what devs, like you, will create! Before you get started let's see how we can share our plugins with the WORLD! 