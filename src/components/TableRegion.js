import React, { useContext, useState } from 'react';
import CaseRegion from './CaseRegion';
import { RegionContext } from './RegionContext'

const TableRegion = () => {

    // List of regions needed to be rendered
    const [regionList, setRegionList] = useContext(RegionContext)
    console.log(regionList);

    return (
        <>
            <table className="table table-hover mb-4 mt-4">
                <thead className="special-color-dark white-text text-center">

                </thead>

                <tbody>
                    <tr className="text-center">
                        <td>
                            <b> Provinsi</b>
                        </td>
                        <td>
                            <b> Meninggal</b>
                        </td>
                        <td>
                            <b> Positif</b>
                        </td>
                        <td>
                            <b> Sembuh </b>
                        </td>
                    </tr>
                    {regionList.map(region => {
                        return <CaseRegion key={region.Kode_Provi} region={region} />
                    })}
                </tbody>

            </table>
        </>
    );
};


export default TableRegion;