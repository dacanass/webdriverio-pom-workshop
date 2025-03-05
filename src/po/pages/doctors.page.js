import Page from "./page";
import SideMenuComponent from "../components/common/sidemenu.component";
import ListHeaderComponent from "../components/doctors/list-header.component";
import AddDoctorComponent from "../components/doctors/add-doctor.component";

class DoctorsPage extends Page {
  
  get listHeader() {
    return new ListHeaderComponent();
  }

  get addDoctorModal() {
    return new AddDoctorComponent();
  }

  open() {
    return super.open("doctors");
  }
}
export default new DoctorsPage();
