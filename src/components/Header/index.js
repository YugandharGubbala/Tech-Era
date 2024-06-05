import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  return (
    <Link to="/">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          className="logoimg"
        />
      </div>
    </Link>
  )
}
export default Header
