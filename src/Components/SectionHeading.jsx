const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="mb-12">
      <p className="text-center mb-4 text-yellow-500">--- {subHeading} ---</p>
      <hr  className="mb-3 w-1/2 mx-auto text-gray-500"/>
      <h2 className="text-center text-4xl uppercase">{heading}</h2>
      <hr className="mt-3 w-1/2 mx-auto text-gray-500"/>
    </div>
  );
};

export default SectionHeading;
