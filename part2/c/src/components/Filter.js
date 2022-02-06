const Filter = ({handleFilter}) => {
  return (
    <>
      find countries <input onChange={handleFilter} />
    </>
  );
};

export default Filter;
