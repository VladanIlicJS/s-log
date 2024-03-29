import React, { useState } from "react"
import InputForm from "../components/InputForm"

const fetchCoordinates = async address => {
  const baseUrl = "https://nominatim.openstreetmap.org/search"
  const format = "json"
  const url = `${baseUrl}?q=${encodeURIComponent(address)}&format=${format}`

  const response = await fetch(url)
  const data = await response.json()

  if (data && data.length > 0) {
    const { lat, lon } = data[0]
    return { lat, lon }
  } else {
    throw new Error("Address not found")
  }
}
const Demo = () => {
  const [inputFields, setInputFields] = useState([{ address: "" }, { address: "" }])
  const getRandomCapacity = () => Math.floor(Math.random() * 9) + 1

  const getCoordinatesAndOpenLink = async () => {
    const coordinates = []
    for (const field of inputFields) {
      const coords = await fetchCoordinates(field.address)
      coordinates.push(coords)
    }
    // Create the URL with the coordinates and random capacities
    const baseUrl = "https://extrat-coordinates.vercel.app/"
    const depotCoords = coordinates.shift() // Assuming the first address is the depot
    let url = `${baseUrl}?depot=${depotCoords.lat},${depotCoords.lon}`

    coordinates.forEach((coords, index) => {
      const capacity = getRandomCapacity()
      url += `&point_${index + 1}=${coords.lat},${coords.lon},${capacity}`
    })

    // Open the URL in a new tab
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="w-full">
      <div className=" 2xl:px-40 px-9 h-full w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
          <div className="flex flex-col self-start h-full mt-20 w-full">
            <h1 className="text-[54px] font-[500] text-[#02073E] leading-[54px] w-full ">Try route optimization</h1>
            <InputForm inputFields={inputFields} setInputFields={setInputFields} />
          </div>
          <div className=" flex justify-center items-center self-start lg:pt-20 ">
            <div className="bg-[#a1a5ff] px-20 py-20 rounded-lg">
              <div
                className={`py-[24px] px-[32px] bg-[#F6F8FB] hover:bg-[#F6F8FB]/75 transition ease-in-out hover:shadow-xl shadow-md rounded-md cursor-pointer `}
                onClick={() => getCoordinatesAndOpenLink()}
              >
                <div className={`w-full flex justify-between cursor-pointer transition ease-in-out`}>
                  <div className={` text-[#2B2D80] w-full flex justify-between lg:text-[15px] text-[12px] font-semibold`}>
                    Generate Route
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
