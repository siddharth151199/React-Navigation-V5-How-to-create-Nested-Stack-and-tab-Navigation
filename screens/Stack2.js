import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Stack2() {
    return (
        <View style={styles.container}>
            <Text>Stack2</Text>
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
  