// WebSocket message types
export const WS_MESSAGE_TYPES = {
  PERFORMANCE_METRICS: "performance_metrics",
  CPU_USAGE: "cpu_usage",
  MEMORY_USAGE: "memory_usage",
  ACTIVE_USERS: "active_users",
  USER_ACTIVITY: "user_activity",
  USERS_BY_COUNTRY: "users_by_country",
  REALTIME_EVENTS: "realtime_events",
  SYSTEM_ALERTS: "system_alerts",
}

// Mock WebSocket server for development
export class MockWebSocketServer {
  private callbacks: { [key: string]: ((event: MessageEvent) => void)[] } = {
    message: [],
    open: [],
    close: [],
    error: [],
  }
  private isConnected = false
  private intervalIds: NodeJS.Timeout[] = []

  constructor() {
    // Simulate connection delay
    setTimeout(() => {
      this.isConnected = true
      this.callbacks.open.forEach((callback) => callback({ type: "open" } as any))
      this.startDataSimulation()
    }, 1000)
  }

  addEventListener(event: string, callback: (event: MessageEvent) => void) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = []
    }
    this.callbacks[event].push(callback)
  }

  removeEventListener(event: string, callback: (event: MessageEvent) => void) {
    if (this.callbacks[event]) {
      this.callbacks[event] = this.callbacks[event].filter((cb) => cb !== callback)
    }
  }

  send(data: string) {
    if (!this.isConnected) {
      console.warn("MockWebSocket: Cannot send message, not connected")
      return
    }

    try {
      const parsedData = JSON.parse(data)
      console.log("MockWebSocket: Message sent", parsedData)

      // You can add custom responses to specific messages here
      if (parsedData.type === "init") {
        this.sendMessage({
          type: "init_response",
          data: { status: "connected", clientId: parsedData.clientId },
        })
      }
    } catch (error) {
      console.error("MockWebSocket: Error parsing sent message", error)
    }
  }

  close() {
    this.isConnected = false
    this.callbacks.close.forEach((callback) => callback({ type: "close", code: 1000, reason: "Normal closure" } as any))
    this.stopDataSimulation()
  }

  get readyState() {
    return this.isConnected ? 1 : 3 // 1 = OPEN, 3 = CLOSED
  }

  private sendMessage(data: any) {
    if (!this.isConnected) return

    const messageEvent = {
      data: JSON.stringify(data),
      type: "message",
    } as MessageEvent

    this.callbacks.message.forEach((callback) => callback(messageEvent))
  }

  private startDataSimulation() {
    // Simulate CPU usage data
    this.intervalIds.push(
      setInterval(() => {
        const cpuData = {
          timestamp: new Date().toISOString(),
          value: Math.random() * 100,
        }

        this.sendMessage({
          type: WS_MESSAGE_TYPES.CPU_USAGE,
          data: cpuData,
        })
      }, 2000),
    )

    // Simulate memory usage data
    this.intervalIds.push(
      setInterval(() => {
        const memoryData = {
          timestamp: new Date().toISOString(),
          value: Math.random() * 100,
        }

        this.sendMessage({
          type: WS_MESSAGE_TYPES.MEMORY_USAGE,
          data: memoryData,
        })
      }, 2000),
    )

    // Simulate active users data
    this.intervalIds.push(
      setInterval(() => {
        const activeUsersData = {
          activeUsers: Math.floor(Math.random() * 500) + 1000,
          pageViews: Math.floor(Math.random() * 1000) + 3000,
          newSessions: Math.floor(Math.random() * 100) + 200,
          bounceRate: Math.max(20, Math.min(60, Math.random() * 40 + 20)),
        }

        this.sendMessage({
          type: WS_MESSAGE_TYPES.ACTIVE_USERS,
          data: activeUsersData,
        })
      }, 3000),
    )

    // Simulate user activity
    this.intervalIds.push(
      setInterval(() => {
        const actions = [
          "Viewed homepage",
          "Completed purchase",
          "Started trial",
          "Downloaded resource",
          "Subscribed newsletter",
          "Added to cart",
          "Shared content",
          "Left review",
          "Updated profile",
          "Contacted support",
        ]

        const locations = [
          "New York, US",
          "London, UK",
          "Toronto, CA",
          "Sydney, AU",
          "Berlin, DE",
          "Tokyo, JP",
          "Paris, FR",
          "São Paulo, BR",
        ]

        const users = [
          "Anonymous User",
          "John Doe",
          "Sarah Chen",
          "Mike Johnson",
          "Emma Wilson",
          "David Kim",
          "Lisa Wang",
          "Alex Thompson",
        ]

        const activity = {
          id: Date.now(),
          user: users[Math.floor(Math.random() * users.length)],
          action: actions[Math.floor(Math.random() * actions.length)],
          location: locations[Math.floor(Math.random() * locations.length)],
          time: new Date().toISOString(),
        }

        this.sendMessage({
          type: WS_MESSAGE_TYPES.USER_ACTIVITY,
          data: activity,
        })
      }, 4000),
    )

    // Simulate users by country
    this.intervalIds.push(
      setInterval(() => {
        const countries = [
          { country: "United States", users: Math.floor(Math.random() * 100) + 400, flag: "🇺🇸" },
          { country: "United Kingdom", users: Math.floor(Math.random() * 50) + 200, flag: "🇬🇧" },
          { country: "Canada", users: Math.floor(Math.random() * 40) + 150, flag: "🇨🇦" },
          { country: "Germany", users: Math.floor(Math.random() * 30) + 150, flag: "🇩🇪" },
          { country: "France", users: Math.floor(Math.random() * 30) + 130, flag: "🇫🇷" },
          { country: "Australia", users: Math.floor(Math.random() * 20) + 110, flag: "🇦🇺" },
          { country: "Japan", users: Math.floor(Math.random() * 20) + 90, flag: "🇯🇵" },
          { country: "Brazil", users: Math.floor(Math.random() * 20) + 80, flag: "🇧🇷" },
        ]

        this.sendMessage({
          type: WS_MESSAGE_TYPES.USERS_BY_COUNTRY,
          data: countries,
        })
      }, 5000),
    )

    // Simulate realtime events
    this.intervalIds.push(
      setInterval(() => {
        const eventTypes = [
          {
            type: "conversion",
            titles: ["New Purchase", "Subscription Upgrade", "Premium Plan"],
            descriptions: ["Order completed", "Plan upgraded", "Premium activated"],
            values: ["$299.99", "$49.99", "$99.99"],
          },
          {
            type: "signup",
            titles: ["New User Registration", "Trial Started", "Account Created"],
            descriptions: ["User signed up", "Free trial began", "Account activated"],
            values: [null, null, null],
          },
          {
            type: "goal",
            titles: ["Goal Completed", "Milestone Reached", "Target Achieved"],
            descriptions: ["Monthly target hit", "User milestone", "Revenue goal"],
            values: ["1000 users", "50K visits", "$10K MRR"],
          },
        ]

        const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)]
        const randomIndex = Math.floor(Math.random() * randomType.titles.length)

        const event = {
          id: Date.now(),
          type: randomType.type,
          title: randomType.titles[randomIndex],
          description: randomType.descriptions[randomIndex],
          value: randomType.values[randomIndex],
          time: new Date().toISOString(),
        }

        this.sendMessage({
          type: WS_MESSAGE_TYPES.REALTIME_EVENTS,
          data: event,
        })
      }, 8000),
    )

    // Simulate system alerts
    this.intervalIds.push(
      setInterval(() => {
        // Only send an alert occasionally
        if (Math.random() > 0.3) return

        const alertTypes = ["warning", "error", "info"]
        const alertMessages = [
          "High CPU usage detected",
          "Memory usage above threshold",
          "Disk space running low",
          "Network latency increased",
          "Database connection pool near limit",
          "API rate limit approaching",
          "Cache hit ratio decreased",
          "Background job queue growing",
        ]

        const alert = {
          id: Date.now(),
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: alertMessages[Math.floor(Math.random() * alertMessages.length)],
          timestamp: new Date().toISOString(),
        }

        this.sendMessage({
          type: WS_MESSAGE_TYPES.SYSTEM_ALERTS,
          data: alert,
        })
      }, 15000),
    )

    // Simulate performance metrics
    this.intervalIds.push(
      setInterval(() => {
        const metrics = {
          cpu: Math.random() * 100,
          memory: Math.random() * 100,
          disk: Math.random() * 100,
          network: Math.random() * 100,
          responseTime: Math.random() * 500,
          requestsPerSecond: Math.random() * 100,
          errorRate: Math.random() * 5,
          timestamp: new Date().toISOString(),
        }

        this.sendMessage({
          type: WS_MESSAGE_TYPES.PERFORMANCE_METRICS,
          data: metrics,
        })
      }, 5000),
    )
  }

  private stopDataSimulation() {
    this.intervalIds.forEach((id) => clearInterval(id))
    this.intervalIds = []
  }
}

// Factory function to create a WebSocket connection (real or mock)
export const createWebSocket = (url: string): WebSocket => {
  if (process.env.NODE_ENV === "development" || !url.startsWith("ws")) {
    console.log("Using mock WebSocket server")
    return new MockWebSocketServer() as unknown as WebSocket
  }

  return new WebSocket(url)
}
