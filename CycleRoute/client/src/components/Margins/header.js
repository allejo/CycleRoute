import "./margins.css";
import cycleRouteBanner from "../Images/cycleRouteBanner.png";

const Header = () => {

  return (
    <div className="header-component">
      <img src = {cycleRouteBanner} className='cycleRoute-logo' alt='logo'/>
      
    </div>
  )
}
export default Header;