import React from 'react'
// import { AppBar, Toolbar, IconButton, Badge, MenuIem, Menu, Typography } from '@material-ui/core';
// import { ShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <>
            {/* <AppBar position="fixed" className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography>
                        <img src='https://picsum.photos/200/300' alt="Commer.js" height="25px" className={classes.image} />
                    Commerce.js
                </Typography>
                    <div className="classes.grow"></div>
                    <div className="classes.button">
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar> */}
        </>
    )
}

export default Navbar
