import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import { Grid as Gd } from "./Comp";
const Grid = styled(Gd)`
  place-items: start;
  justify-items: center;
  &:hover {
    overflow-y: scroll;
  }
`;
const Flex = styled.div`
  display: flex;
  margin: 2.5vw;
  width: inherit;
`;
const Div = styled.div`
  display: grid;
  place-items: center;
  padding: 5%;
`;
const Button = styled.button`
  background: black;
  color: white;
  margin: 0.5%;
  padding: 2px;
  border: 0px;
`;
const Input = styled.input`
  background: black;
  color: white;
  margin: 0.5%;
  padding: 0.7%;
  border: 0px;
  width: 30%;
`;

export default function Wins(props) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Flex>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.sort("A");
          }}
        >
          Sort &#8593;
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.sort("D");
          }}
        >
          Sort &#8595;
        </Button>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter..."
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.filter(searchTerm);
            setSearchTerm("");
          }}
        >
          Filter &#128269;
        </Button>
      </Flex>
      <Grid>
        {props.aWin.length ? (
          props.aWin.map((x, i) => (
            <Card head={x.head} key={i} date={x.date} desc={x.desc} />
          ))
        ) : (
          <Div>Start logging yours wins, What are you waiting for?</Div>
        )}
      </Grid>
    </>
  );
}
