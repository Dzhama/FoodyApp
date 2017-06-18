import React, { Component } from 'react';

import {Container, Content, Button, Text, Form, Item, Input, Label} from 'native-base';

import AppHeader from '../appheader';

export default class PasswordReset extends Component {
        constructor(props) {
        super(props);
            this.state = {
                email: ''
            };
          }
    render() {
        return (
            <Container>
                <AppHeader />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>User email</Label>
                            <Input onChangeText={(email) => this.setState({email})}/>
                        </Item>
                    </Form>
                    <Button rounded block>
                        <Text>Reser password</Text>
                    </Button>
                    <Button rounded style={{marginTop: 10,}} block >
                        <Text onPress={ () => this.props.navigator.push({ id: 'Login'})}>Login</Text>
                    </Button>
                     <Button rounded style={{marginTop: 10,}} block>
                        <Text onPress={ () => this.props.navigator.push({ id: 'Register'})}>Register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

