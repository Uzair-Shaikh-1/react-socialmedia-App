import './closeFriend.css'

const CloseFriend = ({ user }) => {
    return (
        <li className="sidebarFreind">
            <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
            <span className="sidebarFreindName">{user.username}</span>
        </li>
    )
}

export default CloseFriend