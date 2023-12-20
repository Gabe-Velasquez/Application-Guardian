import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          This app is used to help job seekers keep track of the jobs they are applying for and help with each step.
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Our app can push daily notifications to remind you to update job applicant entries and give some words of encouragement to keep on pressing through. Searching for a job is not easy so thank you for letting us help you in this journey!
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' , justifyContent: 'center', }}>
        <View style={[styles.helpLink]}>
          
            <Pressable>
              <Text>
                Create an account 
              </Text>
            </Pressable>

            <Pressable>
              <Text>
                Login
              </Text>
            </Pressable>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
    textAlign: 'center',
    justifyContent: 'center',

  },
  helpLinkText: {
    textAlign: 'center',
  },
});
