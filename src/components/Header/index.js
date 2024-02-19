import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMoonOutline} from 'react-icons/io5'
import {IoMdNotificationsOutline} from 'react-icons/io'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="container1">
        <p className="website-logo">
          <div className="image">
            <GiHamburgerMenu />
          </div>
        </p>
        <div className="container2">
          <p className="para image">
            <IoMoonOutline />
          </p>
          <p className="para image">
            <IoMdNotificationsOutline />
          </p>
        </div>
      </div>
    </div>
  </nav>
)
export default Header
