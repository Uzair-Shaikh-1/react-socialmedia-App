import './rightbar.css'
import { Users2 } from '../../dummyData'
import Online from '../online/Online'


const Rightbar = ({ profile }) => {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/assests/gift.png" alt="" />
                    <span className="birthdayText"><b>Ali kaka</b> and <b> 3 other Freinds</b> have birthday today</span>
                </div>
                <img src="/assests/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Freinds</h4>
                <ul className="rightbarFreindList">
                    {Users2.map((u) => {
                        return <Online key={u.id} user={u} />
                    })}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Hyderabad</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Pakistan</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src="/assests/person/1.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="/assests/person/2.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Jane Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="/assests/person/3.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Alice Smith</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="/assests/person/4.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Alice Smith</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="/assests/person/5.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Alice Smith</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="/assests/person/6.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Alice Smith</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar