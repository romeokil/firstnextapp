interface Paramstype{
    params:{
        userId:string
    };
}

async function getUser(userId:string){
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user=await response.json();
    return user;
}
export default async function UserId({params}:Paramstype){
    const userId=params.userId;
    const user=await getUser(userId);
    return (
        <>
            <h1>This is is the Userid {userId}</h1>
            <h2>This is the username {user.name}</h2>
            <h3>This is the email {user.email}</h3>
        </>
    )
}