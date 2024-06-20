import React from 'react';
import { useNavigate  } from 'react-router-dom';
import '../Login/Login.css';

const Login = () => {
   const navigate = useNavigate();

   const handleSubmit = () => {
      // Perform your authentication logic here
      // For demonstration, let's assume a successful login
      // You would typically check credentials against a backend service

      // For demo purposes, always consider login as successful
      // In a real application, you'd have a proper authentication mechanism
      // that checks credentials and sets a token or session

      // Redirect to the main application/dashboard upon successful login
      navigate('/app');
   };

   return (
      <div className='background'>
         <div className='Login_container'>
            <div style={{ width: '90%', alignItems: 'center', marginLeft: '10px' }}>
               <div className='Login_innercontainer'>
                  <div className='Login_input-container'>
                     <img
                        src='https://cdn-icons-png.flaticon.com/128/126/126509.png'
                        alt='Phone Icon'
                        className='Login_icon'
                     />
                     <input
                        className='Login_input-container_input'
                        type='text'
                        placeholder='Số điện thoại: '
                        name='uname'
                     />
                  </div>

                  <div className='Login_input-container'>
                     <img
                        src='https://cdn-icons-png.flaticon.com/128/2889/2889676.png'
                        alt='Password Icon'
                        className='Login_icon'
                     />
                     <input
                        type='password'
                        placeholder='Enter Password'
                        name='psw'
                        style={{ borderRadius: '20px' }}
                     />
                  </div>
               </div>
               <div
                  style={{
                     width: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <button className='button-login' type='' onClick={handleSubmit} style={{ width: '40%' }}>
                     Đăng Nhập
                  </button>
                  <p>Bạn quên mật khẩu?</p>
                  <hr />
                
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
