import './index.css'

import {AiOutlineDashboard} from 'react-icons/ai'
import {MdOutlineInventory, MdOutlineLocalShipping} from 'react-icons/md'
import {BiBarcode} from 'react-icons/bi'
import {GrChannel} from 'react-icons/gr'
import {IoSettingsOutline} from 'react-icons/io5'

import CustomerData from '../CustomerData/index'

const MainContainer = () => (
  <div className="main-container">
    <nav className="nav-header">
      <div className="nav-content">
        <ul className="nav-menu1">
          <li className="list-item">
            <AiOutlineDashboard />
            <p className="para">Dashboard</p>
          </li>
          <li className="list-item">
            <MdOutlineInventory />
            <p className="para">Inventory</p>
          </li>
          <li className="list-item">
            <BiBarcode />
            <p className="para blue">Orders</p>
          </li>
          <li className="list-item">
            <MdOutlineLocalShipping />
            <p className="para">Shipping</p>
          </li>
          <li className="list-item">
            <GrChannel />
            <p className="para">Channel</p>
          </li>
        </ul>
      </div>
    </nav>
    <div className="sub-container">
      <div className="order-container">
        <button type="button" className="button">
          Orders
        </button>
        <IoSettingsOutline />
      </div>
      <ul className="nav-menu2">
        <a href="alt">
          <li className="li">Pending</li>
        </a>
        <li className="li">Accepted</li>
        <li className="li">AWB Created</li>
        <li className="li">Ready to ship</li>
        <li className="li">Shipped</li>
        <li className="li">Cancelled</li>
      </ul>
      <CustomerData />
    </div>
  </div>
)
export default MainContainer
