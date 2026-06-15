import launchBrowser from './src/index.ts'

const browser = await launchBrowser()

console.log('🚀 Started Puppeteer')

await browser.close()
