import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "./Comp";
const Form = styled.form`
  padding: 2%;
  border: 2px solid;
  margin: 5%;
  background: black;
`;
const Input = styled.input`
  margin: 2%;
  width: 90%;
  padding: 2%;
  border: 2px solid;
`;
const Textarea = styled.textarea`
  margin: 2%;
  width: 90%;
  height: 100px;
  padding: 2%;
  border: 2px solid;
`;
const Button = styled.button`
  width: 94%;
  padding: 2%;
  margin: 2%;
  border: 2px solid;
`;

const Error = styled.div`
  color: red;
  width: 80%;
  text-align: start;
  background: black;
  margin: 3%;
`;
export default function Add(props) {
  const [Heading, setHeading] = useState("");
  const [Desc, setDesc] = useState("");
  return (
    <Grid>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          document.getElementById("btn").disabled = true;
          props.sub(Heading, Desc);
          setDesc("");
          setHeading("");
          document.getElementById("btn").disabled = false;
        }}
      >
        <Input
          value={Heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Looks like someone's having a good day :)"
        ></Input>
        <Textarea
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Pen it down to cherish it forever!"
        ></Textarea>
        <Button id="btn">Add this feather to your cap ^_^</Button>
        {props.error ? (
          <Error>Please fill all the details to submit</Error>
        ) : (
          <Error />
        )}
      </Form>
    </Grid>
  );
}
