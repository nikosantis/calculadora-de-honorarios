import { useParseImp } from 'lib/hooks/use-parte-imp'

export default function ReturnValue() {
  const { liquido, bruto } = useParseImp()
  return (
    <div className='flex w-full md:w-8/12 lg:w-6/12'>
      <div className='w-6/12 pr-2'>
        <div className='bg-white px-2 py-3 md:p-5 text-center'>
          <h3 className='font-bold uppercase mb-2'>Valor Líquido</h3>
          <p className='text-sm md:text-base'>
            Si pones en tu boleta el valor de:
          </p>
          <p className='font-semibold text-xl mb-3'>{liquido.boleta}</p>
          <p className='text-sm md:text-base'>Recibirás un pago de:</p>
          <p className='font-semibold text-2xl md:text-3xl mb-3'>
            {liquido.pay}
          </p>
          <p className='text-sm md:text-base'>
            Con una retención de impuesto SII de:
          </p>
          <p className='font-semibold text-xl'>{liquido.imp}</p>
        </div>
      </div>
      <div className='w-6/12 pl-2'>
        <div className='bg-white px-2 py-3 md:p-5 text-center'>
          <h3 className='font-bold uppercase mb-2'>Valor Bruto</h3>
          <p className='text-sm md:text-base'>
            Si pones en tu boleta el valor de:
          </p>
          <p className='font-semibold text-xl mb-3'>{bruto.boleta}</p>
          <p className='text-sm md:text-base'>Recibirás un pago de:</p>
          <p className='font-semibold text-2xl md:text-3xl mb-3'>{bruto.pay}</p>
          <p className='text-sm md:text-base'>
            Con una retención de impuesto SII de:
          </p>
          <p className='font-semibold text-xl'>{bruto.imp}</p>
        </div>
      </div>
    </div>
  )
}
