<template>
    <div v-on:click="setFocus" class="input-container">
        <label :class="{'focused-label':isFocused}">{{label}}</label>
        <input :class="{'focused-input':isFocused}" v-on:focus="setFocus" v-on:blur="removeFocus" v-on:keyup.enter="enterClick">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isFocused: false
            };
        },
        props: {
            label: {
                type: String,
                required: true
            }
        },
        methods: {
            setFocus($event) {
                this.$el.querySelector('input').focus();
                this.isFocused = true;
            },
            removeFocus($event) {
                this.isFocused = !!$event.target.value;
            },
            enterClick($event) {
                this.$emit('enterClick', $event);
            }
        }
    };
</script>

<style lang="scss">
    @import '../../assets/scss/_variables.scss';
    .input-container {
        position: relative;
        >input {
            width: 100%;
            padding: {
                top: .4rem;
                bottom: .4rem;
            }
            font-size: 1rem;
            border: none;
            outline: none;
            z-index: 2000;
            transition: 100ms ease;
            border-bottom: solid .1rem #ccc;
        }
        >label {
            font-size: .9rem;
            text-transform: uppercase;
            top: .2rem;
            float: left;
            color: #ccc;
            left: .1rem;
            font-weight: bold;
            position: absolute;
            z-index: 1;
            order: 1;
            transition: 100ms ease-in;
        }
        >.focused-label {
            top: -.9rem;
            color: $green;
            font-size: .7rem;
        }
        >.focused-input {
            border-color: $green;
            box-shadow: inset 0 -1px 0 0 $green;
        }
    }
</style>
