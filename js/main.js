import Staff from "./staff.js";
import StaffList from "./staffList.js";

//Tao doi tuong moi tu StaffList
const staffList = new StaffList();
//Tạo hàm rút gọn của getElemenByID
const getEle = (id) => {
  return document.getElementById(id);
}

const getValueStaff = () => {
  //Lấy giá trị từ người dùng nhập vào
  const tknv = getEle("tknv").value;
  const nameNV = getEle("name").value;
  const email = getEle("email").value;
  const password = getEle("password").value;
  const datepicker = getEle("datepicker").value;
  const luongCB = getEle("luongCB").value;
  const chucvu = getEle("chucvu").value;
  const gioLam = getEle("gioLam").value;

  // tạo flag (cờ)
  let isValid = true;

  // Lấy giá trị và loại bỏ khoảng trắng
  const tknvValue = tknv.trim();
  const nameValue = nameNV.trim();  // nameNV là giá trị từ getEle("nameNV").value

  /**
   * Validation TKNV
   */
  // 1. Không để trống Tài khoản nhân viên
  if (tknvValue === "") {
    getEle("tbTKNV").innerText = "(*) Vui lòng nhập TKNV";
    getEle("tbTKNV").style.display = "block";
    isValid = false;
  }
  // 2. Phải là 4–6 ký số
  else if (!/^\d{4,6}$/.test(tknvValue)) {
    getEle("tbTKNV").innerText = "(*) TKNV phải gồm 4–6 chữ số";
    getEle("tbTKNV").style.display = "block";
    isValid = false;
  }
  // 3. Hợp lệ
  else {
    getEle("tbTKNV").innerText = "";
    getEle("tbTKNV").style.display = "none";
  }

  // Nếu TKNV không hợp lệ -> dừng luôn
  if (!isValid) return;

  /**
   * Validation Tên nhân viên
   */
  // 1. Không để trống tên
  if (nameValue === "") {
    getEle("tbTen").innerText = "(*) Vui lòng nhập tên nhân viên";
    getEle("tbTen").style.display = "block";
    isValid = false;
  }
  // 2. Chỉ chứa chữ cái và khoảng trắng
  else if (!/^[A-Za-zÀ-ỹ\s]+$/.test(nameValue)) {
    getEle("tbTen").innerText = "(*) Tên nhân viên phải là chữ";
    getEle("tbTen").style.display = "block";
    isValid = false;
  }
  // 3. Hợp lệ
  else {
    getEle("tbTen").innerText = "";
    getEle("tbTen").style.display = "none";
  }

  // Nếu tên không hợp lệ -> dừng luôn
  if (!isValid) return;

  // Lấy giá trị và trim khoảng trắng
  const emailValue = getEle("email").value.trim();

  // Validation Email
  // 1. Không để trống email
  if (emailValue === "") {
    getEle("tbEmail").innerText = "(*) Vui lòng nhập email";
    getEle("tbEmail").style.display = "block";
    isValid = false;
  }
  // 2. Phải đúng định dạng email
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    getEle("tbEmail").innerText = "(*) Email không đúng định dạng";
    getEle("tbEmail").style.display = "block";
    isValid = false;
  }
  // 3. Hợp lệ
  else {
    getEle("tbEmail").innerText = "";
    getEle("tbEmail").style.display = "none";
  }

  // Nếu email không hợp lệ -> dừng luôn
  if (!isValid) return;

  // Lấy giá trị mật khẩu và trim khoảng trắng
  const passwordValue = getEle("password").value.trim();

  /**
   * Validation Mật khẩu
   */
  // 1. Không để trống mật khẩu
  if (passwordValue === "") {
    getEle("tbMatKhau").innerText = "(*) Vui lòng nhập mật khẩu";
    getEle("tbMatKhau").style.display = "block";
    isValid = false;
  }
  // 2. Độ dài 6–10 ký tự, chứa ít nhất 1 số, 1 chữ in hoa và 1 ký tự đặc biệt
  else if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,20}$/.test(passwordValue)) {
    getEle("tbMatKhau").innerText = "(*) Mật khẩu phải 6–10 ký tự, có ít nhất 1 số, 1 chữ in hoa và 1 ký tự đặc biệt";
    getEle("tbMatKhau").style.display = "block";
    isValid = false;
  }
  // 3. Hợp lệ
  else {
    getEle("tbMatKhau").innerText = "";
    getEle("tbMatKhau").style.display = "none";
  }

  // Nếu có lỗi -> dừng luôn
  if (!isValid) return;

  // 1. Validation Ngày làm (ngày sinh hoặc ngày ký hợp đồng) – không để trống, định dạng mm/dd/yyyy
  const dateValue = getEle("datepicker").value.trim();
  if (dateValue === "") {
    getEle("tbNgay").innerText = "(*) Vui lòng nhập ngày";
    getEle("tbNgay").style.display = "block";
    isValid = false;
  } else if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(dateValue)) {
    getEle("tbNgay").innerText = "(*) Định dạng ngày phải là mm/dd/yyyy";
    getEle("tbNgay").style.display = "block";
    isValid = false;
  } else {
    getEle("tbNgay").innerText = "";
    getEle("tbNgay").style.display = "none";
  }

  // 2. Validation Lương cơ bản – không để trống, trong khoảng 1 000 000 – 20 000 000
  const luongValue = getEle("luongCB").value.trim();
  if (luongValue === "") {
    getEle("tbLuongCB").innerText = "(*) Vui lòng nhập lương cơ bản";
    getEle("tbLuongCB").style.display = "block";
    isValid = false;
  } else {
    const luongNum = Number(luongValue);
    if (isNaN(luongNum) || luongNum < 1000000 || luongNum > 20000000) {
      getEle("tbLuongCB").innerText = "(*) Lương phải từ 1 000 000 đến 20 000 000";
      getEle("tbLuongCB").style.display = "block";
      isValid = false;
    } else {
      getEle("tbLuongCB").innerText = "";
      getEle("tbLuongCB").style.display = "none";
    }
  }

  // 3. Validation Chức vụ – phải chọn 1 trong 3 giá trị hợp lệ: "Sep", "TruongPhong", "NhanVien"
  const chucvuValue = getEle("chucvu").value.trim();
  if (chucvuValue === "") {
    getEle("tbChucVu").innerText = "(*) Vui lòng chọn chức vụ";
    getEle("tbChucVu").style.display = "block";
    isValid = false;
  } else if (!["Sep", "TruongPhong", "NhanVien"].includes(chucvuValue)) {
    getEle("tbChucVu").innerText = "(*) Chức vụ không hợp lệ";
    getEle("tbChucVu").style.display = "block";
    isValid = false;
  } else {
    getEle("tbChucVu").innerText = "";
    getEle("tbChucVu").style.display = "none";
  }

  // 4. Validation Số giờ làm – không để trống, phải từ 80 đến 200
  const gioLamValue = getEle("gioLam").value.trim();
  if (gioLamValue === "") {
    getEle("tbGiolam").innerText = "(*) Vui lòng nhập số giờ làm";
    getEle("tbGiolam").style.display = "block";
    isValid = false;
  } else {
    const gioLamNum = Number(gioLamValue);
    if (isNaN(gioLamNum) || gioLamNum < 80 || gioLamNum > 200) {
      getEle("tbGiolam").innerText = "(*) Số giờ làm phải từ 80 đến 200 giờ";
      getEle("tbGiolam").style.display = "block";
      isValid = false;
    } else {
      getEle("tbGiolam").innerText = "";
      getEle("tbGiolam").style.display = "none";
    }
  }

  // Nếu bất kỳ validation nào thất bại, dừng luôn
  if (!isValid) return;



  //Tạo đối tượng staff từ lớp đối tượng Staff
  const staff = new Staff(tknv, nameNV, email, password, datepicker, luongCB, chucvu, gioLam);
  staff.calcSalStaff();
  console.log(staffList.arr);
  return staff;
}

