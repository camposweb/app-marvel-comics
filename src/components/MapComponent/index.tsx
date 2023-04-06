import { SetStateAction, Suspense, useCallback, useState } from "react";
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'
import { MapCanvas } from "../MapCanvas";
import { FormAutoComplete } from "../FormAutoComplete";

interface modalProps {
  modal: boolean
}

export function MapComponent({ modal }: modalProps) {

  const [isCenter, setIsCenter] = useState({
    lat: -6.168505924777318,
    lng: -38.49024047288851
  })

  const mapOptions: google.maps.MapOptions = {
    center: isCenter,
    zoom: 20,
    zoomControl: true,
    zoomControlOptions: {
      position: 3
    }
  };

  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
 

  const mapRef = useCallback(
    (node: SetStateAction<HTMLDivElement | null>) => {
      node && setMapContainer(node);
    },
    []
  );


  return (
    <div className="flex w-full h-[350px] mt-4 z-0">
    <GoogleMapsProvider
      googleMapsAPIKey={import.meta.env.VITE_API_MAPS_KEY}
      mapContainer={mapContainer}
      mapOptions={mapOptions}
      libraries={['places']}
    >
      <div className="flex flex-col w-full h-full">
        {modal === false ? '' : <FormAutoComplete />}
        <Suspense fallback={<div>Carregand...</div>}>
          <MapCanvas ref={mapRef} />
        </Suspense>
        
      </div>
    </GoogleMapsProvider>
    </div>
    )
}
