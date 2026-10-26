import { FiHome, FiPlusSquare } from "react-icons/fi";

const SideBar = ({ SelectedTab, setSelectedTab }) => {
  return (
    <aside className="bar">
      <a href="/" className="brand" aria-label="Gather home">
        <span className="brand-mark" aria-hidden="true">
          g
        </span>
        <span className="brand-name">gather</span>
      </a>

      <p className="nav-label">Menu</p>
      <nav className="nav nav-pills flex-column" aria-label="Main navigation">
        <button
          type="button"
          className={`nav-link ${SelectedTab === "Home" ? "active" : ""}`}
          aria-current={SelectedTab === "Home" ? "page" : undefined}
          onClick={() => setSelectedTab("Home")}
        >
          <FiHome aria-hidden="true" />
          <span className="nav-text">Home</span>
        </button>
        <button
          type="button"
          className={`nav-link ${SelectedTab === "Create Post" ? "active" : ""}`}
          aria-current={SelectedTab === "Create Post" ? "page" : undefined}
          onClick={() => setSelectedTab("Create Post")}
        >
          <FiPlusSquare aria-hidden="true" />
          <span className="nav-text">Create post</span>
        </button>
      </nav>

      <div className="sidebar-spacer" />
      <div className="sidebar-note">
        <strong>Small moments matter.</strong>
        <p>Drop a note, share a win, or say hello to your community.</p>
      </div>
      <div className="profile-row">
        <div className="avatar" aria-hidden="true">
          PN
        </div>
        <div className="profile-copy">
          <strong>Pawan Naagar</strong>
          <span>@pawannaagar</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
