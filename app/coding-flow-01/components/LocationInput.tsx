import { Input } from "@/components/ui/input";
import React, { forwardRef, useState, useMemo } from "react";
import { RefCallBack } from "react-hook-form";
import citiesList from "../utils/cities-list";

interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
  ref: RefCallBack;
}

const LocationInput = ({
  onLocationSelected,
  ref,
  ...props
}: LocationInputProps) => {
  const [locationSearchInput, setLocationSearchInput] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const cities = useMemo(() => {
    if (!locationSearchInput.trim()) return [];

    const searchWords = locationSearchInput.split(" ");
    console.log("Searching....", searchWords);

    // return atmost 5 mathching city
    return citiesList
      .map((city) => `${city.name}, ${city.subcountry}, ${city.country}`)
      .filter(
        (city) =>
          // first typed word must be city
          city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
          // and all the typed words must match with either city, subCountry or country
          searchWords.every((word) =>
            city.toLowerCase().includes(word.toLowerCase())
          )
      )
      .slice(0, 5);
  }, [locationSearchInput]);

  console.log("cities:", cities);

  return (
    <div className="relative">
      <Input
        ref={ref}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        type="search"
        placeholder="Seach for a city"
        value={locationSearchInput}
        onChange={(e) => setLocationSearchInput(e.target.value)}
        {...props}
      />
      {locationSearchInput.trim() && hasFocus && (
        <div className="absolute z-20 w-full divide-y rounded-b-lg border-x border-b bg-background shadow-xl">
          {!cities.length && <p className="p-3">No Results</p>}
          {cities.map((city) => (
            <button
              key={city}
              className="block w-full p-2 text-start"
              onMouseDown={(e) => {
                e.preventDefault();
                onLocationSelected(city);
                setLocationSearchInput("");
              }}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default forwardRef<HTMLInputElement, LocationInputProps>(LocationInput);
