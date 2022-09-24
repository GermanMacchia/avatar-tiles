import React, { useContext, useEffect } from "react";
import { PhotoContainer } from "./PhotoContainer/PhotoContainer";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { AppContext } from "../context/AppContext";

export default function PhotoList({ data }){
  const { avatarQuantity } = useContext(AppContext);

  return (
    <>
    {data?.map((el, idx) =>{
      <PhotoContainer id={idx} />
    })}
      {Array(avatarQuantity.quantity)
        .fill()
        .map((emptyElement, idx) => (
          <ErrorBoundary key={idx}>
            <PhotoContainer id={idx} />
          </ErrorBoundary>
        ))}
    </>
  );
};


