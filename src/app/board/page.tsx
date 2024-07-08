export default function Page() {
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
      <h1 className="font-bold text-4xl mb-4">Board</h1>
      <div className="grid grid-cols-3 w-full justify-center">
        <div className="text-3xl font-semibold text-center px-6">To Plan
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #4</p>
          </div>
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #5</p>
          </div>
        </div>
        <div className="text-2xl font-semibold text-center px-6">To Do
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #2</p>
          </div>
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #3</p>
          </div>
        </div>
        <div className="text-2xl font-semibold text-center px-6">Done
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #1</p>
          </div>
        </div>
      </div>
      <a
          href="/"
          className="group rounded-lg border border-black px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-xl font-semibold">Complete Sprint{" "}</h2>
        </a>
    </main>

  );
}