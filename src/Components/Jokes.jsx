function Jokes({ jokes }) {

    if (null === jokes) {
        return (
            <div className="loader">
                <div className="container">
                    
                </div>
            </div>
        );
    }

    if ('ERROR' === jokes) {

        return ( <h1>Error</h1> )
    }

    return (
        <ul>
            {
                jokes.map(j => <li key={j.jokes}>
                    {j.jokes}
                </li>)
            }
        </ul>
    );
}

export default Jokes;