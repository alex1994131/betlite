import React from "react"
import "../../assets/css/normalize.css"
import "../../assets/css/demo.css"
import "../../assets/css/component.css"
import img1 from "../../assets/img/Isomtricgridimg/canvas.png"
import img2 from "../../assets/img/Isomtricgridimg/wireframe.png"
import { connect } from "react-redux"
import * as LiveCasinoaction from "../../redux/actions/livecasino/livecasino"

class More extends React.Component{

    constructor(){
        super();
        this.state = {
            gamelist : []
        }
    }

    componentWillMount(){
        this.props.get_externalgamelist();
    }

    componentDidUpdate(){
        (function() {
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			[].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
				new window.IsoGrid(el, {
					type : 'scrollable',
					transform : 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
					stackItemsAnimation : {
						properties : function(pos) {
							return {
								// translateZ: (pos+1) * 50,
								rotateZ: getRandomInt(-3, 3)
							};
						},
						options : function(pos, itemstotal) {
							return {
								type: window.dynamics.bezier,
								duration: 500,
								points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
								//delay: (itemstotal-pos-1)*40
							};
						}
					},
					onGridLoaded : function() {
						window.classie.add(document.body, 'grid-loaded');
					}
				});
			});
		})();
    }

    render(){
        return(
            <main>
                <div className="isolayer isolayer--scroll1 isolayer--shadow">
                    <ul className="grid grid--effect-flip">
                    {(()=>{
                        if (this.props.gamelist) {
                            this.setState({gamelist:this.props.gamelist});
                            this.state.gamelist.reverse();
                            return (
                                this.state.gamelist.map((item,i)=>(
                                    <GameList1 data={item} key={i} />
                                ))
                            )
                        }
                    })()}
                    </ul>
                </div>
            </main>
        )
    }
}

const get_games = (state) =>{
    return {
        gamelist : state.xpggame.gameload.ExternalGamelist,    
    }
}

export default connect(get_games, LiveCasinoaction)(More)

class GameList1 extends React.Component{
    render(){
        return (
            <li className="grid__item">
                <div className="grid__link">
                    <img className="grid__img layer" src={img1} alt="Canvas Dummy" />
                    <img className="grid__img layer" src={img2} alt="Wireframe Dummy" />
                    <img className="grid__img layer" style={{width:"100%",height:"100%"}} src={this.props.data.imageUrl} alt="01" />
                    <span className="grid__title" style={{color:"#FFF"}}>{this.props.data.gameName}</span>
                </div>
            </li>
        )
    }
}