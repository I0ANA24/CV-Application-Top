import React, { useState } from "react";
import PersonalDetailsBuilder from "./PersonalDetails/PersonalDetailsBuilder";
import ResumePage from "./Resume/ResumePage";

const Builder = () => {
  const [detailsList, setDetailsList] = useState({
    fullName: "Ioana Franț",
    address: "Iasi, Romania",
    phoneNumber: "+40761234567",
    email: "frantioana507@gmail.com",
    GitHub: "https://github.com/I0ANA24",
    LinkedIn: "https://www.linkedin.com/in/ioana-fran%C8%9B-949b70254/",
    personalWebsite: ""
  });

  return (
    <main className="w-full flex flex-col gap-8 lg:flex-row">
      <section className="w-full lg:w-[50%] space-y-4">
      <PersonalDetailsBuilder
        detailsList={detailsList}
        setDetailsList={setDetailsList}
      />
      </section>
      <ResumePage details={detailsList} />
    </main>
  );
};

export default Builder;
