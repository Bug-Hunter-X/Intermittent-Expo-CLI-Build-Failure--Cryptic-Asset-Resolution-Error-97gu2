import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerText}>My App</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {/* Your app content here */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
});