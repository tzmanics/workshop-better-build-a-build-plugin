# (∩｀-´)⊃━☆ﾟ.*･｡ﾟ Time to Test

We'll use the [`netlify build` and `netlify build --dry` commands](https://docs.netlify.com/cli/get-started/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex#run-builds-locally) to run through the build process locally. The `--dry` flag will give us a summary without taking the time to run a full build. I'll show an example of this once we have code to run it on.

Speaking of code to run it on, we'll need a test project to sic our Build Plugin on. Since we'll mostly be logging information to see how the plugins work, a simple, single `index.html` site with a [`netlify.toml` Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex) will do. Wouldn't you know it, we have one right in the example build plugin folder: [🐙 here is the link to the example site's folder](https://github.com/tzmanics/netlify-plugin-to-all-events/tree/master/test-project).

![screenshot of this test project](/img/blog/test-project.jpg)

*This project is a thing of beauty, I know.*

> 🌥 Although we'll be running the build locally to see outputs, we can also use the `netlify init` & `netlify deploy` commands to see what the output looks like in the Netlify deploy dashboard. [Here's more info on deploying with the CLI](https://www.netlify.com/blog/2019/05/28/deploy-in-seconds-with-netlify-cli/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex#faster-deploys-with-the-netlify-cli). We'll also want to use the published version of the plugin (`netlify-plugin-to-all-events`) if we want to see it deployed, more info on how to do that [here](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex#adding-a-build-plugin).

The CLI and the test project are the only two items we need to start working through building our plugin. Let's jump into creating the plugin by starting with the main files needed for every Build Plugin.