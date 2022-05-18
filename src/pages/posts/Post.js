import React from "react";
import styles from "../../styles/Post.module.css";
import appStyles from "../../App.module.css";
import navStyles from "../../styles/NavBar.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

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
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        <hr />
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
      <div className={`${styles.PostBar} text-right`}>
        {is_owner ? (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>We know you like your own post, but you can't!</Tooltip>
            }>
            <i className="far fa-heart" />
          </OverlayTrigger>
        ) : like_id ? (
          <span onClick={() => {}}>
            <i className="fas fa-heart" />
          </span>
        ) : currentUser ? (
          <span onClick={() => {}}>
            <i className="far fa-heart" />
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
