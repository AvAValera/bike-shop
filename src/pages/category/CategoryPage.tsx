import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import PageLayout from "../../layout/page-layout/PageLayout";
import CategoryList from "./CategoryList";
import CategoryFilter from "./category-filter/CategoryFilter";
import { useMediaQuery } from "react-responsive";
import CategoryFilterMobileBtn from "./category-filter/CategoryFilterMobileBtn";
import * as _ from "lodash";
import MobileFilter from "./category-filter/MobileFilter";

export default function CategoryPage() {
  const desktop = useMediaQuery({minWidth: 1024});
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);
  const navigate = useNavigate();
  const { cat } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categoryDataMap: { [key: string]: any } = {
    bikes,
    brackets,
    cassettes,
    chainrings,
    chains,
    ebikes,
    forks,
    groups,
    helmets,
    pedals,
    steams,
    wheels,
  };

  useEffect(() => {
    if (!cat || !categoryDataMap[cat]) {
      navigate("/not-found");
    }
  }, [cat, navigate, categoryDataMap]);

  if (!cat || !categoryDataMap[cat]) {
    return null;
  }
  const categoryData = categoryDataMap[cat!];
  return (
    <PageLayout title={cat?.toLocaleUpperCase()}>
      <div className="pt-[30px] pb-[75px] lg:px-5 px-5 xl:px-[90px] min-[1440px]:px-0 max-w-[1440px] mx-auto">
        <h1 className="text-black@ font-medium text-2xl mb-[30px]">{_.capitalize(cat)}</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          {desktop ? <CategoryFilter /> : <CategoryFilterMobileBtn isOpenFilters={isOpenFilters} setIsOpenFilters={setIsOpenFilters} />}
          <MobileFilter isOpen={isOpenFilters} setIsOpenFilters={setIsOpenFilters} />
          <CategoryList data={categoryData} />
        </div>
      </div>
    </PageLayout>
  );
}
