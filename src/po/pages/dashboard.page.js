import SideMenuComponent from "../components/common/sidemenu.component";
import Page from "./page";

class DashboardPage extends Page {
  get sideMenu() {
    return new SideMenuComponent();
  }

  open() {
    return super.open("dashboard");
  }
}
export default new DashboardPage();
