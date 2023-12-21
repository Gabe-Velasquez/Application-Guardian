import { StyleSheet } from 'react-native';
import {useState,useEffect} from 'react';
import { Text, View } from '../../components/Themed';

export default function Profile() {
  const api_url = 'https://zenquotes.io/api/quotes/';
   const [quote, setQuote] = useState('');
   const [author,setAuthor]=useState('')

   useEffect(() => {
       getapi(api_url);
   }, []);

   async function getapi(url:string) {
       const response = await fetch(url);
       const data = await response.json();
       setQuote(data[0].q);
       setAuthor(data[0].a);
   }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>{quote}</Text>
      <Text style={styles.text}>- {author}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* Build Profile and fetch data to display here */}
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
  text:{
    color:'black'
    }
});
