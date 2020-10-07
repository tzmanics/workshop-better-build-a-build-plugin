module.exports = function runPlugin (inputs) {
  if (!inputs.triggerAll) {
    return {
      onPreBuild: () => {
        console.log(`triggerAll set to ${inputs.triggerAll}, no fun 🤷🏻‍♀️!`)
      }
    }
  } else {
    return {
      onPreBuild: ({ inputs: { keyword } }) => {
        console.log('onPreBuild: I run_before_ build commands are executed 🌤')
        console.log('I will only use the keyword input: ', keyword)
      },
      onBuild: ({ inputs }) => {
        console.log(
          'onBuild: I run while build commands are being executed ⚙️'
        )
        console.log(`I also know your keyword is: ${inputs.keyword}.`)
        console.log(`Oh, and your database URL is: ${inputs.databaseUrl}.`)
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
  }
}
