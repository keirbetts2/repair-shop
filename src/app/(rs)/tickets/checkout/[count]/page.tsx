export default async function Page({ params }: {
  params: Promise<{ count: number }>,
}) {

  const { count } = await params;

  return (
    <div>
      <h1>Total tickets: {count}</h1>
    </div>
  )
}