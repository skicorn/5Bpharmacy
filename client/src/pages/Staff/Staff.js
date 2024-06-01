import React, { useEffect } from "react";
import './Staff.css';
import icon_search from '../../assets/glass.svg';
import pen_edit from '../../assets/pen.svg';
import trash from '../../assets/trash.svg';
//'react-bootstrap-table/css/react-bootstrap-table.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function Staff() {
    useEffect(() => {
        document.title = "Staff Management"
    })
    return (
        <React.Fragment>
            <h1>STAFFS</h1>
            <div className="staff-parent">
                <div className="staff-bg">
                    <div className="search-wrapper">
                        <div className="nav-search">
                            <input className="input-search" placeholder="Enter keywords" />
                            <div className="icon-search">
                                <img src={icon_search} ></img>
                            </div>
                        </div>
                        <div className="staff-button-add">Add Employer</div>
                    </div>
                    <div className="staff-list">
                        {/* <div className="child-list">
                            <table className="table">
                            <thead class="table-light">
                                <tr>
                                    <th>dadad</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                            </table>
                        </div> */}
                        <div className="staff-list-context">
                            <table class="table">
                                <thead class="table-light" >
                                    <tr >
                                        <th>
                                            <input className="checkbox-staff" type="checkbox"></input>
                                        </th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>001</td>
                                        <td>Tony A</td>
                                        <td>example@gmail.com</td>
                                        <td>09341841</td>
                                        <td>Dược sĩ</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>002</td>
                                        <td>Tony B</td>
                                        <td>example@gmail.com</td>
                                        <td>8301413</td>
                                        <td>Quản lý</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>003</td>
                                        <td>Tony C</td>
                                        <td>example@gmail.com</td>
                                        <td>987384783</td>
                                        <td>Dược sĩ</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>004</td>
                                        <td>Tony D</td>
                                        <td>example@gmail.com</td>
                                        <td>387140134</td>
                                        <td>Dược sĩ</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>005</td>
                                        <td>Tony E</td>
                                        <td>example@gmail.com</td>
                                        <td>458245254</td>
                                        <td>Dược sĩ</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>006</td>
                                        <td>Tony F</td>
                                        <td>example@gmail.com</td>
                                        <td>90482555</td>
                                        <td>Dược sĩ</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>007</td>
                                        <td>Tony G</td>
                                        <td>example@gmail.com</td>
                                        <td>082254</td>
                                        <td>Dược sĩ</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>008</td>
                                        <td>Tony H</td>
                                        <td>example@gmail.com</td>
                                        <td>458745</td>
                                        <td>Dược sĩ</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>009</td>
                                        <td>Tony I</td>
                                        <td>example@gmail.com</td>
                                        <td>48528452</td>
                                        <td>Dược sĩ</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>010</td>
                                        <td>Tony J</td>
                                        <td>example@gmail.com</td>
                                        <td>425725</td>
                                        <td>Nhân viên kho </td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                    <tr>

                                        <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td><div className="icon-action">
                                            <img src={pen_edit}></img>
                                            <img src={trash}></img>
                                        </div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default Staff;