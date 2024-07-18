import React from 'react'
import ListCollection from '../components/collecetion/ListCollection'
import CollectionSection from '../components/collecetion/CollectionSection'
import Header from './../commoncomponents/Header';
import Footer from '../commoncomponents/Footer';

function Collection() {
  return (
    <div>
        <Header/>
      <CollectionSection />
      <ListCollection />
      <Footer/>
    </div>
  )
}

export default Collection
