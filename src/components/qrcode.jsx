import React, { useState } from 'react'
import { use } from 'react';

export const Qrcode = () => {
const [imge,setimg]=useState("");
const [loading,setLoading]=useState(false)
const [qrData,setQrData]=useState("");
const [qrSize,setQrSize]=useState("");
function qrgenerator()
{
    setimg("\images\person2.jpg");
    setLoading(true);
    try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setimg(url);
    }catch(error)
    {

    }
    finally{
        setLoading(false);
    }
}

function downloadqr()
{
fetch(imge)
.then((response)=>response.blob())
.then((blob)=>{
    const link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
}
  return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
       {loading && <p>Please Wait..</p>}
        {imge && <img src={imge}   className="qr-image"/>}
        <div >
            
            <label htmlFor="dataInput" className='input-label'>
                Data for Qr code
    
            </label>
            <input type="text" id="dataInput" placeholder='Enter data for Qr code' value={qrData} onChange={(e)=>setQrData(e.target.value)}/>
            <label htmlFor="sizeInput" className='input-label'>
            Image Size (ex:150):

    
            </label>
            <input type="text" value={qrSize} className="sizeInput" placeholder="Enter the size of the image" onChange={(e)=>setQrSize(e.target.value)}/>
            <button className='generate' disabled={loading} onClick={qrgenerator}>Generate Qr code</button>
            <button className='Download' onClick={downloadqr}>Download QR Code</button>

            <p className='footer'>Designed  by Raja Gopika </p>
        </div>
    </div>
  )
}
