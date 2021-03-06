import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar'
import MarvelScreen from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import DcScreen from '../components/DC/DcScreen';
import HeroScreen from '../components/hero/HeroScreen';

const DashboardRoutes = () => {
  return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />

                </Routes>
            </div>
        </>
  )
}

export default DashboardRoutes