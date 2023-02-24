import React from 'react'
import { Button, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import brainbusterslogo from "../assets/brainbusterslogo.png"

const Navigation = ({
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
}) => {

    return (
        <>
            <Nav className='nav'>
                    <NavItem className='nav-item'>
                        <NavLink to="/" className="nav-link">
                        <img
                            src={brainbusterslogo}
                            alt="BrainBusters Logo"
                            className="bb-logo"
                        />
                        </NavLink>
                        
                    </NavItem>
                {logged_in && (
                <>
                    
                    <NavItem className='nav-item'>
                        <NavLink to="/postindex" className="nav-link">
                            <Button className='nav-button'>View All Posts</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem className='nav-item'>
                        <NavLink to="/mypost" className="nav-link">
                            <Button className='nav-button'>My Posts</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem className='nav-item'>
                        <NavLink to="/postnew" className="nav-link">
                            <Button className='nav-button'>Create Post</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem className='nav-item'>
                        <a href={sign_out_route} className="nav-link">
                        <Button className='nav-button'>Sign Out</Button>
                        </a>
                    </NavItem>
                </>
                )}
                {!logged_in && (
                <NavItem className='nav-item'>
                    <a href={sign_in_route} className="nav-link">
                    <Button className='nav-button'>Sign In</Button>
                    </a>
                    
                </NavItem>
                
                )}
                {!logged_in && (
                <NavItem className='nav-item'>
                    <a href={new_user_route} className="nav-link">
                    <Button className='nav-button'>Sign Up</Button>
                    </a>
                </NavItem>
                )}
                <NavItem className='nav-item'>
                    <NavLink to="/aboutus" className="nav-link">
                            <Button className='nav-button'>About Us</Button>
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default Navigation
