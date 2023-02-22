import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import MyButton from '../utils/MyButton';

export default class Discount extends Component {
  
    state={
        discountStart:0,
        discountEnd: 30
    }

    porcentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },60)
    }
  
    render() {
    return (
        <div className='center_wrapper'>
            <div className='discount_wrapper'>

                <Fade
                onReveal={()=>this.porcentage()}
                >
                    <div className='discount_porcentage'>
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                
                <Slide right>
                    <div className='discount_description'>
                        <h3>Purchase tichets before 20th JUNE</h3>
                        <p>
                            Commodo officia pariatur dolor ullamco velit minim Lorem labore.
                            Ut magna ipsum nisi aute fugiat culpa anim id laboris exercitation dolore.
                            Non proident proident id amet tempor fugiat non do irure do.
                        </p>

                        <MyButton
                            text='Purchase tickets'
                            bck='#ffa800'
                            color='#ffffff'
                            link='http://google.com'
                        />
                    </div>
                </Slide>
                
            </div>
        </div>
    )
  }
}
