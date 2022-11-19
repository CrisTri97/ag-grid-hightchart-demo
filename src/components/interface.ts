interface themeState {
  theme: Boolean;
}

export interface rootState {
  theme: themeState;
}

export interface CovidData {
  Country: String;
  CountryCode: String;
  Province: String;
  City: String;
  CityCode: String;
  Lat: String;
  Lon: String;
  Confirmed: String;
  Deaths: Number;
  Recovered: Number;
  Active: Number;
  Date: String;
}

export interface Countries {
  countries: [
    {
      Country: String;
      Slug: String;
      ISO2: String;
    }
  ];
  handleOnChange: Function;
}

export interface CountryData {
  Active: Number;
  City: String;
  CityCode: String;
  Confirmed: Number;
  Country: String;
  CountryCode: String;
  Date: String;
  Deaths: Number;
  ID: String;
  Lat: String;
  Lon: String;
  Province: String;
  Recovered: Number;
}
