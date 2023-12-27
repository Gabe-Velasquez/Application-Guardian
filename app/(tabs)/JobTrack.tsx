import { Pressable, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/WhyPrep';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function JobScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Had your interview already? </Text>
      <Text style={styles.title}>How did you do!?</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />

     {/* TODO:fetch from DB on what user saved as a job goes here */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
