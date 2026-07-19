import React, { useState } from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'

const Post = ({ post }) => {
    const [like, setlike] = useState(post.like)
    const [isliked, setisliked] = useState(false)

    const likeHandler = () => {
        setlike(isliked ? like - 1 : like + 1)
        setisliked(!isliked)
    }



    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter(u => u.id === post?.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter(u => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="tthis is wherer post " />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assests/like.png" alt="" onClick={likeHandler} />
                        <img className='likeIcon' src="/assests/heart.png" alt="" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people Like  it</span>
                    </div>

                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post