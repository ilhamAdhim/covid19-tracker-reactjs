import React from 'react';

const CaseRegion = props => {
    return (
        <>
            <tr>
                {'Kode_Provi' in props.region &&
                    <>
                        <td style={{ fontSize: "1em" }} className="text-center"> <b> {props.region.Provinsi} </b> </td>
                        <td style={{ fontSize: "1em" }} className="text-center"> <b> {props.region.Kasus_Meni} </b> </td>
                        <td style={{ fontSize: "1em" }} className="text-center"> <b> {props.region.Kasus_Posi} </b> </td>
                        <td style={{ fontSize: "1em" }} className="text-center"> <b> {props.region.Kasus_Semb} </b> </td>
                    </>

                }
            </tr>
        </>
    );
};


export default CaseRegion;