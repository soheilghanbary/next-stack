import Link from 'next/link'
import { Suspense } from 'react'
import { MessageCSR } from '@/components/message-csr'
import { MessageSSR } from '@/components/message-ssr'
import { ModeToggle } from '@/components/mode-toggle'
import { OAuthButton } from '@/components/oauth-button'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { appConfig } from '@/config'
import { cn } from '@/lib/utils'

const GITHUB_REPO_URL = 'https://github.com/soheilghanbary/nrpc'
const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} NRPC Stack ${appConfig.version} - Soheil Ghanbary`

export default async () => {
  return (
    <div className="flex h-svh w-svw flex-col place-items-center items-center justify-center">
      <div className="fade-in flex animate-duration-700 animate-fade flex-col items-center gap-y-3 p-4">
        <ModeToggle />
        <h1 className="flex flex-col gap-y-1 text-center font-black text-4xl">
          <span>{appConfig.name}</span>
          <span className="font-normal text-base">{appConfig.description}</span>
        </h1>
        <Separator />
        <div className="grid grid-cols-2 gap-x-2">
          <Link
            href={GITHUB_REPO_URL}
            className={cn(buttonVariants(), 'w-full')}
          >
            Get Started
          </Link>
          <OAuthButton />
        </div>
        <p className="text-muted-foreground text-xs">{COPYRIGHT_TEXT}</p>
        <p className="text-muted-foreground text-xs">
          Mode: {process.env.NODE_ENV}
        </p>
        <MessageCSR />
        <Suspense fallback={<p>Loading Data...</p>}>
          <MessageSSR />
        </Suspense>
      </div>
    </div>
  )
}
