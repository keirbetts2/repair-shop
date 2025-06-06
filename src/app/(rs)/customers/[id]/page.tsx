export default async function Page({ params }: {
  params: Promise<{ id: string }>,
  // searchParams: { search: string }
}) {

  const { id } = await params;

  return (
    <div>
      <h1>ID: {id}</h1>
      {/* <h1>search {searchParams.search}</h1> */}
    </div>
  )
}