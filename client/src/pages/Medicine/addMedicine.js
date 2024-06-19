import React from 'react';
import { useNavigate  } from 'react-router-dom';
import './Addmedicine.css';

const Addmedicine = () => {
   const navigate = useNavigate();

   const handleSubmit = () => {
     
      navigate('/app');
   };

   return (
      <div className='no'>
      
      <div class="container">
      <form action="/addfamily/post-family" method="post">
        <div class="form-group">
          <label for="inputNamefamily">Namefamily</label>
          <input
            type="text"
            class="form-control"
            id="inputNamefamily"
            name="Namefamily"
            placeholder="Namefamily"
          />
        </div>
        <div class="form-group">
            <label for="inputName">add</label>
            <input
              type="text"
              class="form-control"
              id="EmployeeName"
              name="EmployeeName"
              placeholder="EmployeeName"
            />
          </div>
        <div class="form-group">
          <label for="inputAddressfamily">EmployeeName</label>
          <input
            type="text"
            class="form-control"
            id="inputAddressfamily"
            name="addressfamily"
            placeholder="Addressfamily"
          />
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
</div>
      </div>
   );
};

export default Addmedicine;
