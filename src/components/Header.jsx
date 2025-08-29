import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div>
        <header className='bg-white py-[34px] mb-[50px]'>
            <div className="container max-w-[100%] w-[85%] mx-auto">
                <nav className='flex  items-center justify-between'>
                    <img src={logo} alt="" />
                    <ul className='flex gap-[51px] items-center'>
                        <li><a className='text-[#2C2B35] hover:text-green-400 transition-[300ms]' href="">Как это работает</a></li>
                        <li><a className='text-[#2C2B35] hover:text-green-400 transition-[300ms]' href="">Инструкции</a></li>
                        <li><a className='text-[#2C2B35] hover:text-green-400 transition-[300ms]' href="">Продукты</a></li>
                        <li><a className='text-[#2C2B35] hover:text-green-400 transition-[300ms]' href="">База знаний </a></li>
                        <li><a className='text-[#2C2B35] hover:text-green-400 transition-[300ms]' href="">О нас</a></li>
                        <li><button className='w-[72px] hover:bg-white hover:border-1 hover:border-black hover:text-black transition-[300ms] h-[40px] rounded-3xl bg-green-400 text-white'>Вход</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header