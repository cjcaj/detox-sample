const { reloadApp } = require('detox-expo-helpers')
const { takeScreenshot } = require ('./helpers')

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp()
  })

  afterEach(async () => {
    await takeScreenshot()
  })

  it('should only show button', async () => {
    await expect(element(by.id('button-tap'))).toBeVisible()
    await expect(element(by.id('text-taps'))).toBeNotVisible()
    await expect(element(by.id('text-facts'))).toBeNotVisible()
  })

  it('should show tap 1 and tap 3', async () => {
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeVisible()
    await takeScreenshot()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeVisible()
    await takeScreenshot()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeNotVisible()
  })

  it('should show cat fact on tap 5', async () => {
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-facts'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-facts'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-facts'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-facts'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-fact'))).toBeVisible()
  })
})
