import React from 'react';
import Header from '../components/Header';
import WineBlockMain from '../components/WineBlockMain';

export default function Home() {
  return (
    <div className=''>
        <Header />
        <div className='home-page-wrapper'>
            <div className='page-banner'>
                <span>Our Collection</span>
                <p>Only premium brands</p>
            </div>
        </div>
        <WineBlockMain />
    </div>
  )
}
