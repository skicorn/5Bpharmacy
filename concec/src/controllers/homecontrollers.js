import db from '../models/index';
// import CRUDservices from '../services/CRUDservices';
const CRUDservices = require('../services/CRUDservices');

let homepage = (req, res) => {
  return res.render('home/home.ejs');
};
// let pageemployee = (req, res) => {
//   return res.render('employee/employee.ejs');
// };
// let pageaddemployee = (req, res) => {
//   return res.render('employee/addemployee/addemployee.ejs');
// };
let pageaddfamily = (req, res) => {
  return res.render('famlily/addfamily.ejs');
};

let postfamily = async (req, res) => {
  let message = await CRUDservices.createfamily(req.body);
  console.log(message);
  return res.send('post curd from server');
};



let pagehienthifamily = async (req, res) => {
  try {
    let families = await CRUDservices.getAllFamilies();
    console.log('Families to display:', families);
    return res.render('famlily/hienthifamily.ejs', {
      dataTable: families,
    });
  } catch (error) {
    console.error('Error fetching families:', error);
    return res.status(500).send('Error fetching families');
  }
};

module.exports = {
  homepage: homepage,
  // pageemployee: pageemployee,
  // pageaddemployee: pageaddemployee,
  // postCURD: postCURD,
  pageaddfamily: pageaddfamily,
  postfamily: postfamily,
  pagehienthifamily: pagehienthifamily,
};
