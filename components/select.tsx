import {
  useBoletaState,
  PercentageType,
  useBoletaDispatch
} from 'lib/contexts/boleta-context'
import { ChangeEvent } from 'react'

const options: Array<{
  value: PercentageType
  name: string
}> = [
  {
    value: 0.1225,
    name: '12,25 % [2022]'
  },
  {
    value: 0.115,
    name: '11,5 % [2021]'
  },
  {
    value: 0.1075,
    name: '10,75 % [2020]'
  },
  {
    value: 0.1,
    name: '10 %'
  }
]

export default function Select() {
  const { percentage } = useBoletaState()
  const { setPercentage } = useBoletaDispatch()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPercentage(Number(e.target.value) as PercentageType)
  }

  return (
    <label htmlFor='porcentaje'>
      <select
        value={percentage}
        onChange={handleChange}
        id='porcentaje'
        name='porcentaje'
        className='text-lg md:text-xl font-semibold text-center'
      >
        {options.map(opt => {
          return (
            <option value={opt.value} key={opt.value}>
              {opt.name}
            </option>
          )
        })}
      </select>
    </label>
  )
}
