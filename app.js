//getting the path
var myCollection = document.getElementsByTagName("path");
//countrycode Array
let countryCode = []
//loopthrough on country code
for(var i= 0; i< myCollection.length; i++) {
    countryCode.push(myCollection[i].getAttribute("id"))
}

/**
 =======================================================
 This Is FOR Fathing Data Only Don't Touch it either
 ========================================================
 */
let dataSet = []
function loadData() {
    //xhr request
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.covid19api.com/summary")
    xhr.onload = function() {
        if(this.status == 200) {
            var data = JSON.parse(this.responseText)
            
            for (var i = 0; i< data.Countries.length; i++) {
                dataSet.push({
                    Country: data.Countries[i].Country,
                    cid: data.Countries[i].CountryCode,
                    TotalConfirmed: data.Countries[i].TotalConfirmed,
                    NewConfirmed: data.Countries[i].NewConfirmed,
                    TotalDeaths: data.Countries[i].TotalDeaths,
                    NewDeaths: data.Countries[i].TotalDeaths,
                    TotalRecovered: data.Countries[i].TotalDeaths,
                    NewRecovered: data.Countries[i].TotalDeaths,
                })
            }
            for (var i = 0; i< dataSet.length ; i++) {
                //let infect = dataSet[i].TotalConfirmed
                let tag = dataSet[i].cid
                let filterIds = countryCode.filter(function(id) {
                    return id == tag
                })
                if (filterIds.length !== 0) {
                    let svgElement = document.getElementById(dataSet[i].cid)
                    let infect = dataSet[i].TotalConfirmed
                    
                    if (infect < 500) {
                        svgElement.style.fill = "#1EC400"
                    }

                    if (infect > 500 && infect < 1000) {
                        svgElement.style.fill = "#FFAEAE"
                    }

                    if (infect < 1000) {
                        svgElement.style.fill = "#FFC8C8"
                        
                    }
                    if (infect > 1000 && infect < 10000) {
                        svgElement.style.fill = "#FA4F4F"
                    }
                    if (infect > 10000 && infect < 50000) {
                        svgElement.style.fill = "#FF1111"
                    }
                    if (infect > 50000 && infect < 150000) {
                        svgElement.style.fill = "#D11919"
                    }
                    
                } 

                
            }
            
        }
    }
    xhr.send()
    
}


loadData()



