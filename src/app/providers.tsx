"use client"
import { ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react"

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThirdwebProvider
      activeChain="base-sepolia-testnet"
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!}
      supportedWallets={[embeddedWallet()]}
    >
      {children}
    </ThirdwebProvider>
  )
}

export default Providers
