import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-center align-middle">
      <div className="z-10 max-w-5xl w-full justify-center font-mono text-sm lg:flex">
        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Coming Soon...</code>
        </p>
      </div>
    </main>
  )
}
