import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import "./Contacts.css"
import { IconButton } from '@material-ui/core';
import Contact from './Contact'

function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts__options">
                <div className="contacts__option">
                    <h4>Contacts</h4>
                </div>
                <div className="contacts__option">
                    <IconButton>
                        <VideoCallIcon/>
                    </IconButton>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="contacts__list">
                <Contact 
                    image="https://avatars.githubusercontent.com/u/28591018?v=4" 
                    name="Dev"
                />
                <Contact 
                    image="https://avatars.githubusercontent.com/u/28591018?v=4" 
                    name="Dev"
                />
                <Contact 
                    image="https://avatars.githubusercontent.com/u/28591018?v=4" 
                    name="Dev"
                />
                <Contact 
                    image="https://avatars.githubusercontent.com/u/28591018?v=4" 
                    name="Dev"
                />
                <Contact 
                    image="https://avatars.githubusercontent.com/u/28591018?v=4" 
                    name="Dev"
                />
            </div>
        </div>
    )
}

export default Contacts
