"use client"

import { ConnectWallet } from "@thirdweb-dev/react"

export default function Home() {
  return (
    <main className="w-full  max-w-sm h-auto mx-auto flex flex-col gap-48 py-[40vh] text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Pi3t DAO</h1>
        <p className="mb-6 text-xs mx-auto w-[200px]">
          Durante a fase de testes, a conta precisará de tokens nativos para
          realizar as operações. Role a página para continuar.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-3">1. Conecte a carteira</h2>
        <ConnectWallet
          switchToActiveChain={true}
          modalSize={"compact"}
          showThirdwebBranding={false}
        />
      </div>
      <div className="flex flex-col justify-center items-center mx-8">
        <h2 className="text-2xl font-bold mb-3">2. Regaste seu NFT</h2>
        <button className="px-4 py-2 rounded-lg bg-slate-900 border-[0.5px] border-slate-700">
          Resgatar
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mx-8">
        <h2 className="text-2xl font-bold mb-3">3. Crie uma proposta</h2>
        <textarea className="min-h-48 w-80 font-white bg-slate-900 px-4 py-2 text-sm mb-2" />
        <button className="px-4 py-2 rounded-lg bg-slate-900 border-[0.5px] border-slate-700">
          Enviar
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mx-8">
        <h2 className="text-2xl font-bold mb-3">4 - Veja as suas propostas</h2>
        <div className="w-full  flex flex-col items-start p-4 bg-slate-800 rounded-xl">
          <span className="mb-2">Status</span>
          <h3>Nome</h3>
          <p>Por</p>
          <p className="mb-4">Descrição</p>
          <div className="flex gap-2 w-full">
            <select
              className="flex-grow text-white p-2 rounded-lg bg-slate-900 border-[0.5px] border-slate-700"
              defaultValue={"selecione"}
            >
              <option disabled value={"selecione"}>
                Selecione um opção
              </option>
              <option>A favor [0]</option>
              <option>Contra [0]</option>
              <option>Abster [0]</option>
            </select>
            <button className="px-4 py-2 rounded-lg bg-slate-900 border-[0.5px] border-slate-700">
              Votar
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-8">
        <h2 className="text-2xl font-bold mb-3">
          5 - Veja as demais propostas
        </h2>
        <div className="w-full flex flex-col items-start p-4 bg-slate-800 rounded-xl">
          <span className="mb-2">Status</span>
          <h3>Nome</h3>
          <p>Por</p>
          <p className="mb-4">Descrição</p>
          <div className="flex gap-2 w-full">
            <select
              className="flex-grow text-white p-2 rounded-lg bg-slate-900 border-[0.5px] border-slate-700"
              defaultValue={"selecione"}
            >
              <option disabled value={"selecione"}>
                Selecione um opção
              </option>
              <option>A favor [0]</option>
              <option>Contra [0]</option>
              <option>Abster [0]</option>
            </select>
            <button className="px-4 py-2 rounded-lg bg-slate-900 border-[0.5px] border-slate-700">
              Votar
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
