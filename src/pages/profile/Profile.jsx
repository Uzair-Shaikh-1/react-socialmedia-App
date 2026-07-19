import './profile.css'
import React from 'react'

import Topbar from '../../components/topbar/Topbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
const Profile = () => {
    return (
        <div className=""> <>
            <Topbar />
            <div className="profile">

                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                            <img className='profileCoverImg' src='/assests/post/3.jpeg' alt="" />
                            <img className='profileUserImg' src='/assests/person/7.jpeg' alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Uzair Shaikh</h4>
                            <span className="profileInfoDesk">Hello My Freinds</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </></div>

    )
}

export default Profile