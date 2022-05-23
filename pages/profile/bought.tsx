import type { NextPage } from "next";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <ProductList kind="favs" />
    </Layout>
  );
};

export default Bought;
