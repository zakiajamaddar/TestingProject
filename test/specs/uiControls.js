

describe("UI Controls Test Suite", async () => {
  

  xit("Dynamic Dropdown Controls", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#autocomplete").setValue("ind");
    await browser.pause(5000);
    let items = await $$("[class ='ui-menu-item'] div");
    for (var i = 0; i < (await items.length); i++) {
      if ((await items[i].getText()) === "India") {
        await items[i].click();
      }
    }
  });

  xit("Checkbox identification", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const element = await $$("input[type='checkbox']");
    await element[1].click();
    await browser.pause(3000);
    console.log(await element[1].isSelected());
    console.log(await element[2].isSelected());
    await browser.saveScreenshot("screenshot.png");
  });
});
