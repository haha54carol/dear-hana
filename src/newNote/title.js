import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
import { color, fontSize } from '../theme'

export default Title = ({ title }) => (
    <Text style={style.container}>
        {title}
    </Text>
)


const style = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        color: color.font,
        fontSize: fontSize.h1
    }
})