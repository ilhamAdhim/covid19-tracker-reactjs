import React from 'react';
import { IRegion } from "./SearchBar";

type IProps = {
    region: IRegion
}

const CaseRegion = (props: IProps) => {
    return (
        <>
            <tr>
                {'Kode_Provi' in props.region &&
                    <>
                        <td style={{ fontSize: "1em" }} className="text-center"> {props.region.Provinsi} </td>
                        <td style={{ fontSize: "1em" }} className="text-center"> {props.region.Kasus_Meni} </td>
                        <td style={{ fontSize: "1em" }} className="text-center"> {props.region.Kasus_Posi} </td>
                        <td style={{ fontSize: "1em" }} className="text-center"> {props.region.Kasus_Semb} </td>
                    </>

                }
            </tr>
        </>
    );
};


export default CaseRegion;