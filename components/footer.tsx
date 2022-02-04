export default function Footer() {
  return (
    <footer className='w-full h-12 flex flex-col lg:flex-row justify-center items-center'>
      <div className='lg:mr-2'>
        <p className='text-sm text-neutral-400'>
          Calculadora de Honorarios 2022.
        </p>
      </div>
      <div>
        <p className='text-sm text-neutral-400'>
          Desarrollado por{' '}
          <a
            title='Nikolas Santis'
            href='https://nikosantis.dev/'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-lime-300'
          >
            Nikolas Santis
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
