<template>
    <div id = "nav-option">
        <b-navbar id = "nav" type="info" toggleable right>
            <b-navbar-toggle target = "nav_collapse" ></b-navbar-toggle>
            <b-collapse is-nav id = "nav_dropdown_collapse">
            <b-navbar-nav id = "navnav">
            <b-nav-item><b-link :to="'/'">Home</b-link></b-nav-item>
                <b-nav-item-dropdown text="Accounts" id = "drop1" right>
                    <b-dropdown-item class="has-link"><b-link :to="'/accounts/newAccount'">Create New Account</b-link></b-dropdown-item>
                    <b-dropdown-item class="has-link"><b-link :to="'/accounts'">View Accounts</b-link></b-dropdown-item>
                </b-nav-item-dropdown> 
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
#nav-option #nav {
    color:cadetblue;
}

#nav-option {
    background-color: aliceblue;
}

</style>

