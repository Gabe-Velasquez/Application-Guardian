import { Pressable, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/WhyPrep';
import { Text, View } from '../../components/Themed';

export default function JobScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Got an Interview? Let's talk about it!</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <Text>What kind of job is it?</Text>
      <Pressable>
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
          Technical
        </Text>
      </Pressable>

      <Pressable>
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
          Non-Technical
        </Text>
      </Pressable>

      <Text>Is your job on-site, remote or hybrid?</Text>
      <Pressable>
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
          On-site
        </Text>
      </Pressable>

      <Pressable>
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
          Remote
        </Text>
      </Pressable>

      <Pressable>
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
          Hybrid
        </Text>
      </Pressable>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
