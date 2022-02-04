import { ChangeEvent, useMemo } from 'react'

import { useBoletaDispatch, useBoletaState } from 'lib/contexts/boleta-context'

export default function Input() {
  const { value } = useBoletaState()
  const { setValue } = useBoletaDispatch()

  const formatedValue = useMemo(
    () => String(formater.format(Number(value))),
    [value]
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const _value = String(e.target.value.replace(/[^\d]+/g, ''))
      .replace('$', '')
      .replaceAll('.', '')
    setValue(_value)
  }

  return (
    <div className='flex flex-col w-full md:w-6/12 lg:w-4/12'>
      <label htmlFor='value' className='text-white text-center mb-4'>
        Ingresa valor a calcular
      </label>
      <input
        type='text'
        className='px-6 py-3 w-full text-center text-3xl lg:text-4xl font-semibold'
        value={formatedValue}
        id='value'
        onChange={handleChange}
        placeholder='$0'
      />
    </div>
  )
}

const formater = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP'
})
