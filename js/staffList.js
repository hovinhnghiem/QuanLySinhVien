class StaffList {
    constructor() {
        this.arr = [];
    }

    addStaff(staff) {
        this.arr.push(staff);
    }

    findIndexStaff(tknv) {
        // Tim vị trí của món ăn trong mảng arr theo id
        let index = -1;
        for (let i = 0; i < this.arr.length; i++) {
            const staff = this.arr[i];
            if (staff.tknv === tknv) {
                index = i;
                break; // tìm thấy thì dừng vòng lặp
            }
        }
        return index;
    }
    removeStaff(tknv) {
        const index = this.findIndexStaff(tknv);

        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    }
    getStaffByTKNV(tknv) {
    const index = this.findIndexStaff(tknv);
    if (index !== -1) {
      // tìm thấy tknb
      return this.arr[index];
    }

    return null;
  }
    updateStaff(staff) { 
        const index = this.findIndexStaff(staff.tknv);

        if (index !== -1) {
            this.arr[index] = staff;
        }
    }
    filterStaff(typeStaff) {
    /**
     *  0. Tạo ra mảng filter = [];
        1. Duyệt qua mảng arr
            1.1 lấy food = arr[i]
            1.2 Kiểm tra food.type trùng với type
                => true => Thêm food tìm thấy vào mảng filter
        2. trả mảng filter
     */
    const type = typeStaff();
    if (type === "all") {
      return this.arr;
    }

    let arrFiltered = [];
    for (let i = 0; i < this.arr.length; i++) {
      const staff = this.arr[i];
      if (staff.type === type) {
        arrFiltered.push(staff);
      }
    }
    return arrFiltered;
  }
    searchStaff(searchName) {
    /**
     *  0. Tạo ra mảng findStaffs = [];
        1. Duyệt qua mảng arr
          1.1 lấy staff = arr[i]
          1.2 Kiểm tra staff.name trùng với keyword
          => true => Thêm staff tìm thấy vào mảng findstaffs

        2. trả mảng findstaffs
     */
    let findStaffs = [];

    for (let i = 0; i < this.arr.length; i++) {
      const staff = this.arr[i];
      // Chuyển staff.name thành chữ viết thường
      const nameLowerCase = staff.nameNV.toLowerCase();
      // Chuyển searchName thành chữ viết thường
      const keywordLowerCase = searchName.toLowerCase();

      const index = nameLowerCase.indexOf(keywordLowerCase);
      if (index !== -1) {
        findStaffs.push(staff);
      }
    }

      return findStaffs;
    }
}

export default StaffList;