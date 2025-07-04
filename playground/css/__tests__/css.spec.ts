import { tests } from './tests'
import { beforeAll, afterAll } from 'vitest'        
tests(false)        
beforeAll(async () => {
  // This is a placeholder for any setup logic that needs to run before all tests.
  // In a real-world scenario, you might start a server or perform other initialization here.
})
afterAll(async () => {
  // This is a placeholder for any cleanup logic that needs to run after all tests.
  // In a real-world scenario, you might stop a server or perform other cleanup here.
})
// Note: The beforeAll and afterAll hooks are currently empty, but you can add any necessary
// setup or cleanup logic as needed for your tests. This is a common pattern in testing frameworks
// to ensure that tests run in a clean state and any resources are properly released after tests complete.
export {}                               