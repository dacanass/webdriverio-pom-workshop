import BaseComponent from "../common/base.component";
export default class AddDoctorComponent extends BaseComponent {
  constructor() {
    super("#dialog_757320498_0");
  }
/**
 * 
 * @param name {"name"|"phone"|"email"|"education"|"designation"} 
 * @returns {WebdriverIO.Element} 
 */

  input(name) {
    const selectors = {
      name: "[name='Name']",
      phone: "#DoctorMobile",
      email: "[name='Email']",
      education: "[name='Education']",
      designation: '[name="Designation"]',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }

  get saveBtn() {
    return $(".button-container button.e-primary");
  }
  get closeBtn() {
    return $(".button-container :first-child");
  }

  // get rootEl() {
  //   return $("#dialog_757320498_0");
  // }
}
