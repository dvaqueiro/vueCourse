<template>
    <div>
        <div class="form-group">
            <label for="first_name">Fist Name</label>
            <input 
                   type="text" 
                   name="first_name" 
                   id="first_name" 
                   class="form-contol" 
                   v-model="value.firstName"
                   @input="updateName"/>
        </div>
        <div class="form-group">
            <label for="last_name">Last Name</label>
            <input 
                   type="text" 
                   name="last_name" 
                   id="last_name" 
                   class="form-contol" 
                   v-model="value.lastName"
                   @input="updateName"/>
        </div>
    </div>
</template>

<script>
export default{
    props: ['value'],
    methods: {
        updateName() {
            this.$emit('input', this.value);
        }
    }
}
</script>

<style>

</style>

