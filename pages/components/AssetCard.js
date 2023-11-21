export const AssetCard = ({ asset }) => {
    return (
        <div class="8w-full sm:w-1/2 md:w-2/6 p-4 flex-wrap">
              <div class="font-semibold text-lg mb-2 shadow-orange-600"></div>
                <div class="bg-white rounded-lg shadow-lg rounded-lg	 bg-secondary-wp ">
                  <img src="/prueba.png" className='mb-2 rounded-lg	rounded-md"' alt="" />
                  <div className='mb-5 p-[0.5rem] rounded-lg'>
                    <div className='flex mb-5 justify-between'>
                      <p className='font-bold text-white'>{asset.name}</p>
                      <p className='font-bold text-white'>{asset.priceToken}$</p>
                    </div>
                    <div>
                    <section>
                      <span class="min-w-[10rem] mr-4 text-white font-semibold py-1 px-2 rounded-full">
                        {asset.tokenId}
                      </span>
                      <span class="min-w-[10rem] mr-4 text-white font-semibold py-1 px-2 rounded-full">
                        {asset.status}
                      </span>
                    </section>
                    </div>
                  </div>
                  <div className="p-[0.5rem]">
                    <p className='flex mb-3 justify-between'>
                      <span className="text-white">Período de inversión</span>
                      <span className="text-white"><b>14 meses</b></span>
                    </p>
                    <p className='flex mb-3 justify-between'>
                      <span className="text-white">Rentabilidad total estimada</span>
                      <span className="text-white"><b>{asset.rentabilityTotal}</b>%</span>
                    </p>
                    <p className='flex mb-3 justify-between'>
                      <span className="text-white">Rentabilidad anual alquiler</span>
                      <span className="text-white"><b>{asset.rentabilityAnual}</b>%</span>
                    </p>
                    <p className='flex mb-3 justify-between'>
                      <span className="text-white">Inicio renta</span>
                      <span className="text-white"><b>{asset.creationDate}</b></span>
                    </p>
                  </div>
                  <div className="p-[0.5rem]" >
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full ">Ver más</button>
                  </div>
                </div>
            </div>
    )
}