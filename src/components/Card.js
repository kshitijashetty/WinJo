import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 2%;
  margin: 1%;
  background: black;
  color: white;
  width: 90%;
  opacity: 0.95;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 1;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  &:last-child {
    margin-bottom: 25vh;
  }
  @media (max-width: 600px) {
    &:last-child {
      margin-bottom: 10vh;
    }
  }
  text-align: start;
`;
const H3 = styled.h3`
  background: inherit;
  color: inherit;
  width: 80%;
  text-align: start;
`;
const H6 = styled.h6`
  background: inherit;
  color: inherit;
  text-align: end;
  width: 20%;
`;
const Flex = styled.div`
  display: flex;
  background: inherit;
  color: inherit;
`;
export default function (props) {
  return (
    <Card>
      <Flex>
        <H3>{props.head}</H3>
        <H6>{props.date}</H6>
      </Flex>
      {props.desc}
    </Card>
  );
}
