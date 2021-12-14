const { By } = require('selenium-webdriver')

const notifications = async(driver) => {

    await driver.findElement(By.xpath('//input')).sendKeys('Harry Potter')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li/span')).getText('Movie has be added!')
    
}

module.exports = {
    notifications,
}