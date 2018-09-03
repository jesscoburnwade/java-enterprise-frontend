<template>
    <div class = "container">
        <h3>All Accounts</h3>
        <br>
        <table class = "table table-striped table-borders">
            <thead><tr>
                <th>First Name</th>
                <th>Surname</th>
                <th>Account Number</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(account_alias, index) in Account" v-bind:index="index">
                    <td>
                        {{account_alias.firstName}}     
                    </td>
                    <td>
                        {{account_alias.surname}}
                    </td>
                    <td>
                        {{account_alias.accountNumber}}
                    </td>
                    <td><b-button id = "edit" @click = "showModal(account_alias.id,account_alias.firstName, account_alias.surname, account_alias.accountNumber)"><img src = "../edit.png" width = 20></b-button></td>
                    <td><b-button id = "delete" @click = "deleteMethod(account_alias.id, index)"><img src = "../delete.png" width = 20></b-button></td>
                </tr>
            </tbody>
        </table>
        <b-modal id = "updateModal" ref = "myModalRef" hide-footer title = "Update Account">
            <h3>{{Account.accountNumber}}</h3>
            <b-container fluid>
                <b-row class = "my-1">
                    <b-col sm="2" place><label for="input-default">First Name:</label></b-col>
                    <b-col sm="10">
                        <b-form-input id="input-default" type="text" placeholder="Edit first name" name = "firstName" v-model="test_account.firstName"></b-form-input>
                    </b-col>
                </b-row>
                    <b-row class = "my-1">
                    <b-col sm="2" place><label for="input-default">Surname:</label></b-col>
                    <b-col sm="10">
                        <b-form-input id="input-default" type="text" placeholder="Edit surname" name = "surname" v-model="test_account.surname"></b-form-input>
                    </b-col>
                </b-row>
                <b-button @click="updateMethod">Update Account</b-button>
            </b-container>
        </b-modal>
    </div>
</template>

<script src="https://vuejs.org/js/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import axios from 'axios';

export default {
    name:'user',
    data() {
        return {
            Account: [],
            test_account:{
                id:'',
                firstName: '',
                surname: '',
                accountNumber: ''
            },
        }
    },
    mounted(){
        axios.get('http://localhost:8081/accountapp/rest/json')
        .then((response)=>{
            console.log(response.data);
            this.Account = response.data;
        })
        .catch((error)=> {
            console.log(error);
        })
    },
    methods:{
        deleteMethod(id, index) {
            console.log(id);
            axios.delete('http://localhost:8081/accountapp/rest/json/' + id)
            .then((response) => this.Account.splice(index,1));

            alert('Account will be deleted!')
        },
        showModal(id, firstName, surname, accountNumber) {
            this.test_account.id = id;
            this.test_account.firstName = firstName;
            this.test_account.surname = surname;
            this.test_account.accountNumber = accountNumber;
            this.$refs.myModalRef.show();
        },
        updateMethod(){
            var id = this.id;
            console.log(id);
        axios.put('http://localhost:8081/accountapp/rest/json/' + id, {
            id: this.test_account.id,
            accountNumber:this.test_account.accountNumber,
            firstName :this.test_account.firstName,
            surname :this.test_account.surname
        })
        this.$refs.myModalRef.hide();
        window.location.reload();
    
        }
    }
}
</script>

<style>
    h3 {
        color: rgb(33, 66, 66)
    }
</style>
