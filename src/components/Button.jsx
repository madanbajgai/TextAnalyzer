import React from "react";

export default function Button({ btntext, update }) {
  return (
    <>
      <button onClick={update} className=" my-2 mx-2 btn btn-danger">
        {btntext}
      </button>
    </>
  );
}
