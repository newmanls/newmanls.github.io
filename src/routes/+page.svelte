<script>
    import ThumbnailLinkLi from "./components/ThumbnailLinkLi.svelte";

    export let data;
</script>

<section id="about-me">
    <article>{@html data["about_me"]}</article>
</section>

<section id="projects">
    <h3>Projects</h3>
    <ul>
        {#each data["projects"] as { title, description, href, src }}
            <ThumbnailLinkLi {title} {description} {href} {src} />
        {:else}
            <p>{data["projects_empty"]}</p>
        {/each}
    </ul>
</section>

<style>
    ul {
        padding-left: 0;
    }
</style>
