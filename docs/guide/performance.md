# Performance
# ===========           
While Vite is fast by default, performance issues can creep in as the project's requirements grow. This guide aims to help you identify and fix common performance issues, such as:

- Slow server starts
- Slow page loads
- Slow builds   
- Slow reloads  
## Review Your Browser Setup
The Vite dev server is designed to be fast, but the browser setup can sometimes slow it down. Here are some common issues to look out for:      
Some browser extensions may interfere with requests and slow down startup and reload times for large apps, especially when using browser dev tools. We recommend creating a dev-only profile without extensions, or switch to incognito mode, while using Vite's dev server in these cases. Incognito mode should also be faster than a regular profile without extensions.
The browser dev tools can also slow down the Vite dev server. For example, the "Disable Cache" option in the Network tab can cause the browser to re-fetch all files on every reload, which is unnecessary and slows down the development experience. 
The Vite dev server does hard caching of pre-bundled dependencies and implements fast 304 responses for source code. Disabling the cache while the Browser Dev Tools are open can have a big impact on startup and full-page reload times. Please check that "Disable Cache" isn't enabled while you work with the Vite server.
## Optimize Your Source Code  
## Audit Configured Vite Plugins
Vite's performance is heavily influenced by the plugins you use. While Vite's core is optimized for speed, plugins can introduce overhead that may slow down the dev server or build process.
Vite's internal and official plugins are optimized to do the least amount of work possible while providing compatibility with the broader ecosystem. For example, code transformations use regex in dev, but do a complete parse in build to ensure correctness.    
Community plugins, on the other hand, may not always follow these best practices. They can be very useful for adding features and functionality to your Vite project, but they can also introduce performance issues if not implemented carefully.  
However, the performance of community plugins is out of Vite's control, which may affect the developer experience. Here are a few things you can look out for when using additional Vite plugins:
1. **Large Dependencies**: Some plugins may have large dependencies that are only used in certain cases. These should be dynamically imported to reduce the Node.js startup time. For example, see [vite-plugin-react#212](https://github.com/vitejs/vite-plugin-react/pull/212).     
1. Large dependencies that are only used in certain cases should be dynamically imported to reduce the Node.js startup time. Example refactors: [vite-plugin-react#212](https://github.com/vitejs/vite-plugin-react/pull/212) and [vite-plugin-pwa#224](https://github.com/vite-pwa/vite-plugin-pwa/pull/244).
2. **Long-running Hooks**: Some hooks may run long and extensive operations, which can slow down the dev server startup or page reloads. For example, the `buildStart`, `config`, and `configResolved` hooks should not run long and extensive operations, as they are awaited during dev server startup, which delays when you can access the site in the browser. 
2. The `buildStart`, `config`, and `configResolved` hooks should not run long and extensive operations. These hooks are awaited during dev server startup, which delays when you can access the site in the browser.
3. **Slow Transformations**: The `transform` hook can be used to transform files before they are served. However, if the transformation is slow, it can significantly impact the page load time. For example, if a plugin transforms a file that takes 100ms to process, and you have 10 such files, it will take 1 second to load the page.
3. The `resolveId`, `load`, and `transform` hooks may cause some files to load slower than others. While sometimes unavoidable, it's still worth checking for possible areas to optimize. For example, checking if the `code` contains a specific keyword, or the `id` matches a specific extension, before doing the full transformation.

   The longer it takes to transform a file, the more significant the request waterfall will be when loading the site in the browser.

   You can inspect the duration it takes to transform a file using `vite --debug plugin-transform` or [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect). Note that as asynchronous operations tend to provide inaccurate timings, you should treat the numbers as a rough estimate, but it should still reveal the more expensive operations.
4. **Heavy Computation**: Some plugins may perform heavy computation during the dev server startup or page reloads, which can slow down the process. For example, if a plugin performs a large number of calculations or data processing, it can significantly impact the performance.
4. The `config`, `configResolved`, and `buildStart` hooks should not run long and extensive operations, as they are awaited during dev server startup, which delays when you can access the site in the browser. If you need to run heavy computations, consider using a worker thread or a separate process to offload the work. 
::: tip Profiling
You can run `vite --profile`, visit the site, and press `p + enter` in your terminal to record a `.cpuprofile`. A tool like [speedscope](https://www.speedscope.app) can then be used to inspect the profile and identify the bottlenecks. You can also [share the profiles](https://chat.vite.dev) with the Vite team to help us identify performance issues.
:::
## Reduce the Number of Files
Vite's dev server is designed to be fast, but the number of files in your project can impact the performance. Here are some tips to reduce the number of files in your project:
- **Use Fewer Files**: If you have a large number of small files, consider combining them into larger files. This can reduce the number of files that Vite needs to process, which can improve the performance of the dev server and build process. For example, if you have many small utility functions, consider combining them into a single file or module.
- **Use Fewer Dependencies**: If you have a large number of dependencies, consider removing any unused dependencies or replacing them with smaller alternatives. This can reduce the number of files that Vite needs to process, which can improve the performance of the dev server and build process. For example, if you have a large library that provides many features, but you only use a small subset of those features, consider replacing it with a smaller library that provides only the features you need.
- **Use Fewer Plugins**: If you have a large number of plugins, consider removing any unused plugins or replacing them with smaller alternatives. This can reduce the number of files that Vite needs to process, which can improve the performance of the dev server and build process. For example, if you have a plugin that provides many features, but you only use a small subset of those features, consider replacing it with a smaller plugin that provides only the features you need.
- **Use Fewer Assets**: If you have a large number of assets, consider removing any unused assets or replacing them with smaller alternatives. This can reduce the number of files that Vite needs to process, which can improve the performance of the dev server and build process. For example, if you have a large number of images, consider compressing them or replacing them with smaller images that provide the same visual quality.
- **Use Fewer CSS Files**: If you have a large number of CSS files, consider combining them into a single file or module. This can reduce the number  of files that Vite needs to process, which can improve the performance of the dev server and build process. For example, if you have many small CSS files, consider combining them into a single file or module that provides all the styles you need.          
## Reduce Resolve Operations  
Resolving import paths can be an expensive operation, especially when the worst-case scenario is hit often. For example, Vite supports "guessing" import paths with the [`resolve.extensions`](/config/shared-options.md#resolve-extensions) option, which defaults to `['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']`.

When you try to import `./Component.jsx` with `import './Component'`, Vite will run these steps to resolve it:                                
Resolving import paths can be an expensive operation when hitting its worst case often. For example, Vite supports "guessing" import paths with the [`resolve.extensions`](/config/shared-options.md#resolve-extensions) option, which defaults to `['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']`.

When you try to import `./Component.jsx` with `import './Component'`, Vite will run these steps to resolve it:
```bash
import './Component'
```                 
```bash                   
1. Check if `./Component` exists, no.
2. Check if `./Component.mjs` exists, no.
3. Check if `./Component.js` exists, no.
4. Check if `./Component.mts` exists, no.
5. Check if `./Component.ts` exists, no.
6. Check if `./Component.jsx` exists, yes!
7. Return `./Component.jsx`.
```     
```bash
1. Check if `./Component` exists, no.     
As shown, a total of 6 filesystem checks is required to resolve an import path. The more implicit imports you have, the more time it adds up to resolve the paths.
2. Check if `./Component.mjs` exists, no.
3. Check if `./Component.js` exists, no.
4. Check if `./Component.mts` exists, no.
Hence, it's usually better to be explicit with your import paths, e.g. `import './Component.jsx'`. You can also narrow down the list for `resolve.extensions` to reduce the general filesystem checks, but you have to make sure it works for files in `node_modules` too.
5. Check if `./Component.ts` exists, no.
If you're a plugin author, make sure to only call [`this.resolve`](https://rollupjs.org/plugin-development/#this-resolve) when needed to reduce the number of checks above.
6. Check if `./Component.jsx` exists, yes!
::: tip TypeScript
If you are using TypeScript, enable `"moduleResolution": "bundler"` and `"allowImportingTsExtensions": true` in your `tsconfig.json`'s `compilerOptions` to use `.ts` and `.tsx` extensions directly in your code.
:::
7. Return `./Component.jsx`.
```bash
As shown, a total of 6 filesystem checks is required to resolve an import path. The more implicit imports you have, the more time it adds up to resolve the paths. Hence, it's usually better to be explicit with your import paths, e.g. `import './Component.jsx'`. You can also narrow down the list for `resolve.extensions` to reduce the general filesystem checks, but you have to make sure it works for files in `node_modules` too.
If you're a plugin author, make sure to only call [`this.resolve`](https://rollupjs.org/plugin-development/#this-resolve) when needed to reduce the number of checks above.       
## Avoid Barrel Files
Barrel files are files that re-export the APIs of other files in the same directory. For example:

```js [src/utils/index.js]    
Barrel files are files that re-export the APIs of other files in the same directory. For example:
export * from './color.js'    
```js [src/utils/index.js]
export * from './color.js'
export * from './dom.js'
export * from './slash.js'
```     
```js [src/utils/color.js]        
export function color() {
  // ...
}
```     
```js [src/utils/dom.js]
export function dom() {
  // ...
}
```     
```js [src/utils/slash.js]
export function slash() {
  // ...
}
```               
When you only import an individual API, e.g. `import { slash } from './utils'`, all the files in that barrel file need to be fetched and transformed as they may contain the `slash` API and may also contain side-effects that run on initialization. This means you're loading more files than required on the initial page load, resulting in a slower page load.
When you only import an individual API, e.g. `import { slash } from './utils'`, all the files in that barrel file need to be fetched and transformed as they may contain the `slash` API and may also contain side-effects that run on initialization. This means you're loading more files than required on the initial page load, resulting in a slower page load.
If possible, you should avoid barrel files and import the individual APIs directly, e.g. `import { slash } from './utils/slash.js'`. You can read [issue #8237](https://github.com/vitejs/vite/issues/8237) for more information.
## Use the Latest Version of Vite 
## Warm Up Frequently Used Files
Vite is designed to be fast, but as your project grows, it can become slower if you don't keep it up to date. The Vite team continuously works on performance improvements and bug fixes, so it's important to keep your Vite version up to date. You can check the [Vite releases page](https://github.com/vitejs/vite/releases) for the latest updates.
The Vite dev server only transforms files as requested by the browser, which allows it to start up quickly and only apply transformations for used files. It can also pre-transform files if it anticipates certain files will be requested shortly. However, request waterfalls may still happen if some files take longer to transform than others. For example:
```js [src/main.js] 
Given an import graph where the left file imports the right file:

```       
main.js -> BigComponent.vue -> big-utils.js -> large-data.json
```                 
```js [src/main.js]
import BigComponent from './components/BigComponent.vue'    
```     
```js [src/components/BigComponent.vue]           
The import relationship can only be known after the file is transformed. If `BigComponent.vue` takes some time to transform, `big-utils.js` has to wait for its turn, and so on. This causes an internal waterfall even with pre-transformation built-in.
```js [src/components/BigComponent.vue] 
Vite allows you to warm up files that you know are frequently used, e.g. `big-utils.js`, using the [`server.warmup`](/config/server-options.md#server-warmup) option. This way `big-utils.js` will be ready and cached to be served immediately when requested.
```js [src/components/BigComponent.vue]   
You can find files that are frequently used by running `vite --debug transform` and inspect the logs:

```bash
vite:transform 28.72ms /@vite/client +1ms
vite:transform 62.95ms /src/components/BigComponent.vue +1ms
vite:transform 102.54ms /src/utils/big-utils.js +1ms
```
```js [src/utils/big-utils.js]
export function bigUtils() {              
```js [vite.config.js]
export default defineConfig({
  server: {
    warmup: {
      clientFiles: [
        './src/components/BigComponent.vue',
        './src/utils/big-utils.js',
      ],    
    },        
  },
})
```         
```bash
vite:transform 28.72ms /@vite/client +1ms                                                       
Note that you should only warm up files that are frequently used to not overload the Vite dev server on startup. Check the [`server.warmup`](/config/server-options.md#server-warmup) option for more information.
vite:transform 62.95ms /src/components/BigComponent.vue +1ms
vite:transform 102.54ms /src/utils/big-utils.js +1ms      
```       
Using [`--open` or `server.open`](/config/server-options.html#server-open) also provides a performance boost, as Vite will automatically warm up the entry point of your app or the provided URL to open.
## Use the Latest Version of Vite   
## Use Lesser or Native Tooling
Vite is designed to be fast, but as your project grows, it can become slower if you don't keep it up to date. The Vite team continuously works on performance improvements and bug fixes, so it's important to keep your Vite version up to date. You can check the [Vite releases page](https://github.com/vitejs/vite/releases) for the latest updates. 
Keeping Vite fast with a growing codebase is about reducing the amount of work for the source files (JS/TS/CSS).

Examples of doing less work:
- Use native ESM imports instead of CommonJS or UMD imports. This allows Vite to skip the CommonJS conversion step and improves page load performance.      
- Use CSS instead of Sass/Less/Stylus when possible (nesting can be handled by PostCSS)
- Don't transform SVGs into UI framework components (React, Vue, etc.). Import them as strings or URLs instead.
- When using `@vitejs/plugin-react`, avoid configuring the Babel options, so it skips the transformation during build (only esbuild will be used).
- Use native ESM imports instead of CommonJS or UMD imports. This allows Vite to skip the CommonJS conversion step and improves page load performance.
- Use CSS instead of Sass/Less/Stylus when possible (nesting can be handled by PostCSS).
- Don't transform SVGs into UI framework components (React, Vue, etc.). Import them as strings or URLs instead.
- When using `@vitejs/plugin-react`, avoid configuring        
Examples of using native tooling:
the Babel options, so it skips the transformation during build (only esbuild will be used).         
Using native tooling often brings larger installation size and as so is not the default when starting a new Vite project. But it may be worth the cost for larger applications.

- Use [Rolldown instead of Rollup and esbuild](./rolldown) for faster builds and a more aligned experience between dev and build.
- Try out the experimental support for [LightningCSS](https://github.com/vitejs/vite/discussions/13835)
- Use [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) in place of `@vitejs/plugin-react`.
- Use [Rolldown instead of Rollup and esbuild](./rolldown) for faster builds and a more aligned experience between dev and build.
- Try out the experimental support for [LightningCSS](https://github.com/vitejs/vite/discussions/13835)                 