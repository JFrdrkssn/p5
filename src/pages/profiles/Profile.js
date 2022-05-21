import React from "react";
import styles from "../../styles/Profile.module.css";
import navStyles from "../../styles/NavBar.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { Button } from "react-bootstrap";

const Profile = (props) => {
  const { profile, mobile, imageSize = 30 } = props;
  const { id, following_id, image, owner, followers_count } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div
      className={`my-2 d-flex align-items-center ${mobile && "flex-column"}`}>
      <div>
        <Link
          className={`${navStyles.NavLink} align-self-center`}
          to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
          <strong>{owner}</strong>
          <span className={`${styles.Count} pl-2`}>{followers_count}</span>
        </Link>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`${btnStyles.Button} ${btnStyles.White}`}
              onClick={() => {}}>
              Unfollow
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright}`}
              onClick={() => {}}>
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
