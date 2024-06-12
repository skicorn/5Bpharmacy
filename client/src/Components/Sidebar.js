
import React from 'react';
import './Sidebar.css'
import dashboard from '../assets/dashboard.svg'
import order from '../assets/order.svg'
import medicine from '../assets/medicine.svg'
import staff from '../assets/staff.svg'
import history from '../assets/clock-rotate-left-solid.svg'
import setting from '../assets/setting.svg'
import logout from '../assets/logout.svg'
import { Link } from 'react-router-dom';
const sidebar = [
    {
        name: 'Dashboard',
        link: '/dashboard',
        img: dashboard
    },
    {
        name: 'Order',
        link: '/orders',
        img: order
    },
    {
        name: 'Medicine',
        link: '/medicines',
        img: medicine
    },
    {
        name: 'Staff',
        link: '/staffs',
        img: staff
    },
    {
        name: 'Customers',
        link: '/customers',
        img: staff
    },
    {
        name: 'Update',
        link: '/updatehistory',
        img: history
    },
    {
        name: 'Setting',
        link: '/settings',
        img: setting
    },
    {
        name: 'Log out',
        link: '',
        img: logout
    }
]

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="List">
                {
                    sidebar.map(element => (
                        <li className="List-item" >
                            <Link to={element.link} className='item-link'>
                                <div className="item-container">
                                    <img src={element.img} className="List-item-img" />
                                    {element.name}
                                </div>
                            </Link>
                        </li>))
                }
            </ul>
        </div>
    )
}

export default Sidebar;
