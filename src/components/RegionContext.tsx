import React, { createContext, useState } from 'react';
import { IRegion } from "./SearchBar";

interface IProps {
    children: React.ReactNode,
    heading: string
}

export interface ContextValue {
    regionList: IRegion[]
    addRegion: (newRegion: IRegion) => void
}

export const RegionContext = createContext<ContextValue>({ regionList: [], addRegion: () => { } });

export const RegionProvider = (props: IProps) => {

    const [regionList, setRegionList] = useState<IRegion[]>([])

    const addRegion = (newRegion: IRegion) => {
        setRegionList((existingRegion: IRegion[]) => [
            ...existingRegion, newRegion
        ]);
    }

    const contextValue: ContextValue = { regionList, addRegion }


    return (
        <RegionContext.Provider value={contextValue}>
            <h1 className="text-center mb-4 mt-4 p-2">
                {props.heading}
            </h1>
            {props.children}
        </RegionContext.Provider>
    );
};

