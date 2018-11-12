import React from 'react';
import '../stylesheets/TopBarApp.css'
import { withStyles } from '@material-ui/core/styles';
import {ReactComponent as LogoLong} from "../static/logo_long.svg";
import {ReactComponent as LogoSquare} from "../static/logo_square.svg";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button/Button";

const styles = {
    menuButton: {
        marginLeft: 20,
        marginRight: 20,
    },
};

function TopAppBar(props) {
    const { classes, handleHamburgerClick } = props;
    return (
        <div className="TopAppBar">
            {window.innerWidth > 600 ? <LogoLong className="logo-long" alt="logo"/> : <LogoSquare className="logo-square" alt="logo"/>}
            <div className="grow"></div>
            {/*<Button variant="outlined" color="primary">Login</Button>*/}
            <IconButton
                aria-label="Menu"
                className={classes.menuButton}
                onClick={handleHamburgerClick}
            >
                <MenuIcon color="primary" />
            </IconButton>
        </div>
    );
}

export default withStyles(styles)(TopAppBar);