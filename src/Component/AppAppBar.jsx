import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import {NavLink} from "react-router-dom";

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '15px',
                            backgroundColor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                px: 0,
                            }}
                        >
                            <Typography
                                variant={'h5'}
                                sx={(theme) => ({
                                    color:
                                        theme.palette.mode === 'light'
                                            ? 'gray'
                                            : 'white',
                                })}
                            >
                                Cryptopulse
                            </Typography>

                        </Box>
                        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >



                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <NavLink
                                        to={"/"}
                                        style={({ isActive, isPending }) => ({
                                            color: isActive ? "#a6a2a2" : "white",
                                            fontWeight: isActive ? "bold" : "normal",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            opacity: isPending ? 0.5 : 1,
                                            cursor: "pointer",
                                        })}
                                    >
                                        Home
                                    </NavLink>
                                </MenuItem>
                                <MenuItem
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <NavLink
                                        to={"/about"}
                                        style={({ isActive, isPending }) => ({
                                            color: isActive ? "#a6a2a2" : "white",
                                            fontWeight: isActive ? "bold" : "normal",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            opacity: isPending ? 0.5 : 1,
                                            cursor: "pointer",
                                        })}
                                    >
                                        About us
                                    </NavLink>
                                </MenuItem>
                                <MenuItem
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <NavLink
                                        to={"/blog"}
                                        style={({ isActive, isPending }) => ({
                                            color: isActive ? "#a6a2a2" : "white",
                                            fontWeight: isActive ? "bold" : "normal",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            opacity: isPending ? 0.5 : 1,
                                            cursor: "pointer",
                                        })}
                                    >
                                        Blog
                                    </NavLink>
                                </MenuItem>
                                <MenuItem
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <NavLink
                                        to={"/features"}
                                        style={({ isActive, isPending }) => ({
                                            color: isActive ? "#a6a2a2" : "white",
                                            fontWeight: isActive ? "bold" : "normal",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            opacity: isPending ? 0.5 : 1,
                                            cursor: "pointer",
                                        })}
                                    >
                                        Features
                                    </NavLink>
                                </MenuItem>
                                <MenuItem
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <NavLink
                                        to={"/team"}
                                        style={({ isActive, isPending }) => ({
                                            color: isActive ? "#a6a2a2" : "white",
                                            fontWeight: isActive ? "bold" : "normal",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            opacity: isPending ? 0.5 : 1,
                                            cursor: "pointer",
                                        })}
                                    >
                                        Team
                                    </NavLink>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <MenuItem>
                                        <NavLink
                                            to={"/"}
                                            style={({ isActive, isPending }) => ({
                                                color: isActive ? "#a6a2a2" : "white",
                                                fontWeight: isActive ? "bold" : "normal",
                                                textDecoration: "none",
                                                transition: "color 0.3s ease",
                                                opacity: isPending ? 0.5 : 1,
                                                cursor: "pointer",
                                            })}
                                        >
                                            Home
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <NavLink
                                            to={"/about"}
                                            style={({ isActive, isPending }) => ({
                                                color: isActive ? "#a6a2a2" : "white",
                                                fontWeight: isActive ? "bold" : "normal",
                                                textDecoration: "none",
                                                transition: "color 0.3s ease",
                                                opacity: isPending ? 0.5 : 1,
                                                cursor: "pointer",
                                            })}
                                        >
                                            About us
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <NavLink
                                            to={"/blog"}
                                            style={({ isActive, isPending }) => ({
                                                color: isActive ? "#a6a2a2" : "white",
                                                fontWeight: isActive ? "bold" : "normal",
                                                textDecoration: "none",
                                                transition: "color 0.3s ease",
                                                opacity: isPending ? 0.5 : 1,
                                                cursor: "pointer",
                                            })}
                                        >
                                            Blog
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <NavLink
                                            to={"/features"}
                                            style={({ isActive, isPending }) => ({
                                                color: isActive ? "#a6a2a2" : "white",
                                                fontWeight: isActive ? "bold" : "normal",
                                                textDecoration: "none",
                                                transition: "color 0.3s ease",
                                                opacity: isPending ? 0.5 : 1,
                                                cursor: "pointer",
                                            })}
                                        >
                                            Features
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <NavLink
                                            to={"/team"}
                                            style={({ isActive, isPending }) => ({
                                                color: isActive ? "#a6a2a2" : "white",
                                                fontWeight: isActive ? "bold" : "normal",
                                                textDecoration: "none",
                                                transition: "color 0.3s ease",
                                                opacity: isPending ? 0.5 : 1,
                                                cursor: "pointer",
                                            })}
                                        >
                                            Team
                                        </NavLink>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

AppAppBar.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;