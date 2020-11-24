import React, { useEffect, useState, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ContextValue, RegionContext } from "./RegionContext";
import _ from "lodash";
import "../styles/inputField.css";

export type IRegion = {
    Kasus_Meni: number
    Kasus_Posi: number
    Kasus_Semb: number
    Kode_Provi: number
    Provinsi: string
}

export type IFeature = {
    attributes: IRegion
}

export type IResponse = {
    features: IFeature[]
}


const SearchBar = () => {
    const [searchInputValue, setSearchInputValue] = useState("");

    const { regionList, addRegion } = useContext<ContextValue>(RegionContext);
    const [newRegion, setNewRegion] = useState<IRegion>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInputValue(e.target.value);

    const handleClear = () => setSearchInputValue("");

    const callAPI = async () => {
        const res = await fetch(
            `https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`
        );
        return res.json() as Promise<IResponse>;
    };

    const searchRegion = async () => {
        const resultAPI = await callAPI();

        // Capitalized the first letter of each word
        const formattedProvince = _.startCase(_.camelCase(searchInputValue));

        const filteredFeatures = resultAPI.features.filter((feature) => {
            return feature.attributes.Provinsi === formattedProvince
        })

        const regions = filteredFeatures.map((feature) => {
            return feature.attributes
        })

        try {
            setNewRegion(regions[0]);
        } catch (error) {
            setNewRegion(undefined)
        }
    };

    useEffect(() => {
        if (newRegion !== undefined)
            addRegion(newRegion)
    }, [newRegion])

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        searchRegion();
    };

    return (
        <Form className="p-2 h-100" onSubmit={handleSubmit} id="searchProv">
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
