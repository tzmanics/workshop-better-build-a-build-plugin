## ᕙ( * •̀ ᗜ •́ * )ᕗ The Build Events

We can access six different build events:

* `onPreBuild`: runs before build commands are executed
* `onBuild`: runs while build commands are being executed
* `onPostBuild`: runs after build commands are executed
* `onSuccess`: runs once build is completed successfully
* `onError`: runs if there is a build error
* `onEnd`: runs on build error or success when the build process ends

With each of these events, you get access to stages of the build process so you can fine tune and add processes to your build. We could even log out information for *every* build event if we're feeling extra 👩🏻‍🔬.

```js
// index.js

module.exports = {
  onPreBuild: () => {
    console.log('onPreBuild: I run_before_ build commands are executed 🌤');
  },
  onBuild: () => {
    console.log('onBuild: I run while build commands are being executed ⚙️');
  },
  onPostBuild: () => {
    console.log('onPostBuild: I run _after_ build commands are executed ✅');
  },
  onSuccess: () => {
    console.log('onSuccess: I run on build success 🎉');
  },
  onError: () => {
    console.log('onError: I run on build error 🚒');
  },
  onEnd: () => {
    console.log(
      'onEnd: I run on build error or success when the build process ends 🎬'
    );
  },
};
```

Like we talked about before, this is just a JavaScript file. So, inside of these events we can do all the things we're used to: check parameters in `if` statements, run functions, call on third-party libraries, etc. The possibilities are endless.

## Experimentation is the Key to Innovation

Let's go ahead and experiment by adding some logging and JavaScript to see what all we can do. Let's jump into the editor to do this together ＼＿ﾍ(◕‿◕✰).