'use client'
import { useActionState } from "react"
import submitPlayer from "./action"
export default function PlayerPage() {
    const initState = {
        errors: {},
        data: {
            name: "",
            age: 0,
            email: ""
        }
    }

    const [state, action] = useActionState(submitPlayer, initState)

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Player Page</h1>

            <pre className="border border-amber-500 p-2 m-2">
                {JSON.stringify(state, null, 4)}
            </pre>

            <form action={action}>
                <div>
                    Name:
                    <input className="border my-2 px-2"
                        type="text" name="name"
                        defaultValue={state.data.name}
                    />
                    {state.errors?.name &&
                        <p className="text-sm text-red-600"> {
                            state.errors?.name.errors?.[0]
                        } </p>}
                </div>
                <div>
                    Age: <input className="border my-2 px-2"
                        type="number" name="age"
                        defaultValue={state.data.age}
                    />
                    {state.errors?.age &&
                        <p className="text-sm text-red-600"> {
                            state.errors?.age.errors[0]
                        } </p>}
                </div>
                <div>
                    Email: <input className="border my-2 px-2"
                        type="email" name="email"
                        defaultValue={state.data.email}
                    />
                    {state.errors?.email &&
                        <p className="text-sm text-red-600"> {
                            state.errors?.email.errors[0]
                        } </p>}
                </div>
                <div>
                    <button className="border my-2 px-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
