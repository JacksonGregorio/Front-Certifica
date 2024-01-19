import Header from '@/components/headers'
import Footer from '@/components/footers'
import SideBar from '@/components/sidebar'
import ScrollToTopButton from '@/components/buttons/RolerTop'

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
    <ScrollToTopButton/>
    <SideBar/>
    </main>
    </>
  )
}

