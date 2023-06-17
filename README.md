> Default dev port is now `5173`, it now uses Vite under the hood.
# Svelte v4 + TS + Tailwind 3.3 app

**NOTE** Dark mode stopped working with the Rollup based template, and since it isn't supported anymore, I've switched this to the Vite based template.

This is a project template for [Svelte](https://svelte.dev) (v4) apps. It lives at https://github.com/colinbate/svelte-ts-tailwind-template and is based on the official Svelte template via `create-vite` with TypeScript selected and Tailwind CSS added via `svelte-add`. The dependencies were then updated to latest (as of the latest commit). It is getting pretty easy to get this stack working without this template, but may save you a bit of time.

> Note that this isn't a SvelteKit app, this is a vanilla Svelte template with the above mentioned technologies pre-installed. Now that SvelteKit is past 1.0, it is an option you may want to consider for any larger apps.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit colinbate/svelte-ts-tailwind-template svelte-app
cd svelte-app
```

Alternatively, if you are currently on GitHub, you can click the "Use this template" button at the top of this page.

*Note that you will need to have [Node.js](https://nodejs.org) >=16 installed.*

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Vite](https://vitejs.dev/):

```bash
npm run dev
```

Navigate to [localhost:5173](http://localhost:5173). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can serve up the newly built app with `npm run preview`. This allows you to ensure nothing was damaged in the production build process.

You can then host the app with whichever static host you prefer.
