import { z } from 'zod'

const PlayerSchema = z.object({
    name: z.string().min(3).max(10),
    age: z.number().min(18, "Need to grow up baby!!")
        .max(60, "You are too old now!"),
    email: z.email().optional()
})

export default function submitPlayer(
    prevState: unknown, formData: FormData) {

    const name = formData.get("name") as string
    const age = Number(formData.get("age"))
    const email = formData.get("email") as string

    const data = { name, age, email }


    const result = PlayerSchema.safeParse(data)
    console.log(result)

    if (!result.success) {
        console.log(z.treeifyError(result.error))
        return {
            errors: z.treeifyError(result.error).properties,
            data
        }
    }

    return {
        errors: {},
        data
    }
}