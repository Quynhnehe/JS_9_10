function NhanVien (
    _tknv, 
    _name, 
    _email,
    _password,
    _datepicker, 
    _luongCB, 
    _chucvu,  
    _gioLam) {
    this.tknv= _tknv;
    this.name= _name;
    this.email= _email;
    this.password= _password;
    this.datepicker= _datepicker;
    this.luongCB= _luongCB;
    this.chucVu= _chucvu;
    this.gioLam= _gioLam;

    // Phương thức tính tổng lương
    this.tinhTongLuong = function () {
        switch (this.chucVu) {
            case 'giamDoc':
                return this.luongCB * 3;
            case 'truongPhong':
                return this.luongCB * 2;
            case 'nhanVien':
                return this.luongCB;
            default:
                console.error('Chức vụ không hợp lệ');
                return 0;
        }
    };


    // Phương thức tính xếp loại
    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            return 'Xuất sắc';
        } else if (this.gioLam >= 176) {
            return 'Giỏi';
        } else if (this.gioLam >= 160) {
            return 'Khá';
        } else {
            return 'Trung bình';
        }
    };
    
}
