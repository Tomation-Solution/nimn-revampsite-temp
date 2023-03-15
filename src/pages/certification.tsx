import React from 'react'
import HeadComponent from "@/components/head";
import {
    CertShowcase,
    CertificateBenefit,
    CertificateLevel

} from "@/components";

function membership() {
    return (
        <>
            <HeadComponent pageName="Certificate" />
            <main>
                <CertShowcase />
                < CertificateBenefit />
                <CertificateLevel />
            </main>

        </>
    )
}

export default membership
