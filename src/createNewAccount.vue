<template>
    <div ref = "form" @submit.prevent="processForm">
        <h3>Create New Account</h3>
        <br>
        <b-container fluid>
            <b-row class = "my-1">
                 <b-col sm="2" place><label for="input-default">First Name:</label></b-col>
                <b-col sm="10">
                    <b-form-input id="input-default" type="text" pattern="[A-Za-z]{3,}" placeholder="Enter first name" name = "firstName" v-model="account.firstName"></b-form-input>
                </b-col>
            </b-row>
            <b-row class = "my-1">
                 <b-col sm="2" place><label for="input-default">Surname:</label></b-col>
                <b-col sm="10">
                    <b-form-input id="input-default" type="text" pattern="[A-Za-z]{3,}" placeholder="Enter surname" name = "surname" v-model="account.surname"></b-form-input>
                </b-col>
            </b-row>
            <b-row class = "my-1">
                 <b-col sm="2" place><label for="input-default">Account Number:</label></b-col>
                <b-col sm="10">
                    <b-form-input id="input-default" type="text" placeholder="Enter account number" name = "accountNumber" v-model="account.accountNumber"></b-form-input>
                </b-col>
            </b-row>
        </b-container>
        <b-button type = "submit" @click= "create()">Create Account</b-button>
    </div>
</template>



<script src="https://vuejs.org/js/vue-js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import axios from 'axios';
import qs from 'qs';

    export default {
       data() {
            return {
                account:{
                    accountNumber: '',
                    firstName:'',
                    surname: ''
                },
                newAccount: {}
            }
        },
            methods: {
                create() {
                    var newAccount = {
                        'accountNumber': this.account.accountNumber,
                        'firstName': this.account.firstName,
                        'surname': this.account.surname
                    }

                    console.log(newAccount);
                    if(newAccount.firstName != "" && newAccount.surname != "" && newAccount.accountNumber != ""){
                     if (newAccount.accountNumber > 999 && newAccount.accountNumber < 1000000) {
                    axios({
                        url: 'http://localhost:8081/accountapp/rest/json',
                        data: {
                        'accountNumber': this.account.accountNumber,
                        'firstName': this.account.firstName,
                        'surname': this.account.surname
                         },
                        method:'post'
                    })
                        .then((response) =>{
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                        alert('Account being created');
                        window.location.replace('/');
                     } else {
                         alert('Account number must be between 4 and 6 numbers');
                     }} else {
                         alert('Fill in all boxes');
                     }
                }
        }
    }
</script>

<style>
    h3 {
        color: rgb(33, 66, 66)
    }
</style>