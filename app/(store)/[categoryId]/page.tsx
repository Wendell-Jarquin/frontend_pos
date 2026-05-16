import { CategoryWithProductsResponseSchema } from "@/src/schema";

type Params = Promise<{ categoryId: string }>;

async function getProducts(categoryId: string) {
  const url = `${process.env.API_URL}/categories/${categoryId}?products=true`;
  const req = await fetch(url);
  const json = await req.json();
  const products = CategoryWithProductsResponseSchema.parse(json);
  return products;
  
}


export default async function CategoryPage({ params }: { params: Params }) {

  const { categoryId } = await params

  const category = await getProducts(categoryId);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {category.products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}