<script>
    export let title, description, href, src;
</script>

<li>
    <a {href} target="_blank">
        <img {src} alt="{title}_img" />
        <hgroup>
            <h4>{title}</h4>
            <p>{description}</p>
        </hgroup>
    </a>
</li>

<style>
    li {
        list-style: none;
    }

    li:not(:last-child) {
        margin-bottom: 2rem;
    }

    li > a {
        text-decoration: none;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    li > a > img {
        width: 12rem;
        aspect-ratio: 16 / 9;
        margin-right: 1rem;
        object-fit: cover;
        border-radius: 0.25rem;
        background: var(--pico-card-background-color);
    }

    li > a > hgroup > h4 {
        color: inherit;
    }

    @media screen and (max-width: 510px) {
        li > a {
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        li > a > img {
            margin-right: 0;
            margin-bottom: 1rem;
            width: 100%;
        }
    }
</style>
