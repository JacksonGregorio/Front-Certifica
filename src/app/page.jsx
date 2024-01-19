import Image from 'next/image'
import Header from '@/components/headers'
import Footer from '@/components/footers'
import LoginSignForm from '@/components/login'
import '@/app/globals.css'

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">

      <LoginSignForm/>

    </main>
    <Footer/>
    </>
  )
}
