<template>
    <ul>
        <li>
            <input type="checkbox">
            <label>ss</label>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'task-list'
};
</script>

<style lang="scss">
ul {
    list-style: none;
    >li{
        border-top:solid 1px ;
        background: white;
    }
}
</style>
