import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async(id: string): Promise<Category> => {
    const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } })

    return res.json();
}

export default getCategory