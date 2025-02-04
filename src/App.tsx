import { WagmiProvider } from 'wagmi'
import { config } from './config/wagmiConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WalletConnect } from './components/WalletConnect'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

const queryClient = new QueryClient()

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <WalletConnect />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
)



export default App
