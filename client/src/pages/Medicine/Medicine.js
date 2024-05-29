import React, { useEffect, useState } from 'react';
import './Medicine.scss';

function Medicine() {
  useEffect(() => {
    document.title = 'Medicine Management';
  }, []);

  const [isFormVisible, setIsFormVisible] = useState(false);

  function buttona() {
    var formA = document.getElementById('Kformaddmedicine');
    formA.style.visibility = 'visible';

    function handleClickOutside(event) {
      if (
        event.target !== document.getElementById('buttonA') &&
        event.target.closest('#Kformaddmedicine') == null
      ) {
        formA.style.visibility = 'hidden'; // Ẩn formA nếu click không phải trên medicinebuttonA hoặc formA
        document.removeEventListener('click', handleClickOutside);
      }
    }

    document.addEventListener('click', handleClickOutside);
  }

  function buttonb() {
    var formA1 = document.getElementById('Kformaddmedicine');
    formA1.style.visibility = 'visible';

    function handleClickOutside(event) {
      if (
        event.target !== document.getElementById('buttonA1') &&
        event.target.closest('#Kformaddmedicine') == null
      )
       {
        formA1.style.visibility = 'hidden'; // Ẩn formA1 nếu click không phải trên oderbuttonA1 hoặc formA1
        document.removeEventListener('click', handleClickOutside);
      }
    }

    document.addEventListener('click', handleClickOutside);
  }

  function buttonan() {
    var formA = document.getElementById('Kfomrm2');
    formA.style.visibility = 'hidden';
  }

  //   const Kfomrm = {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     visibility: 'hidden',
  //   };

  const Kfomrm2 = {
    visibility: 'hidden', // or 'hidden' based on your requirement
    position: 'absolute',
    top: '200px', // or '100%' based on your requirement
    left: '0',
    right: '0',
    zIndex: '1',
  };

  const buttonStyle = {};

  return (
    <div id="Kmedicine">
      <h1>MEDICINE</h1>
      <div style={buttonStyle} class="buttonStyle">
        <button onClick={buttona} id="buttonA">
          Click me
        </button>
        <button onClick={buttonb} id="buttonA1">
          Click me2
        </button>
      </div>
      <div className="Kdiv" id="Kdiv">
        <div className="Kabigdiv">
          <div className="Kamediumdiv">
            <table className="Kamediumtable">
              <tr>
                <th>Cột 1</th>
                <th>Cột 2</th>
                <th>Cột 3</th>
                <th>Cột 4</th>
                <th>Cột 5</th>
                <th>Cột 6</th>
                <th>Cột 7</th>
                <th>Cột 8</th>
                <th>Cột 9</th>
              </tr>
              <tr>
                <td>Dữ liệu 1</td>
                <td>Dữ liệu 2</td>
                <td>Dữ liệu 3</td>
                <td>Dữ liệu 4</td>
                <td>Dữ liệu 5</td>
                <td>Dữ liệu 6</td>
                <td>Dữ liệu 7</td>
                <td>Dữ liệu 8</td>
                <td>Dữ liệu 9</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div style={Kfomrm2} id="Kfomrm2">
        <div className="Kformaddmedicine" id="Kformaddmedicine">
          <div className="Kformaddmedicineheader">Add new </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>Image</p>
            <button>upload file</button>
          </div>
          <button className="Kformaddmedicineinfoadd" onClick={buttonan}>
            Add
          </button>
        </div>
      </div>
      <div style={Kfomrm2} id="Kfomrm2">
        <div className="Kformaddmedicine">
          <div className="Kformaddmedicineheader">Add new </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>Image</p>
            <button>upload file</button>
          </div>
          <button className="Kformaddmedicineinfoadd" onClick={buttonan}>
            Add
          </button>
        </div>
      </div>

      <div style={Kfomrm2} id="Kfomrm3">
        <div className="Kformaddmedicine" id="Kformaddmedicine">
          <div className="Kformaddmedicineheader">Edit </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="Kformaddmedicineinfo">
            <p>Image</p>
            <button>upload file</button>
          </div>
          <button className="Kformaddmedicineinfoadd" onClick={buttonan}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Medicine;
