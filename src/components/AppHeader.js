import { LOGO_URL } from "../utils/constants";

const AppHeader = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      {/* <div className="search">
        <input type="search" />
      </div> */}

      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Items</li>
          <li>SignIn</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
