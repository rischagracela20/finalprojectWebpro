import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {format} from "./utils/format"

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
    <div>
      <h2>Indonesia</h2>
      <h5>ActivateCases: {format.format(indonesia.ActivateCases)}</h5>
      <h5>TotalDeath: {format.format(indonesia.TotalDeath)}</h5>
      <h5>Recovered: {format.format(indonesia.Recovered)}</h5>
    </div>
  );
};

export default Indonesia;
