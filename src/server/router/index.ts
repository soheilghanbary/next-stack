import { os } from '@orpc/server'

export const router = {
  hello: os
    .route({
      method: 'GET',
    })
    .handler(async () => {
      return { message: 'Hello World!' }
    }),
}
