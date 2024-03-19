'use client'
import React, { useCallback, useRef, useState } from 'react';
import { Map, MapRef, ViewStateChangeEvent } from 'react-map-gl';
import styled from 'styled-components';


export type LandingPageProps = {};

const NEWALLA_COORDS = {
  latitude: 35.412015499519356,
  longitude: -97.16794257900781
};

export default function LandingPage(props: LandingPageProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapRef>(null);
  const [lng, setLng] = useState(NEWALLA_COORDS.longitude);
  const [lat, setLat] = useState(NEWALLA_COORDS.latitude);
  const [zoom, setZoom] = useState(9);

  const handleMapMove = useCallback((e: ViewStateChangeEvent) => {
    if (map.current) {
      setLng(e.viewState.latitude);
      setLat(e.viewState.longitude);
      setZoom(e.viewState.zoom);
    }
  }, [map]);

  return (
    <MapContainer ref={mapContainer}>
      <Map
        ref={map}
        initialViewState={{ latitude: lat, longitude: lng, zoom: zoom }}
        onMove={handleMapMove}
        mapStyle={'mapbox://styles/mapbox/streets-v12'}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string}
        attributionControl={false}
      ></Map>
    </MapContainer>
  );
}

const MapContainer = styled.div`
  max-height: 100vh;
  height: 100vh;
`;
