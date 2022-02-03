import { useState } from "react";

const PersonForm = ({addPerson,handleName,handleNumber}) => {

  
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input placeholder="Enter name" onChange={handleName} />
        </div>
        <div>
          number: <input placeholder="Enter number" onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
