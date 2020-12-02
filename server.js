// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;
const http = require('http');
const fetch = require('node-fetch');
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send({message: "your url is" + req.url})
})
app.get('/hd/:url', (req, res) => {
  (
    async () => {
      try {
        res.set({
          'Content-Type' : 'application/json'
        })
        // const decodedUrl = decodeURIComponent(req.params.url)
        // console.log(req.params.url, decodedUrl)
        // const fetchRes = await fetch(req.params.url)

        const fetchRes = await fetch(req.params.url, {
          "headers": {
            "accept": "application/json, text/javascript, */*",
            "accept-language": "en",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            // "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
          },
          // "referrerPolicy": "strict-origin-when-cross-origin",
          "body": null,
          "method": "GET",
          "mode": "cors"
        });

        // const fetchRes = await fetch(req.params.url, {
        //   "headers": {
        //     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        //     "accept-language": "en-US,en;q=0.9",
        //     "cache-control": "no-cache",
        //     "pragma": "no-cache",
        //     "sec-fetch-dest": "document",
        //     "sec-fetch-mode": "navigate",
        //     "sec-fetch-site": "none",
        //     "sec-fetch-user": "?1",
        //     "upgrade-insecure-requests": "1",
        //     "cookie": "AMCVS_93761CFE5329579E0A490D45%40AdobeOrg=1; AMCV_93761CFE5329579E0A490D45%40AdobeOrg=-637568504%7CMCIDTS%7C18599%7CMCMID%7C67290550569099447674611444645845079246%7CMCAAMLH-1607531838%7C9%7CMCAAMB-1607531838%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1606934238s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.1.1; s_cc=true; _ga=GA1.1.1131714181.1606927040; _gid=GA1.1.1326829696.1606927040; _gcl_au=1.1.2061575089.1606927040; IR_PI=439f51c6-065a-11eb-8ba3-025ecbc6e250%7C1607013440123; _4c_mc_=c4da763d-1bbc-4d97-90e6-1a6b5e4ec799; _uetsid=a62bd3a034bc11ebb7fce1ff32eec161; _uetvid=a62c499034bc11ebbb69e578d7b39019; LPVID=IwZjk0MDMxZmJlYWQzNDNl; LPSID-60165381=_tzp1a1dQDaqC5I9ruUSdQ; nVr=1606927164599-New; s_ppvl=home%2C6%2C6%2C639%2C424%2C639%2C1366%2C768%2C1%2CP; s_ppv=home%2C6%2C6%2C639%2C424%2C639%2C1366%2C768%2C1%2CP; IR_9526=1606927165524%7C1388808%7C1606927040123%7C%7C; IRCLICKID=~0VMSOSW061SIJCEHFGJPGxyAvqghdh~5a-4YZOPJBwqmda43ZOKB; _br_uid_2=uid%3D1633502473523%3Av%3D12.0%3Ats%3D1606927040434%3Ahc%3D2"
        //   },
        //   "referrerPolicy": "strict-origin-when-cross-origin",
        //   "body": null,
        //   "method": "GET",
        //   "mode": "cors"
        // });
        const fetchResText = await fetchRes.text()
        // console.log(fetchResText)
        res.send(fetchResText)
        // res.send(req.params.url)
        // res.send({url: req.url, gitResText: resText})
        // res.render('<h1>I am a test header</h1>', (err, html) => {
        //   res.send(html)
        // })
        res.end()
      } catch (err) {
        res.send(err)
      }
    }
  )()
})
 
app.listen(port, host, () => {
  console.log("running server on", host, port)
})



// http.createServer(function (req, res) {
//   // res.write('Hello World!'); //write a response to the client
//   res.writeHead(200, { 'Content-Type': 'text/html' }); 
//   res.write(`
//     <html>
//       <body>
//         <p>This is home Page.</p>
//       </body>
//       <script>
//         console.log(${req.url});
//       </script>
//     </html>
//   `)

//   res.end(); //end the response
// }).listen(port, host, () => {
//   console.log("running server on", host, port)
// });








//  CORS ANYWHERE SERVER

// // Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '0.0.0.0';
// // Listen on a specific port via the PORT environment variable
// var port = process.env.PORT || 8080;

