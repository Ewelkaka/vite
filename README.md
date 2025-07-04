<><p align="center">
  <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vite.dev/logo.svg" alt="Vite logo">
    </></a>
</p><br /><p align="center">
    <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></></a>
    <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></></a>
    <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></></a>
    <a href="https://pr.new/vitejs/vite"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></></a>
    <a href="https://chat.vite.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></></a>
  </p><br /></>

# Vite 

> Next Generation Frontend Tooling

- **Instant Server Start**
- ⚡️ Lightning Fast HMR     
- 🛠️ Rich Features    
- 📦 Optimized Build        
- 🔩 Universal Plugin Interface 
- 🔑 Fully Typed APIs 
- 🌍 Framework Agnostic 
Vite (French word for "quick", pronounced [`/vit/`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience. It consists of two major parts:
- A development server that provides a rich feature set, including Hot Module Replacement (HMR) and native ES module support, enabling fast and efficient development workflows.  
- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vite.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vite.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vite.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.
- A [plugin interface](https://vite.dev/guide/api-plugin.html) that allows you to extend Vite's functionality and integrate with various tools and frameworks.    
In addition, Vite is highly extensible via its [Plugin API](https://vite.dev/guide/api-plugin.html) and [JavaScript API](https://vite.dev/guide/api-javascript.html) with full typing support.
Vite is framework-agnostic, meaning it can be used with any frontend framework or library, including Vue, React, Preact, Svelte, and more. It also supports a wide range of features out of the box, such as TypeScript, JSX, CSS preprocessors, and more.
[Read the Docs to Learn More](https://vite.dev).
## Features
- **Instant Server Start**: Vite starts the dev server instantly, regardless of the size of your application.
- **Lightning Fast HMR**: Vite's Hot Module Replacement (HMR) is extremely fast, allowing you to see changes in your application almost instantly.
- **Rich Features**: Vite comes with a rich set of features out of the box, including support for TypeScript, JSX, CSS preprocessors, and more.
- **Optimized Build**: Vite uses Rollup under the hood to bundle your code for production, ensuring that your application is highly optimized and performs well.
- **Universal Plugin Interface**: Vite's plugin interface is based on Rollup's plugin system, allowing you to use existing Rollup plugins or create your own to extend Vite's functionality.
- **Fully Typed APIs**: Vite provides fully typed APIs, making it easy to work with Vite in TypeScript or JavaScript projects.
- **Framework Agnostic**: V           
## Packages   
ite is framework-agnostic, meaning it can be used with any frontend framework or library, including Vue, React, Preact, Svelte, and more. It also supports a wide range of features out of the box, such as TypeScript, JSX, CSS preprocessors, and more.
- **Community Driven**: Vite has a vibrant community that contributes to its development and provides a wide range of plugins and integrations for various frameworks and tools.
- **Modern Development Experience**: Vite provides a modern development experience with features like native ES module support, fast HMR, and a rich set of built-in features that make it easy to develop and build modern web applications.
|         Package           | Version (click for changelogs)                                                                                                           |
|   ----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [vite](packages/vite)                           | [![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)](packages/vite/CHANGELOG.md)                                    |                       
| [@vitejs/plugin-legacy](packages/plugin-legacy) | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md) |
| [create-vite](packages/create-vite)             | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |
| [@vitejs/plugin-vue](packages/plugin-vue)       | [![plugin-vue version](https://img.shields.io/npm/v/@vitejs/plugin-vue.svg?label=%20)](packages/plugin-vue/CHANGELOG.md)           |
| [@vitejs/plugin-vue-jsx](packages/plugin-vue-jsx) | [![plugin-vue-jsx version](https://img.shields.io/npm/v/@vitejs/plugin-vue-jsx.svg?label=%20)](packages/plugin-vue-jsx/CHANGELOG.md) |
| [@vitejs/plugin-react](packages/plugin-react)     | [![plugin-react version](https://img.shields.io/npm/v/@vitejs/plugin-react.svg?label=%20)](packages/plugin-react/CHANGELOG.md)       |
| [@vitejs/plugin-legacy](packages/plugin-legacy)   | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md)    |
| [create-vite](packages/create-vite)               | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)                        |
| [@vitejs/plugin-react-swc](packages/plugin-react-swc) | [![plugin-react-swc version](https://img.shields.io/npm/v/@vitejs/plugin-react-swc.svg?label=%20)](packages/plugin-react-swc/CHANGELOG.md) |
| [@vitejs/plugin-vue2](packages/plugin-vue2)       | [![plugin-vue2 version](https://img.shields.io/npm/v/@vitejs/plugin-vue2.svg?label=%20)](packages/plugin-vue2/CHANGELOG.md)       |
| [@vitejs/plugin-vue2-jsx](packages/plugin-vue2-jsx) | [![plugin-vue2-jsx version](https://img.shields.io/npm/v/@vitejs/plugin-vue2-jsx.svg?label=%20)](packages/plugin-vue2-jsx/CHANGELOG.md) |
| [@vitejs/plugin-svelte](packages/plugin-svelte)     | [![plugin-svelte version](https://img.shields.io/npm/v/@vitejs/plugin-svelte.svg?label=%20)](packages/plugin-svelte/CHANGELOG.md)       |
See [Contributing Guide](CONTRIBUTING.md).
## Documentation
## License                            
See the [Vite Documentation](https://vite.dev/guide/) for detailed information on how to use Vite, including guides on features, configuration, and more.
Vite is licensed under the [MIT License](LICENSE). You can find the full license text in the [LICENSE](LICENSE) file in the root of the repository.
Vite is licensed under the [MIT License](LICENSE).    
## Community
Join the Vite commu nity on [Discord](https://chat.vite.dev) to discuss, share ideas, and get help from other Vite users. You can also follow Vite on [Twitter](https://twitter.com/vite_js) for updates and announcements.
You can also find Vite on [Twitter](https://twitter.com/vite_js) for updates and announcements.
- [Discord](https://chat.vite.dev) - Join the Vite community on Discord to discuss, share ideas, and get help from other Vite users.
- [Twitter](https://twitter.com/vite_js) - Follow Vite on Twitter for updates and announcements.
- [GitHub Discussions](https://github.com/vitejs/vite/discussions) - Join the conversation on GitHub Discussions.
## Sponsors 
Vite is made possible by the support of our sponsors. If you find Vite useful, please consider supporting us on [GitHub Sponsors](        
<p align="center">
  <a target="_blank" href="https://github.com/sponsors/yyx990803">
    <img alt="sponsors" src="https://sponsors.vuejs.org/vite.svg?v2">
  </a>
</p>            
).
## Contributing     

## Security             

We take security seriously at Vite. If you discover any security vulnerabilities, please report them to us via [GitHub Issues](https://github.com/vitejs/vite/issues) or by contacting us directly.
We will work with you to resolve the issue as quickly as possible. Please do not disclose security vulnerabilities publicly until they have been addressed.         ```                       