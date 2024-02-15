import React from "react";

const SidebarFilter = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    console.log("formData:", formData);
  };

  return (
    <aside className="h-fit rounded-lg border border-gray-300 md:sticky md:top-0 md:w-2/6">
      <form action="handleSubmit" className="flex flex-col">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="q" className="text-lg tracking-wider">
            Search
          </label>
          <input
            type="text"
            id="q"
            placeholder="Title, company, etc."
            className="text-md rounded-lg border-2 border-gray-200 p-2.5 text-gray-900 outline-none focus:border-2 focus:border-gray-900"
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </aside>
  );
};

export default SidebarFilter;
