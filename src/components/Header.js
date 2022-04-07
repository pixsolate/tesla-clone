import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <Logo>
                <img src="./images/logo.svg" alt="" />
            </Logo>
            <Nav>
                <a href="#">Model S</a>

                <a href="#">Model X</a>

                <a href="#">Model 3</a>

                <a href="#">Model Y</a>

                <a href="#">Solar Panels</a>

                <a href="#">Solar Roof</a>
            </Nav>
            <ShopTesla>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
            </ShopTesla>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li>
                    <a href="#">Excisting Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-in</a>
                </li>
                <li>
                    <a href="#">Cybertruck</a>
                </li>
                <li>
                    <a href="#">Roadster</a>
                </li>
                <li>
                    <a href="#">Semi</a>
                </li>
                <li>
                    <a href="#">Inventory</a>
                </li>
            </BurgerNav>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Logo = styled.div``;

const Nav = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 600px;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const ShopTesla = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600px;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.2s ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid #e6e6e6;

        a {
            font-weight: 600px;
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
