import Image from 'next/image'
import { Inter } from 'next/font/google'
import useAssets from '@/hooks/useAssets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { list } = useAssets();

  return (
    <main>
      <section className='flex gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          list.map((asset) => (
            <div class="bg-white rounded-lg shadow-lg p-4 w-64">
              <div class="font-semibold text-lg mb-2">{asset.name}</div>

              <div class="text-gray-700">{asset.description}</div>

              <div class="mt-4">
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Botón</button>
              </div>
            </div>
          ))
        }
      </section>
    </main>
  )
}
