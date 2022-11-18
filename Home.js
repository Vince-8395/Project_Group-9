import React, {useState, useEffect} from 'react';

const Home = () => {
    const [userName, setuserName] = useState('');
    const [show, setShow] = useState(true);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
            setuserName(data.name);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect (() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className='pt-5'>Welcome to WeLearnApp</p>
                    <h1>{userName}</h1>
                    <h2>{ show ? 'Welcome Everyone': 'Welcome to WeLearnApp'} </h2>
    
                </div>
            </div>
        </>
    )
}

export default Home