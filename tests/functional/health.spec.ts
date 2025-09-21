import { test } from '@japa/runner'

test.group('Health check', () => {
  test('should return server health status', async ({ assert }) => {
    const response = await fetch('http://localhost:3333/api/health')
    const body = (await response.json()) as { status: string; timestamp: string }

    assert.equal(response.status, 200)
    assert.equal(body.status, 'ok')
    assert.isString(body.timestamp)

    // Verify timestamp is in ISO format
    const timestamp = new Date(body.timestamp)
    assert.isFalse(Number.isNaN(timestamp.getTime()))
  })
})
