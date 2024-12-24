import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const NumericInput = ({ value, onChange, minValue = 1, step = 1 }) => {
  const [internalValue, setInternalValue] = useState(value)

  const handleIncrement = () => {
    const newValue = internalValue + step
    setInternalValue(newValue)
    onChange(newValue)
  }

  const handleDecrement = () => {
    if (internalValue > minValue) {
      const newValue = internalValue - step
      setInternalValue(newValue)
      onChange(newValue)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.value}>{internalValue}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E56B70',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  value: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#B0228C',
  },
})

export default NumericInput
