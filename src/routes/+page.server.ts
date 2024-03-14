import projects_index from './data/projects/index.json'

export function load() {
    return {
        projects: projects_index
    }
}
