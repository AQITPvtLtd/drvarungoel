import React from 'react'
import TreatmentData from './TreatmentData'

const page = ({ params }) => {
    const id = params.id;
    return (
        <div>
            <TreatmentData id={id} />
        </div>
    )
}

export default page