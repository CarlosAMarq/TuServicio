import React from "react";
import Spinner from "./icon/Spinner";

export default function Loading() {
  return (
    <div className="c-center" style={{ height: "300px" }}>
      <Spinner size={100} color={"#0d6efd"} />
    </div>
  );
}
