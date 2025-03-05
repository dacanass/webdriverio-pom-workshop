// import { $ } from "webdriverio";
import { browser } from "@wdio/globals";
import { expect } from "@wdio/globals";
// import { expect } from "chai"; //using mocha
import DashboardPage from "../po/pages/dashboard.page";
import DoctorsPage from "../po/pages/doctors.page";

/**
 * test1: navigate to the main page, it could be a precondition to each test
 * test2: verify the title of the tab
 * test3: check in the "Add New Doctor" form, that we can fill in all the fields and create a new doctor and verify that this doctor appears on the list
 * test4: close the "Add New Doctor" form
 */
// const dashboardPage = new DashboardPage();
describe("Doctors page", () => {
  beforeEach(async () => {
    await DashboardPage.open();
    // await browser.url(
    //   "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    // );
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
    await DashboardPage.sideMenu.item("doctors").click();
    //click on add new doctor btn
    await DoctorsPage.listHeader.addNewDoctorBtn.click();
    //check that a modal window is displayed (the add form)
    // await expect($("#dialog_757320498_0").isDisplayed()).to.be(true)//using mocha
    await expect(DoctorsPage.addDoctorModal.rootEl).toBeDisplayed();
  });

  it("should add a new doctor", async () => {
    //click on doctor item in the side menu
    await DashboardPage.sideMenu.item("doctors").click();
    //click on add new doctor btn
    await DoctorsPage.listHeader.addNewDoctorBtn.click();
    //wait for the modal window to be displayed
    await DoctorsPage.addDoctorModal.rootEl.waitForDisplayed();
    //fill in the form fields
    await $("[name='Name']").setValue("John Doe");
    await $("#DoctorMobile").setValue("0123456789");
    await $("[name='Email']").setValue("doctoremail@sample.com");
    await $('[name="Education"]').setValue("Cardiologist");
    await $('[name="Designation"]').setValue("Cardiologist");
    //click on the save button
    await $(".button-container button.e-primary").click();
    await expect(DoctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
    //to obtain the complete list of doctors and check that the new doctor is in the list
    const doctorList = await $$(".specialist-display .name");
    await expect(doctorList[doctorList.length - 1]).toHaveText("Dr. John Doe");
  });
  it("should close a modal window for adding a new doctor", async () => {
    await DashboardPage.sideMenu.item("doctors").click();
    //click on add new doctor btn
    await DoctorsPage.listHeader.addNewDoctorBtn.click();
    //wait for the modal window to be displayed
    await DoctorsPage.addDoctorModal.rootEl.waitForDisplayed();
    //click on the close button
    await $(".button-container :first-child").click();
    await expect(DoctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
