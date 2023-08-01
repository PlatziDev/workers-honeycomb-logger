// -------- QUEUES INTERFACES --------

// This interfaces are referenced from
// https://developers.cloudflare.com/queues/platform/javascript-apis/
export interface MessageBatch<Body = any> {
  readonly queue: string
  readonly messages: Message<Body>[]
  ackAll(): void
  retryAll(): void
}

export interface Queue<Body = any> {
  send(body: Body): Promise<void>
  sendBatch(messages: Iterable<MessageSendRequest<Body>>): Promise<void>
}

export interface Message<Body = any> {
  readonly id: string
  readonly timestamp: Date
  readonly body: Body
  ack(): void
  retry(): void
}

type MessageSendRequest<Body = any> = {
  body: Body
}

// -------- QUEUES INTERFACES --------
