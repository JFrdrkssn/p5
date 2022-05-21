import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PopularCards.module.css";
import navStyles from "../../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";

const PopularProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });
  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${styles.PopularCard} ${mobile && "d-lg-none text-center"}`}>
      {popularProfiles.results.length ? (
        <>
          <p>Top followed profiles</p>
          {mobile
            ? popularProfiles.results.slice(0, 4).map((profile) => (
                <>
                  <Link
                    className={navStyles.NavLink}
                    to={`/profiles/${profile.id}`}>
                    <Avatar src={profile.image} height={20} />
                    <span key={profile.id}>{profile.owner}</span>
                  </Link>
                  <span className={styles.Count}>
                    {profile.followers_count}
                  </span>
                  <br />
                </>
              ))
            : popularProfiles.results.map((profile) => (
                <>
                  <Link
                    className={navStyles.NavLink}
                    to={`/profiles/${profile.id}`}>
                    <Avatar src={profile.image} height={20} />
                    <span key={profile.id}>{profile.owner}</span>
                  </Link>
                  <span className={styles.Count}>
                    {profile.followers_count}
                  </span>
                  <br />
                </>
              ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
