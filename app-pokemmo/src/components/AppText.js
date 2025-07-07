import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function AppText({ children, style, ...props }) {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Ultra',
  },
});
