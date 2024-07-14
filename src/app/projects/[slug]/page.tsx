export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
      <div className="mb-3 grid text-center lg:w-full lg:max-w-3xl lg:grid-rows-2">
        <h2 className="mb-3 text-2xl font-semibold">Balancer{" "}</h2>
        <p className="text-sm opacity-50">
          A programming project to improve personal project management.
        </p>
      </div>
      <div className="grid grid-cols-3 w-full justify-center">
        <div className="text-2xl font-semibold text-center px-6">To Plan
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
      <div className="border border-black my-6 w-full opacity-50"></div>
      <div className="mt-4 grid grid-cols-3 w-full justify-center">
        <a
          href={'/projects/' + params.slug + '/complete'}
          className="group rounded-lg border border-transparent mx-6 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-center text-2xl px-6 font-semibold">Complete Sprint{" "}</h2>
        </a>
        {/* TODO: Modify this link to pass the one prop of project to the new task page */}
        <a
          href="/new"
          className="group rounded-lg border border-transparent mx-6 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-center text-2xl px-6 font-semibold">New Task{" "}</h2>
        </a>
        
        <a
          href={'/history/' + params.slug}
          className="group rounded-lg border border-transparent mx-6 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-center text-2xl font-semibold">Project History{" "}</h2>
        </a>
      </div>
    </main>
  );
}