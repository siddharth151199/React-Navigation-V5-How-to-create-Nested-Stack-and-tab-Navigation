import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Stack1(props) {
    return (
        <View style={styles.container}>
            <Text>Stack Screen 1</Text>
            <Button title="Go to Stack Screen 2" onPress={() => props.navigation.navigate('Stack2')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  