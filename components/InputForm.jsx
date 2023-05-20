import { AiOutlineDelete } from "react-icons/ai"
import React, { useState } from "react"
const InputForm = ({ inputFields, setInputFields }) => {
  const handleChange = (index, event) => {
    const values = [...inputFields]
    values[index].address = event.target.value
    setInputFields(values)
  }

  const handleAddFields = () => {
    if (inputFields.length < 10) {
      setInputFields([...inputFields, { address: "" }])
    }
  }
  const handleRemoveFields = index => {
    const values = [...inputFields]
    values.splice(index, 1)
    setInputFields(values)
  }

  return (
    <div className="my-5 w-full">
      <h2 className="text-[#a1a5ff] text-[20px] font-bold my-4"> Add up 10 addresses and generate your optimized route</h2>
      <form className="md:w-[80%] my-10">
        {inputFields.map((inputField, index) => (
          <div key={index} className="w-full flex justify-between my-4 items-center">
            <label className="font-semibold text-[#3c3c46]" htmlFor={`address${index + 1}`}>
              Address {index + 1}
            </label>
            <input
              id={`address${index + 1}`}
              name={`address${index + 1}`}
              type="text"
              value={inputField.address}
              onChange={event => handleChange(index, event)}
              required
              className="bg-white border-[#a1a5ff] border-2 p-1 outline-none rounded-lg w-[55%] px-4 text-[#3c3c46]"
            />
            {inputFields.length > 2 ? (
              <button
                type="button"
                className="lg:flex hidden py-2 lg:px-4 px-1 text-[#2B2D80] rounded-xl bg-white shadow-lg font-semibold hover:text-[#a1a5ff]"
                onClick={() => handleRemoveFields(index)}
              >
                Delete
              </button>
            ) : (
              <button
                type="button"
                disabled
                className=" lg:flex hidden text-[#2B2D80] rounded-xl bg-gray-200 shadow-lg font-semibold py-2 px-4"
              >
                Delete
              </button>
            )}
            {inputFields.length > 2 ? (
              <button
                type="button"
                className="lg:hidden  py-2 lg:px-4 px-2 text-[#2B2D80] rounded-full bg-white shadow-lg font-semibold hover:text-[#a1a5ff]"
                onClick={() => handleRemoveFields(index)}
              >
                <AiOutlineDelete />
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="lg:hidden text-[#2B2D80] rounded-full bg-gray-200 shadow-lg font-semibold py-2 px-2"
              >
                <AiOutlineDelete />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="lg:text-[18px] text-[12px] bg-[#a1a5ff] text-white mt-10 pt-[12px] pb-[12px] rounded-md font-[400] transition duration-300 ease-out px-5 cursor-pointer hover:bg-[#8387f9]"
          onClick={handleAddFields}
        >
          Add More Addresses
        </button>
      </form>
    </div>
  )
}

export default InputForm
