// this is automatically detected by playground/vitestSetup.ts and will replace
// the default e2e test serve behavior

// The server is started in the test, so we need to have a custom serve
// function or a default server will be created
export async function serve(): Promise<{ close(): Promise<void> }> {
  return {
    close: () => Promise.resolve(),
  }
}
// This is a placeholder function to satisfy the serve.ts requirement.
// In a real-world scenario, you would implement the logic to start your server here.       