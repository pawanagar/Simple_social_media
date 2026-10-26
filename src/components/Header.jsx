const Header = () => {
  return (
    <header className="topbar">
      <div>
        <p className="topbar-kicker">Welcome back</p>
        <p className="topbar-title">Make yourself at home</p>
      </div>
      <div className="topbar-profile">
        <div className="avatar avatar-small" aria-hidden="true">
          PN
        </div>
        <div className="profile-copy">
          <strong>Pawan Naagar</strong>
          <span>Community member</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
