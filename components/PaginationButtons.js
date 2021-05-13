import { useRouter } from "next/router";
import Link from "next/link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

function PaginationButtons() {
  const router = useRouter();
  console.log("roueter", router);
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between text-blue-700 max-w-lg mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col cursor-pointer items-center hover:underline">
            <NavigateBeforeIcon />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col cursor-pointer items-center hover:underline">
          <NavigateNextIcon />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
