import React, { useState, useEffect } from 'react';
import '../Styles/Quote.css';

const Quotes = () => {

    const [quotes, setQuotes] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        const getQuotes = () => {
            fetch('https://api.quotable.io/random')
                .then(response => response.json())
                .then((data) => {
                    setQuotes(data.content)
                    setAuthor(data.author)
                    // console.log(data.content);
                    // console.log(data.author);
                });
            }
            getQuotes();
    }, []);

    const generateQuote = () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then((data) => {
                setQuotes(data.content)
                setAuthor(data.author)
                // console.log(data.content);
                // console.log(data.author);
            });
    }
    console.log("kuch to hua bhay");


    return (
        <div className="container">
            <div className="quote-box">

                <div className="quote-body">
                    <h2>{quotes}</h2>
                    <h3>~ {author}</h3>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={generateQuote} >generate</button>
                </div>
            </div>
        </div>
    )
}


export default Quotes