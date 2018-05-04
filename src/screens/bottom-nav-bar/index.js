import {
    StyleSheet, 
    View, 
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {
    PagerTabIndicator, 
    IndicatorViewPager, 
} from 'rn-viewpager';
import Home from '../home'
import AddNew from '../add-new'
import Detail from '../detail'

export default class BottomNav extends Component {
        _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
                iconSource: require('../../assets/icons/nav-bar-home-inactive.png'),
                selectedIconSource: require('../../assets/icons/nav-bar-home.png')
            },{
                text: 'Add New',
                iconSource: require('../../assets/icons/nav-bar-add.png'),
                selectedIconSource: require('../../assets/icons/nav-bar-add.png')
            },{
                text: 'List',
                iconSource: require('../../assets/icons/nav-bar-list-inactive.png'),
                selectedIconSource: require('../../assets/icons/nav-bar-list.png')
        }];
        return <PagerTabIndicator tabs={tabs} iconStyle={{ width: 24, height: 24}} />;
    }
    render() {
        return (
            <View style={{flex:1}}>
                
                <IndicatorViewPager
				style={{flex:1, paddingTop:20, backgroundColor:'orange'}}
                indicator={this._renderTabIndicator()}>

                    <View>
                        <Home />
                    </View>
                    <View>
                        {/* <Text style={styles.page2text}>
                        disini text aja
                        </Text>
                        <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('textinput')}>
                        <Text> kek aplikasi selanjutnya </Text>
                        </TouchableOpacity> */}
                        <AddNew />

                    </View>
                    <View>
                        <Detail />
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    image: {
        width: 350,
        height: 520,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 1,
      },
    page2text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        width: '70%',
      },
})