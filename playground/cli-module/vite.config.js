// eslint-disable-next-line import-x/no-nodejs-modules
import { URL } from 'url'
import { defineConfig } from 'vite'

// make sure bundling works even if `url` refers to the locally installed
// `url` package instead of the built-in `url` nodejs module
globalThis.__test_url = URL

export default defineConfig({
  server: {
    host: 'localhost',
  },
  build: {
    //speed up build
    minify: false,
    target: 'esnext',
  },
})
// This Vite configuration file sets up a development server and build options for a project.
// It specifies the server host as 'localhost' and configures the build to not minify the output,
// targeting modern JavaScript (ESNext). The `globalThis.__test_url` assignment ensures that the
// `URL` class from the `url` module is available globally, which is useful for testing purposes.
// The `defineConfig` function from Vite is used to create a configuration object that Vite can use to set up the development environment and build process.
// This setup is typical for projects that require a modern JavaScript environment and want to leverage Vite's fast development server
// and efficient build capabilities. The configuration is designed to be flexible and can be extended with additional options as needed for specific project requirements.
// The `server` and `build` properties allow customization of the development server and build process, respectively.
// The `server` property can include options like port, open, and proxy settings, while the `build` property can include options like outDir, sourcemap, and rollupOptions for more advanced configurations.
// This file is essential for setting up the development environment and build process for a Vite project, ensuring that the application runs smoothly during development and is optimized for production builds.
// It serves as the entry point for Vite to understand how to serve   the application during development and how to build it for production.                                                        