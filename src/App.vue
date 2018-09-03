<template>
  <b-container id="app">
    <h2 id = "head">Accounts Application</h2>
    <navbar-comp></navbar-comp>
    <br>
    <router-view></router-view>
  </b-container>
</template>

<script>
import createNewAccount from './createNewAccount';
export default {
    components: {
        'app-form': createNewAccount
    }
}
</script>

<style>
  h2 {
    color: rgb(33, 66, 66)
  }
</style>


