function NhanVien(
    _tknv,
    _name,
    _email,
    _password,
    _datepicker,
    _luongCB,
    _chucvu,
    _gioLam) {
    this.tknv = _tknv;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _gioLam;

    

    // Phương thức tính tổng lương
    let Luong;
    switch (_chucvu) {
        case 'Sếp':
            Luong = this.luongCB * 3;
            break;
        case 'Trưởng phòng':
            Luong = this.luongCB * 2;
            break;
        case 'Nhân viên':
            Luong = this.luongCB;
            break
        default:
            console.error('Chức vụ không hợp lệ');
            Luong = 0;

    };
    this.tinhLuong = Luong;


    // Phương thức tính xếp loại
    let xeploai;
   
        if (this.gioLam >= 192) {
            xeploai =  'Xuất sắc';
        } else if (this.gioLam >= 176) {
            xeploai =  'Giỏi';
        } else if (this.gioLam >= 160) {
            xeploai = 'Khá';
        } else {
           xeploai =  'Trung bình';
        }
        this.xepLoai = xeploai;

}
