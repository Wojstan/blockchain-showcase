import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { WalletConnect } from './components/WalletConnect'
import { config } from './config/wagmiConfig'

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
