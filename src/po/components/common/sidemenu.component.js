import BaseComponent from "./base.component";

export default class SideMenuComponent extends BaseComponent {
  constructor() {
    super("#plannerSiderBar");
  }

  // get rootEl() {
  //   return $("#plannerSiderBar");
  // }

  get name() {
    return this.rootEl.$(".name");
  }
  item(param) {
    const selectors = {
      dashboard: "[routerlink='/dashboard']",
      schedule: "[routerlink='/calendar']",
      doctors: "[routerlink='/doctors']",
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}
