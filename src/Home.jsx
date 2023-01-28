
// function Home(props) {    
function Home({ name, email }) {
    // agar apk pass kum props hon too 
    // unhen is trha destructor kr k use kren
    //agar ziada props hon too direct "props" receive kr k 
    // console.log(props)

    return (
        <div>
            <h1>Home</h1>
            {/* <h2>Home.js----{props.name}</h2> */}
            {/* <h3>Home.js----{props.email}</h3> */}
            <h3>Home.js----{name}</h3>
            <h3>Home.js----{email}</h3>
        </div>

    )
}
export default Home;