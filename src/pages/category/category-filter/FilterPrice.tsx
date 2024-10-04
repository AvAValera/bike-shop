import {useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { filtersStore } from '../../../../store/filters/filters';

export default function FilterPrice() {
  const [val, setVal] = useState<[number, number]>([0, 30000]);
  const setPrice = filtersStore(state => state.setPrice);

  return (
    <div>
      <div className='flex mb-3'>
        <input className='w-1/2 border-gray-200@ rounded-l focus:border-purple@' value={"Min: " + val[0]} type="text" disabled />
        <input className='w-1/2 border-l-0 border-gray-200@ rounded-r focus:border-purple@' value={"Max: " + val[1]} type="text" disabled />
      </div>
      <Slider
        styles={{
          rail: {
            background: "#E3E3E8",
          },
          track: {
            display: "flex",
            alignItems: "center",
            background: "#6B59CC"
          },
          handle: {
            background: "#5946D7",
            border:  "2px solid #E3E3E8",
          }
        }}
        range
        min={0} 
        max={30000}
        defaultValue={val}
        onChange={(e) => setVal(e as [number, number])}
        onChangeComplete={(e) => setPrice(e as [number, number])}
      />
    </div>
  );
}
