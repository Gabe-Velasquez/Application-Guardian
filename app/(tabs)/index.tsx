import { ImageBackground, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import HomeScreenInfo from '../../components/HomeScreenInfo';
import { Text, View } from '../../components/Themed';
import {Quote,quotes} from '../../constants/quotes'

export default function TabOneScreen() {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      setRandomQuote(quote);
    };

    fetchRandomQuote();
  }, []);
  return (
      <View style={styles.container}>
         <ImageBackground source={require('../../assets/images/bgtexture.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Welcome to Application Guardian!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {randomQuote && (
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>{randomQuote.quote}</Text>
            <Text style={styles.quoteAuthor}>- {randomQuote.author}</Text>
          </View>
        )}
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
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  quoteContainer: {
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset:{width:-5,height:5},
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  quoteText: {
    fontSize: 26,
    lineHeight: 36,
    color: '#777',
    marginBottom: 10,
  },
  quoteAuthor: {
    fontSize: 22,
    paddingRight: 10,
    textAlign: 'right'
  }  
});
