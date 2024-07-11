export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
      <div className="mb-2 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900">Past Sprints for {params.slug}</h2>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-3xl lg:grid-rows-4 lg:text-left">
        <a
          href={`/history/${params.slug}/1`}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-2xl font-semibold">Sprint 1{" "}</h2>
        </a>
      </div>
    </main>
  );
}