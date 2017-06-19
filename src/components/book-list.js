/**
 * Created by consultadd on 19/6/17.
 */
import React, {Component} from 'react';

export default class BookList extends Component{


    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li key={book.title}>{book.title}</li>
                ) ;
        });
    }


    render(){
        return(
            <ul className="col-sm-4 list-group">
                {this.renderlist()}
            </ul>
        )
    }
}