import React from "react";
import Builder from "./components/Resume Builder/Builder";
import Page from "./components/CV Page/Page";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-200 p-5 md:p-6">
      <Builder />
    </div>
  );
};

export default App;
