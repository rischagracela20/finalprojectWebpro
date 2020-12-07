import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {format} from "./utils/format"

const Global = () => {
    const [cases, setCases] = useState({
      ActiveCases:0,
      TotalDeath:0,
      Recovered:0
    });

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setCases({
          ActiveCases:res.data.confirmed.value,
          TotalDeath:res.data.deaths.value,
          Recovered:res.data.recovered.value
        });
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
     <h2>Global</h2>
  <h5>ActiveCases: {format.format(cases.ActiveCases)}</h5>
  <h5>TotalDeath: {format.format(cases.TotalDeath)}</h5>
  <h5>Recovered: {format.format(cases.Recovered)}</h5>
    </div>
  );
}

export default Global;