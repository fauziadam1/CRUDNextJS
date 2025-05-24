import Link from "next/link"
import { GoPlus as Plus } from "react-icons/go";

function CreateBtn() {
  return (
    <div>
      <Link href="" className="bg-blue-400 text-white py-3 px-3 flex items-center gap-2">
      <Plus size={23}/>
      Create
      </Link>
    </div>
  )
}

export default CreateBtn
