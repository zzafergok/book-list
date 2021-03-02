import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'

const Navbar = () => {
    const {books} = useContext(BookContext);

    return(
        <div>
            <h2>Book Lists</h2>
            <p>There are {books.length} books</p>
        </div>
    );
}

export default Navbar;