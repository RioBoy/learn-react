const HamburgerMenu = ({ onClick }) => {
  return (
    <div className="mobile-view">
      <div className="menu" onClick={onClick}>
        <span className="line one"></span>
        <span className="line two"></span>
        <span className="line three"></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
