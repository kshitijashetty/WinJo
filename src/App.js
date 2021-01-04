import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
  Switch
} from "react-router-dom";
import "./styles.css";
import Add from "./components/Add";
import Wins from "./components/Wins";
import About from "./components/About";
const SLink = styled(Link)`
  padding: 15px;
  background: inherit;
  color: white;
  text-decoration: none;
`;
const Flex = styled.div`
  display: flex;
  background: black;
  top: 12%;
  width: 100%;
  border: 2px solid;
`;

const H1 = styled.h1`
  width: 100%;
  padding: 1%;
  margin: 0;
`;

export default function App() {
  const objLS = JSON.parse(localStorage.getItem("wins"));
  const [wins, setWin] = useState(objLS ? [...objLS.results] : []);
  const [Fwins, setFWin] = useState(objLS ? [...objLS.results] : []);
  const [error, setError] = useState(false);

  const onAdd = (Heading, Desc) => {
    if (Heading && Desc) {
      const today = new Date();
      setWin([
        ...wins,
        {
          head: Heading,
          desc: Desc,
          date:
            today.getDate() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getFullYear()
        }
      ]);
      setFWin([
        ...Fwins,
        {
          head: Heading,
          desc: Desc,
          date:
            today.getDate() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getFullYear()
        }
      ]);
      setError(false);
    } else {
      setError(true);
    }
    return;
  };
  const onSort = (action) => {
    if (action === "A") {
      setWin([
        ...wins.sort(
          (a, b) =>
            String(
              b.date.substr(6, 4) + b.date.substr(3, 2) + b.date.substr(0, 2)
            ) -
            String(
              a.date.substr(6, 4) + a.date.substr(3, 2) + a.date.substr(0, 2)
            )
        )
      ]);
    } else {
      setWin([
        ...wins.sort(
          (a, b) =>
            String(
              a.date.substr(6, 4) + a.date.substr(3, 2) + a.date.substr(0, 2)
            ) -
            String(
              b.date.substr(6, 4) + b.date.substr(3, 2) + b.date.substr(0, 2)
            )
        )
      ]);
    }
  };
  const onFilter = (searchTerm) => {
    setWin([
      ...Fwins.filter(
        (x) =>
          x.head.toLowerCase().match(searchTerm.toLowerCase()) ||
          x.desc.toLowerCase().match(searchTerm.toLowerCase())
      )
    ]);
  };

  useEffect(() => {
    localStorage.setItem("wins", JSON.stringify({ results: wins }));
  });
  return (
    <div className="App">
      <H1>Kshi's WinJo</H1>
      <Router>
        <Flex>
          <SLink to="/About" activeClassName="active">
            About
          </SLink>
          <SLink to="/Add" activeClassName="active">
            Add
          </SLink>
          <SLink to="/Wins" activeClassName="active">
            My Wins
          </SLink>
        </Flex>

        <Switch>
          <Route path="/About" render={(props) => <About />}></Route>
          <Route
            path="/Add"
            render={(props) => <Add error={error} sub={onAdd} />}
          ></Route>
          <Route
            path="/Wins"
            render={(props) => (
              <Wins aWin={wins} sort={onSort} filter={onFilter} />
            )}
          ></Route>

          <Route path="/" render={(props) => <About />}></Route>
        </Switch>
      </Router>
    </div>
  );
}
