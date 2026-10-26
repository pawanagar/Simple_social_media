import { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const authorInitials = post.userId.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase();

  return (
    <article className="card card-post">
      <div className="delete">
        <button
          type="button"
          className="delete-button"
          aria-label={`Delete ${post.title}`}
          title="Delete post"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete aria-hidden="true" />
        </button>
      </div>
      <div className="post-author">
        <div className="avatar avatar-small" aria-hidden="true">
          {authorInitials || "G"}
        </div>
        <div>
          <span className="post-author-name">{post.userId}</span>
          <span className="post-author-meta">Shared with the community</span>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.body}</p>
        <div>
          {post.tags.map((tag, index) => (
            <span key={`${post.id}-${tag}-${index}`} className="badge tags">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="post-footer">
        <span className="reaction">
          <FiHeart className="reaction-icon" aria-hidden="true" />
          {post.reactions} reactions
        </span>
      </div>
    </article>
  );
};

export default Post;
