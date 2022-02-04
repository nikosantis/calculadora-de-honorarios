import Logo from 'components/logo'

export default function Header() {
  return (
    <header className='w-full flex justify-center items-center h-16'>
      <div className='hidden md:block'>
        <Logo height='30' />
      </div>
      <div className='md:hidden'>
        <Logo height='20' />
      </div>
    </header>
  )
}
