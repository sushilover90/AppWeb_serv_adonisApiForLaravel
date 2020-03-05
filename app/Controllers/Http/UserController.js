'use strict'

const User = use('App/Models/User')
// rp es el cliente
var rp = require('request-promise');
const access_token = 'fo4OeP5lY9rrmoyi5gY2ZHCLGv6wzOF8';

class UserController {

    async login({request, auth}){


        const { username, password } = await request.all();

        let token = await auth.withRefreshToken().attempt(username, password)

        return token;

    }

    async prueba(){

      return 1;

    }

    async register({request}){

        const {username, password} = await request.all();

        const user = await User.create({
            username,
            password
        });

       return this.login(...arguments);
    }

    async protocols({request, response}){
      // return JSON.stringify({'headers':request.headers(),'body':request.all()});
      var options = {
            method: 'GET',
            uri: 'https://api.shodan.io/shodan/protocols?key='+request.headers().shodan_token,
            json: true   ,
            resolveWithFullResponse: true,

        };
        // se agregó función
        let obj = function(){
         //y esto
         return new Promise(function (resolve, reject){
             //esto ya estaba
        rp(options)
            .then( function (response) {
                 resolve (response);
            })
            .catch(function (err) {

            });})
        }
        //  se agregaron estas dos lineas
        let result = await obj();
        return response.status(200).json(result);
    }



     async ports({request, response}){
         var options = {
             method: 'GET',
             uri: 'https://api.shodan.io/shodan/ports?key='+request.headers().shodan_token,
             json: true   ,
             resolveWithFullResponse: true,

         };
         // se agregó función
         let obj = function(){
          //y esto
          return new Promise(function (resolve, reject){
              //esto ya estaba
         rp(options)
             .then( function (response) {
                  resolve (response);
             })
             .catch(function (err) {

             });})
         }
         //  se agregaron estas dos lineas
         let result = await obj();
         return response.status(200).json(result);
     }

     async facets({request, response}){
         var options = {
             method: 'GET',
             uri: 'https://api.shodan.io/shodan/host/search/facets?key='+request.headers().shodan_token,
             json: true   ,
             resolveWithFullResponse: true,

         };
         // se agregó función
         let obj = function(){
          //y esto
          return new Promise(function (resolve, reject){
              //esto ya estaba
         rp(options)
             .then( function (response) {
                  resolve (response);
             })
             .catch(function (err) {

             });})
         }
         //  se agregaron estas dos lineas
         let result = await obj();
         return response.status(200).json(result);
     }

     async triggers({request, response}){
         var options = {
             method: 'GET',
             uri: 'https://api.shodan.io/shodan/alert/triggers?key='+request.headers().shodan_token,
             json: true   ,
             resolveWithFullResponse: true,

         };
         // se agregó función
         let obj = function(){
          //y esto
          return new Promise(function (resolve, reject){
              //esto ya estaba
         rp(options)
             .then( function (response) {
                  resolve (response);
             })
             .catch(function (err) {

             });})
         }
         //  se agregaron estas dos lineas
         let result = await obj();
         return response.status(200).json(result);
     }

     async ip({request, response}){
         var options = {
             method: 'GET',
             uri: 'https://api.shodan.io/tools/myip?key='+request.headers().shodan_token,
             json: true   ,
             resolveWithFullResponse: true,

         };
         // se agregó función
         let obj = function(){
          //y esto
          return new Promise(function (resolve, reject){
              //esto ya estaba
         rp(options)
             .then( function (response) {
                  resolve (response);
             })
             .catch(function (err) {

             });})
         }
         //  se agregaron estas dos lineas
         let result = await obj();
         return response.status(200).json(result);
     }

}

module.exports = UserController
