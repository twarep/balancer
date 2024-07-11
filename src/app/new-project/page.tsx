export default function Page() {
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900">Create New Project</h2>
      </div>
        <form action="#" method="POST" className="mx-4 w-1/2">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="mt-5">
                <textarea name="project-name" id="project-name" placeholder="Describe your project in a few words" rows={1} className="block w-full rounded-lg border-0 px-3.5 py-1 text-gray-900 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="">
                <textarea name="project-desc" id="project-desc" placeholder="Add any more details you feel are necessary" rows={2} className="block w-full rounded-lg border-0 px-3.5 py-1 text-gray-900 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button type="submit" className="rounded-lg border border-black px-4 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Create</button>
          </div>
        </form>
    </main>
  );
}