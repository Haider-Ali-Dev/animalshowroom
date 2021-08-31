import React from 'react';
import './Image.css'


class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageLink: ""
        }
        this.fetchRequest = this.fetchRequest.bind(this)
    }

    async componentDidMount() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const jsonForm = await response.json()
        const result = jsonForm
        this.setState({
            imageLink: result.message
        })
    }


    async fetchRequest() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const jsonForm = await response.json()
        const result = jsonForm
        this.setState({
            imageLink: result.message
        })
    }

    render() {
        if (this.state.imageLink.length === 0) {
            return (
                <h1 className="load">Loading</h1>
            )
        }
        return (
            <div>
                <div className="container-op">
                    <div>
                        <button className="btn" onClick={this.fetchRequest}>Generate</button>
                    </div>
                    <div>
                    <button className="btn">
                            <a style={{textDecoration: 'none', color: 'black'}} href={this.state.imageLink} download="dog.png">Download</a>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="border">
                        <div>
                            <h1 style={{textAlign: 'center'}}>Here's a Doggo</h1>
                        </div>
                        <img className="dog" alt="dog" src={this.state.imageLink}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Image;