import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components'
const Styles = styled.div`
    .navbar{
        background-color: #222;
    }
    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;
        &:hover{
            color: white;
        }
    }
`;
class NavigationBar extends React.Component{
    render(){
        return (
            <Styles>
                <Navbar expand="lg">
                    {//<Navbar.Brand>NAV</Navbar.Brand>
                    }
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link href="/portfolio/#/about/">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/portfolio/#/projects/">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/portfolio/#/renders/">Renders</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}

export default NavigationBar;