import Image from "next/image"

export default function About(){
    return (
        <>
            <Image
            src="https://tse3.mm.bing.net/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?pid=Api&P=0&h=180"
            alt="This is the scenery image"
            width={30}
            height={30}
            />
            <h1>This is the about page</h1>
        </>
    )
}