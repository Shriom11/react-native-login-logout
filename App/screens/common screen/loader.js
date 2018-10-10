import React, { Component } from 'react';
import {View, Modal,ActivityIndicator} from 'react-native'; 
import commonstyle from '../../assets/style/commonstyle';


const Model = ({ isLoading }) => (<Modal
    transparent={true}
    animationType={'fade'}
    visible={isLoading}
    onRequestClose={() => {}}>
    <View style={commonstyle.modalBackground}>
        <View
        //  style={commonstyle.activityIndicatorWrapper}
         >
            {/* <ActivityIndicator
            animating={this.state.isLoading} size="large" color="black" /> */}
            <ActivityIndicator
            animating={isLoading} size="large" color="black" />
            
        </View>
    </View>
</Modal>)

export default Model;