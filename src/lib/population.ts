
export const fetchCountries = async (start: number, end: number, countries: Country[]) => {
    return await fetch(`https://api.census.gov/data/timeseries/idb/5year?get=NAME,GENC,group(IDB5YEAR)&YR=${start}:${end}&for=genc+standard+countries+and+areas:${countries.join(",")}`)
        .then(f => f.json())
}

export const getCountryPopulationData = async (start: number, end: number, countries: Country[]): Promise<PopulationData[]> => {
    const json: any[][] = await fetchCountries(start, end, countries)

    const variables: string[] = json[0]
    const populationIndices = variables.map((v,i) => ((v.includes("FPOP") || v.includes("MPOP")) && v.length != 4) ? i : -1).filter(v => v >= 0)
    const out: PopulationData[] = []

    for(const countryData of json.slice(1)) {
        const country = countryData[0]
        const year = countryData[variables.indexOf("YR")]
        const totalPopulation = parseInt(countryData[variables.indexOf("POP")])
        out.push({
            country, year,
            female: populationIndices.filter(i => variables[i].includes("F")).reduce((p,v) => {return {...p, [variables[v].split("FPOP")[1]]: parseInt(countryData[v])/totalPopulation}}, {}),
            male: populationIndices.filter(i => variables[i].includes("M")).reduce((p,v) => {return {...p, [variables[v].split("MPOP")[1]]: parseInt(countryData[v])/totalPopulation}}, {})
        })
    }
    return out
}

export const getCountryPopulationDataOverYears = async (start: number, end: number, countries: Country[]): Promise<PopulationYearData> => {
    const json: any[][] = await fetchCountries(start, end, countries)

    const variables: string[] = json[0]
    const populationIndices = variables.map((v,i) => ((v.includes("FPOP") || v.includes("MPOP")) && v.length != 4) ? i : -1).filter(v => v >= 0)
    const out: PopulationYearData = {}

    for(const countryData of json.slice(1)) {
        const country = countryData[0]
        const year = countryData[variables.indexOf("YR")]
        const totalPopulation = parseInt(countryData[variables.indexOf("POP")])

        if(out[country] == undefined) {
            out[country] = {}
        }
        out[country][year] = {
            country, year,
            female: populationIndices.filter(i => variables[i].includes("F")).reduce((p,v) => {return {...p, [variables[v].split("FPOP")[1]]: parseInt(countryData[v])/totalPopulation}}, {}),
            male: populationIndices.filter(i => variables[i].includes("M")).reduce((p,v) => {return {...p, [variables[v].split("MPOP")[1]]: parseInt(countryData[v])/totalPopulation}}, {})
        }
    }
    return out
}

export interface PopulationYearData {
    [key:string]: {
        [key: number]: PopulationData
    }
}

export interface PopulationData {
    country: string,
    year: number,
    female: {
        [key:string]: number
    },
    male: {
        [key:string]: number
    }
}

