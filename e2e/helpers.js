const { execSync } = require('child_process')
const { existsSync, mkdirSync } = require('fs')

const SCREENSHOT_DIR = '/tmp/screenshots'

let screenshotIndex = 0

const takeScreenshot = async () => {
  if (!existsSync(SCREENSHOT_DIR)) mkdirSync(SCREENSHOT_DIR)
  const screenshotFilename = `${SCREENSHOT_DIR}/screenshot-${screenshotIndex++}.png`
  await execSync(`xcrun simctl io booted screenshot ${screenshotFilename}`)
}

module.exports = { takeScreenshot }
