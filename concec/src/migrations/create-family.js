'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('families', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Namefamily: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagePath: {
        type: Sequelize.STRING, // Thêm trường này để lưu đường dẫn tệp hình ảnh
      },
      EmployeeName: {
        type: Sequelize.STRING,
             },
      addressfamily: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('families');
  },
};
