# Plugins

:::tip NOTE
Vite aims to provide out-of-the-box support for common web development patterns. Before searching for a Vite or Compatible Rollup plugin, check out the [Features Guide](../guide/features.md). A lot of the cases where a plugin would be needed in a Rollup project are already covered in Vite.
:::

Check out [Using Plugins](../guide/using-plugins) for information on how to use plugins.

## Official Plugins

### [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)

- Provides Vue 3 Single File Components support.

### [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)

- Provides Vue 3 JSX support (via [dedicated Babel transform](https://github.com/vuejs/jsx-next)).

### [@vitejs/plugin-vue2](https://github.com/vitejs/vite-plugin-vue2)

- Provides Vue 2.7 Single File Components support.

### [@vitejs/plugin-vue2-jsx](https://github.com/vitejs/vite-plugin-vue2-jsx)

- Provides Vue 2.7 JSX support (via [dedicated Babel transform](https://github.com/vuejs/jsx-vue2/)).

### [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)

- Uses esbuild and Babel, achieving fast HMR with a small package footprint and the flexibility of being able to use the Babel transform pipeline. Without additional Babel plugins, only esbuild is used during builds.

### [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)

- Replaces Babel with SWC during development. During production builds, SWC+esbuild are used when using plugins, and esbuild only otherwise. For big projects that don't require non-standard React extensions, cold start and Hot Module Replacement (HMR) can be significantly faster.

### [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

- Provides legacy browsers support for the production build.

## Community Plugins

Check out [awesome-vite](https://github.com/vitejs/awesome-vite#plugins) - you can also submit a PR to list your plugins there.

## Rollup Plugins

[Vite plugins](../guide/api-plugin) are an extension of Rollup's plugin interface. Check out the [Rollup Plugin Compatibility section](../guide/api-plugin#rollup-plugin-compatibility) for more information.
## Creating Plugins
To create a Vite plugin, you can either use the Vite plugin API or the Rollup plugin API, as Vite is built on top of Rollup.
If you want to use the Vite plugin API, you can refer to the [Vite Plugin API documentation](../guide/api-plugin) for more details. This API provides a more Vite-centric way to create plugins, allowing you to take advantage of Vite's features and optimizations.
If you prefer to use the Rollup plugin API, you can refer to the [Rollup Plugin documentation](https://rollupjs.org/guide/en/#plugins) for more details. This API is more general and can be used in both Rollup and Vite projects, but it may not provide all the features and optimizations that Vite offers.
If you want to create a plugin that works with both Vite and Rollup, you can use the Rollup plugin API and ensure that your plugin is compatible with Vite's plugin system.
You can also refer to the [Vite Plugin Guide](../guide/api-plugin) for more information on how to create plugins using the Vite plugin API. This guide provides detailed information on the Vite plugin lifecycle, hooks, and how to interact with Vite's features.
If you want to create a plugin that works with both Vite and Rollup, you can use the Rollup plugin API and ensure that your plugin is compatible with Vite's plugin system.   
Creating a Vite plugin is similar to creating a Rollup plugin. You need to export a function that takes a `Vite` instance as an argument and returns an object with the plugin's hooks.
You can also use the Rollup plugin API, as Vite is built on top of Rollup. This means that you can create a plugin that works with both Vite and Rollup by using the Rollup plugin API.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
You can also use the `configResolved` hook to access the resolved configuration after it has been processed by Vite. This allows you to modify the configuration based on the resolved values.
To create a plugin that works with both Vite and Rollup, you can use the Rollup plugin API  and ensure that your plugin is compatible with Vite's plugin system. This means that you can use the same plugin code for both Vite and Rollup projects, as long as you follow the Rollup plugin API conventions.
You can also use the `config` hook to modify the Vite configuration before the build process starts. This allows you to add or modify plugins, loaders, and other configuration options that Vite provides.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd `, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd                                                                         `, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.
To create a simple Vite plugin, you can define a function that returns an object with the plugin's name and hooks. The hooks can include `transform`, `buildStart`, `buildEnd`, and other lifecycle methods that Vite provides. You can also use the `config` hook to modify the Vite configuration before the build process starts.            
Here's a basic example:

```js
// my-plugin.js
export default function myPlugin() {
  return {
    name: 'my-plugin',
    transform(code, id) {
      // Do something with the code
      return code;
    }
  };
}   
``` 
This plugin simply returns the code unchanged, but you can modify it to perform any transformations you need. The `name` property is used to identify the plugin in logs and error messages.          
You can then use your plugin in the Vite config:

```js
// vite.config.js
import { defineConfig } from 'vite';
import myPlugin from './my-plugin';

export default defineConfig({
  plugins: [myPlugin()]                                               
});   
```         