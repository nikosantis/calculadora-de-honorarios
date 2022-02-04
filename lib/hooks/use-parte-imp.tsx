import { useBoletaState } from 'lib/contexts/boleta-context'

export function useParseImp() {
  const { value, percentage } = useBoletaState()
  const basePer = percentage * 100
  const liquidImp = Math.round((Number(value) * basePer) / (100 - basePer))
  const brutImp = Math.round((Number(value) * basePer) / 100)

  return {
    liquido: {
      imp: formater.format(liquidImp),
      pay: formater.format(Number(value)),
      boleta: formater.format(Number(value) + liquidImp)
    },
    bruto: {
      imp: formater.format(brutImp),
      pay: formater.format(Number(value) - brutImp),
      boleta: formater.format(Number(value))
    }
  }
}

const formater = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP'
})
