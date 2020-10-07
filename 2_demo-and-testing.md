# (∩｀-´)⊃━☆ﾟ.*･｡ﾟ Time to Test

We'll use the [`netlify build` and `netlify build --dry` commands](https://docs.netlify.com/cli/get-started/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex#run-builds-locally) to run through the build process locally. The `--dry` flag will give us a summary without taking the time to run a full build. I'll show an example of this once we have code to run it on.

Speaking of code to run it on, we'll need a test project to sic our Build Plugin on. Since we'll mostly be logging information to see how the plugins work, a simple, single `index.html` site with a [`netlify.toml` Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex) will do. Wouldn't you know it, we have a handy, dandy template [right here for us to use](https://github.com/tzmanics/plugin-demo-project)

Let's take a look at it and get it up and running: [https://github.com/tzmanics/plugin-demo-project](https://github.com/tzmanics/plugin-demo-project)

## Get Your Own Demo

We can make this demo our won by smashing the like button, ummm I mean the 'Use this template' button (as we may have done with the simple starer plugin template). Then cloning the new repo locally: 

```git clone https://github.com/<your username>/plugin-demo-project```


Once the files are local, feel free to really make it your own by adding your own text, titles, [emoticons](http://japaneseemoticons.me/), etc. ヾ(ﾟ∀ﾟ○)ﾂ. 

## It's Building Time

To test our Build Plugin we'll need to
- add the build plugin to to the demo's `netlify.toml` files
- initiate the project using the netlify-cli
- run the build

### Go Configure

To tell the build system we have a plugin we'll need to add a plugins section to the configuration file, `netlify.toml`. We will be referencing the plugin with a  `package` key and passing the path to the plugin files. Since we're doing it locally we'll want to make sure we're giving the path relative to where the demo's configuration file is and where our build plugin lives. 

This is what it would look like in this repo:

```toml
[[plugins]]
package = "../plugins/netlify-plugin-simple-starter"
```

> 🐙 this would be a good time to commit code

### Initiate Sequence

Next, we're going to go ahead and hook up the demo to our Netlify account. Just a heads up, online, this project with fail its build every time because it references a local plugin. We'll solve that one we have the Build Plugin published in lesson 7.

For now, we'll just need to run `netlify init` and tell it to create a new project. Then we'll be ready to build it out!

### It's alive!!

We're ready to see this plugin in action, such excite โ๏∀๏ใ! From the demo project directory we'll run the build commands we discussed in the beginning of this section.

`netlify build --dry`

Let's do this together to see the output!


> 🌥 Once we have the plugin in the npm directory (lesson 7), we can use the `netlify init` & `netlify deploy` commands to see what the output looks like in the Netlify deploy dashboard. [Here's more info on deploying with the CLI](https://www.netlify.com/blog/2019/05/28/deploy-in-seconds-with-netlify-cli/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex#faster-deploys-with-the-netlify-cli).

The CLI and the demo project are the only other items we need to start working through building our plugin. Let's start giving our plugin more functionality by looking into the actual events we can jump into.