import React from "react";

export default function Logo({ size, className}) {
  return (
    <div className={"logo flex " + className} style={{ scale: size ?? "1" }}>
      TS
    </div>
  );
}
