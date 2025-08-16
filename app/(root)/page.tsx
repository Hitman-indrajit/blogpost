import SearchForm from "../components/searchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink-container">
        <div className="heading">Integrity in diversity</div>
        <p className="sub-heading">
          Embracing differences to create a stronger, more inclusive community.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
