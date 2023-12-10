import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
//import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  //Stato per memorizzare i post
  const[posts, setPosts] = useState([])

  //Effetto per caricare i post dal server all'avvio del componente
  useEffect(() => {
    fetch("http://localhost:3030/api/blogPosts")
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error(err));
      
  }, []);

  return (
    <Row>
      {posts.map((post, i) => (
        <Col
          key={`item-${i}`}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
