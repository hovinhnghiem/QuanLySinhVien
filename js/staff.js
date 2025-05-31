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
        this.salStaff = this.luongCB * this.chucvu;
    }
}

export default Staff;