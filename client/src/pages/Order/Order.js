import { useEffect } from 'react';
import './Order.scss';

function Order() {
  useEffect(() => {
    document.title = 'Order Management';
  }, []);

  function buttona() {
    var formA = document.getElementById('oderKformaddoder');
    formA.style.visibility = 'visible';

    function handleClickOutside(event) {
      if (
        event.target !== document.getElementById('oderbuttonA') &&
        event.target.closest('#oderKformaddoder') == null
      ) {
        formA.style.visibility = 'hidden'; // Ẩn formA nếu click không phải trên oderbuttonA hoặc formA
        document.removeEventListener('click', handleClickOutside);
      }
    }

    document.addEventListener('click', handleClickOutside);
  }

  function buttonb() {
    var formA1 = document.getElementById('oderKformaddoder');
    formA1.style.visibility = 'visible';

    function handleClickOutside(event) {
      if (
        event.target !== document.getElementById('oderbuttonA1') &&
        event.target.closest('#oderKformaddoder') == null
      )
       {
        formA1.style.visibility = 'hidden'; // Ẩn formA1 nếu click không phải trên oderbuttonA1 hoặc formA1
        document.removeEventListener('click', handleClickOutside);
      }
    }

    document.addEventListener('click', handleClickOutside);
  }
  
  function buttonan() {
    var formA = document.getElementById('oderKfomrm2');
    formA.style.visibility = 'hidden';
  }

  const Kfomrm2 = {
    visibility: 'hidden',
    position: 'absolute',
    top: '100px',
    left: '0',
    right: '0',
    zIndex: '1',
  };

  return (
    <div id="Koder">
      <h1>Order</h1>
      <div className="oderbuttonStyle">
        <button onClick={buttona} id="oderbuttonA">
          Click me
        </button>
        <button onClick={buttonb} id="oderbuttonA1">
          Click me2
        </button>
      </div>
      <div className="oderKdiv" id="oderKdiv">
        <div className="oderKabigdiv">
          <div className="oderKamediumdiv">
            <table className="oderKamediumtable">
              <thead>
                <tr>
                  <th>Cột 1</th>
                  <th>Cột 2</th>
                  <th>Cột 3</th>
                  <th>Cột 4</th>
                  <th>Cột 5</th>
                  <th>Cột 6</th>
                  <th>Cột 7</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dữ liệu 1</td>
                  <td>Dữ liệu 2</td>
                  <td>Dữ liệu 3</td>
                  <td>Dữ liệu 4</td>
                  <td>Dữ liệu 5</td>
                  <td>Dữ liệu 6</td>
                  <td>Dữ liệu 7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={Kfomrm2} id="oderKfomrm2">
        <div className="oderKformaddoder" id="oderKformaddoder">
          <div className="oderKformaddoderheader">Add new</div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>

          <div className="oderKformaddoderinfo">
            <p>Image</p>
            <button>upload file</button>
          </div>
          <button className="oderKformaddoderinfoadd" onClick={buttonan}>
            Add
          </button>

          <div class="oderKformaddoderinfoa">
            <image
              src=""
              class="oderKformaddoderinfob"
            > ảnh ở đây </image>
            <p class="oderKformaddoderinfoc">
              paracetamol 650mg paracetamol 650mgparacetamol 650mgparacetamol
              650mg
            </p>
          </div>
          <div class="oderKformaddoderinfoa">
            <image
              src=""
              class="oderKformaddoderinfob"
            > ảnh ở đây </image>
            <p class="oderKformaddoderinfoc">
              paracetamol 650mg paracetamol 650mgparacetamol 650mgparacetamol
              650mg
            </p>
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <button className="oderKformaddoderinfoadd" onClick={buttonan}>
          Create
        </button>
        </div>
      
      </div>

      <div style={Kfomrm2} id="oderKfomrm3">
        <div className="oderKformaddoder" id="oderKformaddoder">
          <div className="oderKformaddoderheader">Edit</div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>Image</p>
            <button>upload file</button>
          </div>
          <button className="oderKformaddoderinfoadd" onClick={buttonan}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
