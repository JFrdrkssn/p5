import React from "react";
import styles from "../../styles/Profile.module.css";
import navStyles from "../../styles/NavBar.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { Button } from "react-bootstrap";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

const Profile = (props) => {
  const { profile, mobile, imageSize = 30 } = props;
  const { id, following_id, image, owner, followers_count } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

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
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleUnfollow(profile)}>
              Unfollow
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright}`}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleFollow(profile)}>
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
