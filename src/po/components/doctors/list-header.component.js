export default class ListHeaderComponent {
  get rootEl() {
    return $(".specialization-types");
  }

  get addNewDoctorBtn() {
    return this.rootEl.$("button.e-control");
  }

}
