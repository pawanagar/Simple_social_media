import { useState } from "react";
import { FiArrowDown, FiArrowUpRight, FiPlus } from "react-icons/fi";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-shell">
        <SideBar SelectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <main className="content-shell">
          <Header />
          {selectedTab === "Home" ? (
            <div className="main-content">
              <section className="welcome-banner">
                <div className="welcome-copy">
                  <p className="welcome-eyebrow">A little more connected</p>
                  <h1>Good things happen when we share.</h1>
                  <p>Your people, your ideas, and the moments in between.</p>
                </div>
                <button
                  className="welcome-action"
                  type="button"
                  onClick={() => setSelectedTab("Create Post")}
                >
                  <FiPlus aria-hidden="true" />
                  Share an update
                </button>
              </section>

              <div className="feed-layout">
                <section className="feed-column" aria-labelledby="feed-title">
                  <div className="feed-heading">
                    <div>
                      <h2 id="feed-title">Your community</h2>
                      <p>A fresh look at what everyone is up to.</p>
                    </div>
                    <span className="feed-sort">
                      Latest <FiArrowDown aria-hidden="true" />
                    </span>
                  </div>
                  <PostList />
                </section>

                <aside className="discovery-column" aria-label="Community highlights">
                  <section className="community-card">
                    <h3>A space to be you</h3>
                    <p>
                      Share what you are learning, what you love, and the little
                      wins worth celebrating.
                    </p>
                  </section>
                  <section className="community-card">
                    <h3>Popular topics</h3>
                    <div className="trend-list">
                      <div className="trend-item">
                        <div>
                          <strong># learning</strong>
                          <span>Growing together</span>
                        </div>
                        <span className="trend-dot" />
                      </div>
                      <div className="trend-item">
                        <div>
                          <strong># nature</strong>
                          <span>Out and about</span>
                        </div>
                        <span className="trend-dot" />
                      </div>
                      <div className="trend-item">
                        <div>
                          <strong># creativity</strong>
                          <span>Ideas in progress</span>
                        </div>
                        <span className="trend-dot" />
                      </div>
                    </div>
                    <p className="mt-3">
                      Explore the conversation <FiArrowUpRight aria-hidden="true" />
                    </p>
                  </section>
                </aside>
              </div>
            </div>
          ) : (
            <div className="main-content">
              <CreatePost />
            </div>
          )}
          <Footer />
        </main>
      </div>
    </PostListProvider>
  );
}

export default App;
