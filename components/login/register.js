import React, { Component } from 'react';

import {Container, Content, Button, Text, Form, Item, Input, Label, Icon} from 'native-base';

import AppHeader from '../appheader';

export default class Register extends Component {
      constructor(props) {
        super(props);
            this.state = {
                email: '',
                password: ''
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
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input 
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})} />
                        </Item>
                    </Form>
                    <Button rounded block>
                        <Text>Register</Text>
                    </Button>
                    <Button rounded style={{marginTop: 10,}} block >
                        <Text onPress={ () => this.props.navigator.push({ id: 'Login'})}>Login</Text>
                    </Button>
                    <Button rounded style={{marginTop: 10,}} block>
                        <Text onPress={ () => this.props.navigator.push({ id: 'PasswordReset'})}>Password reset</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

