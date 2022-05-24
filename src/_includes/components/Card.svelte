<script>
    export let title;
    export let description;
    export let imgUrl;
    export let icons;
    export let actionhtml = "";
    export let __functions = {};
    const { icon } = __functions;
</script>

<div
    class="transition-shadow rounded-sm shadow-sm hover:shadow-xl bg-bgel dark:bg-bgel-dark p-5 flex justify-between flex-col"
>
    <div>
        <!-- {#if imgUrl}
            {#await imageShortCode("object-cover h-48", imgUrl, title) then image}
                {image}
            {/await}
        {/if} -->
    </div>

    <p class="font-semibold text-xl pt-4">{title}</p>
    <p class="pt-1">{description}</p>
    <div class="flex mt-4 justify-between">
        <div class="mt-2 flex items-center">
            {#each icons as iconId}
                {icon({ name: iconId })} />
            {/each}
        </div>
        <div class="mt-2">{actionhtml}</div>
    </div>
</div>
