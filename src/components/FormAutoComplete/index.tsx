import { useAutocomplete, useGoogleMap } from "@ubilabs/google-maps-react-hooks"
import { ChangeEvent, useEffect, useRef, useState } from "react"

export function FormAutoComplete(){

	const map = useGoogleMap()

	const inputRef = useRef<HTMLInputElement | null>(null)

	const [inputValue, setInputValue] = useState('')
	const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null >(null)

	function onPlaceChanged(place: google.maps.places.PlaceResult) {
		if (place) {
			setSelectedPlace(place)

			const formattedAddress = place.formatted_address;
			const { name } = place

			if(!formattedAddress || !name) {
				return;
			}
			setInputValue(formattedAddress || name)
			inputRef.current?.focus();
		}
	}

	useAutocomplete({
    inputField: inputRef && inputRef.current,
    onPlaceChanged,
  });

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value)
	}

	useEffect(() => {
		if (!map || !selectedPlace) {
			return () => {}
		}
		if(selectedPlace.geometry?.location === undefined){
			return () => {}
		}

		const markerOptions: google.maps.MarkerOptions = {
			map,
			position: selectedPlace.geometry?.location,
			title: selectedPlace.name,
		}

		const marker = new google.maps.Marker(markerOptions)
		const positionMapMarker = selectedPlace?.geometry?.location
		map.panTo(positionMapMarker)

		const infoWindow = new google.maps.InfoWindow({
			position: selectedPlace.geometry.location,
			content: '<strong>O quadrinho irá ser entregue aqui</strong>',
		})
		infoWindow.open(map, marker)
		
		return () => {
			marker.setPosition(null)
			infoWindow.close()
		}

	}, [selectedPlace, map])

	return (
		<>
		<label 
			htmlFor="address"
			className="font-roboto text-base font-black"
		>Digite o endereço de envio:</label>
		<input
			className="flex font-roboto text-base border-2 rounded-md border-black w-80 p-2"
			id="address"
			ref={inputRef}
			value={inputValue}
			onChange={handleInputChange}
		/>
		</>
	)
}