getValueStaff();



const renderStaffList = (data) => {
  //Render danh sach nhan vien hien thi ra giao dien
  /**
  - Hiển thị danh sách nhan vien
  0. Tạo biến contentHTML = ""
  1. Duyệt qua mảng arr
      1.1 lấy được staff từ mảng arr  

   */
  let contentHTML = "";
  for (let i = 0; i < data.length; i++) {
    const staff = data[i];
    // Format lương theo kiểu 1.000.000 VND
    const luongFormatted = staff.salStaff.toLocaleString("vi-VN") + " VND";
    contentHTML += `
            <tr>
            <td>${staff.tknv}</td>
            <td>${staff.nameNV}</td>
            <td>${staff.email}</td>
            <td>${staff.datepicker}</td> 
            <td>${staff.chucvu}</td>
            <td>${luongFormatted}</td>
            <td>${staff.typeStaff()}</td>
            <td>
          <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="onEditStaff('${staff.tknv
      }')">Edit</button>
          <button class="btn btn-danger" onclick="onDeleteStaff('${staff.tknv
      }')">Delete</button>
        </td>
            </tr>
            `;
  }
  getEle("tableDanhSach").innerHTML = contentHTML;
};

/**
 * clear data form
 */
const resetForm = () => {
  getEle("staffForm").reset();
};

/**
 * Click thêm nhân viên => Hiển thị modal => Cập nhật ẩn
 */
getEle("btnThem").onclick = function () {
  // Ẩn nút cập nhật
  getEle("btnCapNhat").style.display = "none";

  // Hiển thị tiêu đề modal
  getEle("header-title").innerHTML = "Thêm Nhân Viên";

  // Hiển thị nút Thêm
  getEle("btnThem").style.display = "block";

  // enable tknv
  getEle("tknv").disabled = false;

  //Clear Form
  resetForm();
};

/**
 * Cập Nhật Nhân Viên
 */
