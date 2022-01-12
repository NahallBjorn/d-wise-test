<script lang='ts'>
    export let label = "";
    import { bind } from 'svelte3-redux';
    import store from './store/store.js';

    const state = bind(store);
    console.log(this.state)
</script>

<p class="label"> Sum: {label} </p>

<style>
    .label {
        font-size: 21px;
        color: #f4f4f4;
        font-family: Monaco;
    }
</style>