// // Grab the blacklist from the command-line so that we can update the blacklist without deploying
// // again. CORS Anywhere is open by design, and this blacklist is not used, except for countering
// // immediate abuse (e.g. denial of service). If you want to block all origins except for some,
// // use originWhitelist instead.
// var originBlacklist = parseEnvList(process.env.CORSANYWHERE_BLACKLIST);
// var originWhitelist = parseEnvList(process.env.CORSANYWHERE_WHITELIST);
// function parseEnvList(env) {
//   if (!env) {
//     return [];
//   }
//   return env.split(',');
// }

// // Set up rate-limiting to avoid abuse of the public CORS Anywhere server.
// // var checkRateLimit = require('./lib/rate-limit')(process.env.CORSANYWHERE_RATELIMIT);

// var cors_proxy = require('./lib/cors-anywhere');
// cors_proxy.createServer({
//   originBlacklist: originBlacklist,
//   // originWhitelist: ["http://linvo.app", "https://linvo.app", "http://linvo-products.herokuapp.com", "https://linvo-products.herokuapp.com", "http://localhost", "http//localhost:8080", "0.0.0.0:8080"],
//   originWhitelist: [],
//   requireHeader: ['origin', 'x-requested-with'],
//   // checkRateLimit: checkRateLimit,
//   removeHeaders: [
//     'cookie',
//     'cookie2',
//     // Strip Heroku-specific headers
//     'x-request-start',
//     'x-request-id',
//     'via',
//     'connect-time',
//     'total-route-time',
//     'host',
//     'referer'
//     // Other Heroku added debug headers
//     // 'x-forwarded-for',
//     // 'x-forwarded-proto',
//     // 'x-forwarded-port',
//   ],
//   // setHeaders: {}
//   redirectSameOrigin: true,
//   httpProxyOptions: {
//     // Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
//     xfwd: false,
//   },
// }).listen(port, host, function() {
//   console.log('Running CORS Anywhere on ' + host + ':' + port);
// });



