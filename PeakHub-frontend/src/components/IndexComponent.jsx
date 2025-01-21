import React from 'react'
import AnnoncementComponent from './AnnouncementComponent'
import ListLocationComponent from './ListLocationComponent'
import ListProductComponent from './ListProductComponent copy'

const IndexComponent = () => {
  return (
    <main className='container'>
        <ListLocationComponent />
        <ListProductComponent />
        <AnnoncementComponent title={"News Letter"} details={"Stay up-to-date with our newsletter!"} image={"src/assets/guides.jpg"} button={"Subscribe"}/>
    </main>
  )
}

export default IndexComponent