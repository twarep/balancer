export default function Home() {
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="flex flex-row items-stretch mb-2">
        <h1 className="text-2xl">Balancer</h1>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-3xl lg:grid-rows-4 lg:text-left">
        <a
          href="/new"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">New Task{" "}</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Create a new task.
          </p>
        </a>

        <a
          href="/recurring"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Recurring Board{" "}</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Check your recurring tasks.
          </p>
        </a>

        <a
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Projects{" "}</h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Review your current and past projects.
          </p>
        </a>

      </div>
    </main>
  );
}
