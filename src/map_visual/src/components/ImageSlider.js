import React from "react";

export default class ImageSlider extends React.Component {
    state = {
        images: [
        "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
        "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
        "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
        "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg"
        ],
        idx: 0
    };

    handleNext = () => {
        console.log(this.state)
        this.setState({
            idx: this.state.idx + 1
        },
            () => {
                console.log(this.state)
        });
    };

    render() {
        return (
            <div>
                <img
                    style={{
                        width: 1000,
                        height: 1000
                    }} 
                    src={this.state.images[this.state.idx]}
                />
                <button onClick={this.handleNext}>next {this.state.idx}</button>
            </div>
        )
    }
}