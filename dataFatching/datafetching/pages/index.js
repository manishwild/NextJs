import React from 'react'
import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'

const HomePage = (props) => {
  const { products } = props
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps(context) {
  console.log('(Regenerating...)')
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    }
    // it will redirect when there is no data
  }

  if (data.products.length === 0) {
    return { notFound: true }
    // it will return 404 if data is not found
  }

  return {
    props: {
      // products: [{ id: 'p1', title: 'Product 1' }],
      products: data.products,
    },
    revalidate: 10,
    //it will regenerate after 10sec
  }
}

export default HomePage
