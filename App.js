import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';


export default function App() {
  const description = 'This is our Education App for you to learn' 
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode='contain'
          source={require("./assets/logo.jpeg")}
        />
        <Text style={styles.mainHeader}> Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: '#4c5dab',
              marginTop: 0,
            }]}>
          Education App
        </Text>

        <Text style={styles.paraStyle}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    // fontFamily: "Nunito_700Bold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 27,
    // fontFamily: "WorkSans_400Regular",
  },

  // lineStyle: {
  //   marginBottom: 10,
  //   borderWidth: 0.5,
  //   borderColor: "grey",
  // },
});
