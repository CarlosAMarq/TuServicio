import React, { useEffect, useState } from "react";
import "./index.css";

export default function Dropdown({ selected, setSelected, options, title }) {
  const defaultOptions = options ?? [
    "Ing. Electrico",
    "Pandero",
    "Actriz Porno",
  ];
  const separator = ", ";

  const handleChange = (e) => {
    const value = defaultOptions[e.target.value];
    const selectedArray = selected.split(separator);

    if (selectedArray.includes(value)) {
      const pan = selectedArray.filter((s) => s != value);
      setSelected(pan.join(separator));
      return;
    }
    if (selected != "") setSelected((prev) => value + separator + prev);
    else setSelected((prev) => value);
  };

  // useEffect(() => {
  //   const selectedArray = selected.split(" | ");
  // }, [selected]);

  const isSelected = (index) => {
    const selectedArray = selected.split(separator);
    return selectedArray.includes(defaultOptions[index]);
  };

  return (
    <div className="selector">
      <p>{title ?? "Dropdown"}</p>
      <select
        className={selected == "" ? "cdropdown placeholder" : "cdropdown"}
        value={0}
        onChange={handleChange}
      >
        <option value="0" style={{ display: "none" }}>
          {selected != "" ? selected : "Seleccione una o mas categorías"}
        </option>
        {defaultOptions.map((o, i) => (
          <option value={i} key={i} className={isSelected(i) && "was-selected"}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
