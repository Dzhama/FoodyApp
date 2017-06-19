import React, { Component } from 'react';

import {Container, Content, Button, Text, Form, Item, Input, Label, Icon} from 'native-base';

import Firebase from 'firebase';

import AppHeader from '../appheader';

import {writeUserData} from '../firebase'
    


export default class Register extends Component {
      constructor(props) {
        super(props);
            this.state = {
                email: '1@gmail.com',
                password: "1234567"
            };
          }


    submitme(){
        writeUserData(this.state.email, this.state.password)
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
                    <Button rounded block onPress={() => this.submitme(this)}>
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


<div> </div>