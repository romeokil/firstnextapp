interface user{
    id:number,
    name:string,
    email:string,
    website:string
}
export default async function Users(){
    const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data=await response.json();
    console.log(data);
    return (
        <>
            <h1>This is users page</h1>
            {
                data.map((user)=>{

                    return <div key={user.id}>
                        <h1>{user.id}</h1>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        <h3>{user.website}</h3>
                    </div>

                })
            }
        </>

    )
}