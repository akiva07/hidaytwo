import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/users">Users List</Link><br />
      <Link href="/showcases">Showcase Projects</Link>
      <ProductCard />
    </main>
  )
}
