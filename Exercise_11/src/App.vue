<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <input type="text" v-model="someText" name="someText" id="someText"/>
                <p>Reverse text filter: {{ someText | reverseText }}</p>
                <p>Add count: {{ someText | add-count }}</p>
                </hr>
                <p>Reverse computed: {{ reversedText }}</p>
                <p>Add count computed mixin: {{ appendLength }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { appendLegthMixin } from './AppendLengthMixin.js';

    export default {
        mixins: [appendLegthMixin],
        data() {
            return {
                someText: ''
            }
        },
        filters: {
            reverseText(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reversedText() {
                return this.someText.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
