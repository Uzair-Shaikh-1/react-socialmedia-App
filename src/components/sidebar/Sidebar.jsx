import CloseFriend from '../closeFriend/CloseFriend'
import './sidebar.css'
import { RssFeed, School, Event, WorkOutline, HelpOutline, Bookmark, Group, Chat } from '@material-ui/icons'
import { Users2 } from '../../dummyData'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Chats
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Bookmark
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Questions
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            job
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Event
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFreindList">
                    {Users2.map((u) => {
                        return <CloseFriend key={u.id} user={u} />
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Sidebar