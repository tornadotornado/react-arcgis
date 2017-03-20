import * as React from 'react';
import { ArcView, BaseProps } from './ArcBase';

interface MapProps extends BaseProps {
    viewProperties?: __esri.MapViewProperties;
}

interface SceneProps extends BaseProps {
  viewProperties?: __esri.SceneViewProperties;
}

export const Map = (props: MapProps) => (
  <ArcView 
    scriptUri={['esri/Map', 'esri/views/MapView']}
    {...props}
    mapProperties = {{
      basemap: "streets-vector",
      ...props.mapProperties
    }}
    viewProperties = {{
      center: [-122.4443, 47.2529],
      zoom: 6,
      ...props.viewProperties
    }}
  />
);

export const Scene = (props: SceneProps) => (
  <ArcView 
    scriptUri={['esri/Map', 'esri/views/SceneView']}
    {...props}
    mapProperties = {{
      basemap: "satellite",
      ground: "world-elevation",
      ...props.mapProperties
    }}
    viewProperties = {{
      scale: 500000,
      center: [-122.4443, 47.2529],
      ...props.viewProperties
    }}
  />
);