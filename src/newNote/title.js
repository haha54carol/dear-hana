import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
import { color, fontSize } from '../theme'

export default Title = ({ title }) => (
    <Text style={style.text}>
        {title}
    </Text>
)


const style = StyleSheet.create({
    text: {
        alignItems: 'center',
        color: color.font,
        fontSize: fontSize.h1
    }
})