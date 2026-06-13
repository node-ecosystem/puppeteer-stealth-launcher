import launchBrowser from './src/index.ts'

const browser = await launchBrowser().then((browser) => {
  console.log('🚀 Started Puppeteer')
  return browser
})
await browser.close()
