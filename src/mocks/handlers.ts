import { http, HttpResponse } from 'msw'

// The list of fake answers our mock server gives.
// Each handler says: "when the app asks for THIS address, reply with THIS."
export const handlers = [
  // Temporary test handler so we can check MSW is working.
  // We'll replace it with real product handlers in step 2.
  http.get('/api/hello', () => {
    return HttpResponse.json({ message: 'MSW is working!' })
  }),
]
