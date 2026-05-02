// --- DATABASE SIS-KEHATI REJOSO (FINAL FIXED LINK FOTO) ---

const db_kehati = {
    // ============================================================
    // 1. DATA PETA (POLYGON GEOJSON)
    // ============================================================
    polygons: {
        "type": "FeatureCollection",
        "features": [
            // --- TAMAN KEHATI ---
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 1 (Depan)", "id_lokasi": "kehati_aqua", "color": "#29b6f6" },
                "geometry": { "type": "Polygon", "coordinates": [[ [112.933906, -7.722551], [112.934018, -7.722334], [112.934140, -7.722282], [112.934357, -7.722215], [112.933150, -7.721930], [112.933316, -7.722165], [112.933620, -7.722398], [112.933796, -7.722477], [112.933906, -7.722551] ]] }
            },
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 2 (Tengah)", "id_lokasi": "kehati_aqua", "color": "#ef5350" },
                "geometry": { "type": "Polygon", "coordinates": [[ [112.933616, -7.722396], [112.933524, -7.722723], [112.933468, -7.722814], [112.933484, -7.723156], [112.933396, -7.723345], [112.933275, -7.723355], [112.933090, -7.723316], [112.932930, -7.723645], [112.932800, -7.723931], [112.932646, -7.724057], [112.932507, -7.724196], [112.932690, -7.724261], [112.932885, -7.723813], [112.933068, -7.723393], [112.933325, -7.723403], [112.933605, -7.723467], [112.933629, -7.723380], [112.933606, -7.723257], [112.933615, -7.723015], [112.933578, -7.722897], [112.933611, -7.722807], [112.933753, -7.722717], [112.933822, -7.722606], [112.933905, -7.722555], [112.933616, -7.722396] ]] }
            },
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 3 (Area Alami)", "id_lokasi": "kehati_aqua", "color": "#fbc02d" },
                "geometry": { "type": "Polygon", "coordinates": [[ [112.929750, -7.723085], [112.929607, -7.723348], [112.929518, -7.723519], [112.932225, -7.724852], [112.932281, -7.724634], [112.932353, -7.724521], [112.932410, -7.724478], [112.932471, -7.724422], [112.932543, -7.724362], [112.932603, -7.724332], [112.932688, -7.724261], [112.932303, -7.724143], [112.931166, -7.723595], [112.930860, -7.723491], [112.930537, -7.723413], [112.930551, -7.723267], [112.930383, -7.723227], [112.930256, -7.723156], [112.930159, -7.723094], [112.929998, -7.723055], [112.929787, -7.722945], [112.929750, -7.723085] ]] }
            },

            // --- TEGAL PAK ANDARI ---
            {
                "type": "Feature", "properties": { "name": "Andari 01", "id_lokasi": "galih_andari", "color": "#8e44ad" },
                "geometry": { "type": "Polygon", "coordinates": [[ [112.905288, -7.815048], [112.905335, -7.814989], [112.905334, -7.814978], [112.905318, -7.814965], [112.905303, -7.814954], [112.905283, -7.814951], [112.905259, -7.814961], [112.905225, -7.814953], [112.905206, -7.814945], [112.905188, -7.814937], [112.905167, -7.814931], [112.905144, -7.814927], [112.905119, -7.814933], [112.905104, -7.814932], [112.905082, -7.814928], [112.905058, -7.814940], [112.905042, -7.814922], [112.905028, -7.814915], [112.905022, -7.814930], [112.905008, -7.814942], [112.904990, -7.814947], [112.904955, -7.814936], [112.904717, -7.815100], [112.904479, -7.815462], [112.904588, -7.815972], [112.904767, -7.816181], [112.905305, -7.816111], [112.905295, -7.815588], [112.905251, -7.815100], [112.905280, -7.815111], [112.905270, -7.815075], [112.905288, -7.815048] ]] }
            },
            {
                "type": "Feature", "properties": { "name": "Andari 02", "id_lokasi": "galih_andari", "color": "#8e44ad" },
                "geometry": { "type": "Polygon", "coordinates": [[ [112.899808, -7.805912], [112.899897, -7.805921], [112.899836, -7.805968], [112.900245, -7.805830], [112.900114, -7.805377], [112.899952, -7.805130], [112.899694, -7.805205], [112.899499, -7.805404], [112.899398, -7.805661], [112.899371, -7.805703], [112.899384, -7.805741], [112.899385, -7.805779], [112.899387, -7.805829], [112.899393, -7.805858], [112.899389, -7.805880], [112.899431, -7.805893], [112.899477, -7.805882], [112.899509, -7.805872], [112.899534, -7.805876], [112.899573, -7.805872], [112.899626, -7.805865], [112.899666, -7.805868], [112.899709, -7.805875], [112.899724, -7.805884], [112.899734, -7.805886], [112.899754, -7.805881], [112.899779, -7.805890], [112.899795, -7.805900], [112.899808, -7.805912] ]] }
            },

            // --- LAHAN PECATON ---
            {
                "type": "Feature", "properties": { "name": "Lahan Pecaton", "id_lokasi": "galih_pecaton", "color": "#2ecc71" },
                "geometry": { "type": "Polygon", "coordinates": [[ [112.904844, -7.821934], [112.904863, -7.821964], [112.904862, -7.822000], [112.904874, -7.822091], [112.904855, -7.822169], [112.904906, -7.822271], [112.904900, -7.822301], [112.904954, -7.822509], [112.904978, -7.822842], [112.905033, -7.822923], [112.905150, -7.823218], [112.905186, -7.823203], [112.905226, -7.823204], [112.905265, -7.823189], [112.905662, -7.823271], [112.905731, -7.822978], [112.905738, -7.822816], [112.905860, -7.822443], [112.905875, -7.822238], [112.905925, -7.822057], [112.905990, -7.821917], [112.905548, -7.821881], [112.905389, -7.821823], [112.905278, -7.821803], [112.905194, -7.821827], [112.905051, -7.821827], [112.905009, -7.821841], [112.904975, -7.821843], [112.904934, -7.821853], [112.904901, -7.821856], [112.904865, -7.821872], [112.904842, -7.821876], [112.904844, -7.821934] ]] }
            },

            // --- TEGAL KARYONO ---
            {
                "type": "Feature", "properties": { "name": "Tegal Karyono", "id_lokasi": "galih_karyono", "color": "#f39c12" },
                "geometry": { "type": "Polygon", "coordinates": [[ [112.913096, -7.814480], [112.913061, -7.814413], [112.912977, -7.814377], [112.912882, -7.814369], [112.912805, -7.814308], [112.912688, -7.814222], [112.912594, -7.814235], [112.912469, -7.814203], [112.912398, -7.814262], [112.912382, -7.814353], [112.912361, -7.814456], [112.912391, -7.814543], [112.912491, -7.814594], [112.912585, -7.814598], [112.912676, -7.814609], [112.912779, -7.814593], [112.912872, -7.814585], [112.912963, -7.814597], [112.913054, -7.814598], [112.913096, -7.814480] ]] }
            }
        ]
    },

    // ============================================================
    // 2. DATA DETAIL STATISTIK
    // ============================================================
    locations: {
        "kehati_aqua": {
            name: "Taman Kehati AQUA Keboncandi",
            desc: "Area konservasi in-situ seluas 2,67 Ha. Terbagi menjadi Taman 1, 2, dan 3 (Area Alami).",
            year: "2025", status: "Sangat Baik",
            lat: -7.723, lng: 112.932,
            hasPolygon: true,
            // Header: Gunakan file yang diupload ke github
            headerImage: "https://github.com/sekolakonangindonesia-prog/rejoso-biodiversity/blob/main/kehati_kbc.jpg?raw=true",

            indices: { H: 3.99, E: 0.87, R: 15.72, cat: "Sangat Tinggi" },
            birdIndices: { H: 2.91, E: 0.89, R: 4.81 },
            chartLabels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            historyH: [3.41, 3.47, 3.65, 3.74, 3.79, 3.99],
            historyE: [0.81, 0.82, 0.84, 0.85, 0.86, 0.87],
            historyR: [14.2, 14.5, 14.8, 15.1, 15.4, 15.72],

            floraStats: { 
                total: 203, famili: 75, 
                years: ['2020', '2021', '2022', '2023', '2024', '2025'],
                values: [136, 156, 172, 201, 223, 203],
                note: "Terjadi penurunan jenis dan jumlah individu yang ditemukan dari tahun pengamatan tahun 2024 (sejumlah 223 jenis)."
            },

            birdDataGraph: { years: ['2020', '2022', '2023', '2024', '2025'], family: [7, 14, 17, 18, 17], species: [9, 22, 25, 27, 26] },
            birdStats: { species: 26, family: 17, dom: "Cucak Kutilang", key: "Bubut Jawa" },
            
            protectedList: [
                { name: "Cemara Norfolk (Araucaria heterophylla)", status: "IUCN: VU | P106", type: "Flora", img: "cemara_norfolk.jpg" },
                { name: "Palem Kuning (Dypsis lutescens)", status: "IUCN: NT | CITES App II", type: "Flora", img: "palem_kuning.jpg" },
                { name: "Bubut Jawa (Centropus nigrorufus)", status: "IUCN: VU | Endemik", type: "Fauna", img: "bubut_jawa.jpg" },
                { name: "Biawak Air Asia (Varanus salvator)", status: "IUCN: LC | CITES App II", type: "Fauna", img: "biawak_air.jpg" }
            ],
            
            flagshipSpecies: {
                name: "Kupu-kupu Raja (Genus Troides)",
                desc: "Spesies indikator kualitas lingkungan. Dilindungi PERMENLHK & CITES.",
                status: "DILINDUNGI",
                img: "https://raw.githubusercontent.com/sekolakonangindonesia-prog/rejoso-biodiversity/refs/heads/main/kupu-troides.jpg"
            },
            
            detailPolygon: [
                [[-7.722551, 112.933906], [-7.722334, 112.934018], [-7.722282, 112.934140], [-7.722215, 112.934357], [-7.721930, 112.933150], [-7.722165, 112.933316], [-7.722398, 112.933620], [-7.722477, 112.933796], [-7.722551, 112.933906]],
                [[-7.722396, 112.933616], [-7.722723, 112.933524], [-7.722814, 112.933468], [-7.723156, 112.933484], [-7.723345, 112.933396], [-7.723355, 112.933275], [-7.723316, 112.933090], [-7.723645, 112.932930], [-7.723931, 112.932800], [-7.724057, 112.932646], [-7.724196, 112.932507], [-7.724261, 112.932690], [-7.723813, 112.932885], [-7.723393, 112.933068], [-7.723403, 112.933325], [-7.723467, 112.933605], [-7.723380, 112.933629], [-7.723257, 112.933606], [-7.723015, 112.933615], [-7.722897, 112.933578], [-7.722807, 112.933611], [-7.722717, 112.933753], [-7.722606, 112.933822], [-7.722555, 112.933905], [-7.722396, 112.933616]],
                [[-7.723085, 112.929750], [-7.723348, 112.929607], [-7.723519, 112.929518], [-7.724852, 112.932225], [-7.724634, 112.932281], [-7.724521, 112.932353], [-7.724478, 112.932410], [-7.724422, 112.932471], [-7.724362, 112.932543], [-7.724332, 112.932603], [-7.724261, 112.932688], [-7.724143, 112.932303], [-7.723595, 112.931166], [-7.723491, 112.930860], [-7.723267, 112.930551], [-7.723156, 112.930256], [-7.723055, 112.929998], [-7.722945, 112.929787], [-7.723085, 112.929750]]
            ]
        },
        
        "galih_pecaton": {
            name: "Desa Galih - Lahan Pecaton",
            desc: "Area recharge mata air dengan vegetasi campuran.",
            year: "2025", status: "Baik", lat: -7.822, lng: 112.905, hasPolygon: true,
            headerImage: "https://raw.githubusercontent.com/sekolakonangindonesia-prog/rejoso-biodiversity/refs/heads/main/Pecaton.jpg", 

            indices: { H: 3.11, E: 0.79, R: 7.93, cat: "Tinggi" },
            birdIndices: { H: 3.07, E: 0.95, R: 5.33 },
            
            historyH: [2.60, 3.11], historyE: [0.75, 0.79], historyR: [5.30, 7.93],
            chartLabels: ['2024', '2025'],

            floraStats: { 
                total: 50, famili: 25, 
                years: ['2024','2025'], values: [35, 50],
                note: "Jumlah spesies meningkat signifikan dari tahun sebelumnya."
            },
            
            birdStats: { species: 25, family: 19, dom: "Tepekong Jambul", key: "Bubut Jawa" },
            birdDataGraph: { years: ['2024', '2025'], family: [18, 19], species: [25, 25] },

            protectedList: [
                { name: "Bubut Jawa (Centropus nigrorufus)", status: "IUCN: VU | P106 | Endemik", type: "Fauna", img: "bubut_jawa.jpg" },
                { name: "Tupai Kekes (Tupaia javanica)", status: "IUCN: LC | CITES App II", type: "Fauna", img: "tupai_kekes.jpg" }
            ],
            
            flagshipSpecies: {
                name: "Bubut Jawa (Centropus nigrorufus)",
                desc: "Burung endemik Jawa yang statusnya Rentan (Vulnerable).",
                status: "DILINDUNGI / ENDEMIK",
                img: "bubut_jawa.jpg"
            },

            detailPolygon: [ [[ -7.821934, 112.904844 ], [ -7.822091, 112.904874 ], [ -7.822509, 112.904954 ], [ -7.823218, 112.905150 ], [ -7.823271, 112.905662 ], [ -7.822238, 112.905875 ], [ -7.821881, 112.905548 ], [ -7.821827, 112.905051 ], [ -7.821934, 112.904844 ]] ]
        },

        "galih_karyono": {
            name: "Desa Galih - Tegal Pak Karyono",
            year: "2025", status: "Sedang", lat: -7.814, lng: 112.913, hasPolygon: true,
            headerImage: "https://raw.githubusercontent.com/sekolakonangindonesia-prog/rejoso-biodiversity/refs/heads/main/Karyono_Galih.jpg",
            indices: { H: 2.74, E: 0.99, R: 4.03, cat: "Sedang" },
            historyH: [2.74], historyE: [0.99], historyR: [4.03], chartLabels: ['2025'],
            floraStats: { total: 80, famili: 20, years:['2025'], values:[80], note:"" },
            birdIndices: { H: 2.1, E: 0.6, R: 2.5 },
            birdDataGraph: { years: ['2025'], family: [10], species: [15] },
            birdStats: { species: 15, family: 10, dom: "-", key: "-" },
            protectedList: [], flagshipSpecies: null, detailPolygon: [ [[ -7.814480, 112.913096 ], [ -7.814413, 112.913061 ], [ -7.814377, 112.912977 ], [ -7.814369, 112.912882 ], [ -7.814308, 112.912805 ], [ -7.814222, 112.912688 ], [ -7.814235, 112.912594 ], [ -7.814203, 112.912469 ], [ -7.814262, 112.912398 ], [ -7.814353, 112.912382 ], [ -7.814456, 112.912361 ], [ -7.814543, 112.912391 ], [ -7.814594, 112.912491 ], [ -7.814598, 112.912585 ], [ -7.814609, 112.912676 ], [ -7.814593, 112.912779 ], [ -7.814585, 112.912872 ], [ -7.814597, 112.912963 ], [ -7.814598, 112.913054 ], [ -7.814480, 112.913096 ]] ]
        },
        
        "galih_andari": {
            name: "Desa Galih - Tegal Pak Andari",
            year: "2025", status: "Sedang", lat: -7.815, lng: 112.905, hasPolygon: true,
            headerImage: "https://raw.githubusercontent.com/sekolakonangindonesia-prog/rejoso-biodiversity/refs/heads/main/Andari_galih.jpg",
            indices: { H: 2.75, E: 0.99, R: 4.18, cat: "Sedang" },
            historyH: [2.72, 2.75], historyE: [0.98, 0.99], historyR: [4.15, 4.18], chartLabels: ['2024', '2025'],
            birdIndices: { H: 2.2, E: 0.65, R: 2.8 },
            floraStats: { total: 85, famili: 22, years: ['2024','2025'], values: [70, 85], note:"" },
            birdDataGraph: { years: ['2024', '2025'], family: [10, 11], species: [16, 16] },
            birdStats: { species: 16, family: 11, dom: "Maducita", key: "Elang Bido" },
            protectedList: [{ name: "Elang Ular Bido", status: "Dilindungi", type: "Fauna", img: "elang_bido.jpg" }],
            flagshipSpecies: null, detailPolygon: [ [[-7.815048, 112.905288], [-7.814989, 112.905335], [-7.814978, 112.905334], [-7.814965, 112.905318], [-7.814954, 112.905303], [-7.814951, 112.905283], [-7.814961, 112.905259], [-7.814953, 112.905225], [-7.814945, 112.905206], [-7.814937, 112.905188], [-7.814931, 112.905167], [-7.814927, 112.905144], [-7.814933, 112.905119], [-7.814932, 112.905104], [-7.814928, 112.905082], [-7.814940, 112.905058], [-7.814922, 112.905042], [-7.814915, 112.905028], [-7.814930, 112.905022], [-7.814942, 112.905008], [-7.814947, 112.904990], [-7.814936, 112.904955], [-7.815100, 112.904717], [-7.815462, 112.904479], [-7.815972, 112.904588], [-7.816181, 112.904767], [-7.816111, 112.905305], [-7.815588, 112.905295], [-7.815100, 112.905251], [-7.815111, 112.905280], [-7.815075, 112.905270], [-7.815048, 112.905288]], [[-7.805912, 112.899808], [-7.805921, 112.899897], [-7.805968, 112.899836], [-7.805830, 112.900245], [-7.805377, 112.900114], [-7.805130, 112.899952], [-7.805205, 112.899694], [-7.805404, 112.899499], [-7.805661, 112.899398], [-7.805703, 112.899371], [-7.805741, 112.899384], [-7.805779, 112.899385], [-7.805829, 112.899387], [-7.805858, 112.899393], [-7.805880, 112.899389], [-7.805893, 112.899431], [-7.805882, 112.899477], [-7.805872, 112.899509], [-7.805876, 112.899534], [-7.805872, 112.899573], [-7.805865, 112.899626], [-7.805868, 112.899666], [-7.805875, 112.899709], [-7.805884, 112.899724], [-7.805886, 112.899734], [-7.805881, 112.899754], [-7.805890, 112.899779], [-7.805900, 112.899795], [-7.805912, 112.899808]] ] },

        "umbulan": {
            name: "Kawasan Mata Air Umbulan",
            year: "2024", status: "Sangat Baik", lat: -7.730, lng: 112.950, hasPolygon: false,
            headerImage: "https://raw.githubusercontent.com/sekolakonangindonesia-prog/rejoso-biodiversity/refs/heads/main/Umbulan_pas.jpg",
            indices: { H: 3.50, E: 0.85, R: 12.10, cat: "Sangat Tinggi" },
            historyH: [3.5], historyE: [0.85], historyR: [12.1], chartLabels: ['2024'],
            floraStats: { total: 180, famili: 60, years:['2024'], values:[180], note:"" },
            birdIndices: { H: 3.1, E: 0.8, R: 5.0 },
            birdDataGraph: { years: ['2024'], family: [15], species: [30] },
            birdStats: { species: 30, family: 15, dom: "-", key: "-" },
            protectedList: [], flagshipSpecies: null, detailPolygon: null
        },

        "nguling": {
            name: "Kawasan Penyangga Nguling",
            year: "2024", status: "Sedang", lat: -7.680, lng: 113.050, hasPolygon: false,
            headerImage: "https://raw.githubusercontent.com/sekolakonangindonesia-prog/rejoso-biodiversity/refs/heads/main/Nguling_pas.jpg",
            indices: { H: 2.90, E: 0.70, R: 5.50, cat: "Sedang" },
            historyH: [2.9], historyE: [0.7], historyR: [5.5], chartLabels: ['2024'],
            floraStats: { total: 90, famili: 25, years:['2024'], values:[90], note:"" },
            birdIndices: { H: 2.0, E: 0.5, R: 2.0 },
            birdDataGraph: { years: ['2024'], family: [5], species: [10] },
            birdStats: { species: 10, family: 5, dom: "-", key: "-" },
            protectedList: [], flagshipSpecies: null, detailPolygon: null
        }
    }
};
