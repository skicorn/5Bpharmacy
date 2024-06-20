import React, { useState } from 'react';
import axios from 'axios';

const Addmedicine = () => {
  const [formData, setFormData] = useState({
    Namefamily: '',
    EmployeeName: '',
    addressfamily: '',
    roleId: '',
    image: null, // Thêm trường image để lưu đối tượng file hình ảnh
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        image: e.target.files[0], // Lưu đối tượng file hình ảnh vào state
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    try {
      // Tạo formData mới để gửi dữ liệu bao gồm cả file hình ảnh
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('Namefamily', formData.Namefamily);
      formDataToSubmit.append('EmployeeName', formData.EmployeeName);
      formDataToSubmit.append('addressfamily', formData.addressfamily);
      formDataToSubmit.append('roleId', formData.roleId);
      formDataToSubmit.append('image', formData.image);

      const response = await axios.post('http://localhost:6969/addfamily/post-family', formDataToSubmit);
      console.log('Data submitted successfully:', response.data);
      // Xử lý thành công, ví dụ: redirect hoặc hiển thị thông báo
    } catch (error) {
      console.error('Error submitting data:', error);
      // Xử lý lỗi khi gửi dữ liệu
    }
  };

  return (
    <div>
      {/* Form để người dùng nhập thông tin */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Namefamily:</label>
          <input
            type="text"
            name="Namefamily"
            value={formData.Namefamily}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>EmployeeName:</label>
          <input
            type="text"
            name="EmployeeName"
            value={formData.EmployeeName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Addressfamily:</label>
          <input
            type="text"
            name="addressfamily"
            value={formData.addressfamily}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Family</button>
      </form>
    </div>
  );
};

export default Addmedicine;
