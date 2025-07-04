import fs from 'node:fs/promises'
import url from 'node:url'
import path from 'node:path'
import crypto from 'node:crypto'
import { defineConfig } from 'vite'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const noncePlaceholder = '#$NONCE$#'
const createNonce = () => crypto.randomBytes(16).toString('base64')

/**
 * @param {import('node:http').ServerResponse} res
 * @param {string} nonce
 */
const setNonceHeader = (res, nonce) => {
  res.setHeader(
    'Content-Security-Policy',
    `default-src 'nonce-${nonce}'; connect-src 'self'`,
  )
}

/**
 * @param {string} file
 * @param {(input: string, originalUrl: string) => Promise<string>} transform
 * @returns {import('vite').Connect.NextHandleFunction}
 */
const createMiddleware = (file, transform) => async (req, res) => {
  const nonce = createNonce()
  setNonceHeader(res, nonce)
  const content = await fs.readFile(path.join(__dirname, file), 'utf-8')
  const transformedContent = await transform(content, req.originalUrl)
  res.setHeader('Content-Type', 'text/html')
  res.end(transformedContent.replaceAll(noncePlaceholder, nonce))
}

export default defineConfig({
  plugins: [
    {
      name: 'nonce-inject',
      config() {
        return {
          appType: 'custom',
          html: {
            cspNonce: noncePlaceholder,
          },
        }
      },
      configureServer({ transformIndexHtml, middlewares }) {
        return () => {
          middlewares.use(
            createMiddleware('./index.html', (input, originalUrl) =>
              transformIndexHtml(originalUrl, input),
            ),
          )
        }
      },
      configurePreviewServer({ middlewares }) {
        return () => {
          middlewares.use(
            createMiddleware('./dist/index.html', async (input) => input),
          )
        }
      },
    },
  ],
})
// This Vite configuration file sets up a custom server with nonce-based Content Security Policy (CSP) headers.
// It defines a nonce for each request, which is used to allow inline scripts and styles in     the HTML.
// The `createMiddleware` function reads an HTML file and injects the nonce into the CSP header and any inline scripts or styles.
// The `defineConfig` function from Vite is used to create the configuration object.
// The `plugins` array includes a custom plugin that handles the nonce injection and                            