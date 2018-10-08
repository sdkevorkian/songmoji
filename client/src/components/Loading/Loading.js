import React, { Component } from 'react';

class Loading extends Component {
    state = {
        text: this.props.text
    }

    componentDidMount() {
        let stopper = this.props.text + '🎵🎵🎵';
        this.interval = window.setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.props.text
                })
            }
            this.setState((prevState) => {
                return {
                    text: prevState.text + '🎵'
                }
            });
        }, 400);
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return (<h2 className="loading">{this.state.text}</h2>);
    }
}

export default Loading;