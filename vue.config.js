const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: {
        hostname: 'a6ac-62-69-220-224.eu.ngrok.io',
        port: 0,
        protocol: 'wss'
      }
    }
  }
})
