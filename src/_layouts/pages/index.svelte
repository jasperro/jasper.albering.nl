<script context="module">
    export const frontMatter = {
        _no_margin: true,
        layout: "base",
        eleventyNavigation: {
            order: -999,
        },
    };
</script>

<script>
    import Card from "/@includes/components/Card.svelte";
    export let home = {};
    export let locale = "en";
    export let __functions = {};
    const { icon } = __functions;
</script>

<div
    class="bg-bgel rounded-sm my-6 md:p-16 sm:p-8 p-4 py-8 flex flex-col sm:my-16 sm:mx-16 xl:mx-40 2xl:mx-60"
>
    <div class="flex flex-col justify-between w-full">
        <h1
            class="lg:text-5xl md:text-4xl text-3xl font-medium tracking-tighter flex items-center text-primary"
        >
            {icon({ name: "logo", classes: "w-24 h-24" })}{home[locale].title}
        </h1>
        <span class="py-4 space-y-4">
            {@html home[locale].info}
        </span>
        <div
            class="flex flex-wrap mt-6 gap-2 sm:p-4 p-2 w-max max-w-full sm:rounded-sm sm:shadow-md bg-bg bg-opacity-50"
        >
            <a
                href="#projects"
                class="flex py-3 px-5 sm:w-max w-full font-medium rounded-sm bg-yellow-300 text-black shadow-sm"
                >Portfolio</a
            >
            <a
                href="#contact"
                class="flex py-3 px-5 sm:w-max w-full justify-between font-medium rounded-sm bg-green-300 text-black shadow-sm"
                >Contact&nbsp;
                {icon({ name: "email" })}</a
            >
            <a
                href="https://github.com/jasperro"
                class="flex py-3 px-3 w-max font-medium rounded-sm bg-gray-800 text-white shadow-sm"
            >
                {icon({ name: "github" })}</a
            >
        </div>
    </div>
</div>
<div class="mx-4 xl:mx-[14rem] 2xl:mx-[19rem]">
    <h1 class="text-3xl mt-8 mb-6">{home[locale].projects}</h1>

    <div
        id="projects"
        class="grid grid-cols-responsivecards gap-x-4 gap-y-4 lg:mx-0 lg:px-0 w-full"
    >
        {#each Object.values(home[locale].projectlist) as project}
            <Card
                title={project.title}
                description={project.description}
                imgUrl={project.imageurl}
                icons={project.icons}
                {__functions}
            />
        {/each}
    </div>

    <form
        name="contact"
        id="contact"
        class="my-4"
        method="POST"
        data-netlify="true"
    >
        <h1 class="text-3xl mt-8 mb-6">{home[locale].contactHeader}</h1>
        <p>
            <label class="font-medium"
                >{home[locale].contactName}<input
                    class="text-input w-full max-w-3xl"
                    type="text"
                    name="name"
                /></label
            >
        </p>
        <p>
            <label class="font-medium"
                >{home[locale].contactMail}<input
                    class="text-input w-full max-w-3xl"
                    type="email"
                    name="email"
                /></label
            >
        </p>
        <p>
            <label class="font-medium"
                >{home[locale].contactMessage}
                <textarea name="message" class="text-input w-full max-w-3xl" />
            </label>
        </p>
        <p>
            <input
                type="submit"
                value={home[locale].submit}
                class="my-4 py-2 px-4 shadow-sm text-sm font-medium rounded-sm text-white dark:text-black bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
            />
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300">
            {@html home[locale].formComment}
        </p>
    </form>
</div>
