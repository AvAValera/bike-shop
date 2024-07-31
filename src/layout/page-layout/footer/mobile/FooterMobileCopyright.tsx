export default function FooterMobileCopyright() {
  return (
    <div className=" py-7 flex flex-col gap-5 items-center border-t border-white/15 mt-5">
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        <img src="/layout/footer/visa.svg" alt="pay_icon" />
        <img src="/layout/footer/master.svg" alt="pay_icon" />
        <img
          className="h-[36px] rounded"
          src="/layout/footer/paypal.svg"
          alt="pay_icon"
        />
      </div>
      <h2 className="text-white@ text-base">
        Copyright © «Bike» 2024. All rights reserved.
      </h2>
    </div>
  );
}
