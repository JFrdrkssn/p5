import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import styles from "../../styles/CommentCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import navStyles from "../../styles/NavBar.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const currentUser = useCurrentUser();

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className={`${appStyles.Container} mt-2`} onSubmit={handleSubmit}>
      <Form.Group>
        <Link to={`/profiles/${profile_id}`} className={navStyles.NavLink}>
          <Avatar src={profileImage} height={35} text={currentUser?.username} />
        </Link>
        <Form.Control
          className={styles.Input}
          placeholder="Hmm..."
          as="textarea"
          value={content}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <button
        className={`${btnStyles.Bright} ${btnStyles.Button} d-block ml-auto mb-4`}
        disabled={!content.trim()}
        type="submit">
        Comment
      </button>
    </Form>
  );
}

export default CommentCreateForm;
