import React from "react";
import { useSelector } from "react-redux";

const SingleCountry = () => {
  const country = useSelector((state) => state.countryComponent);

  /* Getting language object individually from our api and then getting values from it by Object.values command.*/
  const languageObject = country[0].languages;
  const languages = Object.values(languageObject);

  /* Getting currency object individually from our api and then getting only keys from it by Object.keys command.*/
  const currencyObject = country[0].currencies;
  const currency = Object.keys(currencyObject);


  return (
    <>
      <div
        className="singleCountry bg-dark"
      >
        <div className="row content" style={{ height: "fit-content", borderRadius: "10px" }}>
          <div className="image d-flex justify-content-center" style={{padding: "15px 0"}}>
            <img src={country[0].flags.png} alt={country[0].name.common} />
          </div>

          <div className="data">
            <div className="tag">
              Name: <span>{country[0].name.common}</span>
            </div>
            <div className="tag">
              Alternative Name: <span>{country[0].altSpellings[0]}</span>
            </div>
            <div className="tag">
              Population: <span>{country[0].population}</span>
            </div>
            <div className="tag">
              Top Level Domain: <span>{country[0].tld}</span>
            </div>
            <div className="tag">
              Capital: <span>{country[0].capital}</span>
            </div>
            <div className="tag">
              Region: <span>{country[0].region}</span>
            </div>
            <div className="tag">
              Sub-region: <span>{country[0].subregion}</span>
            </div>
            <div className="tag">
              Languages:
              <span>
                {languages.map((lang) => {
                  return <li key={lang}>{lang}</li>;
                })}
              </span>
            </div>
            <div className="tag">
              Currencies:
              <span>
                {currency.map((currency) => {
                  return <li key={currency}>{currency}</li>;
                })}
              </span>
            </div>
            <div className="tag">
              Timezone: <span>{country[0].timezones}</span>
            </div>
          </div>
        </div>
      </div>
    </>
      // country[0].postalCode.format
  );
};

export default SingleCountry;
