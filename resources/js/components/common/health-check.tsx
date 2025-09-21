import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import axiosInstance from '@/lib/api-client'

interface HealthStatus {
  status: string
  timestamp: string
}

export function HealthCheck() {
  const [health, setHealth] = useState<HealthStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await axiosInstance.get('/health')
        setHealth(response.data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch health status')
        console.error('Health check failed:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchHealth()
  }, [])

  const getStatusVariant = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'ok':
        return 'default'
      case 'error':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  const formatTimestamp = (timestamp: string) => {
    try {
      return new Date(timestamp).toLocaleString()
    } catch {
      return timestamp
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Server Health</CardTitle>
          <CardDescription>Checking server status...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-32" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Health</CardTitle>
        <CardDescription>
          {error ? 'Unable to connect to server' : 'Current server status and timestamp'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status:</span>
            {error ? (
              <Badge variant="destructive">Error</Badge>
            ) : (
              <Badge variant={getStatusVariant(health?.status || 'unknown')}>
                {health?.status || 'Unknown'}
              </Badge>
            )}
          </div>
          {!error && health?.timestamp && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Last checked:</span>
              <span className="text-sm text-muted-foreground">
                {formatTimestamp(health.timestamp)}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
