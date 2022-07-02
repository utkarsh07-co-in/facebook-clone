import React, { useState } from 'react';
import "../styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    const [{ user }] = useState(false);
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://imgur.com/download/VgkNYXI/facebook+logo+png+to+use" alt="logo" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
                <div className="header__center">
                    <div className="header__option
                    header__option--active">
                        <HomeIcon fontSize="large" />
                    </div>
                </div>
                <div className="header__middle">
                    <div className="header__option">
                        <FlagIcon fontSize="large" />
                    </div>
                </div>
                <div className="header__middle">
                    <div className="header__option">
                        <SubscriptionsOutlinedIcon fontSize="large" />
                    </div>
                </div>
                <div className="header__middle">
                    <div className="header__option">
                        <StorefrontOutlinedIcon fontSize="large" />
                    </div>
                </div>
                <div className="header__middle">
                    <div className="header__option">
                        <SupervisedUserCircleRoundedIcon fontSize="large" />
                    </div>
                </div>

            </div>
            <div className="header__right"></div>
            <div className="header__info">
                <Avatar src={user?.photoURL} />
                <h4>{user?.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    );
}
export default Header;