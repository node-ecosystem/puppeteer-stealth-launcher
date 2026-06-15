import puppeteer from '@zorilla/puppeteer-extra'
import AdblockerPlugin from '@zorilla/puppeteer-extra-plugin-adblocker'
import StealthPlugin from '@zorilla/puppeteer-extra-plugin-stealth'
import { type Browser, type LaunchOptions, DEFAULT_INTERCEPT_RESOLUTION_PRIORITY } from 'puppeteer'

// TODO change after https://github.com/zorillajs/zorilla/issues/90 was closed
puppeteer.use(StealthPlugin() as any)

puppeteer.use(
  AdblockerPlugin({
    blockTrackersAndAnnoyances: true,
    // Optionally enable Cooperative Mode for several request interceptors
    interceptResolutionPriority: DEFAULT_INTERCEPT_RESOLUTION_PRIORITY
    // TODO change after https://github.com/zorillajs/zorilla/issues/90 was closed
  }) as any
)

const launchBrowser = async (options: LaunchOptions & { hide?: boolean } = {}): Promise<Browser> => {
  const { headless = false, hide = true } = options
  const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-search-engine-choice-screen',
    '--disable-dev-shm-usage'
  ]
  if (hide) {
    // Move the browser window off-screen to avoid user interaction
    args.push('--window-position=-2400,-2400')
  }
  if (options.args) {
    args.push(...options.args)
    delete options.args
  }

  return puppeteer.launch({
    headless,
    args,
    ...options
  })
}

export default launchBrowser
