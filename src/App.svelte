<script lang='ts'>
    import OddSum from "./OddSum.svelte";

    let result = 0;

</script>

<div class="container">
    <div class="backbone">
        <OddSum bind:sum={result} />
        <p class="label"> Sum: {result} </p>
    </div>
</div>


<style>
    .container {
        margin-top: 100px;
        display: flex;
        justify-content: center;
    }
    .backbone {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        width: 500px;
        height: 400px;
        background-color: #1FA2FF;
    }
    .label {
        font-size: 21px;
        color: #f4f4f4;
        font-family: Monaco;
    }
</style>