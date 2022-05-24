import { Avatar } from "@material-ui/core";
import React from "react";
import "./Suggestions.css";
import profile from "../../images/pp1.png";

const Suggestions = () => {
  return (
    <>
      <div>
        <div className="suggestions_container">
          <div className="suggestions_header">
            <div>Suggestions for you</div>
          </div>
          <div className="suggestions_body">
            <div className="suggestions_friends">
              <Avatar className="suggestions_img" src={profile}></Avatar>
              <div className="suggestions_username">Friend 1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestions;
