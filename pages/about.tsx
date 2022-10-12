import React, { ReactNode } from 'react'
import Link from 'next/link'
import { MainLayout } from '../components/Layouts/MainLayout'
import { DarkLayout } from '../components/Layouts/DarkLayout'


export default function About() {
    return (
        <>
            <h1>About Page</h1>
            <h1 className={'title'}>
                Ir a <Link href="/"><a >Home</a></Link>
            </h1>
            <h1 className={'title'}>
                Ir a <Link href="/contact"><a >Contact</a></Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.js</code>
            </p>
        </>
    )
}

About.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
