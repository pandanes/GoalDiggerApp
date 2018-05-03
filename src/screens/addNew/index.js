import React, { Component } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions } from 'react-native';

export default class AddNew extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.titleText}>Goal Name:</Text>
                <TextInput
                style = {styles.textInputStyle}
                placeholder = 'Enter the goal name'
                placeholderTextColor = 'rgba(196,196,196,1)'
                underlineColorAndroid = 'transparent'
                />
                <Text style = {styles.titleText}>Frequency:</Text>
                <View style = {styles.dayOptionContainer}>
                    <View style = {styles.dayCircle}><Text style = {styles.dayCircleText}>E</Text></View>
                    <View style = {styles.dayCircle}><Text style = {styles.dayCircleText}>MO</Text></View>
                    <View style = {styles.dayCircle}><Text style = {styles.dayCircleText}>TU</Text></View>
                    <View style = {[styles.dayCircle, styles.dayCircleSelected]}><Text style = {styles.dayCircleTextSelected}>WED</Text></View>
                    <View style = {styles.dayCircle}><Text style = {styles.dayCircleText}>TH</Text></View>
                    <View style = {[styles.dayCircle, styles.dayCircleSelected]}><Text style = {styles.dayCircleTextSelected}>FRI</Text></View>
                    <View style = {styles.dayCircle}><Text style = {styles.dayCircleText}>SAT</Text></View>
                    <View style = {styles.dayCircle}><Text style = {styles.dayCircleText}>SUN</Text></View>
                </View>
                <Text style = {styles.titleText}>Set Rewards</Text>
                <View style = {styles.rewardsFormContainer}>
                    <Text style = {styles.titleText}>Immediate Rewards:</Text>
                    <TextInput
                    style = {styles.rewardsTextInput}
                    placeholder = 'e.g. Browse the internet for 10 mins'
                    placeholderTextColor = 'rgba(196,196,196,1)'
                    underlineColorAndroid = 'transparent'
                    />
                    <Text style = {styles.titleText}>Completed Rewards:</Text>
                    <TextInput
                    style = {styles.rewardsTextInput}
                    placeholder = 'e.g. Treat myself two scoops of gelato'
                    placeholderTextColor = 'rgba(196,196,196,1)'
                    underlineColorAndroid = 'transparent'
                    />
                </View>
                <TouchableOpacity style = {styles.buttonSave}>
                    <Text style = {styles.buttonSaveText}>SAVE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(253,253,253,1.0)',
        paddingHorizontal: 16,
        paddingTop: 24
    },
    titleText: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'rgba(81,81,81,1.0)',
        letterSpacing: 1.28,
        lineHeight: 19
    },
    textInputStyle: {
        marginTop: 12,
        marginBottom: 24,
        padding: 16,
        backgroundColor: 'rgba(255,255,255,1.0)',
        borderRadius: 4,
        elevation: 2    
    },
    dayOptionContainer: {
        marginBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12
    },
    dayCircle: {
        width: 45,
        height: 45,
        backgroundColor: 'rgba(196,196,196,0.32)',
        borderRadius: 45/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dayCircleText: {
        fontFamily: 'OpensSans',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'rgba(81,81,81,0.8)',
        letterSpacing: 1
    },
    dayCircleSelected: {
        backgroundColor: 'rgba(74,144,226,1)'
    },
    dayCircleTextSelected: {
        fontFamily: 'OpensSans',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'rgba(255,255,255,1)',
        letterSpacing: 1
    },
    rewardsFormContainer: {
        marginTop: 12,
        marginBottom: 20,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 4,
        elevation: 2
    },
    rewardsTextInput: {
        marginBottom: 20,
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(216,216,216,1)'  
    },
    buttonSave: {
        paddingVertical: 12,
        backgroundColor: 'rgba(44,110,183,1)',
        borderRadius: 5
    },
    buttonSaveText: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'rgba(255,255,255,1.0)',
        letterSpacing: 1.28,
        textAlign: 'center',

    }

})