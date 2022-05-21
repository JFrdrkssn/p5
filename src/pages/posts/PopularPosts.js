import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/PopularCards.module.css";
import navStyles from "../../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";

const PopularPosts = ({ mobile }) => {
  const [postsData, setPostsData] = useState({
    pagePosts: { results: [] },
    popularPosts: { results: [] },
  });
  const { popularPosts } = postsData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/posts/?ordering=-comments_count");
        setPostsData((prevState) => ({
          ...prevState,
          popularPosts: data,
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
      {popularPosts.results.length ? (
        <>
          <p>Top commented posts</p>
          {mobile
            ? popularPosts.results.slice(0, 4).map((post) => (
                <>
                  <Link className={navStyles.NavLink} to={`/posts/${post.id}`}>
                    <Avatar src={post.profile_image} height={20} />
                    <span key={post.id}>{post.title}</span>
                  </Link>
                  <span className={styles.Count}>{post.comments_count}</span>
                  <br />
                </>
              ))
            : popularPosts.results.map((post) => (
                <>
                  <Link className={navStyles.NavLink} to={`/posts/${post.id}`}>
                    <Avatar src={post.profile_image} height={20} />
                    <span key={post.id}>{post.title}</span>
                  </Link>
                  <span className={styles.Count}>{post.comments_count}</span>
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

export default PopularPosts;
