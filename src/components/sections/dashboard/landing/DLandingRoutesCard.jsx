/* * */
/* IMPORTS */
import React from "react";
import Player from "../../../common/animation/Player";

/* * */
/* * * * */
const DLandingRoutesCard = ({ label, animation, onClick }) => {
  return (
    <div
      className="display-card text-center sh-light grow animate crs-pointer my-5 pb-4"
      onClick={onClick}
    >
      <Player animationData={animation} height={300} />
      <h4 className="mt-4">{label}</h4>
    </div>
  );
};

/* * */
export default DLandingRoutesCard;
