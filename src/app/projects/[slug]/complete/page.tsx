export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
      <form action="#" method="POST" className="mx-4 w-1/2">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-3 text-2xl font-semibold" id="continue-label">
                Continue:
              </label>
              <div className="mt-5">
                <textarea name="continue" id="continue" placeholder="What went well, helped you move forward?" rows={3} className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-3 text-2xl font-semibold" id="stop-label">
                Stop:
              </label>
              <div className="mt-5">
                <textarea name="stop" id="stop" placeholder="What didn't work, held you back?" rows={3} className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-3 text-2xl font-semibold" id="start-label">
                Start:
              </label>
              <div className="mt-5">
                <textarea name="start" id="start" placeholder="What can you do differently in the future?" rows={3} className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button type="submit" className="rounded-lg border border-black px-4 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Complete Sprint</button>
          </div>
        </form>
    </main>
  );
}