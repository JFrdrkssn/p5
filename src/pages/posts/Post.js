import React from "react";
import styles from "../../styles/Post.module.css";
import appStyles from "../../App.module.css";
import navStyles from "../../styles/NavBar.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    updated_at,
    title,
    content,
    image,
    likes_count,
    like_id,
    comments_count,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}`, { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={`${appStyles.Content} mb-2`}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link className={navStyles.NavLink} to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} className={styles.CardImage} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        <hr />
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
      <div className={styles.PostIcons}>
        {is_owner ? (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>We know you like your own post, but you can't!</Tooltip>
            }>
            <i className={`${styles.OwnPostLike} fas fa-heartbeat`} />
          </OverlayTrigger>
        ) : like_id ? (
          <span onClick={handleUnlike}>
            <i className={`${styles.PostLiked} fas fa-heart`} />
          </span>
        ) : currentUser ? (
          <span onClick={handleLike}>
            <i className={`${styles.NotLiked} far fa-heart`} />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>You have to be logged in to like a post!</Tooltip>
            }>
            <i className="far fa-heart" />
          </OverlayTrigger>
        )}
        {likes_count}
        <Link to={`/posts/${id}`}>
          <i className="far fa-comments" />
        </Link>
        {comments_count}
      </div>
    </Card>
  );
};

export default Post;
