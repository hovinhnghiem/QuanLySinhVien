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

    //Tạo đối tượng staff từ lớp đối tượng Staff
    const staff = new Staff(tknv, nameNV, email, password, datepicker, luongCB, chucvu, gioLam);
    staff.calcSalStaff();
    console.log(staffList.arr);
    return staff;
}

// Example usage toc avoid unused function error
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
    staffList.updateStaff(tknv);
    renderStaffList(staffList.arr);
    setLocalStorage(staffList.arr);
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
// Khai báo onDeleteFood ra đối tượng window
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
        // Cần truyền đúng thứ tự và đủ tham số giống constructor
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
    //document.getElementsByClassName("close")[0].click();
};

