import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "./utils/format";
import Card from "react-bootstrap/Card";

const Indonesia = () => {
  const [indonesia, setIndonesia] = useState({
    ActivateCases: 0,
    TotalDeath: 0,
    Recovered: 0,
  });

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setIndonesia({
          ActivateCases: res.data.jumlahKasus,
          TotalDeath: res.data.meninggal,
          Recovered: res.data.sembuh,
        });
      })
      .catch((err) => console.log(err));
  });

  return (
    <Card style={{ width: "18rem", backgroundColor: "silver" }}>
      <Card.Img
        variant="top"
        src="https://cdn1-production-images-kly.akamaized.net/nxw9VZLmGw16Yz5aFJ2BinILxNE=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3179574/original/060002700_1594727643-Banner_infografis_prediksi_puncak_covid-19.jpg"
      />
      <Card.Body>
        <Card.Title>Cases</Card.Title>
        <Card.Text>
          <div>
            <h2>Indonesia</h2>
            <h5>ActivateCases: {format.format(indonesia.ActivateCases)}</h5>
            <h5>TotalDeath: {format.format(indonesia.TotalDeath)}</h5>
            <h5>Recovered: {format.format(indonesia.Recovered)}</h5>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Indonesia;
