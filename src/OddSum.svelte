<script lang='ts'>
    import Textfield from '@smui/textfield';

    export let sum;

    let maxInput = Number.MAX_VALUE;
    let inputNumber = 0;
    $: sum = calcOddSum(inputNumber);

    function calcOddSum(topNumber: number): number {
        let sum = 0;
        if (topNumber <= 0) {
            return 0;
        }
        if (topNumber % 2 == 0) {
            topNumber = topNumber - 1;
        }
        for (let i = topNumber; i >= 1; i--) {
            sum = sum + i;
            i--;
        }
        return sum;
    }

</script>


<Textfield bind:value={inputNumber} type="number"
           input$min="0" input$max="{maxInput}"/>