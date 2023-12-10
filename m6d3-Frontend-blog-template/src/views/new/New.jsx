import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
const NewBlogPost = props => {
  //const [text, setText] = useState("");
  //const handleChange = useCallback(value => {
  //  setText(value);
  //});
  const [blogPost, setBlogPost] = useState ({});

  const handleSubmit = (e) => {
    debugger //serve a debaggare?
    e.preventDefault()
    //Will POST blogPost
    console.table(blogPost)

    const blogPost = {
      category: "tecnology",
      title: "Test Blog Post",
      cover: "https://place-hold.it/500",
      readTime: {
        value: 3,
        unit: "minutes",
      },
      author: {
        name: "Michey Mouse",
      },
      author: {
        name: "Mickey Mouse",
      },
      content: "<div>This is a test blog post</div>",
    }

    fetch("http://localhost:3030/api/blogPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogPost),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }

  console.log(blogPost)

  return (
    <Container className="new-blog-container">
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Titolo</Form.Label>
          <Form.Control 
          size="lg" 
          placeholder="Title" 
          value={blogPost.title || ""} 
          onChange={(e) =>{
            setBlogPost((b) => ({
              ...b, 
              title: e.target.value,
          }))
        }} 
      />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control 
          size="lg" 
          as="select" 
          value={blogPost.category}
          onChange={(e) => {
            setBlogPost((b) => ({
              ...b,
              category: e.target.value,
            }))
          }}
        >
            <option value="technology">Categoria 1</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Contenuto Blog</Form.Label>
          <ReactQuill 
            value={blogPost.content || ""} 
            onChange={(text) => {
              setBlogPost((b) => ({
                ...b,
                content: text,
              }))
            }}        
            className="new-blog-content" 
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
          >
            Invia
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
