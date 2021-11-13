import { useEffect } from 'react';
import styled  from 'styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoieHBlbnNvIiwiYSI6ImNrdm5lOWhwdDE4Y28ycm91cnllbWJmc3kifQ.qYf-pQTX3xD_JP35lyugRQ';

const Map = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [79.740,15.912],
            zoom: 3,
        })

        const marker1 = new mapboxgl.Marker()
        .setLngLat([79.740,15.912])
        .addTo(map);


    })


    return <Wrapper id="map"></Wrapper>
}

export default Map
const Wrapper = styled.div`
    flex: 1;
    height: 1.125rem;
`
