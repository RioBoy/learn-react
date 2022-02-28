const CloseHamMenu = ({ onClick }) => {
  return (
    <div className="close-menu" onClick={onClick}>
      <span className="line one"></span>
      <span className="line two"></span>
      <span className="line three"></span>
    </div>
  );
};

export default CloseHamMenu;
