import Link from 'next/link'

function ClientsPage() {
  const clients = [
    { id: 'manish', name: 'Manish' },
    { id: 'man', name: 'Man' },
    { id: 'ma', name: 'Mani' },
  ]
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {/* <li>
          <Link href="/clients/manish">Manish</Link>
        </li>
        <li>
          <Link href="/clients/mani">Mani</Link>
        </li> */}
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> // another way*/}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
