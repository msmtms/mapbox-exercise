import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
    baseUrl: process.env.BASE_URL,
  },
});
