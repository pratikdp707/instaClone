import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import './MainPage.css'
import uploadImage from '../../images/upload1.png'

const MainPage = () => {


    const [posts, setPosts] = useState([]);

    const getData = () => {
        let data = [
            {
                id : "1234",
                Username : "parate_prateek",
                postImg : "https://miro.medium.com/max/1400/1*cGZF-4g_DbSgUsE3yjmphA.jpeg",
                Likes : "4122"
            },
            {
                id : "1234",
                Username : "parate_prateek",
                postImg : "https://miro.medium.com/max/1400/1*cGZF-4g_DbSgUsE3yjmphA.jpeg",
                Likes : "4122"
            },
            {
                id : "1234",
                Username : "parate_prateek",
                postImg : "https://miro.medium.com/max/1400/1*cGZF-4g_DbSgUsE3yjmphA.jpeg",
                Likes : "4122"
            },
            {
                id : "1235",
                Username : "test_user_1",
                postImg : "https://static.toiimg.com/thumb/msid-77573846,width-900,height-1200,resizemode-6.cms",
                Likes : "231"
            },
            {
                id : "1235",
                Username : "test_user_1",
                postImg : "https://static.toiimg.com/thumb/msid-77573846,width-900,height-1200,resizemode-6.cms",
                Likes : "231"
            },
            {
                id : "1235",
                Username : "test_user_1",
                postImg : "https://static.toiimg.com/thumb/msid-77573846,width-900,height-1200,resizemode-6.cms",
                Likes : "231"
            }
        ]
        setPosts(data);
    }

    useEffect(() => {
      getData();
    }, [posts])
    
  return (
    <>
        <div style={{"textAlign":"center", "margin":"10px 0px"}}>
            <img className='mainpage_uploadimg' src={uploadImage}></img>
        </div>
        {
            posts.map((post, index) => {
                return(
                    <Post post = {post} />
                )
            })
        }
    </>
  )
}

export default MainPage