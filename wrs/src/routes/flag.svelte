<script>
    export let code;
</script>
{#if code != ""}
<div class="flag">
    <img
        class="flag_img"
        src={`https://flags.komali.dev/svg/${code}.svg`}
        alt={`flag_${code}`}
    />
</div>
{/if}

<style lang="scss">
    @import "../styles/flag.scss";
</style>
