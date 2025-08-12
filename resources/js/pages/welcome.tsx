import { Button } from '@/components/ui/button'
import { Head, Link } from '@inertiajs/react'

export default function Welcome() {
  return (
    <>
      <Head title="Welcome">
        <meta
          head-key="description"
          name="description"
          content="A modern, full-stack TypeScript starter kit that combines the power of AdonisJS backend with React frontend, seamlessly connected through Inertia.js"
        />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>
      <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8">
        <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
          <nav className="flex items-center justify-end gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </nav>
        </header>

        <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
          <main className="mt-28 flex w-full max-w-[335px] flex-col-reverse lg:mt-4 lg:max-w-4xl lg:flex-row">
            <div className="flex-1 rounded-lg bg-white p-0 pb-12 text-[13px] leading-[20px] lg:p-20">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Adonis + React Starter Kit
              </h2>
              <p className="mt-2 text-4xl tracking-tight text-pretty sm:text-5xl lg:text-balance">
                Everything you need to develop and deploy your full-stack web app
              </p>
              <div className="flex-column mt-6 flex gap-1 text-sm leading-normal">
                <span>Read the </span>
                <a
                  href="https://wsameer.github.io/adonisjs-react-starter-kit/intro.html"
                  target="_blank"
                  className="inline-flex items-center space-x-1 font-medium text-[#f53003] text-indigo-600 underline underline-offset-4"
                >
                  documentation
                  <svg
                    width={10}
                    height={11}
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2.5 w-2.5"
                  >
                    <path
                      d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                      stroke="currentColor"
                      strokeLinecap="square"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </main>
        </div>
        <div className="hidden h-14.5 lg:block"></div>
      </div>
    </>
  )
}
