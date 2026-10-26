import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const postTitle = useRef();
  const postBody = useRef();
  const postTags = useRef();
  const postReactions = useRef();
  const userId = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentPostList = {
      id: Date.now(),
      title: postTitle.current.value,
      body: postBody.current.value,
      reactions: Number(postReactions.current.value),
      userId: userId.current.value,
      tags: postTags.current.value.split(" ").filter(Boolean),
    };

    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    userId.current.value = "";
    postTags.current.value = "";

    addPost(currentPostList);
    window.alert("Post made successfully!");
  };

  return (
    <section className="create-post-page">
      <div className="create-post-intro">
        <p className="welcome-eyebrow">Your voice belongs here</p>
        <h1>Create a post</h1>
        <p>Share a thought, a story, or something you are excited about.</p>
      </div>
      <form className="postdata" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="posttitle" className="form-label">
            Post title
          </label>
          <input
            ref={postTitle}
            type="text"
            className="form-control"
            id="posttitle"
            placeholder="Give your post a title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postbody" className="form-label">
            What would you like to share?
          </label>
          <textarea
            rows="5"
            ref={postBody}
            className="form-control"
            id="postbody"
            placeholder="Write a little something..."
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="posttags" className="form-label">
              Topics
            </label>
            <input
              ref={postTags}
              type="text"
              className="form-control"
              id="posttags"
              placeholder="Separate topics with spaces"
            />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="reactions" className="form-label">
              Starting reactions
            </label>
            <input
              type="number"
              min="0"
              className="form-control"
              ref={postReactions}
              id="reactions"
              placeholder="0"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="userid" className="form-label">
            Your name or handle
          </label>
          <input
            type="text"
            className="form-control"
            ref={userId}
            id="userid"
            placeholder="How should we credit you?"
          />
        </div>
        <button type="submit" className="btn btn-primary postbtn">
          Share with the community
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
