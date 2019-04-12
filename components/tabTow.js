import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button
} from 'react-native';
import { Container, Content, Picker } from 'native-base';

export default class AddCardNetBanking extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            selectedBank: ''
        }
    }

    onValueChanged = (selected) => {
        this.setState({ selectedBank: selected })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>Select Bank</Text>
                    <Picker selectedValue={this.state.selectedBank}
                        onValueChange={(itemValue, itemIndex) => this.onValueChanged(itemValue)} >
                        <Picker.Item label="Punjab National Bank Retail" value="pnbRetail" />
                        <Picker.Item label="Punjab National Bank Corporate" value="pnbCorporate" />
                        <Picker.Item label="State Bank of India" value="sbi" />
                        <Picker.Item label="Bank of India" value="boi" />
                        <Picker.Item label="ICICI Bank" value="icici" />
                        <Picker.Item label="Bank of Baroda" value="baroda" />
                    </Picker>
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