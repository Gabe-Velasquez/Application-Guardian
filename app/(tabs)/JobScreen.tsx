import { Pressable, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/WhyPrep';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function JobScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Got an Interview? Let's talk about it!</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <Text>Where did you get an interview at?</Text>
      <TextInput
      placeholder="Company Name"
      style={{height:40, width:'80%', borderWidth:1, borderRadius:5, marginTop:10, marginBottom:10}}
      ></TextInput>

      <Text>What position are you interviewing for?</Text>
      <TextInput
      placeholder="Job Title"
      style={{paddingLeft:10, height:40, borderWidth: 1, width:"80%" ,borderRadius:5,marginVertical:1, marginBottom:10}}
      ></TextInput>

      <Text>What kind of job is it?</Text>
      <Pressable onPress={() => alert('Pressed!')} >
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
          Technical
        </Text>
      </Pressable>

      <Pressable onPress={() => alert('Pressed!')} >
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)' style={{marginBottom:10}}>
          Non-Technical
        </Text>
      </Pressable>

      <Text>Is your job on-site, remote or hybrid?</Text>
      <Pressable onPress={() => alert('Pressed!')} >
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
          On-site
        </Text>
      </Pressable>

      <Pressable onPress={() => alert('Pressed!')} >
        <Text lightColor='rgba(0,0,0,0.8)' darkColor='rgba(255,255,255,0.8)'>
          Remote
        </Text>
      </Pressable>

      <Pressable onPress={() => alert('Pressed!')} >
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
