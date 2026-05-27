'use client'
import { Button } from 'shared/components/ui/button'
import { signIn } from 'shared/lib/auth-client'

export const OAuthButton = () => {
  return (
    <Button
      variant={'secondary'}
      onClick={() => signIn.social({ provider: 'google' })}
    >
      Login with Google
    </Button>
  )
}
