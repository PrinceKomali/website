<style lang="scss">
    @import"../styles/user.scss";
</style>
<script>
    export let name;
    export let from;
    export let to;
</script>
<div class="name" style="{`background-image: linear-gradient(to right, ${from}, ${to})`}">{name}</div>