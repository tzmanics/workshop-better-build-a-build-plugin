# (* ˘⌣˘)◞[_]♥[_]ヽ(•‿• ) Sharing is Caring

To get us started let's jump into publishing the Build Plugin we created!

## Publishing Plugins

Earlier, we covered creating the `package.json` requirements for our Build Plugin. Just to recap we want to include:

### `package.json` Pro Tips

* `name`: it should start with "netlify-plugin-" (e.g. "project-name" -> "netlify-plugin-project-name"), this should be the same as the "name" field in the plugins [`manifest.yml`](https://github.com/netlify/build#anatomy-of-a-plugin) file.

  > 💫 Extra bonus points if your Build Plugin's repo name matches this name field (for instance: <https://github.com/tzmanics/netlify-plugin-to-all-events>).

* `keywords`: this field should contain "netlify" and "netlify-plugin" keywords
* `repository` and `bugs`: these should be set to the plugins repo and the issues path of the repo respectively. These are displayed to users when an error occurs inside your plugin.

> [🐙 Feel free to checkout the demo projects `package.json` file to see what the complete file looks like](https://github.com/tzmanics/workshop-better-build-a-build-plugin/blob/main/7_files_sharing-is-caring/plugin/package.json).

### The Guidelines

The Netlify team have created some [helpful guidelines](https://github.com/netlify/plugins/blob/master/docs/guidelines.md). Let's take a look at the doc and add what we need to together ♡(*´∀｀*)人(*´∀｀*)♡

[https://github.com/netlify/plugins/blob/master/docs/guidelines.md](https://github.com/netlify/plugins/blob/master/docs/guidelines.md)

### Pushing the Publish

Using [npm](https://www.npmjs.com/) we can add the Build Plugin to the ecosystem to make it easier for the whole world to use it. To do this we run two commands:

* `npm login`: to login to npm in order to publish
* `npm publish`: too add the plugin to the npm registry

> 🧐 Each time we publish new updates we'll need to [update the version](https://docs.npmjs.com/about-semantic-versioning) of that package beforehand using `npm version <patch | minor | major>`.

With that the plugin will be available to be used by the masses.

## Spread the Plugin Love

npm is a huge registry so we'll want to add our plugin somewhere everyone who needs it can find it. May introduce you to the [Build Plugins repo](https://github.com/netlify/plugins) where you can find a list of [current plugins](https://github.com/netlify/plugins#community-plugins). Along with the guidelines we just went over, there is a [Contributing](https://github.com/netlify/plugins/blob/master/docs/CONTRIBUTING.md) section that will list updated steps if they every change. For now, there are just a few simple steps.

1. Clone or Fork the [plugins repo](https://github.com/netlify/plugins#community-plugins).
2. Edit the [`plugins.json`](https://github.com/netlify/plugins/blob/master/plugins.json) file to add your plugin information including:

   * `author`: your name, username, or secret cool alias
   * `description`: a short description of what your plugin does
   * `name`: the plugin name
   * `package`: the name of the library as you would find it in the npm registry
   * `repo`: the plugin's git repository link
   * `version`: the current, published version of your plugin

   ```json
   {
     "author": "tzmanics",
     "description": "🔌An awesome ╭(♡･ㅂ･)و ̑̑ Netlify Build Plugin!",
     "name": "Awesomeness",
     "package": "netlify-plugin-awesomeness",
     "repo": "https://github.com/tzmanics/netlify-plugin-awesomeness",
     "version": "1.3.1"
   },
   ```

3. Once the amazing plugin information is added, we can run `npm run docs` in the base directory to generate the new code with our additions.

4. The last step is to push your code up and make a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). We'll review your plugin, ping you with any questions, and get your plugin added to the master list.

Technically that's the last step, but you can always feel free to shout about your extraordinary plugin from the Twitter rooftops, or inside the [Netlify Community Build Plugins group](https://community.netlify.com/c/Netlify-support/build-plugins?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex). We're always stoked to hear about what you make!

## Look, Ma, More Plugins

If you had a look at the `plugins.json` file we just added to, you may have noticed some of the other fine Build Plugins in the list. We're really lucky to have some great devs in the community building out plugins for us all to use. I wanted to highlight a few here to let you know what's out there. Let's dive in.

| What it is                                                                              | What it does                                                      |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [Subfont 🔗](https://github.com/munter/netlify-plugin-subfont)                          | optimizes your site's font loading strategy for best performance  |
| [a11y 🔗](https://github.com/sw-yx/netlify-plugin-a11y)                                 | checks for accessibility failures                                 |
| [Fetch Feeds 🔗](https://github.com/philhawksworth/netlify-plugin-fetch-feeds)          | fetches and caches remote RSS and JSON feeds                      |
| [Prerender SPA 🔗](https://github.com/shortdiv/netlify-plugin-prerender-spa)            | prerenders your SPA into separate pages                           |
| [Visual Diff (Applitools) 🔗](https://github.com/jlengstorf/netlify-plugin-visual-diff) | checks for any visual changes and gets approval before going live |
| [Cypress 🔗](https://github.com/cypress-io/netlify-plugin-cypress)                      | runs Cypress end-to-end tests after build                         |

## We Did It!!! ✧*｡٩(ˊᗜˋ*)و✧*｡

Pat yourself on the back! We made a build plugin and it was fantastic! Now, take all you know and build out more awesome build plugins!!
