export interface Product {
    id?: string,
    sku: string
    name: string
    brand: string
    quantity: number
    value_unit: number
    category: string
    description?: string | undefined
}