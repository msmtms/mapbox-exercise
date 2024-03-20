'use client'
import React, { useCallback, useRef, useState } from 'react';
import { Map as PolyMap, MapRef, ViewStateChangeEvent } from 'react-map-gl';
import styled from 'styled-components';
import DrawControl from '../DrawControl';

const NEWALLA_COORDS = {
  latitude: 35.412015499519356,
  longitude: -97.16794257900781
};

export default function LandingPage() {
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

  const handlePolygonCreate = useCallback((evt: { features: object[]; }) => {
    // TODO: Add save functionality
  }, []);

  const handlePolygonUpdate = useCallback((evt: { features: object[]; }) => {
    // TODO: Add update functionality
  }, []);

  const handlePolygonDelete = useCallback((evt: { features: object[]; }) => {
    // TODO: Add delete functionality
  }, []);

  return (
    <MapContainer ref={mapContainer} data-testid={'map-container'}>
      <PolyMap
        ref={map}
        initialViewState={{ latitude: lat, longitude: lng, zoom: zoom }}
        onMove={handleMapMove}
        mapStyle={'mapbox://styles/mapbox/streets-v12'}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string}
        attributionControl={false}
      >
        <DrawControl
          position="top-right"
          displayControlsDefault
          controls={{
            polygon: true,
            trash: true
          }}
          defaultMode={'draw_polygon'}
          onCreate={handlePolygonCreate}
          onUpdate={handlePolygonUpdate}
          onDelete={handlePolygonDelete}
        />
      </PolyMap>
    </MapContainer>
  );
}

const MapContainer = styled.div`
  max-height: 100vh;
  height: 100vh;
  .mapboxgl-ctrl-top-right {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem 2rem 0 0;
    border: darkgray solid 1px;
    border-radius: 6px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    .mapbox-gl-draw_polygon, .mapbox-gl-draw_trash {
      width: 3em;
      height: 3em;
      border: none;
    }
    .mapbox-gl-draw_polygon {
      border-bottom: gray solid 1px;
      border-radius: 6px 6px 0 0;
    }
    .mapbox-gl-draw_trash { border-radius: 0 0 6px 6px; }
    .mapbox-gl-draw_line { display: none }
    .mapbox-gl-draw_point { display: none }
    .mapbox-gl-draw_combine { display: none }
    .mapbox-gl-draw_uncombine { display: none }
  }
`;
