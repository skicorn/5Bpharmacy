const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const viewEngine = require('./config/viewEngine');
const initWebRoute = require('./route/web');
const cors = require('cors');
const multer = require('multer');

dotenv.config();

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(cors()); // Thêm dòng này

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app, upload);

app.post('/addfamily/post-family', (req, res) => {
  const { Namefamily, EmployeeName, addressfamily } = req.body;
  console.log('Received data:', req.body);
  // Xử lý dữ liệu ở đây, ví dụ lưu vào database

  // Trả về phản hồi thành công
  res.status(200).json({ message: 'Data received successfully!' });
});

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log('Backend NodeJS is running on port: ' + port);
});
