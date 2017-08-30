var WebDriver = require("selenium-webdriver"),
  By = WebDriver.By,
  until = WebDriver.until;
//Chrome
var driver = new WebDriver.Builder()
  .withCapabilities(WebDriver.Capabilities.chrome())
  .build();
//FireFox
// var driver = new WebDriver.Builder()
//   .withCapabilities(WebDriver.Capabilities.firefox())
//   .build();

// driver.get("https://the-internet.herokuapp.com/dynamic_controls");

// let checkbox = driver.findElement({ tagName: "input", id: "checkbox" });

// checkbox.click();
// driver.sleep(500);
// checkbox.click();

// driver.sleep(500);

// driver.findElement({ id: "btn" }).then(function(e) {
//   e.click();
// });

// driver.sleep(5000);

//new get
driver.get("https://www.google.com");

driver.findElement({ id: "lst-ib" }).sendKeys("master of all science");

driver.findElement({ name: "btnK" }).click();

let title = driver.getTitle();
assert.equal(title, "master of all science - Google Search", "Success!!");

driver.findElement(By.linkText("Master of all Science")).click();

driver.findElement({ tagName: "input" }).sendKeys("pickle rick");

driver.sleep(1200);

driver
  .findElement(By.xpath("//img[@src='/img/S03E03/631798/medium.jpg']"))
  .click();

driver.sleep(1200);

driver
  .findElement(
    By.xpath(
      "//*[@id='app']/div/div/div/section/div/div[2]/div/div[4]/div[1]/button"
    )
  )
  .click();

driver
  .findElement(By.xpath("//*[@id='meme-text']"))
  .sendKeys("!! Morty, I'm a Pickle!!!!");

driver
  .findElement(
    By.xpath(
      "//*[@id='app']/div/div/div/section/div/div[2]/div/div[4]/div[1]/button"
    )
  )
  .click();

driver.sleep(4000);

driver.quit();
