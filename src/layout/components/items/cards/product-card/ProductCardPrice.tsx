import { useState, useEffect } from "react";
import { settings } from "../../../../../../store/ui/settings";
import { position, useToast } from "@chakra-ui/react";

export default function ProductCardPrice({
  price,
  codeItem,
}: {
  price: number;
  codeItem: number;
}) {
  const toast = useToast();
  const {currency} = settings(state => state);
  const [nowCurrency, setNowCurrency] = useState<string>(() => {
    if(currency === "USD") return "$";
    else if(currency === "EUR") return "€";
    else return "₴";
  });
  useEffect(() => {
    if(currency === "USD") setNowCurrency("$");
  else if(currency === "EUR") setNowCurrency("€");
  else setNowCurrency("₴");
  }, [currency]);

  return (
    <div className="flex items-center justify-between mt-auto">
      <span className="text-black@ text-3xl font-medium">{price}{nowCurrency}</span>
      <button 
      onClick={() => toast({status: "success", title: "Add to Cart", isClosable: true, duration: 1000, position: "bottom-right"})}
      className="border-[2px] border-purple@ p-2 rounded-lg hover:bg-purple@ stroke-[#6339d1] hover:stroke-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          viewBox="0 0 385.52 383"
          width="1em"
          height="1em"
        >
          <defs>
            <style>
              {
                ".cls-2{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:14px}"
              }
            </style>
          </defs>
          <path
            d="M22 23h38.2S99 220 109 249s40 27 40 27l161-17s21-6 28-34 22-90 27-116-28-24-28-24H166"
            style={{
              strokeWidth: 42,
              fill: "none",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
            }}
            transform="translate(-1 -2)"
          />
          <circle cx={133.5} cy={353.5} r={21.5} className="cls-2" />
          <circle cx={313.5} cy={354.5} r={21.5} className="cls-2" />
        </svg>
      </button>
    </div>
  );
}
