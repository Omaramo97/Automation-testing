const {Builder,Capabilities} = require('selenium-webdriver')
const {deleteMovie} = require('../functions/deleteMovie')
const {crossOffMovie} = require('../functions/crossOff')
const {notifications} = require('../functions/notify')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () =>{
    await driver.quit()
})

test('cross off movie', async () => {
    await crossOffMovie(driver)
})

test('delete movie', async () => {
    await deleteMovie(driver)
})

test('notifications', async () => {
    await notifications(driver)
})