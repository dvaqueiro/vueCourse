<template>
    <div class="container">
        <form>
            <div class="row" v-if="!submitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Signup</h1>
                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input 
                            type="email" 
                            name="mail" 
                            id="mail" 
                            class="form-control" 
                            v-model="mail"/>
                    </div>
                    <div class="form-group">
                        <label for="password">password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value=""
                            v-model="password"/>
                    </div>
                    <div class="form-group">
                        <p>Store Data?</p>
                        <label for="store_data">
                        <input 
                            type="radio"
                            name="store_data"
                            id="store_data_yes"
                            value="yes"
                            v-model="storeData"/>Yes
                        </label>
                        <label for="store_data">
                        <input 
                            type="radio"
                            name="store_data"
                            id="store_data_no"
                            value="no"
                            v-model="storeData"/>No
                        </label>
                    </div>
                    <div class="form-group">
                       <button 
                           class="btn btn-primary"
                           type="submit"
                           @click.prevent="submit">Submit</button> 
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName.firstName }} {{ fullName.lastName }}</p>
                        <p>Mail: {{ mail }} </p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppFullName from './FullName.vue';

    export default {
        components: {
            AppFullName: AppFullName
        },
        data() {
            return {
                fullName: {
                    firstName: '',
                    lastName: ''
                },
                mail: '',
                password: '',
                storeData: 'yes',
                submitted: false
            }
        },
        methods: {
            submit() {
                this.submitted = true
            }
        }
    }
</script>

<style>
</style>
