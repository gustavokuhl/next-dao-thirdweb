import { ConnectWallet } from "./thirdweb"

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <ConnectWallet
        switchToActiveChain={true}
        modalSize={"compact"}
        showThirdwebBranding={false}
      />
    </main>
  )
}
