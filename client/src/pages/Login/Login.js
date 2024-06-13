import '../Login/Login.css'
import { useEffect } from 'react'
function Login() {
   useEffect(() => {
      document.title = 'Login Management'
   })
   return (
      <div className='background'>
         <div className='Login_container'>
            <form action='action_page.php' method='post'>
               <div className='Login_imgcontainer'>
                  <img
                     src='https://cdn-icons-png.flaticon.com/128/647/647186.png'
                     alt='Avatar'
                     className='Login_avatar'
                  />
                  <h4>ĐĂNG NHẬP</h4>
                  <p className='Login_greeting'>
                     Muốn có một sức khỏe tốt, và đặc biệt không bị đau yếu khi về già chúng ta cần
                     phải làm gì? Hãy cùng lắng nghe một số lời khuyên thú vị và thiết thực từ các
                     chuyên gia. !
                  </p>
               </div>

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
                           required
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
                           required
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
                     <button type='submit' style={{ width: '40%' }}>
                        Đăng Nhập
                     </button>
                     {/* <a className='Login_psw' href='#'> */}
                     Bạn quên mật khẩu?
                     {/* </a> */}
                     <hr />
                     <a
                        href='/register'
                        className='Login_cancelbtn'
                        style={{
                           display: 'inline-block',
                           padding: '10px 20px',
                           backgroundColor: '#FAFAD2',
                           color: 'black',
                           textAlign: 'center',
                           border: 'none',
                           borderRadius: '20px',
                           textDecoration: 'none',
                        }}
                     >
                        Tạo Tài khoản
                     </a>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}
export default Login
