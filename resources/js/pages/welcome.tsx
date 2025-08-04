import { Button } from '@/components/ui/button';
import { Head } from '@inertiajs/react'


export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />

      <nav className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center px-2 py-5 text-gray-700 hover:text-gray-900"
                >
                  <span className="font-bold">AdnoisJS + React Starter Kit</span>
                </a>
              </div>
            </div>

            <div className="hidden items-center space-x-2 md:flex">
              <Button variant="outline">Login</Button>
              <Button variant="default">Signup</Button>
            </div>

            <div className="flex items-center md:hidden">
              <Button className="mobile-menu-button">Login</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600 sm:text-base/7 md:text-2xl">
                AdonisJS + React Starter Kit
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                Everything you need to develop and deploy your full-stack web app
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                Skip months of setup and ship your AI-powered SaaS fast. Authentication, database
                migrations, tRPC, fully typesafe APIs, edge deployment, and cutting-edge React
                patterns all configured with industry best practices.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <div>
                <Button>Read docs</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
