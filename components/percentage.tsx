import Select from './select'

export default function Percentage() {
  return (
    <div className='flex items-center flex-col'>
      <p className='text-center text-white text-lg md:text-xl mb-4'>
        Retención de Impuestos SII año 2022, según la{' '}
        <a
          href='https://www.bcn.cl/leyfacil/recurso/incorporacion-de-trabajadores-y-trabajadoras-independientes-al-sistema-de-prevision-y-proteccion-social'
          title='Ley 21.133'
          target='_blank'
          rel='noreferrer'
          className='italic hover:text-lime-300'
        >
          Ley 21.133
        </a>
        :{' '}
      </p>
      <Select />
    </div>
  )
}
