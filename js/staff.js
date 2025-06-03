class Staff {
    constructor(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam) {
        this.tknv = _tknv;
        this.nameNV =  _name;
        this.email = _email;
        this.password = _password;
        this.datepicker = _datepicker;
        this.luongCB = _luongCB;
        this.chucvu = _chucvu;
        this.gioLam = _gioLam;
        this.salStaff = 0;
    }
   calcSalStaff() {
    if (this.chucvu === "Sep") {
      this.salStaff = this.luongCB * 3;
    } else if (this.chucvu === "TruongPhong") {
      this.salStaff = this.luongCB * 2;
    } else if (this.chucvu === "NhanVien") {
      this.salStaff = this.luongCB * 1;
    } else {
      this.salStaff = 0;
    }
    return this.salStaff;
  }
  typeStaff() {
    if (this.gioLam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}


export default Staff;