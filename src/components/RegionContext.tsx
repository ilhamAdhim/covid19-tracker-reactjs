import React, { createContext, useState } from 'react';
import { IRegion } from "./SearchBar";

interface IProps {
    children: React.ReactNode,
    heading: string
}


export const RegionContext = createContext<IRegion[] | undefined>([]);

export const RegionProvider = (props: IProps) => {

    const [regionList, setRegionList] = useState<IRegion[]>([])


    return (
        <RegionContext.Provider value={regionList}>
            <h1 className="text-center mb-4 mt-4 p-2">
                {props.heading}
            </h1>
            {props.children}
        </RegionContext.Provider>
    );
};

