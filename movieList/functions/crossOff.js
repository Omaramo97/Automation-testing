const { By } = require('selenium-webdriver')

const crossOffMovie = async(driver) => {

    await driver.findElement(By.xpath('//input')).sendKeys('Harry Potter')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li/span'))
    
    await driver.findElement(By.xpath('//button'))
}

module.exports = {
    crossOffMovie,
}