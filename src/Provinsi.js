import React, { useState, useEffect } from "react";
import axios from "axios";
import {format} from "./utils/format"

const Provinsi = () => {
  const [prov, setProv] = useState([]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setProv(res.data.data);
      })
      .catch((err) => console.log(err));
  });

  const Value = (prov) => {
    if (prov.length !== 0) {
      let a = 0;
      return prov.map((provinsi) => (
        <tr key={provinsi.fid}>
          <td>{++a}</td>
          <td>{provinsi.provinsi}</td>
          <td>{format.format(provinsi.kasusPosi)}</td>
          <td>{format.format(provinsi.kasusSemb)}</td>
          <td>{format.format(provinsi.kasusMeni)}</td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td>load</td>

          <td>load</td>
          <td>load</td>
          <td>load</td>
        </tr>
      );
    }
  };
  return (
    <div>
      <h2>Provinsi</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Provinsi</th>
            <th>ActivateCases</th>
            <th>Recovered</th>
            <th>TotalDeath</th>
          </tr>
        </thead>
        <tbody>
        {Value(prov)}
        </tbody>
      </table>
    </div>
  );
};

export default Provinsi;
