const { reloadApp } = require('detox-expo-helpers')
const { takeScreenshot } = require ('./helpers')

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp()
  })

  afterEach(async () => {
    takeScreenshot()
  })

  it('should only show button', async () => {
    await expect(element(by.id('button-tap'))).toBeVisible()
  })

  it('should show tap 1 and tap 3', async () => {
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeVisible()
  })

  it('should show cat fact on tap 5', async () => {
    await element(by.id('button-tap')).tap()
    await element(by.id('button-tap')).tap()
    await element(by.id('button-tap')).tap()
    await element(by.id('button-tap')).tap()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-fact'))).toBeVisible()
  })
})
