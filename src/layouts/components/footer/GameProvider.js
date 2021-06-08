import React from "react"
import {Root} from "../../../authServices/rootconfig"
import { connect } from "react-redux"
import Swiper from "react-id-swiper"

const params = {
    slidesPerView: 3,
    breakpoints: {
      1024: {
        slidesPerView: 9,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 6,
        spaceBetween: 20
      },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
}

class Gameprovider extends React.Component {
    render() {
        return (
            <div>
                <h4>Game Providers</h4>
                <div className="gameprovider-imgs">
                    {
                        !this.props.FirstpageProviderImg ? "" : 
                        <Swiper {...params}>
                            {
                                this.props.FirstpageProviderImg.map((item,i)=>(
                            
                                <div key={i}>
                                    <img src={ Root.imageurl+item.image} alt={"swiper "+ i}  className="img-fluid" />
                                </div>
                                ))

                            }
                    </Swiper>
                    }                     
                </div>
            </div>
        )
    }
}

const mapstops = (state)=>{
    return {
        FirstpageProviderImg : state.auth.login.FirstpageProviderImg
    }
}
export default connect(mapstops,{})( Gameprovider)