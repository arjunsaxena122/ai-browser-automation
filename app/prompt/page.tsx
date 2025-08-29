"use client";

import { useState } from "react";
import axios from "axios";

export default function Prompt() {
  const [userQuery, setUserQuery] = useState<string>("");

  const handleUserPrompt = async () => {
    console.log(userQuery);

    try {
      const res = await axios.post("/api/browser", { query: userQuery });
      console.log(res);
    } catch (error) {
      console.log(`Error comes from browser api due to ${error}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen bg-black gap-5">
      <textarea
        rows={5}
        cols={30}
        placeholder="Enter your message..."
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
        className="placeholder:text-white rounded-xl p-3 text-white caret-amber-50 border border-white"
      ></textarea>
      <button
        type="submit"
        className="text-white font-bold border border-white px-4 cursor-pointer py-1 rounded-lg"
        onClick={handleUserPrompt}
      >
        Submit
      </button>
    </div>
  );
}
