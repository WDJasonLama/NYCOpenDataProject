let data;

async function init(){

  let link = "https://data.cityofnewyork.us/resource/uip8-fykc.json";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

let race = ["Race",79.0,80.0,79.9,78.8,73.4,77.2,74.5,78.7,76.8 ]
let crime = ["Crime",79.7,78.8,81.6,80.6,82.3,77.4,79.5,78.6,77.9]

let course_count = [
  ["Race",3737],
  ["Crime",3761],
]

function exploringCharts(){
  var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 150, 520, 510, 540, 515, 525]
        ],
        type: 'bar'
      }
  });
}



function lineChart(){
  let data = [race,crime];
  displayChart( data, "chart", "line" )
  
}
function barChart(){
  let data = [race,crime];
  displayChart( data, "chart", "bar" )
  
}
function pieChart(){
  displayChart(course_count,"chart","pie");
}



let Convict = [{race: black
              img: "https://cdn.sanity.io/images/pu5wtzfc/production/bb7b00aff9624d917fa247b1216d824a493b9f8c-2000x1250.jpg"
            },
            {name:"Acics",
              img: "httpsi://ncorporatedstyle.com/content/uploads/acics-1201A256-113.jpg"
            },
            {name:"Nike Vapor Edge",
              img: "https://m.media-amazon.com/images/I/510vrjOFNpL._AC_UY1000_.jpg"
            },
            {name:"Nike Gt Cut",
              img: "https://www.nicekicks.com/files/2024/02/Nike-GT-Cut-3-Be-True-To-Her-School-DV2913-400-01.jpg"
            },
            {name:"New Balance",
              img: "https://images.footlocker.com/is/image/EBFL2/U740WN2_01?wid=500&hei=500&fmt=png-alphahttps://i8.amplience.net/i/jpl/jd_718808_a?v=1https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcGCK3AF0iwTXzhDk8Tv0wnv-DRx8Gh9Jlw&shttps://i8.amplience.net/i/jpl/jd_224316_a?qlt=92&w=600&h=425&v=1&fmt=autohttps://sportland.com/media/catalog/product/cache/45d29c4f3d7825954b7edd35f17b2846/M/R/MR530SG_WBL_9bce.jpg"
            },
            {name:"Men's Jordan 1 Low TD",
              img: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c8ad6de-2111-49ab-b58e-732a46e2581c/JORDAN+1+LOW+TD.pnghttps://cdn.flightclub.com/TEMPLATE/370166/3.jpg"
            },

]

function Convict(){
  let output = document.getElementById("output");
  let build = ``;
  

for(let i = 0; i < Convict.length; i++){
  let Convict = Convicts[i];
  build += `<div class = card>`;
  build += `<h2> ${Convict.name} </h2>`;
  build += `<img src=${Convict.img}>`;
  build += `</div>`
  
}
output.innerHTML = build;
}