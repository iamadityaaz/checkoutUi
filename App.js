/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import TabsExample from './components/Tabs'
import { Container, Header, Content, Body, CheckBox, Footer, Card } from 'native-base';


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      isChecked: true,
      hideTab: true
    }
  }

  _checkToggle = () => {
    this.setState((state) => {
      return state.isChecked ? { isChecked: false } : { isChecked: true }
    })

    this.setState((state) => {
      return state.hideTab ? { hideTab: false } : { hideTab: true }
    })
  }

  render() {
    return (
      <Container style={styles.container} >
        <Card >
          <Header transparent={true} >
            <Text style={{ color: 'black', fontWeight: '700', alignSelf: 'center' }}>CHECKOUT</Text>
          </Header>
        </Card>

        <Content contentContainerStyle={{ flexGrow: 1 }} >
          <Card noShadow={true}
            style={{ paddingVertical: 10 }} >
            <Text>Product</Text>
            <Body style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }} >
              <Image style={{
                width: 70,
                height: 50
              }}
                source={require('../checkout/assets/itemImage.jpg')}
              />
              <Body>
                <Text>NIKE RUNNING SHOES</Text>
                <Text>SUB TOTAL</Text>
                <Text>$1402.30</Text>
              </Body>
            </Body>
          </Card>

          <Card noShadow={true}
            style={{ paddingVertical: 10 }} >
            <Text>YOUR SAVED CARDS</Text>
            <Body style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }} >
              <CheckBox style={{ borderRadius: 50 }}
                color='blue'
                onPress={() => this._checkToggle()}
                checked={this.state.isChecked} />
              <Image style={{
                width: 50,
                height: 30,
              }}
                source={
                  require('../checkout/assets/visa.png')
                }
              />
              <Text >4370 43XX XXXX 9900</Text>
              <TextInput placeholder='CVV'></TextInput>
            </Body>
          </Card>
          {
            this.state.hideTab ? null :
              <Card noShadow={true} style={{ paddingVertical: 10 }} >
                <Text>Other payment methods</Text>
                <TabsExample />
              </Card>
          }
        </Content>
        {
          this.state.hideTab ? <Footer style={{ backgroundColor: null, marginBottom: '5%' }} ><TouchableHighlight><Button title='Pay Now' ></Button></TouchableHighlight></Footer> :
            null
        }
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
