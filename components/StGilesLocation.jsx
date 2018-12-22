const REGIONS = [
    {
        Name: 'ST GILES EAST',
        Bounds: [
            [55.94968143707535, -3.190824680542846],
            [55.94970396443682, -3.1903874804734187],
            [55.949349532430816, -3.190304331993957],
            [55.949319495671006, -3.19072812101831]
        ]
    },
    {
        Name: 'ST GILES WEST',
        Bounds: [
            [55.94961986222051, -3.1914147665261225],
            [55.94965890970081, -3.190958790993591],
            [55.94930748096056, -3.1908971001862483],
            [55.949275942327915, -3.1913396646737056]
        ]
    },
    {
        Name: 'ST GILES NORTH',
        Bounds: [
            [55.949627371354396, -3.1914201309441523],
            [55.94970246261313, -3.1903982093094783],
            [55.94952975250031, -3.19034992954721],
            [55.94945015540637, -3.191374533390899]
        ]
    },
    {
        Name: 'ST GILES SOUTH',
        Bounds: [
            [55.94943964257042, -3.191382580017944],
            [55.94952674883935, -3.19034992954721],
            [55.94935103426819, -3.1903150608300166],
            [55.94928345152848, -3.1913369824646907]
        ]
    }
]

function inside(point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};

export default (lat, long) => REGIONS.filter(r => inside([lat, long], r.Bounds)).length > 0 ? 
REGIONS.filter(r => inside([lat, long], r.Bounds)).map(r => r.Name) : 'NOT IN ST GILES';
