// models/family.js

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Family extends Model {
    static associate(models) {}
  }

  Family.init(
    {
      Namefamily: {
        type: DataTypes.STRING,
      },
      imagePath: {
        type: DataTypes.STRING, // Thêm trường này để lưu đường dẫn tệp hình ảnh
      },
      EmployeeName: {
        type: DataTypes.STRING,},
      addressfamily: DataTypes.STRING,
    },
    
    {
      sequelize,
      modelName: 'Family',
    }
  );
  

  return Family;
};
