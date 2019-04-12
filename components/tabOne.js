import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Dimensions
} from 'react-native';
import { Container, Body, Content } from 'native-base';

const myWidth = Dimensions.get("screen").width

export default class AddCardTab extends React.PureComponent {
    render() {
        return (
            <Container >
                <Content >
                    <TextInput placeholder='CARD NO.' ></TextInput>
                    <TextInput placeholder='YOUR NAME IN CARD' ></TextInput>
                    <Body style={{ flexDirection: 'row', width: myWidth, justifyContent: 'space-around' }} >
                        <TextInput placeholder='EXPIRY MONTH' ></TextInput>
                        <TextInput placeholder='EXPIRY YEAR' ></TextInput>
                        <TextInput placeholder='CVV NO.' ></TextInput>
                    </Body>
                    <Button title='Pay Now' ></Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
