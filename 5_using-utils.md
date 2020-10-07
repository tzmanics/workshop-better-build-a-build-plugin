# (・∀・)ノ~~~~~◎ Using Utils

There are a few utils that we can take advantage of when creating a Build Plugin:

* [`build`](https://github.com/netlify/build/tree/master/packages/build): this is a pretty hefty library, today we'll be using this utility for handling errors
* [`cache-utils`](https://github.com/netlify/build/tree/master/packages/cache-utils): is the utility for accessing the Netlify cache and caching files (the [Gatsby cache](https://github.com/jlengstorf/netlify-plugin-gatsby-cache) and [Fetch Feeds](https://github.com/philhawksworth/netlify-plugin-fetch-feeds/blob/master/index.js) plugins showcase this utility well)
* [`config`](https://github.com/netlify/build/tree/master/packages/config): this library lets us read netlify configuration files
* [`functions-utils`](https://github.com/netlify/build/tree/master/packages/functions-utils): this utility allows plugins to dynamically inject [Netlify Function](https://www.netlify.com/products/functions/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex)
* [`git`](https://www.netlify.com/products/functions/?utm_source=blog&utm_medium=what-plugin-2-tzm&utm_campaign=devex): using this utility you can link actions or get information about modified, deleted, or created files since a git commit
* [`run`](https://github.com/netlify/build/tree/master/packages/run-utils): this utility allows you to run commands inside Netlify Build but currently there is only the `run` command

All of these are documented in the [Netlify build repo](https://github.com/netlify/build/blob/master/packages/) if you'd like to delve a little deeper into the code. Did I already say the possibilities are endless? Well, these utilities make them even more endlessy (not a word but tell me it didn't make sense).

As I pointed out earlier we'll be looking at handling errors using a few functions from `build/errors`. Thankfully, we have three different options for handling the build if our plugin has an error.

* `utils.build.failBuild('message')`: will fail the build completely
* `utils.build.failPlugin('message')`: will not fail the build but will fail the plugin
* `utils.build.cancelBuild('message')`: the build will stop and show up as canceled on the project dashboard

In our Build Plugin we can add an error handler like so:

```js
// index.js
...
  onSuccess: ({ utils }) => {
    console.log('onSuccess: I run on build success 🎉');
    try {
      throw new Error('This is the error 🚨');
    } catch (error) {
      utils.build.cancelBuild(`This will cancel the build ${error}.`);
    }
  }
...
```

![a canceled build error](/img/blog/cancelbuild.jpg)

There's a lot going on in these logs. First, we see that `onSuccess` was triggered because technically the build happened before we triggered an error so the build was successful. Because we triggered an error we finally got to see the, hopefully often elusive, `onError` event get triggered. The very last line we see the main event, the message that the build has been canceled along with the error we passed in. If we run this on a deployed application the build will also show up as canceled in thr deploy dashboard.

![a screenshot of the canceled build appearing in netlify app dashboard](/img/blog/canceleddashboard.jpg)

> 🐙 In [this repo commit](https://github.com/tzmanics/netlify-plugin-to-all-events/commit/0a4ce9319133fe8b833f2226fc256b095bc92194) we add the different types of error handling to the Build Plugin.