export enum Country {
    Afghanistan = "AF",
    Albania = "AL",
    Algeria = "DZ",
    AmericanSamoa = "AS",
    Andorra = "AD",
    Angola = "AO",
    Anguilla = "AI",
    AntiguaandBarbuda = "AG",
    Argentina = "AR",
    Armenia = "AM",
    Aruba = "AW",
    Australia = "AU",
    Austria = "AT",
    Azerbaijan = "AZ",
    Bahamas = "BS",
    Bahrain = "BH",
    Bangladesh = "BD",
    Barbados = "BB",
    Belarus = "BY",
    Belgium = "BE",
    Belize = "BZ",
    Benin = "BJ",
    Bermuda = "BM",
    Bhutan = "BT",
    Bolivia = "BO",
    BosniaandHerzegovina = "BA",
    Botswana = "BW",
    Brazil = "BR",
    BritishIndianOceanTerritory = "IO",
    BritishVirginIslands = "VG",
    Brunei = "BN",
    Bulgaria = "BG",
    BurkinaFaso = "BF",
    BurmaMyanmar = "MM",
    Burundi = "BI",
    CaboVerde = "CV",
    Cambodia = "KH",
    Cameroon = "CM",
    Canada = "CA",
    CaymanIslands = "KY",
    CentralAfricanRepublic = "CF",
    Chad = "TD",
    Chile = "CL",
    China = "CN",
    ChristmasIslandintheIndianOcean = "CX",
    CocosKeelingIslands = "CC",
    Colombia = "CO",
    Comoros = "KM",
    CongoDemocraticRepublicoftheCongoformerlyZaire = "CD",
    CongoRepublicoftheCongo = "CG",
    CookIslands = "CK",
    CostaRica = "CR",
    CotedIvoire = "CI",
    Croatia = "HR",
    Cuba = "CU",
    Curacao = "CW",
    Cyprus = "CY",
    CzechRepublic = "CZ",
    DenmarkexceptGreenland = "DK",
    Djibouti = "DJ",
    Dominica = "DM",
    DominicanRepublic = "DO",
    Ecuador = "EC",
    Egypt = "EG",
    ElSalvador = "SV",
    EquatorialGuinea = "GQ",
    Eritrea = "ER",
    Estonia = "EE",
    Eswatini = "SZ",
    Ethiopia = "ET",
    FalklandIslandsIslasMalvinas = "FK",
    FaroeIslands = "FO",
    Fiji = "FJ",
    Finland = "FI",
    France = "FR",
    FrenchGuiana = "GF",
    FrenchPolynesia = "PF",
    FrenchSouthernandAntarcticLands = "TF",
    Gabon = "GA",
    Gambia = "GM",
    GazaStripadministeredbyIsrael = "GZ",
    Georgia = "GE",
    GermanyFederalRepublicofGermany = "DE",
    Ghana = "GH",
    Gibraltar = "GI",
    Greece = "GR",
    Greenland = "GL",
    Grenada = "GD",
    Guadeloupe = "GP",
    Guam = "GU",
    Guatemala = "GT",
    Guinea = "GN",
    GuineaBissau = "GW",
    Guyana = "GY",
    Haiti = "HT",
    HeardIslandandMcDonaldIslands = "HM",
    HolySeeVaticanCity = "VA",
    Honduras = "HN",
    HongKong = "HK",
    Hungary = "HU",
    Iceland = "IS",
    India = "IN",
    Indonesia = "ID",
    Iran = "IR",
    Iraq = "IQ",
    Ireland = "IE",
    Israel = "IL",
    Italy = "IT",
    Jamaica = "JM",
    Japan = "JP",
    Jordan = "JO",
    Kazakhstan = "KZ",
    Kenya = "KE",
    Kiribati = "KI",
    Kosovo = "KV",
    Kuwait = "KW",
    Kyrgyzstan = "KG",
    LaosLaoPeoplesDemocraticRepublic = "LA",
    Latvia = "LV",
    Lebanon = "LB",
    Lesotho = "LS",
    Liberia = "LR",
    Libya = "LY",
    Liechtenstein = "LI",
    Lithuania = "LT",
    Luxembourg = "LU",
    Macao = "MO",
    Madagascar = "MG",
    Malawi = "MW",
    Malaysia = "MY",
    Maldives = "MV",
    Mali = "ML",
    Malta = "MT",
    MarshallIslands = "MH",
    Martinique = "MQ",
    Mauritania = "MR",
    Mauritius = "MU",
    Mayotte = "YT",
    Mexico = "MX",
    MicronesiaFederatedStatesof = "FM",
    MoldovaRepublicofMoldova = "MD",
    Monaco = "MC",
    Mongolia = "MN",
    Montenegro = "ME",
    Montserrat = "MS",
    Morocco = "MA",
    Mozambique = "MZ",
    Namibia = "NA",
    Nauru = "NR",
    Nepal = "NP",
    Netherlands = "NL",
    NewCaledonia = "NC",
    NewZealand = "NZ",
    Nicaragua = "NI",
    Niger = "NE",
    Nigeria = "NG",
    Niue = "NU",
    NorfolkIsland = "NF",
    NorthKoreaDemocraticPeoplesRepublicofKorea = "KP",
    NorthMacedonia = "MK",
    NorthernMarianaIslands = "MP",
    Norway = "NO",
    Oman = "OM",
    Pakistan = "PK",
    Palau = "PW",
    Panama = "PA",
    PapuaNewGuinea = "PG",
    Paraguay = "PY",
    Peru = "PE",
    Philippines = "PH",
    PitcairnIslands = "PN",
    Poland = "PL",
    Portugal = "PT",
    PuertoRico = "PR",
    Qatar = "QA",
    Reunion = "RE",
    Romania = "RO",
    Russia = "RU",
    Rwanda = "RW",
    SaintHelena = "SH",
    SaintKittsandNevis = "KN",
    SaintLucia = "LC",
    SaintPierreandMiquelon = "PM",
    SaintVincentandtheGrenadines = "VC",
    SamoaWesternSamoa = "WS",
    SanMarino = "SM",
    SaoTomeandPrincipe = "ST",
    SaudiArabia = "SA",
    Senegal = "SN",
    Serbia = "RS",
    Seychelles = "SC",
    SierraLeone = "SL",
    Singapore = "SG",
    SintMaarten = "SX",
    Slovakia = "SK",
    Slovenia = "SI",
    SolomonIslands = "SB",
    Somalia = "SO",
    SouthAfrica = "ZA",
    SouthKoreaRepublicofKorea = "KR",
    SouthSudan = "SS",
    Spain = "ES",
    SriLanka = "LK",
    Sudan = "SD",
    Suriname = "SR",
    SvalbardandJanMayen = "SJ",
    Sweden = "SE",
    Switzerland = "CH",
    SyriaSyrianArabRepublic = "SY",
    Taiwan = "TW",
    Tajikistan = "TJ",
    TanzaniaUnitedRepublicofTanzania = "TZ",
    Thailand = "TH",
    TimorLeste = "TL",
    Togo = "TG",
    Tokelau = "TK",
    Tonga = "TO",
    TrinidadandTobago = "TT",
    Tunisia = "TN",
    Turkey = "TR",
    Turkmenistan = "TM",
    TurksandCaicosIslands = "TC",
    Tuvalu = "TV",
    Uganda = "UG",
    Ukraine = "UA",
    UnitedArabEmirates = "AE",
    UnitedKingdom = "GB",
    UnitedStatesMinorOutlyingIslands = "UM",
    UnitedStatesofAmerica = "US",
    Uruguay = "UY",
    Uzbekistan = "UZ",
    Vanuatu = "VU",
    Venezuela = "VE",
    Vietnam = "VN",
    VirginIslandsoftheUnitedStates = "VI",
    WallisandFutuna = "WF",
    WestBankadministeredbyIsrael = "WE",
    YemenRepublicofYemen = "YE",
    Zambia = "ZM",
    Zimbabwe = "ZW"
}