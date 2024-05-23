document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000);
    }

    const button = document.getElementById("button");
    const leftinput = document.getElementById("leftinput");
    const rightinput = document.getElementById("rightinput");
    let fromValue, usdValue, toValue;

    function convertFromUSD(usdValue, currency) {
    
      if (currency === "AED") {
        toValue = usdValue / 0.27;
      } else if (currency === "AFN") {
        toValue = usdValue / 0.012;
      } else if (currency === "ALL") {
        toValue = usdValue / 0.0091;
      } else if (currency === "AMD") {
        toValue = usdValue / 0.0021;
      } else if (currency === "ANG") {
        toValue = usdValue / 0.56;
      } else if (currency === "AOA") {
        toValue = usdValue / 0.0013;
      } else if (currency === "ARS") {
        toValue = usdValue / 0.007;
      } else if (currency === "AUD") {
        toValue = usdValue / 0.64;
      } else if (currency === "AWG") {
        toValue = usdValue / 0.56;
      } else if (currency === "AZN") {
        toValue = usdValue / 0.59;
      } else if (currency === "BAM") {
        toValue = usdValue / 0.55;
      } else if (currency === "BBD") {
        toValue = usdValue / 0.50;
      } else if (currency === "BDT") {
        toValue = usdValue / 0.0094;
      } else if (currency === "BGN") {
        toValue = usdValue / 0.55;
      } else if (currency === "BHD") {
        toValue = usdValue / 2.65;
      } else if (currency === "BIF") {
        toValue = usdValue / 0.00034;
      } else if (currency === "BMD") {
        toValue = usdValue / 1.00;
      } else if (currency === "BND") {
        toValue = usdValue / 0.73;
      } else if (currency === "BOB") {
        toValue = usdValue / 0.14;
      } else if (currency === "BRL") {
        toValue = usdValue / 0.20;
      } else if (currency === "BSD") {
        toValue = usdValue / 1.00;
      } else if (currency === "BTN") {
        toValue = usdValue / 0.012;
      } else if (currency === "BWP") {
        toValue = usdValue / 0.073;
      } else if (currency === "BYN") {
        toValue = usdValue / 0.38;
      } else if (currency === "BZD") {
        toValue = usdValue / 0.50;
      } else if (currency === "CAD") {
        toValue = usdValue / 0.82;
      } else if (currency === "CDF") {
        toValue = usdValue / 0.00049;
      } else if (currency === "CHF") {
        toValue = usdValue / 1.12;
      } else if (currency === "CLP") {
        toValue = usdValue / 0.0014;
      } else if (currency === "CNY") {
        toValue = usdValue / 0.16;
      } else if (currency === "COP") {
        toValue = usdValue / 0.00022;
      } else if (currency === "CVE") {
        toValue = usdValue / 0.011;
      } else if (currency === "CZK") {
        toValue = usdValue / 0.046;
      } else if (currency === "DJF") {
        toValue = usdValue / 0.0056;
      } else if (currency === "DKK") {
        toValue = usdValue / 0.15;
      } else if (currency === "DOP") {
        toValue = usdValue / 0.018;
      } else if (currency === "DZD") {
        toValue = usdValue / 0.0076;
      } else if (currency === "EGP") {
        toValue = usdValue / 0.032;
      } else if (currency === "ERN") {
        toValue = usdValue / 0.062;
      } else if (currency === "ETB") {
        toValue = usdValue / 0.023;
      } else if (currency === "EUR") {
        toValue = usdValue / 1.09;
      } else if (currency === "FJD") {
        toValue = usdValue / 0.49;
      } else if (currency === "FKP") {
        toValue = usdValue / 1.30;
      } else if (currency === "FOK") {
        toValue = usdValue / 0.15;
      } else if (currency === "GBP") {
        toValue = usdValue / 1.22;
      } else if (currency === "GEL") {
        toValue = usdValue / 0.31;
      } else if (currency === "GGP") {
        toValue = usdValue / 1.22;
      } else if (currency === "GHS") {
        toValue = usdValue / 0.17;
      } else if (currency === "GIP") {
        toValue = usdValue / 1.22;
      } else if (currency === "GMD") {
        toValue = usdValue / 0.019;
      } else if (currency === "GNF") {
        toValue = usdValue / 0.000099;
      } else if (currency === "GTQ") {
        toValue = usdValue / 0.13;
      } else if (currency === "GYD") {
        toValue = usdValue / 0.0048;
      } else if (currency === "HKD") {
        toValue = usdValue / 0.13;
      } else if (currency === "HNL") {
        toValue = usdValue / 0.041;
      } else if (currency === "HRK") {
        toValue = usdValue / 0.14;
      } else if (currency === "HTG") {
        toValue = usdValue / 0.011;
      } else if (currency === "HUF") {
        toValue = usdValue / 0.0036;
      } else if (currency === "IDR") {
        toValue = usdValue / 0.000067;
      } else if (currency === "ILS") {
        toValue = usdValue / 0.28;
      } else if (currency === "IMP") {
        toValue = usdValue / 1.22;
      } else if (currency === "INR") {
        toValue = usdValue / 0.012;
      } else if (currency === "IQD") {
        toValue = usdValue / 0.00076;
      } else if (currency === "IRR") {
        toValue = usdValue / 0.000024;
      } else if (currency === "ISK") {
        toValue = usdValue / 0.0077;
      } else if (currency === "JEP") {
        toValue = usdValue / 1.22;
      } else if (currency === "JMD") {
        toValue = usdValue / 0.0065;
      } else if (currency === "JOD") {
        toValue = usdValue / 1.41;
      } else if (currency === "JPY") {
        toValue = usdValue / 0.0073;
      } else if (currency === "KES") {
        toValue = usdValue / 0.007;
      } else if (currency === "KGS") {
        toValue = usdValue / 0.011;
      } else if (currency === "KHR") {
        toValue = usdValue / 0.00025;
      } else if (currency === "KID") {
        toValue = usdValue / 0.64;
      } else if (currency === "KMF") {
        toValue = usdValue / 0.0022;
      } else if (currency === "KRW") {
        toValue = usdValue / 0.00074;
      } else if (currency === "KWD") {
        toValue = usdValue / 3.26;
      } else if (currency === "KYD") {
        toValue = usdValue / 1.20;
      } else if (currency === "KZT") {
        toValue = usdValue / 0.0022;
      } else if (currency === "LAK") {
        toValue = usdValue / 0.000057;
      } else if (currency === "LBP") {
        toValue = usdValue / 0.000066;
      } else if (currency === "LKR") {
        toValue = usdValue / 0.0031;
      } else if (currency === "LRD") {
        toValue = usdValue / 0.0053;
      } else if (currency === "LSL") {
        toValue = usdValue / 0.054;
      } else if (currency === "LYD") {
        toValue = usdValue / 0.21;
      } else if (currency === "MAD") {
        toValue = usdValue / 0.10;
      } else if (currency === "MDL") {
        toValue = usdValue / 0.056;
      } else if (currency === "MGA") {
        toValue = usdValue / 0.00022;
      } else if (currency === "MKD") {
        toValue = usdValue / 0.019;
      } else if (currency === "MMK") {
        toValue = usdValue / 0.00048;
      } else if (currency === "MNT") {
        toValue = usdValue / 0.00029;
      } else if (currency === "MOP") {
        toValue = usdValue / 0.12;
      } else if (currency === "MRU") {
        toValue = usdValue / 0.027;
      } else if (currency === "MUR") {
        toValue = usdValue / 0.022;
      } else if (currency === "MVR") {
        toValue = usdValue / 0.065;
      } else if (currency === "MWK") {
        toValue = usdValue / 0.00097;
      } else if (currency === "MXN") {
        toValue = usdValue / 0.056;
      } else if (currency === "MYR") {
        toValue = usdValue / 0.22;
      } else if (currency === "MZN") {
        toValue = usdValue / 0.015;
      } else if (currency === "NAD") {
        toValue = usdValue / 0.054;
      } else if (currency === "NGN") {
        toValue = usdValue / 0.0012;
      } else if (currency === "NIO") {
        toValue = usdValue / 0.027;
      } else if (currency === "NOK") {
        toValue = usdValue / 0.11;
      } else if (currency === "NPR") {
        toValue = usdValue / 0.0075;
      } else if (currency === "NZD") {
        toValue = usdValue / 0.61;
      } else if (currency === "OMR") {
        toValue = usdValue / 2.60;
      } else if (currency === "PAB") {
        toValue = usdValue / 1.00;
      } else if (currency === "PEN") {
        toValue = usdValue / 0.27;
      } else if (currency === "PGK") {
        toValue = usdValue / 0.28;
      } else if (currency === "PHP") {
        toValue = usdValue / 0.018;
      } else if (currency === "PKR") {
        toValue = usdValue / 0.0035;
      } else if (currency === "PLN") {
        toValue = usdValue / 0.24;
      } else if (currency === "PYG") {
        toValue = usdValue / 0.00014;
      } else if (currency === "QAR") {
        toValue = usdValue / 0.27;
      } else if (currency === "RON") {
        toValue = usdValue / 0.24;
      } else if (currency === "RSD") {
        toValue = usdValue / 0.0091;
      } else if (currency === "RUB") {
        toValue = usdValue / 0.013;
      } else if (currency === "RWF") {
        toValue = usdValue / 0.00084;
      } else if (currency === "SAR") {
        toValue = usdValue / 0.27;
      } else if (currency === "SBD") {
        toValue = usdValue / 0.12;
      } else if (currency === "SCR") {
        toValue = usdValue / 0.073;
      } else if (currency === "SDG") {
        toValue = usdValue / 0.0018;
      } else if (currency === "SEK") {
        toValue = usdValue / 0.12;
      } else if (currency === "SGD") {
        toValue = usdValue / 0.73;
      } else if (currency === "SHP") {
        toValue = usdValue / 1.22;
      } else if (currency === "SLL") {
        toValue = usdValue / 0.000058;
      } else if (currency === "SOS") {
        toValue = usdValue / 0.0018;
      } else if (currency === "SRD") {
        toValue = usdValue / 0.11;
      } else if (currency === "SSP") {
        toValue = usdValue / 0.0077;
      } else if (currency === "STN") {
        toValue = usdValue / 0.045;
      } else if (currency === "SYP") {
        toValue = usdValue / 0.00039;
      } else if (currency === "SZL") {
        toValue = usdValue / 0.061;
      } else if (currency === "THB") {
        toValue = usdValue / 0.032;
      } else if (currency === "TJS") {
        toValue = usdValue / 0.088;
      } else if (currency === "TMT") {
        toValue = usdValue / 0.28;
      } else if (currency === "TND") {
        toValue = usdValue / 0.35;
      } else if (currency === "TOP") {
        toValue = usdValue / 0.44;
      } else if (currency === "TRY") {
        toValue = usdValue / 0.12;
      } else if (currency === "TTD") {
        toValue = usdValue / 0.15;
      } else if (currency === "TVD") {
        toValue = usdValue / 0.64;
      } else if (currency === "TWD") {
        toValue = usdValue / 0.036;
      } else if (currency === "TZS") {
        toValue = usdValue / 0.00043;
      } else if (currency === "UAH") {
        toValue = usdValue / 0.036;
      } else if (currency === "UGX") {
        toValue = usdValue / 0.00028;
      } else if (currency === "USD") {
        toValue = usdValue / 1.00;
      } else if (currency === "UYU") {
        toValue = usdValue / 0.022;
      } else if (currency === "UZS") {
        toValue = usdValue / 0.000084;
      } else if (currency === "VES") {
        toValue = usdValue / 0.0000044;
      } else if (currency === "VND") {
        toValue = usdValue / 0.000043;
      } else if (currency === "VUV") {
        toValue = usdValue / 0.0090;
      } else if (currency === "WST") {
        toValue = usdValue / 0.36;
      } else if (currency === "XAF") {
        toValue = usdValue / 0.0018;
      } else if (currency === "XCD") {
        toValue = usdValue / 0.37;
      } else if (currency === "XOF") {
        toValue = usdValue / 0.0018;
      } else if (currency === "XPF") {
        toValue = usdValue / 0.0095;
      } else if (currency === "YER") {
        toValue = usdValue / 0.0039;
      } else if (currency === "ZAR") {
        toValue = usdValue / 0.067;
      } else if (currency === "ZMW") {
        toValue = usdValue / 0.052;
      } else if (currency === "ZWL") {
        toValue = usdValue / 0.0024;
      } else {
        throw new Error("Invalid currency code");
      }
    
      return toValue;
    }

    button.addEventListener("click", function getCurrency() {
        const currency = document.getElementById("fcurrency").value;
        const currency2 = document.getElementById("scurrency").value;
        fromValue = leftinput.value;

        if (currency === "AED") {
          usdValue = fromValue * 0.27;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "AFN") {
          usdValue = fromValue * 0.012;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ALL") {
          usdValue = fromValue * 0.0091;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "AMD") {
          usdValue = fromValue * 0.0021;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ANG") {
          usdValue = fromValue * 0.56;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "AOA") {
          usdValue = fromValue * 0.0013;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ARS") {
          usdValue = fromValue * 0.007;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "AUD") {
          usdValue = fromValue * 0.64;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "AWG") {
          usdValue = fromValue * 0.56;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "AZN") {
          usdValue = fromValue * 0.59;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BAM") {
          usdValue = fromValue * 0.55;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BBD") {
          usdValue = fromValue * 0.50;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BDT") {
          usdValue = fromValue * 0.0094;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BGN") {
          usdValue = fromValue * 0.55;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BHD") {
          usdValue = fromValue * 2.65;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BIF") {
          usdValue = fromValue * 0.00034;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BMD") {
          usdValue = fromValue * 1.00;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BND") {
          usdValue = fromValue * 0.73;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BOB") {
          usdValue = fromValue * 0.14;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BRL") {
          usdValue = fromValue * 0.20;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BSD") {
          usdValue = fromValue * 1.00;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BTN") {
          usdValue = fromValue * 0.012;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BWP") {
          usdValue = fromValue * 0.073;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BYN") {
          usdValue = fromValue * 0.38;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "BZD") {
          usdValue = fromValue * 0.50;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "CAD") {
          usdValue = fromValue * 0.82;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "CDF") {
          usdValue = fromValue * 0.00049;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "CHF") {
          usdValue = fromValue * 1.12;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "CLP") {
          usdValue = fromValue * 0.0014;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "CNY") {
          usdValue = fromValue * 0.16;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "COP") {
          usdValue = fromValue * 0.00022;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "CVE") {
          usdValue = fromValue * 0.011;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "CZK") {
          usdValue = fromValue * 0.046;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "DJF") {
          usdValue = fromValue * 0.0056;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "DKK") {
          usdValue = fromValue * 0.15;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "DOP") {
          usdValue = fromValue * 0.018;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "DZD") {
          usdValue = fromValue * 0.0076;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "EGP") {
          usdValue = fromValue * 0.032;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ERN") {
          usdValue = fromValue * 0.062;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ETB") {
          usdValue = fromValue * 0.023;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "EUR") {
          usdValue = fromValue * 1.09;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "FJD") {
          usdValue = fromValue * 0.49;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "FKP") {
          usdValue = fromValue * 1.30;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "FOK") {
          usdValue = fromValue * 0.15;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GBP") {
          usdValue = fromValue * 1.22;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GEL") {
          usdValue = fromValue * 0.31;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GGP") {
          usdValue = fromValue * 1.22;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GHS") {
          usdValue = fromValue * 0.17;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GIP") {
          usdValue = fromValue * 1.22;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GMD") {
          usdValue = fromValue * 0.019;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GNF") {
          usdValue = fromValue * 0.000099;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GTQ") {
          usdValue = fromValue * 0.13;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "GYD") {
          usdValue = fromValue * 0.0048;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "HKD") {
          usdValue = fromValue * 0.13;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "HNL") {
          usdValue = fromValue * 0.041;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "HRK") {
          usdValue = fromValue * 0.14;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "HTG") {
          usdValue = fromValue * 0.011;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "HUF") {
          usdValue = fromValue * 0.0036;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "IDR") {
          usdValue = fromValue * 0.000067;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ILS") {
          usdValue = fromValue * 0.28;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "IMP") {
          usdValue = fromValue * 1.22;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "INR") {
          usdValue = fromValue * 0.012;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "IQD") {
          usdValue = fromValue * 0.00076;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "IRR") {
          usdValue = fromValue * 0.000024;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ISK") {
          usdValue = fromValue * 0.0077;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "JEP") {
          usdValue = fromValue * 1.22;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "JMD") {
          usdValue = fromValue * 0.0065;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "JOD") {
          usdValue = fromValue * 1.41;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "JPY") {
          usdValue = fromValue * 0.0073;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KES") {
          usdValue = fromValue * 0.007;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KGS") {
          usdValue = fromValue * 0.011;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KHR") {
          usdValue = fromValue * 0.00025;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KID") {
          usdValue = fromValue * 0.64;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KMF") {
          usdValue = fromValue * 0.0022;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KRW") {
          usdValue = fromValue * 0.00074;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KWD") {
          usdValue = fromValue * 3.26;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KYD") {
          usdValue = fromValue * 1.20;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "KZT") {
          usdValue = fromValue * 0.0022;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "LAK") {
          usdValue = fromValue * 0.000057;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "LBP") {
          usdValue = fromValue * 0.000066;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "LKR") {
          usdValue = fromValue * 0.0031;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "LRD") {
          usdValue = fromValue * 0.0053;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "LSL") {
          usdValue = fromValue * 0.054;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "LYD") {
          usdValue = fromValue * 0.21;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MAD") {
          usdValue = fromValue * 0.10;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MDL") {
          usdValue = fromValue * 0.056;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MGA") {
          usdValue = fromValue * 0.00022;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MKD") {
          usdValue = fromValue * 0.019;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MMK") {
          usdValue = fromValue * 0.00048;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MNT") {
          usdValue = fromValue * 0.00029;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MOP") {
          usdValue = fromValue * 0.12;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MRU") {
          usdValue = fromValue * 0.027;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MUR") {
          usdValue = fromValue * 0.022;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MVR") {
          usdValue = fromValue * 0.065;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MWK") {
          usdValue = fromValue * 0.00097;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MXN") {
          usdValue = fromValue * 0.056;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MYR") {
          usdValue = fromValue * 0.22;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "MZN") {
          usdValue = fromValue * 0.015;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "NAD") {
          usdValue = fromValue * 0.054;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "NGN") {
          usdValue = fromValue * 0.0012;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "NIO") {
          usdValue = fromValue * 0.027;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "NOK") {
          usdValue = fromValue * 0.11;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "NPR") {
          usdValue = fromValue * 0.0075;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "NZD") {
          usdValue = fromValue * 0.61;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "OMR") {
          usdValue = fromValue * 2.60;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "PAB") {
          usdValue = fromValue * 1.00;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "PEN") {
          usdValue = fromValue * 0.27;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "PGK") {
          usdValue = fromValue * 0.28;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "PHP") {
          usdValue = fromValue * 0.018;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "PKR") {
          usdValue = fromValue * 0.0035;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "PLN") {
          usdValue = fromValue * 0.24;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "PYG") {
          usdValue = fromValue * 0.00014;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "QAR") {
          usdValue = fromValue * 0.27;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "RON") {
          usdValue = fromValue * 0.24;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "RSD") {
          usdValue = fromValue * 0.0091;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "RUB") {
          usdValue = fromValue * 0.013;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "RWF") {
          usdValue = fromValue * 0.00084;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SAR") {
          usdValue = fromValue * 0.27;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SBD") {
          usdValue = fromValue * 0.12;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SCR") {
          usdValue = fromValue * 0.073;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SDG") {
          usdValue = fromValue * 0.0018;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SEK") {
          usdValue = fromValue * 0.12;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SGD") {
          usdValue = fromValue * 0.73;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SHP") {
          usdValue = fromValue * 1.22;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SLL") {
          usdValue = fromValue * 0.000058;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SOS") {
          usdValue = fromValue * 0.0018;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SRD") {
          usdValue = fromValue * 0.11;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SSP") {
          usdValue = fromValue * 0.0077;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "STN") {
          usdValue = fromValue * 0.045;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SYP") {
          usdValue = fromValue * 0.00039;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "SZL") {
          usdValue = fromValue * 0.061;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "THB") {
          usdValue = fromValue * 0.032;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TJS") {
          usdValue = fromValue * 0.088;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TMT") {
          usdValue = fromValue * 0.28;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TND") {
          usdValue = fromValue * 0.35;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TOP") {
          usdValue = fromValue * 0.44;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TRY") {
          usdValue = fromValue * 0.12;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TTD") {
          usdValue = fromValue * 0.15;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TVD") {
          usdValue = fromValue * 0.64;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TWD") {
          usdValue = fromValue * 0.036;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "TZS") {
          usdValue = fromValue * 0.00043;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "UAH") {
          usdValue = fromValue * 0.036;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "UGX") {
          usdValue = fromValue * 0.00028;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "USD") {
          usdValue = fromValue * 1.00;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "UYU") {
          usdValue = fromValue * 0.022;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "UZS") {
          usdValue = fromValue * 0.000084;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "VES") {
          usdValue = fromValue * 0.0000044;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "VND") {
          usdValue = fromValue * 0.000043;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "VUV") {
          usdValue = fromValue * 0.0090;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "WST") {
          usdValue = fromValue * 0.36;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "XAF") {
          usdValue = fromValue * 0.0018;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "XCD") {
          usdValue = fromValue * 0.37;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "XOF") {
          usdValue = fromValue * 0.0018;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "XPF") {
          usdValue = fromValue * 0.0095;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "YER") {
          usdValue = fromValue * 0.0039;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ZAR") {
          usdValue = fromValue * 0.067;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ZMW") {
          usdValue = fromValue * 0.052;
          toValue = convertFromUSD(usdValue, currency2);
      } else if (currency === "ZWL") {
          usdValue = fromValue * 0.0024;
          toValue = convertFromUSD(usdValue, currency2);
      }
      rightinput.innerHTML = toValue.toFixed(2);
    });
});