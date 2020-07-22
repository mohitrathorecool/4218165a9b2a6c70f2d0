import  { Component } from 'react';


const baseUrl='https://restcountries.eu/rest/v2/name/';


export default class WebApi extends Component {


	static api_get_list( method, par,body){
       
		return fetch(baseUrl+par, {
		  method: method,
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body:body
		})
	}


}