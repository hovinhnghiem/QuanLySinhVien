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
    const datepicker= getEle("datepicker").value;
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
        1.1 lấy được food từ mảng arr  

     */
    let contentHTML = "";
    for (let i = 0; i < data.length; i++) {
        const staff = data[i];
        contentHTML += `
            <tr>
            <td>${staff.tknv}</td>
            <td>${staff.nameNV}</td>
            <td>${staff.email}</td>
            <td>${staff.password}</td>
            <td>${staff.datepicker}</td>
            <td>${staff.luongCB}</td>
            <td>${staff.chucvu}</td>
            <td>${staff.gioLam}</td>
            <td>
            <button class="btn-danger" onclick="onDeleteFood('${food.id}')">
            Delete
            </button>
            </td>
            </tr>
            `;
    }
    getEle("tbodyFood").innerHTML = contentHTML;
};