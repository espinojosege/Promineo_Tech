let url = "https://www.harryreidairport.com/Flights/Departures";

import fetch from "node-fetch";
import cheerio from "cheerio";

fetch(url)
  .then((response) => response.text())
  .then((html) => {
    const $ = cheerio.load(html);
    const links = $("a[href='/Terminals/CGates']");

    const results = [];
    links.each((index, element) => {
      results.push({
        text: $(element).text().trim(),
        href: $(element).attr("href"),
      });
    });

    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
// import fetch from "node-fetch";
// // const fetch = import fetch from 'node-fetch';
// import cheerio from "cheerio";

// fetch(url)
//   .then((response) => response.text())
//   .then((html) => {
//     const $ = cheerio.load(html);
//     const links = $("a");
//     const hrefs = [];

//     links.each((i, link) => {
//       hrefs.push($(link).attr("href"));
//     });

//     console.log(hrefs);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// class="container container-fly-row-padding"
