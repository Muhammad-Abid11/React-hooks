// use it by change file name in main.jsx file

import { useEffect, useState } from "react"
function Effects() {

    const [name, setName] = useState("Muhammad Abid from useState");
    const [email, setEmail] = useState("abidkhan@gmail.com");

    // useEffect used for "lifecycle"

    useEffect(() => {
        console.log("I will run on every render")
    })

    useEffect(() => {
        console.log("I will run only on 1st render")
    }, [])  // like componentDidMount

    useEffect(() => {
        console.log("I will run every time when 'name' or 'email' is updated")
    }, [name, email])


    useEffect(() => {
        return () => {
            console.log("When Unmount")
        }
    })  //like componentWillUnmount


    // ------------------x----
    // by React Doc

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {  // it just to remove event listener when work is done
            window.removeEventListener("resize", handleResize);
        }
    })

    // https://www.youtube.com/watch?v=dpw9EHDh2bM&t=1950s&ab_channel=ReactConf

    return (
        <div>
            <h1>Hello Effects HOOKs</h1>
            <h2>width of screen {width}</h2>


            <p>Hello World ---{name} {email} </p>
            <button onClick={() => {
                setName("Taha")
                setEmail("Taha@gmail.com")
            }
            }>Update Name and Email</button>
        </div>
    )
}

export default Effects;