import { z } from 'zod'
const PlayerSchema = z.object({
    username: z.string().min(3).max(10),
    age: z.number().min(18, "Need to grow up baby!!")
                    .max(60, "You are too old now!"),
    email: z.email().optional(),
    isDone: z.boolean().default(true),
    music: z.enum(["Guitar", "Piano", "Drum"])
})

const result = PlayerSchema.safeParse({
        username: "Wxxxx", age: 100, email: "w@w.com",
        isDone: false, music: "Guitar"
    }
)

if (!result.success)
    console.log(result.error)
else
    console.log("Success", result.data)

// console.log("Result: ", result)

// try {
//     PlayerSchema.parse({
//         xp: "Warodom",
//         username: 100
//     })
// } catch (e) {
//     if (e instanceof z.ZodError)
//         console.log(e.issues);
// }
