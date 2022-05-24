<script>
  let count = 0;

  function add() {
    count += 1;
  }
</script>

<p>{count}</p>
<button on:click={add}>Add one</button>
