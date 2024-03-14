<script>
    import ThumbnailLinkLi from "./components/ThumbnailLinkLi.svelte";

    export let data;
</script>

<section id="about-me">
    <article><b>Hi, I'm Newman!</b></article>
</section>

<section id="projects">
    <h3>Projects</h3>
    <ul>
        {#each data.projects as { title, description, href, src }}
            <ThumbnailLinkLi {title} {description} {href} {src} />
        {:else}
            <p>Nothing to see here...</p>
        {/each}
    </ul>
</section>

<section id="contact">
    <h3>Contact</h3>
</section>

<style>
    ul {
        padding-left: 0;
    }
</style>
