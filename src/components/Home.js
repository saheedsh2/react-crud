const Home = () => {
    const handleClick = () =>{
        console.log('hello ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);

    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click</button>
            <button  onClick={() => {handleClickAgain('mario')}}>Click Me Again</button>


        </div>
     );
}
 
export default Home;