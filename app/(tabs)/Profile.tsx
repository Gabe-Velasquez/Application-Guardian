import { StyleSheet, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, View } from '../../components/Themed';

export default function Profile() {
  const api_url = 'https://zenquotes.io/api/quotes/';
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getapi(api_url);
  }, []);

  async function getapi(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data[0].q);
    setAuthor(data[0].a);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/profilepattern.png')}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Hello!</Text>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <Text style={styles.text}>{quote}</Text>
        <Text style={styles.text}>- {author}</Text>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
      </ImageBackground>
      {/* Build Profile and fetch data to display here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 80,
    width: "80%",
    fontWeight: 'bold',
    alignContent:'center',
    justifyContent:'center',
    marginHorizontal: 50,
    borderWidth:1,
    paddingVertical: 8,
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    paddingHorizontal: 20,
    lineHeight: 40,
    fontSize: 16,
    textAlign: 'left',
    backgroundColor: 'rgba(181,30,0,0.8)',
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
