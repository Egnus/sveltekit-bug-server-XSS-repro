import { writable } from 'svelte/store';

export const langs$: import('svelte/store').Writable<string[]> = writable([]);
