import { SetStateAction, Suspense, useCallback, useState } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { MapCanvas } from "../MapCanvas";
import { FormAutoComplete } from "../FormAutoComplete";

interface modalProps {
  modal: boolean;
}

export function MapComponent({ modal }: modalProps) {
  const mapOptions: google.maps.MapOptions = {
    center: { lat: -8.090521831372113, lng: -55.256939073920876 },
    zoom: 4,
    zoomControl: true,
    zoomControlOptions: {
      position: 3,
    },
  };

  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);

  const mapRef = useCallback((node: SetStateAction<HTMLDivElement | null>) => {
    node && setMapContainer(node);
  }, []);

  return (
    <div className="flex w-full h-[350px] mt-4 z-0">
      <GoogleMapsProvider
        googleMapsAPIKey={import.meta.env.VITE_API_MAPS_KEY}
        mapContainer={mapContainer}
        mapOptions={mapOptions}
        libraries={["places"]}
      >
        <div className="flex flex-col w-full h-full">
          {modal === false ? "" : <FormAutoComplete />}
          <Suspense fallback={<div>Carregando...</div>}>
            <MapCanvas ref={mapRef} />
          </Suspense>
        </div>
      </GoogleMapsProvider>
    </div>
  );
}
