import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Right, Body, Title } from 'native-base';
export default class AppHeader extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Left/>
                    <Left/>
                    <Body>
                        <Title>FOODY</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}