// Invoke-WebRequest -Uri "https://www.homedepot.ca/api/search/v1/search?q=outlet&store=7040&pageSize=20&lang=en" -Headers @{
// "method"="GET"
//   "authority"="www.homedepot.ca"
//   "scheme"="https"
//   "path"="/api/search/v1/search?q=outlet&store=7040&pageSize=20&lang=en"
//   "pragma"="no-cache"
//   "cache-control"="no-cache"
//   "accept"="application/json, text/javascript, */*"
//   "x-requested-with"="XMLHttpRequest"
//   "accept-language"="en"
//   "user-agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36"
//   "sec-fetch-site"="cross-site"
//   "origin"="https://linvo.app"
//   "sec-fetch-mode"="cors"
//   "sec-fetch-dest"="empty"
//   "referer"="https://linvo.app"
//   "accept-encoding"="gzip, deflate, br"
//   "cookie"="_csrf=MqgW68nuWnNt8OUyC1UnH5SS; at_check=true; AMCVS_93761CFE5329579E0A490D45%40AdobeOrg=1; s_ecid=MCMID%7C67290550569099447674611444645845079246; HIDE_UNSUPPORTED_MSG=NO; hap=s5; GROUTEID=.1; IP_LOOKUP=PUBLIC; RES_TRACKINGID=695313755248307; ResonanceSegment=1; s_cc=true; _cs_c=1; IR_gbd=homedepot.ca; _fbp=fb.1.1601827032404.1553353384; _gcl_au=1.1.1261571946.1601827033; _ga=GA1.2.1086713658.1601827033; _gac_UA-2218545-3=1.1601827033.Cj0KCQjw5eX7BRDQARIsAMhYLP8qQ9GEIuitGiKTGPBaO4HRypMqGbnGjl3DTxGuOEOAVm3KUcRdR8waAqoSEALw_wcB; _4c_mc_=397b5809-31d2-4668-87e0-ec99caad1c4f; _cs_cvars=%7B%221%22%3A%5B%22Page%20Name%22%2C%22building%20materials%3Aelectrical%3Awire%22%5D%2C%222%22%3A%5B%22Section%22%2C%22plp%22%5D%2C%223%22%3A%5B%22L1%22%2C%22building%20materials%22%5D%2C%224%22%3A%5B%22L2%22%2C%22electrical%22%5D%2C%225%22%3A%5B%22L3%22%2C%22wire%22%5D%7D; WRUIDAWS=2977900694291239; LPVID=IzNGJjZWI4ODg4MTgxNjQx; store=7040; storePostalCode=V9T%202L9; _gcl_aw=GCL.1601827090.Cj0KCQjw5eX7BRDQARIsAMhYLP8qQ9GEIuitGiKTGPBaO4HRypMqGbnGjl3DTxGuOEOAVm3KUcRdR8waAqoSEALw_wcB; _gcl_dc=GCL.1601827090.Cj0KCQjw5eX7BRDQARIsAMhYLP8qQ9GEIuitGiKTGPBaO4HRypMqGbnGjl3DTxGuOEOAVm3KUcRdR8waAqoSEALw_wcB; _cs_id=94b60b7c-ac34-a0d3-d74a-de92547b7255.1601827034.1.1601827299.1601827034.1.1635991034024.Lax.0; __CT_Data=gpv=1&ckp=tld&dm=homedepot.ca&apv_1088_www41=6&cpv_1088_www41=6&rpv_1088_www41=6; Lang=en; aam_uuid=60107655081556238633600562992646298310; _pin_unauth=dWlkPVpUazJZelkzTWpjdE9UTTVOUzAwTVRBeUxUaGtNbVl0T1dRNU5qSTNOMkUwTWpsbQ; national=false; pilot=true; defaultPostalCode=V9S4Z8; addressPostalCode=4oFNTljV; GCROUTEID=.1; customer=; BVBRANDID=7c1e9235-3723-40fc-ae20-dce86a89aef9; BVImplmain_site=1998; GCLB=CO6nhNuprLLx3QE; headerTooltip=true; _gid=GA1.2.2009590072.1606756750; s_sq=%5B%5BB%5D%5D; akavpau_www=1606839804~id=482c253fcac6a7ad0608a1c05f61b2c6; bm_sz=F004951569C26D65C7E071096DDFD20C~YAAQPQNAF+f1Ffl1AQAA8Q4ZHwl32BO2Tov5Oc+0/erxcKum98dhrpaYYma+afYme8oS3x+H4ohBSsVv0Zf7JpULCOAsrhE0UCiCO3vdZeDMlkFboO3Sjy6QuBJuvyOdRniq5Z2bOKhoiUnO+AcoRajaO2H50Su1ghsFEouPLz2+cf8mLfn3jAGzZtNowEwCsA==; AMCV_93761CFE5329579E0A490D45%40AdobeOrg=359503849%7CMCIDTS%7C18598%7CMCMID%7C67290550569099447674611444645845079246%7CMCAAMLH-1607444305%7C9%7CMCAAMB-1607444305%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1606846705s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.0.1%7CMCCIDH%7C420471794; ak_bmsc=9DA6DDE7AED26EB6683311931265119C1740033DF9470000D06CC65FBAA4A25A~plundLdDFzVXF5wNj7GCU2uCg81hvePJvLK+a9TTZFdNQEr3sGMLUlXH0xGOjuq4wd6g8GdyxcNspiC9aUfLG7YgBEPh+xK8kskpl1Fw8AOZja09LRu9dnVxZk01muWLveBi/GrncEyiV02l4A661RC2HDcTIx43Yb2zk3XIec6O/Ib3eiZthlqLmHIR0Qn23AS+SvfRcdMGRaJCh4XUJi+f3JaYyiw+HMIr3uEbrtDijF22ActJwxHdACc629ekn7; nVr=1606839507571-Repeat; s_ppvl=search%2520results%2C13%2C14%2C657%2C704%2C657%2C1366%2C768%2C1%2CPL; gpv_pn=home; _gat_gtag_UA_2218545_3=1; IR_9526=1606839508555%7C1388808%7C1606839508555%7C%7C; IR_PI=439f2b9c-065a-11eb-83bb-0236c10c7d28%7C1606925908555; IRCLICKID=~80526WMQMFxmnqumklovlcdfa8YZ325X43WPQGHCxrpfa-42YNJA; _br_uid_2=uid%3D1853685797091%3Av%3D12.0%3Ats%3D1601827031439%3Ahc%3D79; _uetsid=b48243e0325e11eb9a59d16332b83910; _uetvid=1f04ecc02c4b11eba50a716072a0467d; _derived_epik=dj0yJnU9Z3huX3lHQ3owYnBFMVNRQjZfS0dhYkJsWFZzMXlRZ24mbj1wdW9CQWxVOUZiaDEtUV95bWNlbVNRJm09NyZ0PUFBQUFBRl9HYk5Z; s_ppv=home%2C15%2C15%2C657%2C683%2C657%2C1366%2C768%2C1%2CL; LPSID-60165381=JWDCysBmSLSP6fC2xt4cxw; EVT-TTSC=BC 1606839519922; _abck=23B6DA15FEBD954009D71E4320ED207E~0~YAAQPQNAFzT2Ffl1AQAAXksZHwQEI3rwlqf1LyRoWtAu52emMJap2t6W27LOCEangkdLZEqJSExlhBXOY8aIHuKHY9iO7DdCK6JtdiGXbII8n+G87TVyR+Fwp6cEVrnT8AspROskup27MdZ4D1X/Ccd4BZpe9Ld1nHnQaR2icGn8tjeXZ/fDxfKaqm5BZubz+1u1F4ynL7ZQ65kNsazkw55lBiQCZaguXHrGyAmS7qCw1owci9i7ZLJhqz0CdtclbCDQ+0NMWzvpPYdBAMY8fZ7IbGCPpqNbM/eAfEoM9+IhibM7vxWXHcqlYGbtXxCu/Z321i2bNnf3~-1~-1~-1; mbox=PC#50b6689905b34f67a0020d63b588270d.35_0#1670084322|session#8d0f70bc7e864b63bc0fc1b21bfd26c4#1606841365; RT=`"sl=2&ss=1606839503909&tt=5945&obo=0&sh=1606839521971%3D2%3A0%3A5945%2C1606839507163%3D1%3A0%3A3193&dm=homedepot.ca&si=5c139fd5-35fc-4cd0-a6c2-83b810e2aa7f&rl=1&ld=1606839521972`"; bm_sv=8148C328A00D62C112953EF1985196FD~DnifL0aExHuC6SJe5yTpO8GxXazfrbbluwcL0S5UMJNuhZPTbB8rFanFVcYP/1TZz4y3JeDCtNPeu8s3RpLNemv7BRnrAXPuIgvr8lS2XZXiuqJfHuKav2iO2Fevi/tuKh2djd4dbTL4Nyi76YmvQLYiA4nxoKp1K9iNQwMTcCA="
// }

