import { ReactNode } from 'react'
import { DefaultSeo, DefaultSeoProps } from 'next-seo'

import Footer from 'components/footer'
import Header from 'components/header'

const _seo: DefaultSeoProps = {
  title: 'Calculadora de Boleta de Honorarios de Chile',
  description:
    'Calcula tus honorarios, el bruto y el líquido, para tus Boletas de Honorarios en Chile.',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    site_name: 'Calculadora de Boleta de Honorarios de Chile'
  }
}

type Props = {
  children: ReactNode
}

export default function BasePage({ children }: Props) {
  return (
    <div className='w-full min-h-screen'>
      <DefaultSeo {..._seo} />
      <Header />
      <div className='w-full min-h-content'>{children}</div>
      <Footer />
    </div>
  )
}
