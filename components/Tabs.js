import React, { Component } from 'react';
import { View, Header, Content, Tab, Tabs } from 'native-base';
import AddCardTab from './tabOne';
import AddCardNetBanking from './tabTow';

export default class TabsExample extends React.PureComponent {
    render() {
        return (
            <View>
                <Tabs>
                    <Tab heading="Card">
                        <AddCardTab />
                    </Tab>
                    <Tab heading="Net Banking">
                        <AddCardNetBanking />
                    </Tab>
                </Tabs>
            </View>
        );
    }
}

