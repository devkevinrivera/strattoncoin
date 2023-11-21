import Image from 'next/image'
import { Inter } from 'next/font/google'
import useAssets from '@/hooks/useAssets'
import { AssetCard } from './components/AssetCard';
import Web3 from 'web3'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { list } = useAssets();
  // Conectar a la red de prueba Ethereum
  
  return (
    <main>
      <section className='flex flex-wrap '>
        {
          list.map((asset, key) => (
            <AssetCard asset={asset} key={key} />
          ))
        }
      </section>
    </main>
  )
}
