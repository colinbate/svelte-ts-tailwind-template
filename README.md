> **This repo is now using `main` as the default branch. This branch will remain for a while, but will not receive updates.**

# Svelte + TS + Tailwind 2.1 app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/colinbate/svelte-ts-tailwind-template and is based on the official Svelte template with TypeScript pre-enabled and Tailwind CSS configured. Uses Tailwind CSS 2.1 with the JIT compiler enabled. **The JIT feature is in preview and not tied to SemVer, so I've set it to 2.1.0 specifically.**

> Note that this isn't a SvelteKit app, this is a vanilla Svelte template with the above mentioned technologies pre-installed.

> ## Important
> When building your project in a CI environment, or any other time you want to use `npm run build` you will need to make sure you don't have `NODE_ENV=development` as that will cause Tailwind to use a long running process. You can set `TAILWIND_MODE=build` to get around this without changing `NODE_ENV`. Also note that in many CI environments, setting `NODE_ENV=production` will mean that your `devDependencies` are not installed, which doesn't work for Svelte apps.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit colinbate/svelte-ts-tailwind-template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) >=12.13 installed.*

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

TypeScript has already been enabled in this template.

