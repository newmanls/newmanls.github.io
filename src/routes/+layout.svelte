<script lang="ts">
    import { base } from "$app/paths";
    import "@picocss/pico";
</script>

<header>
    <nav class="container">
        <ul>
            <li>
                <a href="{base}/" class="contrast"><strong>newmanls</strong></a>
            </li>
        </ul>
        <ul>
            <li><a href="{base}/#about-me">About me</a></li>
            <li><a href="{base}/#projects">Projects</a></li>
        </ul>
    </nav>
</header>

<main class="container">
    <slot />
</main>

<footer class="container">
    <p>
        Made with <a href="https://svelte.dev/">Svelte</a> and
        <a href="https://picocss.com/">Pico CSS</a>.
        <a href="https://github.com/newmanls/newmanls.github.io">Source code</a
        >.
    </p>
</footer>

<style>
    main,
    footer {
        padding-block: var(--pico-block-spacing-vertical);
    }
    header {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        padding: 0;
        background: var(--pico-background-color);
        border-bottom: solid 1px var(--pico-muted-border-color);
        box-shadow: var(--pico-box-shadow);
    }
    main {
        display: flex;
        flex-flow: column nowrap;
        flex-grow: 3;
    }
    footer {
        font-size: 0.75rem;
        color: var(--pico-muted-color);
        border-top: solid 1px var(--pico-muted-border-color);
    }
    .container {
        max-width: 800px;
        padding-left: 24px;
        padding-right: 24px;
    }
</style>
