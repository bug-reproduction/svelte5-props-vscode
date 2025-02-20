# issues with svelte 5, $props and vscode

reproduction step

1. clone the repo
2. `pnpm i`
3. open the folder in vscode
4. navigate to web/test/src/App.svelte
5. see error : `Type '{ type: string; errors: { message: string; }[]; }' is not assignable to type 'never'.ts(2322)`
