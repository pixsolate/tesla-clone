import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                descirption="Order Online for Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Excisting Inventory"
            />
            <Section
                title="Model X"
                descirption="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Excisting Inventory"
            />
            <Section
                title="Model 3"
                descirption="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Excisting Inventory"
            />
            <Section
                title="Model Y"
                descirption="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Excisting Inventory"
            />
            <Section
                title="Solar Panels"
                discription="Lowest Cost Solar in America"
                backgroundImage="solar-panel.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />
            <Section
                title="Solar Roof"
                discription="Produce Clean Energy From Your Roof"
                backgroundImage="solar-roof.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />
            <Section
                title="Accessories"
                discription=""
                backgroundImage="accessories.jpg"
                leftButtonText="Shop Now"
            />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    height: 100vh;
`; // This is a styled component.
