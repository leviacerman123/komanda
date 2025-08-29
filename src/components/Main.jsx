import React from 'react'
import rasm from '../assets/rasm.png'
const Main = () => {
  return (
    <div>
        <main>
            <section className='bg-white'>
                <div className="container max-w-[100%] w-[85%] mx-auto">
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-[#2C2B35] font-semibold text-[60px] w-[646px]'>Управление запасами розничного магазина</h1>
                            <p className='font-normal text-xl text-[#2C2B35] w-[608px]'>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
                            <button className='w-[249px] h-[42px] rounded-3xl bg-green-400 text-white'>Заказать демонстрацию</button>
                        </div>
                        <img src={rasm} alt="" />
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Main