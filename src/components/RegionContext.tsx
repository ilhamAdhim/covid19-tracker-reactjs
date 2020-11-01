import React, { createContext, useState } from 'react';

interface IProps {
    children: React.ReactNode,
    heading: string
}

export const RegionContext = createContext([]);

export const RegionProvider = (props: IProps) => {

    const [regionList, setRegionList] = useState([])

    return (
        <RegionContext.Provider value={[regionList, setRegionList]}>
            <h1 className="text-center mb-4 mt-4 p-2">
                {props.heading}
            </h1>
            {props.children}
        </RegionContext.Provider>
    );
};

