import BaseComponent from "../common/base.component";
export default class ListHeaderComponent extends BaseComponent {
  constructor(){
    super(".specialization-types");
  }

  // get rootEl() {
  //   return $(".specialization-types");
  // }

  get addNewDoctorBtn() {
    return this.rootEl.$("button.e-control");
  }

}
