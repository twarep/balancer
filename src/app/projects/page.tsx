export default function Page() {
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-3xl lg:grid-rows-4 lg:text-left">
        <a
          href="/projects/balancer"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Balancer{" "}</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            A simple project management app.
          </p>
        </a>
      </div>
      <div className="mt-10 text-center">
          <button type="submit" className="rounded-lg border border-black px-4 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">New Project</button>
      </div>
    </main>
  );
}