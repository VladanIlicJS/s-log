import React, { useState } from "react"

const InputForm = ({inputFields,setInputFields}) => {
  
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
      <div className="my-5">
        <h2 className="text-[#a1a5ff] text-[20px] font-bold my-4"> Add up 10 addresses and generate you optimizated route</h2>
        <form className="w-[80%] my-10">
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
                <button type="button" className=" py-2 px-4 text-[#2B2D80] rounded-xl bg-white shadow-lg font-semibold hover:text-[#a1a5ff]" onClick={() => handleRemoveFields(index)}>
                  Delete
                </button>
              ) : (
                <button type="button" disabled className="text-[#2B2D80] rounded-xl bg-gray-200 shadow-lg font-semibold py-2 px-4">
                  Delete
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="text-[18px] bg-[#a1a5ff] text-white mt-10 pt-[12px] pb-[12px] rounded-md hover:text-[#02073E] font-[400] transition duration-300 ease-out px-5 cursor-pointer"
            onClick={handleAddFields}
          > 
            Add More Addresses
          </button>
        </form>

      </div>

  )
}

export default InputForm
