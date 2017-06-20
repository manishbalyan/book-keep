/**
 * Created by consultadd on 20/6/17.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";


class BookDetail extends Component{

    render(){
        if(!this.props.activeBook){
            return <div>Please seleact a book for detail info!</div>
        }
        return(
            <div>
                <h5>Detail for:</h5>
                <div>Title:{this.props.activeBook.title}</div>
                <div>Pages:{this.props.activeBook.pages}</div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        activeBook:state.activeBook
    }
}

// const mapDispatchToProps = (dispatch)=>{
//     return bindActionCreators({activeBook:activeBook},dispatch)
// }

export default connect(mapStateToProps)(BookDetail)