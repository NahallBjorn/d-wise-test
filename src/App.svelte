<script lang='ts'>
    import OddSum from "./OddSum.svelte";
    import SumLabel from "./SumLabel.svelte";

    let result = 0;

</script>

<div class="container">
    <div class="backbone">
        <OddSum bind:sum={result}/>
        <SumLabel bind:label={result}/>
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
</style>