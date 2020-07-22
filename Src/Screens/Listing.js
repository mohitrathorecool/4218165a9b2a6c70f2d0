
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Button
} from 'react-native';

import WebApi from '../WebApi';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {SvgUri} from 'react-native-svg';

class Listing extends Component
 

{
    constructor(props)
        {
            super(props)
           
        }
  state = {
    loading : false,
    capital: '',
    imageurl:'',
    popultation : '',
    lat : '',

    
  };

 componentDidMount()
 {
    const{ countryname  } = this.props.route.params;
   
  this.callApi(countryname);
 }

  callApi=async()=>{

   // this.setState({loading:true, loadingTitle:'please Wait', loadingMessage:'Loading...'});
    await WebApi.api_get_list('GET', this.props.route.params.countryname)
          .then(response => response.json())
          .then(json => {
            
                console.log('Response from formData===>', json);

                this.setState({
                    capital: json[1].capital,
                    imageurl : json[1].flag,
                    popultation : json[1].population,
                    lat : json[1].latlng
                  });
              })
              .catch(error => {
                   console.log('error==>' , error);
                    this.setState({
                      loading:false
                      //alert:true, alertMessage:'Opps! ' + error, alertSuccess:false
                    });
                });
  }

  render() 
	{
	
		return (
      <SafeAreaView>
    
        <Header />

        <View style={styles.body}>
        <View style={{ flexDirection: 'column',padding:10,alignItems:'center' ,margin:2}}>
<View style={{height:200,width:400}}>
<SvgUri
   width= "30%"
    height= "30%" 
   uri = {this.state.imageurl} 
/>
</View>
<Text style={{fontSize:22,fontWeight:'bold'}}>Capital : {this.state.capital}</Text>
<Text style={{fontSize:22,fontWeight:'bold'}}>Population : {this.state.popultation}</Text>
<Text style={{fontSize:22,fontWeight:'bold'}}>lat lng : {this.state.lat}</Text>
<Button title ='Capital Weather'/>
</View>
        
        

        </View>
    
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
    margin : 2, 
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

export default Listing;