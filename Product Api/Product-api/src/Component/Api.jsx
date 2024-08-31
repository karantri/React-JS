import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataFetched = async () => {
            try {
                let response = await axios.get('https://fake-coffee-api.vercel.app/api');
                let jsonData = response.data;
                console.log(jsonData);
                setData(jsonData);
            } catch (err) {
                console.log(err);
            }
        };
        dataFetched();
    }, []);

    return (
        <>
            <center>
                <h1 style={{ color: 'black', fontFamily: 'serif', fontStyle: 'italic' }}>Our Product</h1>
            </center>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {data.map((el, index) => (
                    <ul key={index} style={{ textDecoration: 'none', padding: '10px' }}>
                        <div
                            style={{ width: '300px',boxShadow:
                                    'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
                                padding: '5px',
                                borderRadius: '20px',
                            }}
                        >
                            <img src={el.image_url} style={{ height: '300px', width: '300px' }} alt={el.name} />
                            <br />
                            <center>
                                <h2 style={{ color: 'gray' }}>{el.category}</h2>
                                <h3 style={{ fontWeight: '900' }}>{el.name}</h3>
                                <h4 style={{ color: 'green', marginTop: '-10px', fontFamily: 'sans-serif' }}>
                                    price :- {el.price}$
                                </h4>
                            </center>
                        </div>
                    </ul>
                ))}
            </div>
        </>
    );
}
