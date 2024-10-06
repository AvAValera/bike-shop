import PageLayout from "../../layout/page-layout/PageLayout";
import bikes from "../../../data/bikes.json";
import brackets from "../../../data/brackets.json";
import cassettes from "../../../data/cassettes.json";
import chainrings from "../../../data/chainrings.json";
import chains from "../../../data/chains.json";
import ebikes from "../../../data/ebikes.json";
import forks from "../../../data/forks.json";
import groups from "../../../data/groups.json";
import helmets from "../../../data/helmets.json";
import pedals from "../../../data/pedals.json";
import steams from "../../../data/steams.json";
import wheels from "../../../data/wheels.json";
import { Navigate, useParams } from "react-router-dom";
import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";
import ProductInfo from "./product-info/ProductInfo";
import { useMediaQuery } from "react-responsive";

export default function ProductItemPage() {
  const desktop = useMediaQuery({minWidth: 1024});
  const { id } = useParams();
  const data = [
    ...bikes,
    ...brackets,
    ...cassettes,
    ...chainrings,
    ...chains,
    ...ebikes,
    ...forks,
    ...groups,
    ...helmets,
    ...pedals,
    ...steams,
    ...wheels,
  ];
  const result = data.filter((el) => el.codeItem === Number(id));

  if (!result.length) return <Navigate to={"/404"} />;
  return (
    <PageLayout>
      <div className="max-w-[1440px] px-2 md:px-10 min-[1440px]:px-0 flex gap-5 pb-[60px] mx-auto">
        <div className="w-full lg:w-1/2 pt-12 ">
          <ProductGallery />
          {!desktop && <ProductInfo {...result[0]} />}
          <ProductDescription />
        </div>
        {desktop && <ProductInfo {...result[0]} />}
      </div>
    </PageLayout>
  );
}
