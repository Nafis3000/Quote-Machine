import React from "react";
import axios from 'axios';

class QuoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            quote: '',
        }
    }

    componentDidMount(){
        this.fetchQuote();
    }

    fetchQuote = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            this.setState({
                count: this.state.count,
                quote: advice
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

        quoter(){
        this.fetchQuote();
        this.setState({
            count: this.state.count + 1,
            quote: this.state.quote
        })
    }
    reset(){
        this.setState({
            count: 0,
            quote: this.state.quote
        })
    }

    render() {
       return(
        <div className="app">
            <div className="card" id="quote-box">
                <h1 className="header" id="text">
                    "{this.state.quote}"
                </h1>
                <p id="author">Anonymous</p>
                <button className="button-35" onClick={this.quoter.bind(this)} id="new-quote">New Quote</button>
                <a href="https://www.twitter.com/intent/tweet" rel="noreferrer" id="tweet-quote" target="_blank"><button className="button-35">Tweet</button></a>
            </div>
            <h2 className="count">Quote Count: {this.state.count}</h2>
        </div>
       )
    }
}


export default QuoteApp;