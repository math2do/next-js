"use client";
import React from "react";
import { send } from "./send";

// instead of calling any endpoint, directly call server function from this client component
const Client = () => {
  return (
    <div>
      <form action={send}>
        <button
          type="submit"
          className="rounded-md border-2 px-4 py-2 hover:bg-muted"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Client;
