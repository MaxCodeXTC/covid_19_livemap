/*var btn = document.querySelector("body")
btn.addEventListener("load", loadData)*/


function loadData() {
    //xhr request
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.covid19api.com/summary")
    xhr.onprogress = function(){
        console.log("Loading Data")
    }
    xhr.onload = function() {
        if(this.status == 200) {
            var data = JSON.parse(this.responseText)
            let dataSet = []
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
            return dataSet
            
        }
    }
    xhr.send()
}
