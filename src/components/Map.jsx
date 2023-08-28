import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";


const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-113.0, -6.0, 0],
        center: [8, 5],
        scale: 150
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#0e0e5c"
        stroke="#0099ff"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[123.9822, +10.9966]}
        dx={95}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="10" textAnchor="start" alignmentBaseline="middle" fill="#ffffff">
          {"Philippines"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
