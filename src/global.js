import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "./utils/format";
import Card from 'react-bootstrap/Card';


const Global = () => {
  const [cases, setCases] = useState({
    ActiveCases: 0,
    TotalDeath: 0,
    Recovered: 0,
  });

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setCases({
          ActiveCases: res.data.confirmed.value,
          TotalDeath: res.data.deaths.value,
          Recovered: res.data.recovered.value,
        });
      })
      .catch((err) => console.log(err));
  });

  return (
    <Card style={{ width: "18rem", backgroundColor: 'silver' }}>
      <Card.Img variant="top" src="https://www.nationsonline.org/gallery/World/World-map-countries-flags.jpg" />
      <Card.Body>
        <Card.Title>Cases</Card.Title>
        <Card.Text>
          <div>
            <h2>Global</h2>
            <h5>ActiveCases: {format.format(cases.ActiveCases)}</h5>
            <h5>TotalDeath: {format.format(cases.TotalDeath)}</h5>
            <h5>Recovered: {format.format(cases.Recovered)}</h5>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Global;
