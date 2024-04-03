import React from "react";
import Spinner from "./icon/Spinner";

export default function LoadingWarm({color, size, textColor}) {
  return (
    <>
      <Spinner color={color ?? "#0d6efd"} size={size ?? "64"} />
      <p style={{ color: textColor }}>
        Estamos preparando los datos para usted
      </p>
    </>
  );
}
