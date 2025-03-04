import { expect } from "@wdio/globals";

/**
 * test1: navigate to the main page, it could be a precondition to each test
 * test2: verify the title of the tab
 * test3: check in the "Add New Doctor" form, that we can fill in all the fields and create a new doctor and verify that this doctor appears on the list
 * test4: close the "Add New Doctor" form
 */
describe("Doctors page", () => {
  beforeEach(async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
  });

  it("should check page title", async () => {
    await expect(browser).toHaveTitle(
      "Appointment Planner - Syncfusion Angular Components Showcase App"
    );
    // if (
    //   title !==
    //   "Appointment Planner - Syncfusion Angular Components Showcase App"
    // ) {
    //   throw new Error("page title is not correct");
    // }
  });

  it("should open a modal window for adding a new doctor ", async () => {
    //click on doctor item in the side menu
    await $("[routerlink='/doctors']").click();
    //click on add new doctor btn
    await $(".specialization-types button.e-control").click();
    //check that a modal window is displayed
    // await expect($("#dialog_757320498_0").isDisplayed()).to.be(true)//using mocha
    await expect($("#dialog_757320498_0")).toBeDisplayed();
  });

  it("should add a new doctor", async () => {
    //click on doctor item in the side menu
    await $("[routerlink='/doctors']").click();
    //click on add new doctor btn
    await $(".specialization-types button.e-control").click();
    //wait for the modal window to be displayed
    await $("#dialog_757320498_0").waitForDisplayed();
    //fill in the form fields
    await $("[name='Name']").setValue("John Doe");
    await $("#DoctorMobile").setValue("0123456789");
    await $("[name='Email']").setValue("doctoremail@sample.com");
    await $('[name="Education"]').setValue("Cardiologist");
    await $('[name="Designation"]').setValue("Cardiologist");
    //clci on the save button
    await $(".button-container button.e-primary").click();
    await expect($("#dialog_757320498_0")).not.toBeDisplayed();
    //to obtain the complete list of doctors and check that the new doctor is in the list
    const doctorList = await $$(".specialist-display .name");
    await expect(doctorList[doctorList.length - 1]).toHaveText("Dr. John Doe");
  });
  it("should close a modal window for adding a new doctor", async () => {
    await $("[routerlink='/doctors']").click();
    //click on add new doctor btn
    await $(".specialization-types button.e-control").click();
    //wait for the modal window to be displayed
    await $("#dialog_757320498_0").waitForDisplayed();
    //click on the close button
    await $(".button-container :first-child").click();
    await expect($("#dialog_757320498_0")).not.toBeDisplayed();
  });
});
