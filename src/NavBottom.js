import React, { useState } from "react";
import "./css/navbottom.css";

const NavBottom = () => {
  const [showOptions, setShowOptions] = useState(false);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }

  return (
    <div className="nav-bottom-container">
      <div className="chair" onClick={toggleOptions}>
        Chair
        {showOptions && (
          <select name="chair" className="chair-selections">
            <option value="adde">Adde</option>
            <option value="alvsta">Alvsta</option>
            <option value="froset">Froset</option>
            <option value="karlpetter">Karlpetter</option>
            <option value="klinten">Klinten</option>
            <option value="lidas">Lidas</option>
            <option value="linneback">Linneback</option>
            <option value="manhult">Manhult</option>
            <option value="nolmyra">Nolmyra</option>
            <option value="odger">Odger</option>
            <option value="ostano">Ostano</option>
            <option value="sigtrygg">Sigtrygg</option>
            <option value="stefan">Stefan</option>
            <option value="teodores">Teodores</option>
            <option value="tobias">Tobias</option>
            <option value="voxlov">Voxlov</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default NavBottom;
