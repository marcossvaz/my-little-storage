import z from "zod";

const categoryShemaProduct = z.enum(['eletronico', 'vestuario', 'alimentos', 'equipamento'])

export const productSchema = z.object({
    name: z.string().min(2, "digite o nome do produto"),
    quantity:  z.number().int().positive().min(1, "digite a quantidade de produto"),
    value_unit: z.number().positive().min(1, "Digite o valor unitário do produto"),
    brand: z.string().min(2, "digite da marca do produto"),
    category: categoryShemaProduct,
    description:  z.string().min(2, "digite o nome do produto").optional()
    //TODO colocar os status em bolean
})

export const productIdSchema = z.object({
    id: z.string().min(2, "id é obrigatório"),
})



export type IProduct = z.infer<typeof productSchema>;
export type IProductIdSchema = z.infer<typeof productIdSchema>;