getEle("btnCapNhat").onclick = function () {
  // Gọi phương thức addStaff() để thêm viên vào danh sách
  const staff = getValueStaff();

  // Cập nhật thông tin món ăn
  staffList.updateStaff(staff);

  // close Modal
  document.getElementsByClassName("btn close")[0].click();

  // Render lai ds
  renderStaffList(staffList.arr);

  // Lưu data mới xuống localStorage
  setLocalStorage(staffList.arr);
};
/**
 * Hàm xử lý sự kiện sửa thông tin nhân viên
 */
const onEditStaff = (tknv) => {
  // Cập nhật tiêu đề của Modal để thông báo cho người dùng rằng họ đang ở chế độ chỉnh sửa thông tin nhân viên
  getEle("header-title").innerHTML = "Sửa thong tin nhan vien";

  // Ẩn nút "Thêm"
  getEle("btnThemNV").style.display = "none";

  // Hiện nút cập nhật
  getEle("btnCapNhat").style.display = "block";

  // Lấy thông tin chi tiết của nhân viên muốn sửa
  const staff = staffList.getStaffByTKNV(tknv);
  if (staff) {
    // Dom tới các thẻ input trên modal => show data của staff
    getEle("tknv").value = staff.tknv;
    getEle("tknv").disabled = true;
    getEle("name").value = staff.nameNV;
    getEle("email").value = staff.email;
    getEle("password").value = staff.password;
    getEle("datepicker").value = staff.datepicker;
    getEle("luongCB").value = staff.luongCB;
    getEle("chucvu").value = staff.chucvu;
    getEle("gioLam").value = staff.gioLam;
  }
};
// Make onEditStaff globally accessible
window.onEditStaff = onEditStaff;
/**
 * Hàm xử lý sự kiện xoa nhan vien
 */
const onDeleteStaff = (tknv) => {
  staffList.removeStaff(tknv);
  // Gọi hàm renderStaffList() để hiển thị danh sách món ăn
  renderStaffList(staffList.arr);
  // Lưu dữ liệu vào localStorage
  setLocalStorage(staffList.arr);
};
// Khai báo onDeleteStaff ra đối tượng window
window.onDeleteStaff = onDeleteStaff;

/**
 *
 * Lưu dữ liệu vào localStorage (browser)
 */
const setLocalStorage = (data) => {
  // Chuyển đổi mảng thành string
  const dataString = JSON.stringify(data);
  localStorage.setItem("STAFF_LIST", dataString);
};

/**
 * Lấy dữ liệu từ localStorage
 */
const getLocalStorage = (key) => {
  const dataString = localStorage.getItem(key);

  // Nếu không có dữ liệu thì trả về
  if (!dataString) return;

  // Chuyển đổi string thành mảng
  const dataJson = JSON.parse(dataString);
  // gán dữ liệu vào mảng arr của staffList
  staffList.arr = dataJson;
  // map mỗi object thành instance của Staff
  staffList.arr = dataJson.map(obj => {
    const s = new Staff(
      obj.tknv,
      obj.nameNV,
      obj.email,
      obj.password || "",   // nếu bạn không lưu password thì để chuỗi rỗng
      obj.datepicker,
      obj.luongCB,
      obj.chucvu,
      obj.gioLam
    );
    // Tính lại salStaff (phòng trường hợp trước khi lưu chưa tính hoặc luồng lưu ko chứa salStaff)
    s.calcSalStaff();
    return s;
  });

  // Gọi hàm renderStaffList() để hiển thị danh sách nhan vien
  renderStaffList(staffList.arr);
};

getLocalStorage("STAFF_LIST");

/**
 * Add Staff
 */
getEle("btnThemNV").onclick = function () {
  // Gọi phương thức addStaff() để thêm nhân viên vào danh sách
  const staff = getValueStaff();

  if (!staff) return;

  staffList.addStaff(staff);

  // Gọi hàm renderStaffList() để hiển thị danh sách nhân viên
  renderStaffList(staffList.arr);

  // Lưu dữ liệu vào localStorage
  setLocalStorage(staffList.arr);

  //   close modal
  // document.getElementsByClassName("close")[0].click();
};

/**
 * Filter nhân viên
getEle("selLoai").addEventListener("change", () => {
  const type = getEle("selLoai").value;

  // Gọi tới phương thức filterStaff(type)
  const arrFiltered = typeof staffList.filterStaff === "function"
    ? staffList.filterStaff(type)
    : staffList.arr.filter(staff => {
        if (type === "all" || !type) return true;
        return typeof staff.typeStaff === "function" && staff.typeStaff() === type;
      });

  // render list
  renderStaffList(arrFiltered);
});
 */


/**
 * Tìm kiếm nhân viên
 */
getEle("searchName").addEventListener("keyup", () => {
  const searchName = getEle("searchName").value;

  const findStaffs = staffList.searchStaff(searchName);

  renderStaffList(findStaffs);
});

