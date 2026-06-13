# puppeteer-stealth-launcher

A lightweight utility to launch a stealthy [Puppeteer](https://pptr.dev) browser instance, pre-configured with evasions and adblocking capabilities.

It uses the following plugins out of the box:
- [@zorilla/puppeteer-extra-plugin-adblocker](https://github.com/zorillajs/zorilla/blob/main/packages/puppeteer-extra-plugin-adblocker)
- [@zorilla/puppeteer-extra-plugin-stealth](https://github.com/zorillajs/zorilla/blob/main/packages/puppeteer-extra-plugin-stealth)

## ⚙️ Installation

You can install the package using your favorite package manager:

```sh
# using npm
npm install puppeteer-stealth-launcher

# using yarn
yarn add puppeteer-stealth-launcher

# using pnpm
pnpm add puppeteer-stealth-launcher
```

> **Note:** Depending on your setup, you might also need to install the browser runtime:
> `npx puppeteer browsers install chrome`

## 📖 Usage

```ts
import launchBrowser from 'puppeteer-stealth-launcher'

// Launch the browser instance (Promise-based)
const browser = await launchBrowser({
  headless: false, // Default is false
  args: ['--start-maximized'] // Additional launch arguments
})

const page = await browser.newPage()
await page.goto('https://bot.sannysoft.com')

// Test stealth mode
await page.screenshot({ path: 'stealth-test.png', fullPage: true })

await browser.close()
```

## 🛠️ Options

The `launchBrowser(options)` function accepts an optional configuration object as the Puppeteer [LaunchOptions](https://pptr.dev/browsers-api/browsers.launchoptions).

Default values:

- `headless` *(boolean)*: Whether to run the browser in headless mode. Default to `false`.
- `args` *(string[])*: Additional command line arguments to pass to the browser instance. Default to essential arguments:
  - `--no-sandbox`
  - `--disable-setuid-sandbox`
  - `--disable-search-engine-choice-screen`
  - `--disable-dev-shm-usage`
  - `--window-position=-2400,-2400`

## 📄 License

This project is licensed under the [MIT License](LICENSE).
