import Input from 'components/input'
import BasePage from 'components/layouts/base-page'
import Percentage from 'components/percentage'
import ReturnValue from 'components/return-value'

export default function IndexPage() {
  return (
    <BasePage>
      <main role='main' className='w-full h-full px-3 md:px-0'>
        <div className='container mx-auto py-3 md:py-8'>
          <div className='text-center mb-8 md:mb-12'>
            <h1 className='text-neutral-200 font-bold text-2xl md:text-4xl'>
              Calculadora de Boleta de Honorarios de Chile
            </h1>
          </div>
          <div className='w-full mb-6 md:mb-8'>
            <Percentage />
          </div>
          <div className='w-full flex justify-center mb-6 md:mb-8'>
            <Input />
          </div>
          <div className='w-full flex justify-center'>
            <ReturnValue />
          </div>
        </div>
      </main>
    </BasePage>
  )
}
