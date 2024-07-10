export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-3xl lg:grid-rows-4">
        <h2 className="mb-3 text-2xl font-semibold">Balancer{" "}</h2>
        <p className="m-0 text-sm opacity-50">
          A programming project to improve personal project management.
        </p>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-3xl lg:grid-rows-4 lg:text-left">
        {/* TODO: Modify this link to pass the one prop of project to the new task page */}
        <a
          href="/new"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">New Task{" "}</h2>
        </a>

        {/* TODO: Modify this link to filter the pm board to only have tickets assigned to this project */}
        <a
          href="/board"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Project Board{" "}</h2>
        </a>
        
        <a
          href={'/history/' + params.slug}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Project History{" "}</h2>
        </a>
      </div>
    </main>
  );
}