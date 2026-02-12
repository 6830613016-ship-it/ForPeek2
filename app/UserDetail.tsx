'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { URL, UserType } from "@/constants/type"
import { useState } from "react"
import Image from 'next/image'




export default function UserPage({ ui }: { ui: UserType[] }) {

    const [num, setNum] = useState(1)
    const [users, setUsers] = useState(ui)

    const fetchUser = async () => {
        //const response = await fetch(`${URL}/${num}`)
        const response = await fetch(`${URL}?_limit=${num}`)
        const data = await response.json()
        //setUsers([data])
        setUsers(data)

    }

    return (<div className='border'>
        <h1 className='text-xl font-extrabold text-center'>Warodom 's User Page</h1>

        <div className='flex justify-center items-center mx-4'>
            <span className='mx-2'>Number:</span>
            <Input className='border px-2 w-56'
                type="number" name="num" defaultValue="1"
                onChange={e => setNum(+e.target.value)}
            />
            <Button variant='ghost' className='border px-2 m-2' onClick={fetchUser}>
                Submit
            </Button>
        </div>

        {/* <div>
      <pre>
        {JSON.stringify(users, null, 4)}
      </pre>
    </div> */}
        <div className='flex flex-col items-center gap-2'>
            {
                users?.map((item, index) => (
                    <li className="border-2 list-none p-2 min-w-150" key={index}>
                        <div><span>AlbumId: </span>{item.albumId}</div>
                        <div><span>ID: </span>{item.id}</div>
                        <div><span>Title: </span>{item.title}</div>
                        
                        <div className="flex justify-between mt-10">
                            <Image
                                src={item.thumbnailUrl}
                                alt={item.title}
                                width={160}
                                height={160}
                                className="rounded-lg object-cover h-40"
                            />
                            
                            <div><Image
                                src={item.thumbnailUrl}
                                alt={item.title}
                                width={160}
                                height={160}
                                className="rounded-lg object-cover h-40"
                            /></div>
                            <div><Image
                                src={item.thumbnailUrl}
                                alt={item.title}
                                width={160}
                                height={160}
                                className="rounded-lg object-cover h-40"
                            /></div>
                        </div>
                    </li>
                ))
            }
        </div>
    </div>
    )
}
