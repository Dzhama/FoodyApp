import React, { Component } from 'react';

import { Container, Content, Button, Text, Form, Item, Input,Label} from 'native-base';

import AppHeader from '../appheader';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <AppHeader />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>User email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                    </Form>
                    <Button rounded style={{marginTop: 10,}} block >
                        <Text>Login</Text>
                    </Button>
                     <Button rounded style={{marginTop: 10,}} block>
                        <Text onPress={ () => this.props.navigator.push({ id: 'Register'})}>Register</Text>
                    </Button>
                     <Button rounded style={{marginTop: 10,}} block>
                        <Text onPress={ () => this.props.navigator.push({ id: 'PasswordReset'})}>Password reset</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

