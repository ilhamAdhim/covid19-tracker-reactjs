import React, { useEffect, useState, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { RegionContext } from "./RegionContext";
import _ from "lodash";
import "../styles/inputField.css";

const SearchBar = () => {
    const [searchInputValue, setSearchInputValue] = useState("");

    const [regionList, setRegionList] = useContext(RegionContext);
    const [newRegion, setNewRegion] = useState({});

    const handleChange = e => setSearchInputValue(e.target.value);

    const handleClear = () => setSearchInputValue("");

    const callAPI = async () => {
        const res = await fetch(
            `https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`
        );
        return await res.json();
    };

    const searchRegion = async () => {
        const resultAPI = await callAPI();

        // Capitalized the first letter of each word
        const formattedProvince = _.startCase(_.camelCase(searchInputValue));

        const province = _.filter(resultAPI.features, [
            "attributes.Provinsi",
            formattedProvince,
        ]);

        try {
            setNewRegion(province[0].attributes);
        } catch (error) {
            setNewRegion({})
        }

    };

    // Update the region List when the search button clicked
    const addRegion = e => {
        e.preventDefault();
        searchRegion();

        setRegionList((existingRegion) => [
            ...existingRegion, newRegion
        ]);
    };



    return (
        <Form className="p-2 h-100" onSubmit={addRegion}>
            <Row className="justify-content-md-center">
                <Col sm="8" md="6">
                    <div className="search-container" id="cariProvinsi">
                        <input
                            type="text"
                            placeholder="Cari Provinsi Anda..."
                            onChange={handleChange}
                            style={{ width: "95%" }}
                            value={searchInputValue}
                        />
                        {searchInputValue.length > 0 && (
                            <button onClick={handleClear} className="clear-button">
                                &times;
                            </button>
                        )}
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
