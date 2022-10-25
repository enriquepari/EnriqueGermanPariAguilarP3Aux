import React, { useState } from 'react'
import { Box, Grid } from '@material-ui/core';
import { NavbarPari } from './NavbarPari';
import { Routes, Route } from 'react-router-dom';
import { HomePari } from '../home/HomePari';
import { AboutPari } from '../about/AboutPari';
import './routesLayoutPari.css';

export const RoutesLayoutPari = () => {
    const [darkMode, setDarkMode] = useState(true);
    function handleClick() {
        setDarkMode(!darkMode);
    }
    return (
        <Grid container spacing={1} className={`content ${darkMode? 'dark': 'light'}`}>
            <Grid item xs={11} component={'header'} className={`${darkMode? 'dark': 'light'}`}>
                <NavbarPari darkMode={darkMode} handleClick={handleClick} />
            </Grid>
            <Grid item xs={11} className={`container-conten  ${darkMode? 'dark' : 'light'}`}>
                <Routes>
                    <Route exact path={'/'} element={<HomePari />} />
                    <Route exact path={'/about'} element={<AboutPari />} />
                </Routes>
            </Grid>
            <Grid item xs={11} component={'footer'}>
                <Box className={`${darkMode? 'dark' : 'light'} text-footer`}>
                    <p>template created with &hearts; by <a target={'_blank'} rel={'noopener noreferrer'} href={'https://es.reactjs.org/'}>react js</a></p>
                    <p>&coppy;2022</p>
                </Box>
            </Grid>
        </Grid>
    )
}