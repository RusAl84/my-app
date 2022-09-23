import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        AvatarGroup max = { 4 } > <
        Avatar alt = "Remy Sharp"
        src = "/static/images/avatar/1.jpg" / >
        <
        Avatar alt = "Travis Howard"
        src = "/static/images/avatar/2.jpg" / >
        <
        Avatar alt = "Cindy Baker"
        src = "/static/images/avatar/3.jpg" / >
        <
        Avatar alt = "Agnes Walker"
        src = "/static/images/avatar/4.jpg" / >
        <
        Avatar alt = "Trevor Henderson"
        src = "/static/images/avatar/5.jpg" / >
        <
        /AvatarGroup> <
        /header> < /
        div >
    );
}

export default App;