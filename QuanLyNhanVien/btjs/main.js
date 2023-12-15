const dsnv = new DSNV();
getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNV() {
    //Dom tới các thẻ để lấy thông tin
    const _tknv = getEle("tknv").value;
    const _name = getEle("name").value;
    const _email = getEle("email").value;
    const _password = getEle("password").value;
    const _datepicker = getEle("datepicker").value;
    const _luongCB = getEle("luongCB").value;
    const _chucvu = getEle("chucvu").value;
    const _gioLam = getEle("gioLam").value;

    const nv = new NhanVien(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucvu,  _gioLam);
    return nv;
}

function renderUI(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        const nv = data[i];
        content += `
        <tr>
            <td>${nv.tknv}</td>
            <td>${nv.name}</td>
            <td>${nv.email}</td>
            <td>${nv.datepicker}</td>
            <td>${nv.chucvu}</td>
            <td>${nv.tinhLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
              <button class="btn btn-danger" onclick="handleDelete('${nv.tknv}')">Delete</button>
            </td>
            

        <tr>
        `;
        
    }
    getEle("tableDanhSach").innerHTML = content;
}

function handleThemNV() {
    //lấy thông tin nv
    const nv = layThongTinNV(true);
  
    //thêm NV
    dsnv.themNV(nv);
  
    //show
    renderUI(dsnv.arr);
  
    //luu data xuong localStorage
    setLocalStorage();

    return false;
}
function handleDelete(id) {
    //xoa nv
    dsnv.xoaNV(id);
    //render lai tbody
    renderUI(dsnv.arr);
    //luu data xuong localStorage
    setLocalStorage();
  }

function setLocalStorage() {
    //convert data JSON => string
    const dataString = JSON.stringify(dsnv.arr);
    //lưu xuống localStorage
    localStorage.setItem("DSNV", dataString);
  }

function getLocalStorage() {
    const dataString = localStorage.getItem("DSNV");
  
    if (dataString) {
      // convert string => json
      const dataJson = JSON.parse(dataString);
      //phục hồi data cho dsnv.arr
      dsnv.arr = dataJson;
      //render UI
      renderUI(dsnv.arr);
    }
  }