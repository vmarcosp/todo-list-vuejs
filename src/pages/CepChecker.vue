<template>
    <section class="app-body">
        <div class="column card is-offset-one-quarter is-half">
            <div class="column">
                <logo :title="'CEP CHECKER'"></logo>
            </div>
            <div class="column">
                <input-field :label="'Informe o CEP'"></input-field>
                <router-link class="home" to="/">Ver tarefas</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import InputField from '../components/input-field/InputField';
import Logo from '../components/logo/Logo';

export default {
    name: 'cep-checker',
    components: {
        InputField,
        Logo
    }
};
</script>

<style lang="scss">

</style>
