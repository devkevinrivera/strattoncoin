import { Inter } from 'next/font/google'
import useAssets from '@/hooks/useAssets'
import { AssetCard } from '../components/AssetCard';
import { DashboardMenu } from '../components/MenuDashboard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { list } = useAssets();

  return (
    <main>
        <section className='flex justify-between h-[9vh] pl-[1rem] bg-secondary-wp'>
            <div className='flex items-center h-[100%]'>
                <img src="/logo.svg" alt="logo stratton coin" className='w-[12rem]' />
            </div>
            <div className='flex items-center h-[100%] pr-[1rem] '>
                <p className='text-white'>
                    <b>Bienvenido, kevin</b>
                </p>
            </div>
        </section>
      <section className='flex'>
        <DashboardMenu  />
        <div className='flex flex-wrap overflow-y-scroll h-[90vh] min-w-[12rem] px-[1rem] pt-[1rem] pt-[1rem]'>
            {
            list.map((asset, key) => (
                <AssetCard asset={asset} key={key} />
            ))
            }
        </div>
      </section>
    </main>
  )
}
