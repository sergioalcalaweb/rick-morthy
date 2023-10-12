import { responseInfo } from "@/types";
import Link from "next/link";

const Pagination = ({info, active}: {info: responseInfo, active: number}) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700">
        Page {active}
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        {info.prev && (
          <Link
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900"
            href={`/${active - 1}`}
          >
              Prev
          </Link>
        )}
        {info.next && (
          <Link 
            href={`${active + 1}`}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900"
          >
              Next
          </Link>
        )}
      </div>
    </div>
  );
}
 
export default Pagination;