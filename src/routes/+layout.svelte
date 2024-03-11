<header>
    <nav class="container">
        <ul>
            <li><a href="/" class="contrast"><strong>newmanls</strong></a></li>
        </ul>
        <ul>
            <li><a href="/#">About me</a></li>
            <li><a href="/#">Projects</a></li>
            <li><a href="/#">Contact</a></li>
        </ul>
    </nav>
</header>

<main class="container">
    <slot />
</main>

<footer class="container">
    <hr />
    <p>
        Made with <a href="https://svelte.dev/">Svelte</a> and
        <a href="https://picocss.com/">Pico CSS</a>.
    </p>
</footer>

<style>
    header {
        border-bottom: solid 1px var(--pico-muted-border-color);
        padding: 0;
    }
    main {
        display: flex;
        flex-flow: column nowrap;
        flex-grow: 3;
    }
    footer {
        font-size: 0.75rem;
        color: var(--pico-muted-color);
    }
</style>
