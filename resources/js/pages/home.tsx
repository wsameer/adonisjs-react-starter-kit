import { Head } from '@inertiajs/react'
import { CodeIcon, DatabaseIcon, LayersIcon, ZapIcon } from 'lucide-react';

const features = [
  {
    icon: CodeIcon,
    title: 'React 19',
    description:
      'Latest React with concurrent features and improved performance',
  },
  {
    icon: DatabaseIcon,
    title: 'AdonisJS 6',
    description: 'Modern Node.js framework with TypeScript-first approach',
  },
  {
    icon: LayersIcon,
    title: 'tRPC',
    description: 'End-to-end typesafe APIs with excellent developer experience',
  },
  {
    icon: ZapIcon,
    title: 'Inertia.js',
    description: 'Build single-page apps without the complexity of APIs',
  },
];

export default function Home() {
  return (
    <>
      <Head title="Homepage" />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              AdonisJS + React + Starter Kit
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to develop and deploy your full-stack web app
            </p>
            <p className="mt-6 text-lg/8 text-gray-700">
              Skip months of setup and ship your AI-powered SaaS fast.
              Authentication, database migrations, tRPC, fully typesafe APIs, edge deployment, and
              cutting-edge React patterns all configured with industry best
              practices.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.title} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}