// Invoke-WebRequest -Uri "https://www.homedepot.ca/api/search/v1/search?q=outlet&store=7040&pageSize=20&lang=en" -Headers @{
// "method"="GET"
//   "pragma"="no-cache"
//   "cache-control"="no-cache"
//   "accept"="application/json, text/javascript, */*"
//   "x-requested-with"="XMLHttpRequest"
//   "accept-language"="en"
//   "user-agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36"
//   "sec-fetch-site"="cross-site"
//   "origin"="https://linvo.app"
//   "sec-fetch-mode"="cors"
//   "sec-fetch-dest"="empty"
//   "referer"="https://linvo.app"
//   "accept-encoding"="gzip, deflate, br"
// }


// curl 'https://www.homedepot.ca/api/search/v1/search?q=outet&store=7040&pageSize=20&lang=en' \
//   -H 'authority: www.homedepot.ca' \
//   -H 'pragma: no-cache' \
//   -H 'cache-control: no-cache' \
//   -H 'accept: application/json, text/javascript, */*' \
//   -H 'x-requested-with: XMLHttpRequest' \
//   -H 'accept-language: en' \
//   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
//   -H 'sec-fetch-site: same-origin' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'referer: https://www.homedepot.ca/search?q=outet' \



// curl 'https://www.homedepot.ca/api/search/v1/search?q=switch&store=7040&pageSize=20&lang=en' \
//   -H 'authority: www.homedepot.ca' \
//   -H 'pragma: no-cache' \
//   -H 'cache-control: no-cache' \
//   -H 'accept: application/json, text/javascript, */*' \
//   -H 'x-requested-with: XMLHttpRequest' \
//   -H 'accept-language: en' \
//   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
//   -H 'sec-fetch-site: same-origin' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'referer: https://www.homedepot.ca/search?q=switch' \
//   -H 'cookie: bm_sz=8860A84AFC2A756BECD390DA126CF897~YAAQPI0duA01lg12AQAAf75mHwmq8XBNcHFpRKolBpS7Uf1LfxDj0wcaDZ583ohcTMjp9dQz7G05vL2mx69aghfHjtMizqpa/Ch7DWwn1YCHjitRjdnN6AY+znUJlr5xOCJvbbpe/cygoiDCSSzrEqH5lj1ZIMU+EwiUJMyv11n8zTiVzlq1/BOB4Br9PAWhhw==; at_check=true; hap=s5; GCROUTEID=.1; GCLB=CNaI-LSxnd6_rgE; AMCVS_93761CFE5329579E0A490D45%40AdobeOrg=1; s_ecid=MCMID%7C67290550569099447674611444645845079246; Lang=en; headerTooltip=true; AMCV_93761CFE5329579E0A490D45%40AdobeOrg=359503849%7CMCIDTS%7C18598%7CMCMID%7C67290550569099447674611444645845079246%7CMCAAMLH-1607449396%7C9%7CMCAAMB-1607449396%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1606851798s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.0.1; ak_bmsc=3BF7ACE08263C5E7FC9B05A73DF8BFFCB81D8D3CAA710000B380C65F5BC1E80A~plQHb5chSttbP4ikQSgg2G/WQq985SqS51ozNfQtNGHvA6p9m7JdQ9HVmcpQWH8eL3BkNLfxEhvG8Pjg0Sss16yPbxKguYDgxys8mFQcxBg4ccjSoVtov7bqW5tEBgzAu6kxuOAe5yXZ8nURFQIISATx2ouZQybPYBLwh24HgIHaOUvQSknPZXdgygRSMvkZHFjujBciMiurYHuYyV8CrXg99P+Va62i0VHHooSEy2olh1Hq9H5iLXgbxODqEwUini; IP_LOOKUP=PUBLIC; HIDE_UNSUPPORTED_MSG=NO; store=7040; storePostalCode=V9T%202L9; nVr=1606844600657-New; s_ppvl=home%2C11%2C11%2C639%2C229%2C639%2C1366%2C768%2C1%2CP; gpv_pn=home; s_cc=true; aam_uuid=60107655081556238633600562992646298310; s_ppv=home%2C11%2C11%2C639%2C229%2C639%2C1366%2C768%2C1%2CP; _ga=GA1.2.46611336.1606844601; _gid=GA1.2.405218675.1606844601; _gat_gtag_UA_2218545_3=1; _gcl_au=1.1.325438600.1606844601; IR_gbd=homedepot.ca; IR_9526=1606844602133%7C1388808%7C1606844602133%7C%7C; IR_PI=439f51c6-065a-11eb-8ba3-025ecbc6e250%7C1606931002133; IRCLICKID=~0VMSOSW061SIJCEHFGJPGxyAvqghdh~5a-4YZOPIBrj-71VSOEAq; _br_uid_2=uid%3D9507681788589%3Av%3D12.0%3Ats%3D1606844602890%3Ahc%3D1; _4c_mc_=02d77ec8-32d5-43b0-b4ff-0737cf9eeb97; EVT-TTSC=BC 1606844604014; _abck=CD6E0BD93A68CC8181E5884C9D3FA5BC~0~YAAQZY0duGDSSx92AQAA595mHwRN6sJ+Fv28AJlzotM1koSMgHyEIiRNk8h93hPFU23vS+I5LVC9/n7YqhGqKB38V82FuRsa4NQ7xiIjtKTUYZ28UwuQ+G7rssdXN88LENwWM6iVVRg/WPUi7KK2AfeFcipOBdfqij+WTLotbTKtOyepjZRpSrotgGRfK/sGS+KSb7OnFw9wz9DjMeJxeKTQMoI4OvNsgdJ56BSjLXXP2Q+C0lgHsr2EgAlwpxnZXeRfr9fA91KcA6HDcYUCTduUO6d0NtITtAOyFCnS7KcSskfrK6u1xAzp0zzZBL2Nb36kNDO5Jsez4uQyN/gEV8yCkxwF8JHZ~-1~-1~-1; _uetsid=b5aae60033fc11eb9ee0fb5f62bd64ea; _uetvid=b5af3a3033fc11eb8871bf94c0bf28b3; _fbp=fb.1.1606844603885.1664489840; mbox=session#fbe32b3817da40458c5b640a045a25fa#1606846457|PC#fbe32b3817da40458c5b640a045a25fa.35_0#1670089406; RT="dm=homedepot.ca&si=5c139fd5-35fc-4cd0-a6c2-83b810e2aa7f&ss=1606844345263&sl=4&tt=15088&obo=0&sh=1606844606502%3D4%3A0%3A15088%2C1606844599738%3D3%3A0%3A11916%2C1606844515456%3D2%3A0%3A7095%2C1606844506510%3D1%3A0%3A3540&bcn=%2F%2F173c5b05.akstat.io%2F&rl=1&ld=1606844606503"; bm_sv=A6877AFFDCEFB44B8CE4A84D18F2A736~VON/DcroLGIE2M6TD3M+ndK7RLJr9hC/kL9Hv9Rabe5Mc1OWzh1290bln3rmt4q5lj98wMQGAR4YYQmoQBzrguPelXRlr4dCzxKHDLLNZQcQ1VjOzuRQIOwjiugrBkckHvzBh8Fp4Wylh1pZv5ZqvVXT43O8d94bAB7SiYU+hUY=' \
//   --compressed




