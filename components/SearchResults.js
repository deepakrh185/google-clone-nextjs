import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-5 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-700 text-sm mb-5 mt-3">
        About {results.searchInformation?.totalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className="max-w-xl mb-8" key={result.link}>
          <div className="group ">
            <a href={result.link} className="text-sml">
              {result.formattedUrl}
            </a>
            <a className="truncate text-xl text-blue-800 font-medium group-hover:underline cursor-pointer">
              <h2>{result.title}</h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
