
import PageLayout from "../../layout/page-layout/PageLayout";

export default function NotFound() {
  return (
    <PageLayout title="Not found">
      <div className="bg-white@ flex flex-col items-center py-10">
        <img className="w-[40vw] md:w-[20vw]" src="/public/items/not-found.jpg" alt="not_found_img" />
        <h1 className="text-[10vw] md:text-[5vw] font-bold text-purple@">Page not found</h1>
      </div>
    </PageLayout>
  );
}
