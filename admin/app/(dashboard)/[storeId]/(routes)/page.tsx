import prismadb from '@/lib/prismadb';
import React from 'react'

interface DashboardPageProps {
    params: {storeId: string}
}

const DashboardPage = async ({params}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })

    console.log(store)
    return (
    <div>Store: {store.name}</div>
  )
}

export default DashboardPage