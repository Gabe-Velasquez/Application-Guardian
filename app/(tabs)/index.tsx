import { ImageBackground, StyleSheet } from 'react-native';
import HomeScreenInfo from '../../components/HomeScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
      <View style={styles.container}>
         <ImageBackground source={require('../../assets/images/bgtexture.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Welcome to Application Guardian!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <HomeScreenInfo path="app/(tabs)/index.tsx" />
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
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
