import { browser } from "@wdio/globals";
import Header from "../components/common/header.component";
import SideMenuComponent from "../components/common/sidemenu.component";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  constructor() {
    this.header = new Header();
    this.sideMenu = new SideMenuComponent();
  }
  // get sideMenu() {
  //   return new SideMenuComponent();
  // }

  open(path) {
    return browser.url(
      `https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/${path}`
    );
  }
}
