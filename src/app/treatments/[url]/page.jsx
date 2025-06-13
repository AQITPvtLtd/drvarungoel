import React from 'react'
import TreatmentData from './TreatmentData'

const page = ({ params }) => {
    const url = params.url;
    return (
        <div>
            <TreatmentData url={url} />
        </div>
    )
}

export default page