//   working curl bash...
//   -H 'sec-fetch-site: same-origin' \ // works too



//   curl 'https://www.homedepot.ca/api/search/v1/search?q=switch&store=7040&pageSize=20&lang=en' \
//   -H 'authority: www.homedepot.ca' \
//   -H 'pragma: no-cache' \
//   -H 'cache-control: no-cache' \
//   -H 'accept: application/json, text/javascript, */*' \
//   -H 'x-requested-with: XMLHttpRequest' \
//   -H 'accept-language: en' \
//   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'referer: https://www.homedepot.ca/search?q=switch' \
//   -H 'cookie: bm_sz=8860A84AFC2A756BECD390DA126CF897~YAAQPI0duA01lg12AQAAf75mHwmq8XBNcHFpRKolBpS7Uf1LfxDj0wcaDZ583ohcTMjp9dQz7G05vL2mx69aghfHjtMizqpa/Ch7DWwn1YCHjitRjdnN6AY+znUJlr5xOCJvbbpe/cygoiDCSSzrEqH5lj1ZIMU+EwiUJMyv11n8zTiVzlq1/BOB4Br9PAWhhw==; at_check=true; hap=s5; GCROUTEID=.1; GCLB=CNaI-LSxnd6_rgE; AMCVS_93761CFE5329579E0A490D45%40AdobeOrg=1; s_ecid=MCMID%7C67290550569099447674611444645845079246; Lang=en; headerTooltip=true; AMCV_93761CFE5329579E0A490D45%40AdobeOrg=359503849%7CMCIDTS%7C18598%7CMCMID%7C67290550569099447674611444645845079246%7CMCAAMLH-1607449396%7C9%7CMCAAMB-1607449396%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1606851798s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.0.1; ak_bmsc=3BF7ACE08263C5E7FC9B05A73DF8BFFCB81D8D3CAA710000B380C65F5BC1E80A~plQHb5chSttbP4ikQSgg2G/WQq985SqS51ozNfQtNGHvA6p9m7JdQ9HVmcpQWH8eL3BkNLfxEhvG8Pjg0Sss16yPbxKguYDgxys8mFQcxBg4ccjSoVtov7bqW5tEBgzAu6kxuOAe5yXZ8nURFQIISATx2ouZQybPYBLwh24HgIHaOUvQSknPZXdgygRSMvkZHFjujBciMiurYHuYyV8CrXg99P+Va62i0VHHooSEy2olh1Hq9H5iLXgbxODqEwUini; IP_LOOKUP=PUBLIC; HIDE_UNSUPPORTED_MSG=NO; store=7040; storePostalCode=V9T%202L9; nVr=1606844600657-New; s_ppvl=home%2C11%2C11%2C639%2C229%2C639%2C1366%2C768%2C1%2CP; gpv_pn=home; s_cc=true; aam_uuid=60107655081556238633600562992646298310; s_ppv=home%2C11%2C11%2C639%2C229%2C639%2C1366%2C768%2C1%2CP; _ga=GA1.2.46611336.1606844601; _gid=GA1.2.405218675.1606844601; _gat_gtag_UA_2218545_3=1; _gcl_au=1.1.325438600.1606844601; IR_gbd=homedepot.ca; IR_9526=1606844602133%7C1388808%7C1606844602133%7C%7C; IR_PI=439f51c6-065a-11eb-8ba3-025ecbc6e250%7C1606931002133; IRCLICKID=~0VMSOSW061SIJCEHFGJPGxyAvqghdh~5a-4YZOPIBrj-71VSOEAq; _br_uid_2=uid%3D9507681788589%3Av%3D12.0%3Ats%3D1606844602890%3Ahc%3D1; _4c_mc_=02d77ec8-32d5-43b0-b4ff-0737cf9eeb97; EVT-TTSC=BC 1606844604014; _abck=CD6E0BD93A68CC8181E5884C9D3FA5BC~0~YAAQZY0duGDSSx92AQAA595mHwRN6sJ+Fv28AJlzotM1koSMgHyEIiRNk8h93hPFU23vS+I5LVC9/n7YqhGqKB38V82FuRsa4NQ7xiIjtKTUYZ28UwuQ+G7rssdXN88LENwWM6iVVRg/WPUi7KK2AfeFcipOBdfqij+WTLotbTKtOyepjZRpSrotgGRfK/sGS+KSb7OnFw9wz9DjMeJxeKTQMoI4OvNsgdJ56BSjLXXP2Q+C0lgHsr2EgAlwpxnZXeRfr9fA91KcA6HDcYUCTduUO6d0NtITtAOyFCnS7KcSskfrK6u1xAzp0zzZBL2Nb36kNDO5Jsez4uQyN/gEV8yCkxwF8JHZ~-1~-1~-1; _uetsid=b5aae60033fc11eb9ee0fb5f62bd64ea; _uetvid=b5af3a3033fc11eb8871bf94c0bf28b3; _fbp=fb.1.1606844603885.1664489840; mbox=session#fbe32b3817da40458c5b640a045a25fa#1606846457|PC#fbe32b3817da40458c5b640a045a25fa.35_0#1670089406; RT="dm=homedepot.ca&si=5c139fd5-35fc-4cd0-a6c2-83b810e2aa7f&ss=1606844345263&sl=4&tt=15088&obo=0&sh=1606844606502%3D4%3A0%3A15088%2C1606844599738%3D3%3A0%3A11916%2C1606844515456%3D2%3A0%3A7095%2C1606844506510%3D1%3A0%3A3540&bcn=%2F%2F173c5b05.akstat.io%2F&rl=1&ld=1606844606503"; bm_sv=A6877AFFDCEFB44B8CE4A84D18F2A736~VON/DcroLGIE2M6TD3M+ndK7RLJr9hC/kL9Hv9Rabe5Mc1OWzh1290bln3rmt4q5lj98wMQGAR4YYQmoQBzrguPelXRlr4dCzxKHDLLNZQcQ1VjOzuRQIOwjiugrBkckHvzBh8Fp4Wylh1pZv5ZqvVXT43O8d94bAB7SiYU+hUY=' \



