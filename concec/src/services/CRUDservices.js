import db from '../models/index';
const path = require('path'); 

let createfamily = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const filename = path.basename(data.imagePath); // Đây là tên file hình ảnh
      
      await db.Family.create({
        Namefamily: data.Namefamily,
        EmployeeName: data.EmployeeName,
        addressfamily: data.addressfamily,
        roleId: data.roleId,
        imagePath: filename, // Lưu tên file hình ảnh vào cơ sở dữ liệu
      });

      resolve('OK! Create a new family succeeded');
      console.log(data);
    } catch (e) {
      reject(e);
      console.error('Error creating family:', e);
    }
  });
};


let getAllFamilies = async () => {
  try {
    let families = await db.Family.findAll({ raw: true });
    console.log("Fetched families:", families);
    return families;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
};

module.exports = {
  createfamily: createfamily,
  getAllFamilies: getAllFamilies,
};
