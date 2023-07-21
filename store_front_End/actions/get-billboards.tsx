import React from 'react'
import { Billboard } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async(id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } })

    return res.json();
}

export default getBillboard