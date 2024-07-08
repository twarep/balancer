import RecurringCheckbox from "./recurringCheckbox";

export default function Page() {

  return (
    <main className="flex my-2 flex-col items-center justify-between py-6 px-6">
      <div className="grid justify-items-start w-full px-6">
        <a href="/"><h1 className="text-left text-2xl">Balancer</h1></a>
      </div>
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">Add New Task</h2>
        </div>
        <form action="#" method="POST" className="mx-4 w-1/2">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="mt-5">
                <textarea name="message" id="message" placeholder="What is your task?" rows={3} className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div className="flex gap-x-4">
              <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                Recurring Task?
              </label>
              <div className="flex h-6 items-center">
                <RecurringCheckbox />
              </div>
            </div>
            <div className="flex gap-x-4">
              <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                Category
              </label>
              <div className="flex h-6 items-center">
                <select name="cat">
                  <option value="" disabled>Select a Category</option>
                  <option value="programming">Programming</option>
                  <option value="workout">Workout</option>
                  <option value="cooking">Cooking</option>
                </select>
              </div>
            </div>
            <div className="flex gap-x-4">
              <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                Project:
              </label>
              <div className="flex h-6 items-center">
                <select name="sprint">
                  <option value="" disabled>Select a Project</option>
                  <option value="sprint1">Balancer</option>
                  <option value="sprint2">Fitness</option>
                  <option value="sprint3">Chef</option>
                </select>
              </div>
            </div>
            <div className="flex gap-x-4">
              <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                Will be added to:
              </label>
              <div className="flex h-6 items-center">
                <select name="sprint">
                  <option value="" disabled>Select a Category</option>
                  <option value="sprint1">Sprint 1</option>
                  <option value="sprint2">Sprint 2</option>
                  <option value="sprint3">Sprint 3</option>
                </select>
              </div>
            </div>
            <div className="flex gap-x-4">
              <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                Due date:
              </label>
              <div className="flex h-6 items-center">
                <input name="due" type="date"></input>
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