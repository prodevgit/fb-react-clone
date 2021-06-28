import React from 'react'
import logo from './logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar,IconButton, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'

const useStyles = makeStyles(theme => ({
    blueHoverFocus: {
      "&:hover, &.Mui-focusVisible": { color: "#2e81f4" }
    },
    blueFocus: {
         color: "#2e81f4" 
      },

  }));

function Header() {
    const classes = useStyles();
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="logo"/>
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>
            <div className="header__center">
                <div className={`header__option--active`}>
                    <IconButton>
                        <HomeIcon className= {classes.blueFocus} fontSize="large"/>
                    </IconButton>
                </div>
                <div className="header__option">
                    <IconButton>
                        <FlagIcon className = {`${classes.blueHoverFocus}`} fontSize="large"/>
                    </IconButton>
                </div>
                <div className="header__option">
                    <IconButton>
                        <SubscriptionsOutlinedIcon className = {`${classes.blueHoverFocus}`} fontSize="large"/>
                    </IconButton>
                </div>
                <div className="header__option">
                    <IconButton>
                        <StorefrontOutlinedIcon className = {`${classes.blueHoverFocus}`} fontSize="large"/>
                    </IconButton>
                </div>
                <div className="header__option">
                    <IconButton>
                        <SupervisedUserCircleIcon className = {`${classes.blueHoverFocus}`} fontSize="large"/>
                    </IconButton>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <IconButton>
                        <Avatar/>
                    </IconButton>
                    <h4>Dev</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
