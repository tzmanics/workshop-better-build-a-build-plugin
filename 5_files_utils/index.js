module.exports = {
  onPreBuild: () => {
    console.log('Hellooo PreBuild ヽ(^。^)丿!')
  },
  onPostBuild: ({ constants }) => {
    console.log('onPostBuild: I run _after_ build commands are executed ✅')
    console.log('Here are some other things I know thanks to constants:')
    console.log(constants)
  },
  onSuccess: ({ utils }) => {
    console.log('onSuccess: I run on build success 🎉')
    try {
      throw new Error('This is the error 🚨')
    } catch (error) {
      utils.build.cancelBuild(`This will cancel the build ${error}.`)
    }
  }
}
