import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

function CollapsibleItems() {
  const [item1Expanded, setItem1Expanded] = useState(false)
  const [item2Expanded, setItem2Expanded] = useState(false)
  const [item3Expanded, setItem3Expanded] = useState(false)

  const handleToggle = index => {
    switch (index) {
      case 1:
        setItem1Expanded(!item1Expanded)
        break
      case 2:
        setItem2Expanded(!item2Expanded)
        break
      case 3:
        setItem3Expanded(!item3Expanded)
        break
      default:
        break
    }
  }

  return (
    <div className="my-5">
      <div className={`py-[20px] px-[28px] ${item1Expanded ? "bg-white" : "bg-[#F6F8FB]"} shadow-md rounded-md`}>
        <div className={`w-full flex justify-between cursor-pointer transition ease-in-out`} onClick={() => handleToggle(1)}>
          <div className={`${item1Expanded ? "text-[#A1A5FF]" : "text-[#2B2D80]"} w-full flex justify-between lg:text-[15px]    font-medium text-[12px]`}>
            Shorter routes
          </div>
          <span className="">{item1Expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
        </div>
        {item1Expanded && (
          <div className="text-[#343D48] py-[20px] text-[10px] text-start">
            <p>SLog helps you eliminate redundant trips and get to all locations using the shortest route possible.</p>
          </div>
        )}
      </div>
      <div className={`py-[20px] px-[28px] mt-5 ${item2Expanded ? "bg-white" : "bg-[#F6F8FB]"} shadow-md rounded-md`}>
        <div className={`w-full flex justify-between cursor-pointer transition ease-in-out`} onClick={() => handleToggle(2)}>
          <div className={`${item2Expanded ? "text-[#A1A5FF]" : "text-[#2B2D80]"} w-full flex justify-between lg:text-[15px] font-medium text-[12px]`}>
            Multiple drop-off locations
          </div>
          <span className="">{item2Expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
        </div>
        {item2Expanded && (
          <div className="text-[#343D48] py-[20px] text-[10px] text-start">
            <p>SLog helps you eliminate redundant trips and get to all locations using the shortest route possible.</p>
          </div>
        )}
      </div>
      <div className={`py-[20px] px-[28px] mt-5 ${item3Expanded ? "bg-white" : "bg-[#F6F8FB]"} shadow-md rounded-md`}>
        <div className={`w-full flex justify-between cursor-pointer transition ease-in-out`} onClick={() => handleToggle(3)}>
          <div className={`${item3Expanded ? "text-[#A1A5FF]" : "text-[#2B2D80]"} w-full flex justify-between lg:text-[15px] font-medium text-[12px]`}>
            Faster delivery
          </div>
          <span className="">{item3Expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
        </div>
        {item3Expanded && (
          <div className="text-[#343D48] py-[20px] text-[10px] text-start">
            <p>SLog helps you eliminate redundant trips and get to all locations using the shortest route possible.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CollapsibleItems
