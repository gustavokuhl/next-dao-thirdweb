"use client"

import { ConnectWallet } from "@thirdweb-dev/react"

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-2">Pi3t DAO</h1>
      <p className="mb-6">Bem vindo ao clube de benefícios da Piet</p>
      <ConnectWallet
        switchToActiveChain={true}
        modalSize={"compact"}
        showThirdwebBranding={false}
      />
    </main>
  )
}
