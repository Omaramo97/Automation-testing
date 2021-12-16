const { By } = require('selenium-webdriver')

const deleteMovie = async(driver) => {

    await driver.findElement(By.xpath('//input')).sendKeys('Harry Potter')

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//button[contains(text(),"x")]'))
    
    
}

module.exports = {
    deleteMovie,
}