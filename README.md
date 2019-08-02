# Svelte (v3) app template with TypeScript and TailwindCSS

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/colinbate/svelte-ts-tailwind-template

This template includes setup for using TailwindCSS as well as TypeScript.

> This template is based on two other templates both of which can be used if you don't want or need both TypeScript and TailwindCSS.
>
> * https://github.com/muhajirdev/svelte-tailwind-template
> * https://github.com/Axelen123/svelte-ts-template

## Get started

_Note that you will need to have [Node.js](https://nodejs.org) installed._

Create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit colinbate/svelte-ts-tailwind-template svelte-app
```

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

## Deploying to the web

### With [Netlify](https://www.netlify.com)

Install `netlify` CLI if you haven't already:

```bash
npm install netlify-cli -g
netlify login
```

You can set up automatic continuous deployment from your GitHub repo if you want with:

```bash
netlify init
```

Otherwise you could deploy manually with:
```bash
npm run build
netlify deploy --dir=public
```

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
