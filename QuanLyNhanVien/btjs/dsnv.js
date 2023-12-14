function DSNV() {
    //arr chứa nhiều đối tượng sv
    this.arr = [];
  
    this.themNV = function (nv) {
      this.arr.push(nv);
    };
  
    this.timViTriNV = function (id) {
      var index = -1;
      for (var i = 0; i < this.arr.length; i++) {
        const nv = this.arr[i];
        if (nv.tknv === id) {
          index = i;
          break;
        }
      }
      return index;
    };
  
    this.xoaNV = function (id) {
      const index = this.timViTriNV(id);
      if (index !== -1) {
        this.arr.splice(index, 1);
      }
    };
  
    this.layThongTinNV = function (id) {
      const index = this.timViTriNV(id);
  
      if (index !== -1) {
        return this.arr[index];
      }
  
      return null;
    };
  
    this.capNhatNV = function (nv) {
      const index = this.timViTriNV(nv.tknv);
      if (index !== -1) {
        this.arr[index] = nv;
      }
    };
  
  
  }
  