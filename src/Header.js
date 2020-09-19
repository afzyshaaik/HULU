import React from 'react';
import './Header.css';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';


function Header() {
    return (
        <div className="header">
           
            <div className="header__icons">

                <div className="header__icon header__icon--active">
                  <HomeRoundedIcon />
                  <p>Home</p>
                </div>

                <div className="header__icon">
                  <FlashOnRoundedIcon />
                  <p>Trending</p>
                </div>

                <div className="header__icon">
                  <LiveTvRoundedIcon />
                  <p>Verified</p>
                </div>

                <div className="header__icon">
                 <VideoLibraryRoundedIcon />
                 <p>Collections</p>
                </div>

                <div className="header__icon">
                 <SearchRoundedIcon />
                 <p>Search</p>
                </div>

                <div className="header__icon">
                 <PersonOutlineRoundedIcon />
                 <p>Profile</p>
                </div>            

             

             

             

            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png?w=960" alt=""/>
        </div>
    )
}

export default Header
