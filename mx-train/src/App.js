import React, { useState } from "react";
import { Button, ButtonGroup, Form, Input } from "reactstrap";
import "./App.css";

function Player({ player, index, removePlayer }) {
  const [score, setScore] = useState(0);

  return (
    <div className="player">
      {player.text}
      <Button className="x" color="danger" onClick={() => removePlayer(index)}>
        x
      </Button>
      <div className="score">{score}</div>
      <div className="buttons">
        <ButtonGroup>
          <Button
            color="success"
            onClick={() => {
              setScore(score + 1);
            }}
          >
            Add 1
          </Button>
          <Button
            color="success"
            onClick={() => {
              setScore(score + 5);
            }}
          >
            Add 5
          </Button>
          <Button
            color="success"
            onClick={() => {
              setScore(score + 10);
            }}
          >
            Add 10
          </Button>
        </ButtonGroup>
        <br />
        <Button
          color="warning"
          onClick={() => {
            setScore(0);
          }}
        >
          Reset
        </Button>
        <br />
        <ButtonGroup>
          <Button
            color="danger"
            onClick={() => {
              setScore(score - 1);
            }}
          >
            Minus 1
          </Button>
          <Button
            color="danger"
            onClick={() => {
              setScore(score - 1);
            }}
          >
            Minus 5
          </Button>
          <Button
            color="danger"
            onClick={() => {
              setScore(score - 10);
            }}
          >
            Minus 10
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

function PlayerForm({ addPlayer }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addPlayer(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button className="add-player" color="success" onClick={handleSubmit}>
        Add New Player
      </Button>
    </Form>
  );
}

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = text => {
    const newPlayers = [...players, { text }];
    setPlayers(newPlayers);
  };

  const removePlayer = index => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  return (
    <div className="app">
      <h1>MX-Train Score Keeper</h1>
      <div className="player-list">
        {players.map((player, index) => (
          <Player
            key={index}
            index={index}
            player={player}
            removePlayer={removePlayer}
          />
        ))}
        <PlayerForm addPlayer={addPlayer} />
      </div>
    </div>
  );
}

export default App;
