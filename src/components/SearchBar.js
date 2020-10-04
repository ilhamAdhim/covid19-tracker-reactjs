import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import "../styles/inputField.css"

const SearchBar = () => {

    const [searchInputValue, setSearchInputValue] = useState("");

    useEffect(() => {
        console.log(searchInputValue)
    }, [searchInputValue])

    const handleChange = (e) => {
        setSearchInputValue(e.target.value);
    }

    const handleSubmit = () => {
        const { value } = searchInputValue;

    }

    const handleClear = () => {
        setSearchInputValue("")
    }


    return (
        <Form className="p-2 h-100">
            <Row className="justify-content-md-center">
                <Col sm="8" md="6">
                    <div className="search-container" id="cariProvinsi" >
                        <input type="text" placeholder="Cari Provinsi Anda..."
                            onChange={handleChange} style={{ width: "95%" }} value={searchInputValue} />
                        {searchInputValue.length > 0 &&
                            <button onClick={handleClear} className="clear-button">
                                &times;
                        </button>}
                    </div>

                </Col>
                <Col sm="1">
                    <Button type="submit">
                        <FaSearch />
                    </Button>
                </Col>

            </Row>
        </Form>
    );
};

export default SearchBar;