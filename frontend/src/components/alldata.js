import React from 'react';

export default function AllData(){
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAccounts();
            setData(data);
        }
       
        fetchData();
    }, []);

    return (<>
        <h5>All Data in Store:</h5>
        <div>
            {data}
        </div>
        <br/>
    </>);
}

export async function fetchAccounts(){
    // fetch all accounts from API
    return fetch('/api/account/all')
        .then(response => response.json())
        .then(data => {
            return (JSON.stringify(data));
        });    
}