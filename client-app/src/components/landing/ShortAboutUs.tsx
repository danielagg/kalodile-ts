import React from "react";

const ShortAboutUs: React.FC = () => {
  const containerStyle = "lg:w-1/3 lg:my-2 mx-6 mt-12 lg:mt-0";
  const iconStyle = "text-6xl";
  const titleStyle = "font-biryani-medium text-2xl mt-6";
  return (
    <div className="lg:flex lg:justify-center text-center my-6">
      <div className={containerStyle}>
        <i className={`fas fa-cogs ${iconStyle}`} />
        <h1 className={titleStyle}>How does it work?</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam rem iste
          similique. Asperiores provident quisquam a fugit, nobis odit, laborum,
          ipsum perspiciatis perferendis consequuntur et.
        </p>
      </div>
      <div className={containerStyle}>
        <i className={`fas fa-money-bill-wave ${iconStyle}`} />
        <h1 className={titleStyle}>Do I pay online?</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam rem iste
          similique. Asperiores provident quisquam a fugit, nobis odit, laborum,
          ipsum perspiciatis perferendis consequuntur et eveniet fugiat autem.
          Velit nemo, repellendus debitis illo saepe nulla!
        </p>
      </div>
      <div className={containerStyle}>
        <i className={`fas fa-lock ${iconStyle}`} />
        <h1 className={titleStyle}>Is it secure?</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam rem iste
          similique. Asperiores provident quisquam a fugit, nobis odit, laborum,
          ipsum perspiciatis perferendis consequuntur et eveniet fugiat autem.
        </p>
      </div>
    </div>
  );
};

export default ShortAboutUs;
