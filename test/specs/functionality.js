const expectChai = require("chai").expect;

describe("Functional Testing on Application", () => {
  xit("Scrolling and Mouse Hover", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    await browser.pause(3000);
    await $("#mousehover").moveTo();
    await browser.pause();
    await $("=Top").click();
    await browser.pause(3000);
    await browser.url(
      "https://only-testing-blog.blogspot.com/2014/09/selectable.html"
    );
    await $("button").doubleClick();
    console.log(await browser.isAlertOpen());
    expectChai(await browser.isAlertOpen()).to.be.true;
    expectChai(await browser.getAlertText()).to.equal(
      "You double clicked me.. Thank You.."
    );
    await browser.acceptAlert();
    await browser.pause(3000);
  });

  it("Web Table  validation", async () => {
    await browser.url(
      "https://rahulshettyacademy.com/seleniumPractise/#/offers"
    );
    await $("tr th:nth-child(1)").click();
    const veggiesLocators = await $$("tr td:nth-child(1)");
    const veggiesNames = await veggiesLocators.map(
      async (veggie) => await veggie.getText()
    );
    console.log(veggiesNames);
    sortedVeggies = veggiesNames.sort();
    console.log(sortedVeggies);
    expectChai(veggiesNames).to.equal(sortedVeggies);
  });
  it("Web table filter validation", () => {
    browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    $("input[type = 'search']").setValue("tomato");
    const veggieLocators = $$("tr td:nth-child(1)");
    expect(veggieLocators).toBeElementsArrayOfSize({ eq: 1 });
    console.log(veggieLocators[0].getText());
    expect(veggieLocators[0].toHaveTextContaining("Tomato"));
  });
});
