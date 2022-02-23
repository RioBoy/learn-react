/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = (props) => {
  const links = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'About',
      to: '/about',
    },
    {
      name: 'Contact',
      to: '/contact',
    },
    {
      name: 'Sign In',
      to: '/login',
    },
    {
      name: 'Sign Up',
      to: '/register',
    },
  ];
  return (
    <nav className="nav">
      <div className="container-nav">
        <a href="#" className="navbar-brand">
          <img src={props.logo} className="App-logo" alt="logo" />
        </a>
        <ul className="nav-item">
          {links.map((link, i) => {
            return link.name === 'Sign Up' ? (
              <li className="nav-link" key={i}>
                <a className="active" href={link.to}>
                  {link.name}
                </a>
              </li>
            ) : (
              <li className="nav-link" key={i}>
                <a href={link.to}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
