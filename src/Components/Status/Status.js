import React, { useEffect, useState } from "react";
import "./Status.css";
import Avatar from "@material-ui/core/Avatar";
import statusImg from "../../images/pp1.png";
import uploadImage from '../../images/statusadd.png'

const Status = () => {
  const [statusList, setStatusList] = useState([]);

  const getData = () => {
    let data = [
      {
        username: "parate_prateek",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user1",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user2",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user3",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user4",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user5",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user6",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user7",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user8",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user9",
        imageURL: "../../images/pp1.png",
      },
      {
        username: "test_user10",
        imageURL: "../../images/pp1.png",
      },
    ];
    setStatusList(data);
  };

  useEffect(() => {
    getData();
  }, statusList);
  

  return (
    <>
      <div className="status_container">
        <img src={uploadImage} className="status_uploadimg" width="55px" height="55px"></img>
        {statusList.map((status, index) => {
          return (
            <div className="status">
              <img className="status_img" src={statusImg}></img>
              <div className="status_text">{status.username}</div>
            </div>
          );
        })}
{/* 
        <div className="status">
          <img className="status_img" src={statusImg}></img>
          <div className="status_text">parate_prateek</div>
        </div> */}
      </div>
    </>
  );
};

export default Status;
