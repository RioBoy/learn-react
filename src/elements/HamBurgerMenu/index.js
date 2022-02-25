const HamburgerMenu = ({ onClick }) => {
  return (
    <nav className="mobile-view">
      <div className="menu" onClick={onClick}>
        <span className="line one"></span>
        <span className="line two"></span>
        <span className="line three"></span>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
