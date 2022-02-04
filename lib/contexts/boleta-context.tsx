import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

export type PercentageType = 0.1225 | 0.115 | 0.1075 | 0.1

export interface BoletaContextState {
  value: string
  percentage: PercentageType
}

export interface BoletaContextDispatch {
  setValue: Dispatch<SetStateAction<string>>
  setPercentage: Dispatch<SetStateAction<PercentageType>>
}

const BoletaContextState = createContext<BoletaContextState>(
  {} as BoletaContextState
)
const BoletaContextDispatch = createContext<BoletaContextDispatch>(
  {} as BoletaContextDispatch
)

type BoletaProps = {
  children: ReactNode
}

function BoletaProvider(props: BoletaProps) {
  const [value, setValue] = useState('')
  const [percentage, setPercentage] = useState<PercentageType>(0.1225)
  return (
    <BoletaContextState.Provider value={{ value, percentage }}>
      <BoletaContextDispatch.Provider
        value={{ setValue, setPercentage }}
        {...props}
      />
    </BoletaContextState.Provider>
  )
}

function useBoletaState() {
  const contextState = useContext(BoletaContextState)
  if (typeof contextState === 'undefined') {
    throw new Error('useBoletaState must be used within a BoletaProvider')
  }
  return contextState
}

function useBoletaDispatch() {
  const contextDispatch = useContext(BoletaContextDispatch)
  if (typeof contextDispatch === 'undefined') {
    throw new Error('useBoletaDispatch must be used within a BoletaProvider')
  }
  return contextDispatch
}

export { BoletaProvider, useBoletaState, useBoletaDispatch }
