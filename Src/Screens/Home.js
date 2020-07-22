

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Home extends Component
 
{
  state = {
    loading : false,
    countryname: '',
   
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }
 

  
  render() 
	{
	
		return (
      <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />

        <View style={styles.body}>
        <View style={styles.inputboxview} >
      <Text style={styles.inputtext}>Country  Name</Text>
      <TextInput
                      style={styles.input}
                      placeholderTextColor="#adb4bc"
                      returnKeyType="next"
                      autoCapitalize="none"
                      value = {this.state.countryname}
                      autoCorrect={false}
                      keyboardType="default"
                      onChangeText={value => this.onChangeText("countryname", value)}  />
        </View>
        
      




        <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Listing' , {countryname : this.state.countryname})}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
		);
	}
           
 }
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
 
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  inputboxview :{
    marginTop : 10,
    marginBottom:10,
    marginStart:2, 
    padding :1,
    width:'99%',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor:'#FFEFD5'
  },  
  input: {
   backgroundColor:'#fff',
    borderWidth: 1,
    paddingStart:5,
    borderColor:'#1133ee',
    padding:0,
    width:'50%',
    fontSize:14,
    height:30,
    marginRight:0.5,
    flexDirection:'row',
  },
  inputliketext: {
    backgroundColor:'#fff',
     borderWidth: 1,
     borderColor:'#1133ee',
     padding:5,
     flex:1,
     fontSize:12,
     marginRight:0.5,
   },
  inputtext: {
    padding:5,
    width:'50%',
    fontSize:13,
    flex:1, 
  },
  button: {
    backgroundColor: 'brown',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
   marginLeft:0,
   marginRight:0,
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  }
});

export default Home;