//   curl 'https://www.homedepot.ca/api/search/v1/search?q=switch&store=7040&pageSize=20&lang=en' \
//   -H 'authority: www.homedepot.ca' \
//   -H 'pragma: no-cache' \
//   -H 'cache-control: no-cache' \
//   -H 'accept: application/json, text/javascript, */*' \
//   -H 'x-requested-with: XMLHttpRequest' \
//   -H 'accept-language: en' \
//   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
//   -H 'sec-fetch-site: same-origin' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'referer: https://www.homedepot.ca/search?q=switch' \
//   -H 'cookie: bm_sz=8860A84AFC2A756BECD390DA126CF897~YAAQPI0duA01lg12AQAAf75mHwmq8XBNcHFpRKolBpS7Uf1LfxDj0wcaDZ583ohcTMjp9dQz7G05vL2mx69aghfHjtMizqpa/Ch7DWwn1YCHjitRjdnN6AY+znUJlr5xOCJvbbpe/cygoiDCSSzrEqH5lj1ZIMU+EwiUJMyv11n8zTiVzlq1/BOB4Br9PAWhhw==; at_check=true; hap=s5; GCROUTEID=.1; GCLB=CNaI-LSxnd6_rgE; AMCVS_93761CFE5329579E0A490D45%40AdobeOrg=1; s_ecid=MCMID%7C67290550569099447674611444645845079246; Lang=en; headerTooltip=true; AMCV_93761CFE5329579E0A490D45%40AdobeOrg=359503849%7CMCIDTS%7C18598%7CMCMID%7C67290550569099447674611444645845079246%7CMCAAMLH-1607449396%7C9%7CMCAAMB-1607449396%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1606851798s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.0.1; ak_bmsc=3BF7ACE08263C5E7FC9B05A73DF8BFFCB81D8D3CAA710000B380C65F5BC1E80A~plQHb5chSttbP4ikQSgg2G/WQq985SqS51ozNfQtNGHvA6p9m7JdQ9HVmcpQWH8eL3BkNLfxEhvG8Pjg0Sss16yPbxKguYDgxys8mFQcxBg4ccjSoVtov7bqW5tEBgzAu6kxuOAe5yXZ8nURFQIISATx2ouZQybPYBLwh24HgIHaOUvQSknPZXdgygRSMvkZHFjujBciMiurYHuYyV8CrXg99P+Va62i0VHHooSEy2olh1Hq9H5iLXgbxODqEwUini; IP_LOOKUP=PUBLIC; HIDE_UNSUPPORTED_MSG=NO; store=7040; storePostalCode=V9T%202L9; nVr=1606844600657-New; s_ppvl=home%2C11%2C11%2C639%2C229%2C639%2C1366%2C768%2C1%2CP; gpv_pn=home; s_cc=true; aam_uuid=60107655081556238633600562992646298310; s_ppv=home%2C11%2C11%2C639%2C229%2C639%2C1366%2C768%2C1%2CP; _ga=GA1.2.46611336.1606844601; _gid=GA1.2.405218675.1606844601; _gat_gtag_UA_2218545_3=1; _gcl_au=1.1.325438600.1606844601; IR_gbd=homedepot.ca; IR_9526=1606844602133%7C1388808%7C1606844602133%7C%7C; IR_PI=439f51c6-065a-11eb-8ba3-025ecbc6e250%7C1606931002133; IRCLICKID=~0VMSOSW061SIJCEHFGJPGxyAvqghdh~5a-4YZOPIBrj-71VSOEAq; _br_uid_2=uid%3D9507681788589%3Av%3D12.0%3Ats%3D1606844602890%3Ahc%3D1; _4c_mc_=02d77ec8-32d5-43b0-b4ff-0737cf9eeb97; EVT-TTSC=BC 1606844604014; _abck=CD6E0BD93A68CC8181E5884C9D3FA5BC~0~YAAQZY0duGDSSx92AQAA595mHwRN6sJ+Fv28AJlzotM1koSMgHyEIiRNk8h93hPFU23vS+I5LVC9/n7YqhGqKB38V82FuRsa4NQ7xiIjtKTUYZ28UwuQ+G7rssdXN88LENwWM6iVVRg/WPUi7KK2AfeFcipOBdfqij+WTLotbTKtOyepjZRpSrotgGRfK/sGS+KSb7OnFw9wz9DjMeJxeKTQMoI4OvNsgdJ56BSjLXXP2Q+C0lgHsr2EgAlwpxnZXeRfr9fA91KcA6HDcYUCTduUO6d0NtITtAOyFCnS7KcSskfrK6u1xAzp0zzZBL2Nb36kNDO5Jsez4uQyN/gEV8yCkxwF8JHZ~-1~-1~-1; _uetsid=b5aae60033fc11eb9ee0fb5f62bd64ea; _uetvid=b5af3a3033fc11eb8871bf94c0bf28b3; _fbp=fb.1.1606844603885.1664489840; mbox=session#fbe32b3817da40458c5b640a045a25fa#1606846457|PC#fbe32b3817da40458c5b640a045a25fa.35_0#1670089406; RT="dm=homedepot.ca&si=5c139fd5-35fc-4cd0-a6c2-83b810e2aa7f&ss=1606844345263&sl=4&tt=15088&obo=0&sh=1606844606502%3D4%3A0%3A15088%2C1606844599738%3D3%3A0%3A11916%2C1606844515456%3D2%3A0%3A7095%2C1606844506510%3D1%3A0%3A3540&bcn=%2F%2F173c5b05.akstat.io%2F&rl=1&ld=1606844606503"; bm_sv=A6877AFFDCEFB44B8CE4A84D18F2A736~VON/DcroLGIE2M6TD3M+ndK7RLJr9hC/kL9Hv9Rabe5Mc1OWzh1290bln3rmt4q5lj98wMQGAR4YYQmoQBzrguPelXRlr4dCzxKHDLLNZQcQ1VjOzuRQIOwjiugrBkckHvzBh8Fp4Wylh1pZv5ZqvVXT43O8d94bAB7SiYU+hUY=' \
//   