import React from "react";
import styled from "styled-components";
import { Grid } from "./Comp";

const Con = styled.div`
  width: 70%;
  text-align: start;
  font-size: 15px;
  line-height: 1.5;
`;
const RAlign = styled.div`
  text-align: end;
`;
export default function About(props) {
  return (
    <Grid>
      <Con>
        <h2>Stop beating yourself up</h2>
        This app was developed with the intention of appreciating the baby steps
        you take each day towards becoming the person you are today. Life is a
        race and everybody wants to win! But all of us have different start
        points which we fail to realize. Here's a small attempt to log your
        accomplishments which you can come back to while having a really crappy
        day ,pat yourself and promise yourself to get through anything life
        throws at you
        <br />
        <b>Lots of love to all the fighters there! You are gonna make it</b>
        <br />
        <RAlign>
          <i>-Kshitija U Shetty</i>
        </RAlign>
      </Con>
    </Grid>
  );
}
