

const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];



console.log(chooseStations(stations))

function chooseStations(stations) {

    let stationNames = []
    for (let i = 0; i < stations.length; i++) {

        if (stations[i][1] >= 20) {

            if (stations[i][2] === "school"
                || stations[i][2] === "community centre"

            )
                stationNames.push(stations[i][0])
        }


    }


    return stationNames


} 