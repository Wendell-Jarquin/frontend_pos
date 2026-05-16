type Params = Promise<{ categoryId: string }>;

async function getProducts(categoryId: string) {
  console.log(categoryId);
}


export default async function CategoryPage({ params }: { params: Params }) {
  const { categoryId } = await params

  await getProducts(categoryId);

  return <div>StorePage</div>
}