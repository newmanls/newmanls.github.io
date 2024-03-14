<header class="container">
    <nav>
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
    <p>
        Made with <a href="https://svelte.dev/">Svelte</a> and
        <a href="https://picocss.com/">Pico CSS</a>.
    </p>
</footer>

<style>
    header {
        padding: 0;
        border-bottom: solid 1px var(--pico-muted-border-color);
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
        padding-left: 16px;
        padding-right: 16px;
    }
</style>
