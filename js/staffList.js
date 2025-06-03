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
    filterStaff() { }
}

export default StaffList;