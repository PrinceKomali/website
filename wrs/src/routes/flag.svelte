<script>
    export let code;
</script>

<div class="flag">
    <img
        class="flag_img"
        src={`https://flags.komali.dev/svg/${code}.svg`}
        alt={`flag_${code}`}
    />
</div>

<style lang="scss">
    @import "../styles/flag.scss";
</style>
