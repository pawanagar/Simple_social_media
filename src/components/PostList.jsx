import { useContext } from "react";
import { FiMessageCircle } from "react-icons/fi";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);

  if (postList.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">
          <FiMessageCircle aria-hidden="true" />
        </div>
        <h3>Your feed is ready for a first post</h3>
        <p>Start a conversation and bring your community together.</p>
      </div>
    );
  }

  return (
    <div className="posts">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
