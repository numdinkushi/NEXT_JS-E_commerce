import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/products-list";
import Container from "@/components/ui/continer";

const HomePage = async () => {
  const products = await getProducts({isFeatured: true});
  const billboard = await getBillboard('621c09d8-c462-4104-a676-df7fa23c01d3');
  return (
   <Container>
    <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      <ProductList title="Featured Products" items={products}/>
    </div>
    </div>
   </Container>
  )
}

export default HomePage