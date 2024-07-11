'use client';
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
      <div className="mb-3 grid text-center lg:w-full lg:max-w-3xl lg:grid-rows-2">
        <h2 className="mb-3 text-2xl font-semibold">Sprint {params.sprintID} {" "}</h2>
        <p className="text-sm opacity-50">
          Retrospective Text Here
        </p>
      </div>
      <div className="grid grid-cols-3 w-full justify-center">
        <div className="text-2xl font-semibold text-center px-6">To Plan

        </div>
        <div className="text-2xl font-semibold text-center px-6">To Do
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #5</p>
          </div>
        </div>
        <div className="text-2xl font-semibold text-center px-6">Done
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #1</p>
          </div>
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #2</p>
          </div>
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #3</p>
          </div>
          <div className="my-6 flex-col border-2 border-black rounded-md">
            <p className="text-2xl p-4">Task #4</p>
          </div>
        </div>
      </div>
    </main>
  );
}