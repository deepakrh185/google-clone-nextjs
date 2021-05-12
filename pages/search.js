import Head from "next/head";
import Header from "../components/Header";
import { KEY, CONTEXT } from "../key";
import Response from "../Response";

function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      <Header />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${CONTEXT}&q=${context.query.term}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
