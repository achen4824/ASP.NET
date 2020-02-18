
class TheOptions extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div
                className="sidebarOption"
                onClick={() => this.props.onClickFunc}
            >
                {this.props.value}
            </div>
        );
    }
}

class Sidebar extends React.Component {

    highlightOpt(i){

    }

    render(){
        return React.createElement(
            <div className="sidebar">
                
                <TheOptions onClickFunc={this.highlightOpt(0)} value={"Home"}/>
                <TheOptions onClickFunc={this.highlightOpt(1)} value={"About"}/>
                <TheOptions onClickFunc={this.highlightOpt(2)} value={"Availability"}/>
                <TheOptions onClickFunc={this.highlightOpt(3)} value={"Contact"}/>
            </div>
        );
    }
}

const domContainer = document.querySelector('#sidebarCont');
ReactDOM.render(e(Sidebar), domContainer);