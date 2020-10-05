import React, { createContext, useState } from 'react';

export const RegionContext = createContext();

export const RegionProvider = props => {

    const [regionList, setRegionList] = useState([])

    return (
        <RegionContext.Provider value={[regionList, setRegionList]}>
            {props.children}
        </RegionContext.Provider>
    );
};

