import MaskedInput from 'react-text-mask';

export default function LoginPhone() {
  return (
    <MaskedInput mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
    placeholder="Enter a phone number"
    className='w-full border border-gray-200@ rounded-md px-5 h-[46px] focus:ring-purple@ text-lg'
    
    />
  );
}
