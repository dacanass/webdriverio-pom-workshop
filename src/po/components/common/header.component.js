import BaseComponent from "./base.component";

export default class HeaderComponent extends BaseComponent {
  constructor() {
    super(".planner-header");
  }

  get logoutBtn() {
    return this.rootEl.$(".logout-icon-cpmtainer");
  }
}
