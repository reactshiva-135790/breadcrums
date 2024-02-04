import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const pathValue = pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumbs">
    
      {pathValue.length === 0 && (
        <>
          <Link to="/">Home</Link>
        </>
      )}

      {pathValue.map((name, index) => (
        <span key={index}>
          {" / "}
          {index === pathValue.length - 1 ? (
            <span>{name}</span>
          ) : (
            <Link to={`/${name}`}>{name}</Link>
          )}
        </span>
      ))}
    </div>
  );
};

export { Breadcrumbs };
