import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Sets up the mock server in the browser, using our list of fake answers.
export const worker = setupWorker(...handlers)
