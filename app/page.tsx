import UserDetail from "./UserDetail"

const URL = `http://localhost:4000/users`

export default async function UserPage() {

   const response = await fetch(URL)
   const data = await response.json()

   return <UserDetail ui={data} />
  // return <UserDetail ui={[]} />
}
