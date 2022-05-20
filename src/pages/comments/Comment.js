import React from "react";
import { Media } from "react-bootstrap";
import styles from "../../styles/Comment.module.css";
import navStyles from "../../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;
  return (
    <div>
      <Media className={styles.CommentContainer}>
        <Media.Body>
          <Link className={navStyles.NavLink} to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={25} />
            {owner}
          </Link>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
