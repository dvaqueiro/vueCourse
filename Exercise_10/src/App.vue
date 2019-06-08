<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <button class="btn btn-default" v-myon:click="showAlert">
                    click here!
                </button>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            showAlert: function() {
                alert("Button clicked");
            }
        }
    }
</script>

<style>
</style>
