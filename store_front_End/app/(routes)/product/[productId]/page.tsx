import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import ProductList from "@/components/products-list";
import Container from "@/components/ui/continer";
import Info from "@/components/ui/info";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params.productId);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    });
    return (
        <div className="bg-white">
            <Container >
                <div className="px-4 py-10 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product?.images}/>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
                          <Info data={product}/>
                        </div>
                    </div>
                    <hr className="my-10" />
                <ProductList title="Related Items" items={suggestedProducts}/>
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;