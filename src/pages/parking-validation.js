import React from "react";
import { MobilePDFReader } from 'react-read-pdf';
import ParkingMapPdf from './temp/sample.pdf';

function Parking() {
  return (
      <>
        {/* <div >
            <MobilePDFReader url={ParkingMapPdf}/>
        </div> */}
    <embed src={ParkingMapPdf} type="application/pdf" width="100%" height="600px" />
    </>
  );
}
export default Parking;