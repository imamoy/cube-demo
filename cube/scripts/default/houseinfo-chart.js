// // circle_chart 共用變數
// var circle_chart = {
// 	width: 138,
// 	height: 138,
// 	type: "radialBar",
// 	zoom: {
// 		enabled: false
// 	}
// }
// var circle_stroke = {
//   	lineCap: "round"
// }
// var circle_hollow = {
// 	margin: 0,
// 	size: "60%"
// }
// var circle_LableTW = {
// 	offsetY: 20,
// 	show: true,
// 	color: "#808080",
// 	fontSize: "13px"
// }

// var circle1_color = "#2BA84A"
// var circle1 = {
// 	chart: circle_chart,
// 	series: [90],
// 	colors: [circle1_color],
// 	plotOptions: {
// 		radialBar: {
// 			hollow: circle_hollow,
// 			dataLabels: {
// 				showOn: "always",
// 				name: circle_LableTW,
// 				value: {
// 					offsetY: '-15',
// 					color: circle1_color,
// 					fontSize: "24px",
// 					show: true,
// 					formatter: function () {
// 						return '9'
// 					}
// 				}
// 			}
// 		}
// 	},
// 	stroke: circle_stroke,
// 	labels: ["準確指數"]
// };

// var circle2_color = "#FF9D0E"
// var circle2 = {
// 	chart: circle_chart,
// 	series: [50],
// 	colors: [circle2_color],
// 	plotOptions: {
// 		radialBar: {
// 			hollow: circle_hollow,
// 			dataLabels: {
// 				showOn: "always",
// 				name: circle_LableTW,
// 				value: {
// 					offsetY: '-15',
// 					color: circle2_color,
// 					fontSize: "24px",
// 					show: true,
// 					formatter: function () {
// 						return '5'
// 					}
// 				}
// 			}
// 		}
// 	},
// 	stroke: circle_stroke,
// 	labels: ["中性市場"]
// };

// var circle3_color = "#0050E6"
// var circle3 = {
// 	chart: circle_chart,
// 	series: [8],
// 	colors: [circle3_color],
// 	plotOptions: {
// 		radialBar: {
// 			hollow: circle_hollow,
// 			dataLabels: {
// 				showOn: "always",
// 				name: circle_LableTW,
// 				value: {
// 					offsetY: '-15',
// 					color: circle3_color,
// 					fontSize: "24px",
// 					show: true,
// 					formatter: function () {
// 						return '5'
// 					}
// 				}
// 			}
// 		}
// 	},
// 	stroke: circle_stroke,
// 	labels: ["相似件數"]
// };

// var circle4_color = "#FF0006"
// var circle4 = {
// 	chart: circle_chart,
// 	series: [67],
// 	colors: [circle4_color],
// 	plotOptions: {
// 		radialBar: {
// 			hollow: circle_hollow,
// 			dataLabels: {
// 				showOn: "always",
// 				name: circle_LableTW,
// 				value: {
// 					offsetY: '-15',
// 					color: circle4_color,
// 					fontSize: "24px",
// 					show: true,
// 					formatter: function () {
// 						return '5'
// 					}
// 				}
// 			}
// 		}
// 	},
// 	stroke: circle_stroke,
// 	labels: ["12月預測"]
// };


// new ApexCharts(document.querySelector("#circle-chart1"), circle1).render();
// new ApexCharts(document.querySelector("#circle-chart2"), circle2).render();
// new ApexCharts(document.querySelector("#circle-chart3"), circle3).render();
// new ApexCharts(document.querySelector("#circle-chart4"), circle4).render();




// //------- 估值概觀 ------------------------------------------------------------------------

// // 最近12個月相似交易 (智能鄰舍)
// var chart_last_12months = { 	
// 	colors: ["#FF9C01", '#0050E6', '#606060'],
// 	series: [
// 		{
// 			name: '物件開價',
// 			data: [62]
// 		},
// 		{
// 			name: '實價登錄',
// 			data: [, 65, 60, 70, 75, 87, 105, 91, 114, 94, 80]
// 		},
// 		{
// 			name: '估價',
// 			data: [, 35, 41, 36, 26, 45, 48, 52, 53, 41, 70]
// 		}
// 	],
// 	chart: {
// 		type: 'bar',
// 		height: 300,
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false,
// 		}
// 	},
// 	plotOptions: {
// 		bar: {
// 			horizontal: false,
// 			columnWidth: '55%'
// 		},
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	stroke: {
// 		show: true,
// 		width: 2,
// 		colors: ['transparent']
// 	},
// 	legend: {
// 		position: 'top',
// 		horizontalAlign: 'right',
// 		fontSize: "16px"
// 	},
// 	xaxis: {
// 		categories: ['物件', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價(萬)'
// 		}
// 	},
// 	fill: {
// 		opacity: 1
// 	},
// 	tooltip: {
// 		enabled: false
// 	}
// };

// new ApexCharts(document.querySelector("#houseinfo1_chart1"), chart_last_12months).render();


// // 最近12個月相似交易 ( 500公尺內 )
// var chart_500m_last_12months = {
// 	colors: ["#FF9C01", '#0050E6', '#606060'],
// 	series: [
// 		{
// 			name: '物件開價',
// 			data: [62]
// 		},
// 		{
// 			name: '實價登錄',
// 			data: [null, 65, 60, 70, 75, 87, 105, 91, 114, 94, 80]
// 		},
// 		{
// 			name: '估價',
// 			data: [null, 35, 41, 36, 26, 45, 48, 52, 53, 41, 70]
// 		}
// 	],
// 	chart: {
// 		type: 'bar',
// 		height: 300,
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false
// 		}
// 	},
// 	plotOptions: {
// 		bar: {
// 			horizontal: false,
// 			columnWidth: '55%'
// 		},
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	stroke: {
// 		show: true,
// 		width: 2,
// 		colors: ['transparent']
// 	},
// 	legend: {
// 		position: 'top',
// 		horizontalAlign: 'right',
// 		fontSize: "16px"
// 	},
// 	xaxis: {
// 		categories: ['物件', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價(萬)'
// 		}
// 	},
// 	fill: {
// 		opacity: 1
// 	},
// 	tooltip: {
// 		y: {
// 			formatter: function (val) {
// 				return "單價" + val + " 萬"
// 			}
// 		}
// 	}
// };

// new ApexCharts(document.querySelector("#houseinfo1_chart2"), chart_500m_last_12months).render();


// //------- 智能分析 ------------------------------------------------------------------------

// // 房價走勢預估圖  House_price_trend
// var House_price_trend = {
// 	colors: ['#FF9C01', '#808080'],
// 	series: [
// 		{
// 			data: [55]
// 		},
// 		{
// 			data: [45, 50, 50, 60]
// 		}
// 	],
// 	chart: {
// 		zoom: {
// 			enabled: false,
// 		},
// 		sparkline: {
// 			enabled: false,
// 		},
// 		height: 300,
// 		toolbar: {
// 			show: false
// 		}
// 	},
// 	markers: {
// 		size: 8,
// 		shape: "circle", //circle or square
// 	},
// 	stroke: {
// 		curve: 'straight', // smooth
// 		width: 2,
// 		dashArray: 2
// 	},
// 	xaxis: {
// 		categories: ['現在', '1年後', '2年後', '3年後']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價(萬)'
// 		}
// 	},
// 	design: {
// 		theme: {
// 			monochrome: {
// 				enabled: true,
// 				color: '#255aee',
// 				shadeTo: 'light',
// 				shadeIntensity: 0.65
// 			}
// 		}
// 	}
// };


// // 房價走勢預估圖 - 商辦  Office_price_trend
// var Office_price_trend = {
// 	chart: {
// 		height: 350,
// 		type: "line",
// 		stacked: false,
// 		toolbar: {
// 			show: false
// 		}
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	colors: ["#255aee", "#FF9C01"],
// 	series: [
// 		{
// 			name: "總價開價",
// 			data: [45, 50, 50, 60]
// 		},
// 		{
// 			name: "租金價格",
// 			data: [1300, 1500, 2350, 5000]
// 		}
// 	],
// 	stroke: {
// 		width: [4, 4]
// 	},
// 	markers: {
// 		size: 8,
// 		shape: "circle", //circle or square
// 	},
// 	xaxis: {
// 		categories: ['現在', '1年後', '2年後', '3年後']
// 	},
// 	yaxis: [
// 		{
// 			axisTicks: {
// 				show: true
// 			},
// 			labels: {
// 				style: {
// 					colors: "#255aee"
// 				}
// 			},
// 			title: {
// 				text: '單價(萬)',
// 				style: {
// 					color: "#255aee"
// 				}
// 			}
// 		},
// 		{
// 			opposite: true,
// 			axisTicks: {
// 				show: true
// 			},
// 			labels: {
// 				style: {
// 					colors: "#FF9C01"
// 				}
// 			},
// 			title: {
// 				text: '單價(元)',
// 				style: {
// 					color: "#FF9C01"
// 				}
// 			}
// 		}
// 	],
// 	tooltip: {
// 		shared: false,
// 		intersect: true,
// 		x: {
// 			show: false
// 		}
// 	},
// 	legend: {
// 		horizontalAlign: "left",
// 		offsetX: 40
// 	}
// };


// // 買房單價表現走勢圖  Buy_House_unit_price
// var Buy_house_unit_price = {
// 	colors: ['#FF0007', '#2BA84A', '#0050E6', "#FF9C01", '#606060'],
// 	series: [
// 		{
// 			name: '社區大樓',
// 			data: [30, 32, 36, 34, 40, 42, 45],
// 			type: 'line'
// 		},
// 		{
// 			name: '郵政區號',
// 			data: [50, 50, 53, 55, 60, 65, 62],
// 			type: 'line'
// 		},
// 		{
// 			name: '大安區',
// 			data: [40, 45, 45, 50, 55, 45, 50],
// 			type: 'line'
// 		},
// 		{
// 			name: '物件開價',
// 			data: [null, null, null, null, null, null, 60],
// 			type: 'line'
// 		},
// 		{
// 			name: '物件估價',
// 			data: [null, null, null, null, null, null, 70],
// 			type: 'line'
// 		}
// 	],
// 	chart: {
// 		sparkline: {
// 			enabled: false
// 		},
// 		zoom: {
// 			enabled: false
// 		},
// 		height: 300,
// 		toolbar: {
// 			show: false
// 		},
// 	},
// 	markers: {
// 		size: 8,
// 		shape: "circle", //circle or square
// 	},
// 	stroke: {
// 		curve: 'straight', // smooth
// 		width: [2, 2, 2, 2, 2, 2, 0]
// 	},
// 	xaxis: {
// 		categories: ['2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1', '銷售中物件'],
// 		tickAmount: 1
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價(萬)'
// 		},
// 		tickAmount: 1
// 	}
// };


// // 相似物件價格走勢  Price_trend_of_similar 
// var Price_trend_of_similar = {
// 	colors: ['#0050E6', '#0050E6', '#2BA84A', '#2BA84A', '#FF9C01', '#606060', '#FF9C01', '#606060'],
// 	series: [
// 		{
// 			data: [50, 30, 20, 40, 20, 20, null]
// 		},
// 		{
// 			data: [60, 40, 30, 50, 30, 30, null]
// 		},
// 		{
// 			data: [70, 60, 50, 60, 50, 50, null]
// 		},
// 		{
// 			data: [80, 70, 60, 70, 60, 60, null]
// 		},
// 		{
// 			data: [null, null, null, null, null, null, 70]
// 		},
// 		{
// 			data: [null, null, null, null, null, null, 60]
// 		},
// 		{
// 			data: [70, 70, 70, 70, 70, 70, 70]
// 		},
// 		{
// 			data: [50, 52, 54, 56, 58, 59, 60]
// 		}
// 	],
// 	chart: {
// 		sparkline: {
// 			enabled: false
// 		},
// 		zoom: {
// 			enabled: false
// 		},
// 		height: 300,
// 		toolbar: {
// 			show: false
// 		},
// 	},
// 	markers: {
// 		size: [8, 8, 8, 8, 8, 8, null, null],
// 		shape: ["circle", "circle", "circle", "circle", "circle", "circle", null, null], //circle or square
// 	},
// 	stroke: {
// 		curve: 'straight', // smooth
// 		width: [0, 0, 0, 0, 0, 0, 1, 1],
// 		dashArray: [0, 0, 0, 0, 0, 0, 2, 2]
// 	},
// 	xaxis: {
// 		categories: ['2018Q4', '2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1', '銷售中物件']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價(萬)'
// 		},
// 		max: 70
// 	}
// };

// new ApexCharts(document.querySelector("#houseinfo2_chart1"), House_price_trend ).render();
// new ApexCharts(document.querySelector("#houseinfo2_chart2_y1"), Buy_house_unit_price ).render();
// new ApexCharts(document.querySelector("#similar_chart_y1"), Price_trend_of_similar ).render();
// new ApexCharts(document.querySelector("#houseinfo2_office_chart1"), Office_price_trend ).render();



// //------- 專家報告 視窗 ------------------------------------------------------------------------//

// //------- 左邊區域  市場負擔能力  ------------ //

// // 住宅價格指數 residential_price_index
// var Residential_price_index = {
// 	colors: ['#808080', "#FF9C01"],
// 	series: [
// 		{
// 			name: "市場貸款平均值",
// 			data: [0, 10, 20, 30, 40, 50, 60],
// 			type: 'line'
// 		},
// 		{
// 			name: "市場貸款負擔率",
// 			data: [12, 11, 14, 40, 42, 50, 20],
// 			type: 'line'
// 		}
// 	],
// 	chart: {
// 		height: 180,
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false
// 		}
// 	},
// 	stroke: {
// 		width: 3,
// 		curve: ['straight', 'smooth'],
// 		dashArray: [4, 0]
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	xaxis: {
// 		categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價(萬)'
// 		}
// 	}
// };
// new ApexCharts(document.querySelector("#houseinfoData-chartA1"), Residential_price_index).render();


// // 城市貸款負擔率  City Loan burden
// var City_loan_burden = {
// 	colors: ['#808080', '#808080', '#808080', '#808080', "#FF9C01"],
// 	series: [
// 		{
// 			name: "",
// 			data: [60, 60, 60, 60, 60, 60, 60],
// 			type: 'line'
// 		},
// 		{
// 			name: "",
// 			data: [45, 45, 45, 45, 45, 45, 45],
// 			type: 'line'
// 		},
// 		{
// 			name: "",
// 			data: [30, 30, 30, 30, 30, 30, 30],
// 			type: 'line'
// 		},
// 		{
// 			name: "",
// 			data: [15, 15, 15, 15, 15, 15, 15],
// 			type: 'line'
// 		},
// 		{
// 			name: "市場貸款負擔率",
// 			data: [12, 11, 14, 40, 42, 50, 20],
// 			type: 'line'
// 		}
// 	],
// 	chart: {
// 		height: 180,
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false
// 		}
// 	},
// 	stroke: {
// 		width: [1, 1, 1, 1, 3],
// 		curve: ['straight', 'straight', 'straight', 'straight', 'smooth'],
// 		dashArray: [4, 4, 4, 4, 0]
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	xaxis: {
// 		categories: ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價(萬)'
// 		}
// 	}
// };

// new ApexCharts(document.querySelector("#houseinfoData-chartA2"), City_loan_burden).render();


// // 房價所得比  House price income ratio
// var House_price_income_ratio = {
// 	colors: ['#808080', '#808080', '#808080', '#808080', "#FF9C01"],
// 	series: [
// 		{
// 			name: "",
// 			data: [60, 60, 60, 60, 60, 60, 60],
// 			type: 'line'
// 		},
// 		{
// 			name: "",
// 			data: [45, 45, 45, 45, 45, 45, 45],
// 			type: 'line'
// 		},
// 		{
// 			name: "",
// 			data: [30, 30, 30, 30, 30, 30, 30],
// 			type: 'line'
// 		},
// 		{
// 			name: "",
// 			data: [15, 15, 15, 15, 15, 15, 15],
// 			type: 'line'
// 		},
// 		{
// 			name: "市場貸款負擔率",
// 			data: [12, 11, 14, 40, 42, 50, 20],
// 			type: 'line'
// 		}
// 	],
// 	chart: {
// 		height: 180,
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false
// 		}
// 	},
// 	stroke: {
// 		width: [1, 1, 1, 1, 3],
// 		curve: ['straight', 'straight', 'straight', 'straight', 'smooth'],
// 		dashArray: [4, 4, 4, 4, 0]
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	xaxis: {
// 		categories: ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價(萬)'
// 		}
// 	}
// };

// new ApexCharts(document.querySelector("#houseinfoData-chartA3"), House_price_income_ratio).render();



// //------- 中間區域  郵政區域市場能力  ------------//

// // 市場貸款負擔率  Market loan burden
// var Market_loan_burden = {
// 	colors: ['#FF9C01', '#ABB7BD'],
// 	series: [
// 		{
// 			data: [50, 80, 10, 85, 100]
// 		},
// 		{
// 			data: [60, 21, 70, 80, 35]
// 		}
// 	],
// 	chart: {
// 		type: 'bar',
// 		height: 230,
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false
// 		}
// 	},
// 	plotOptions: {
// 		bar: {
// 		horizontal: false,
// 			columnWidth: '55%'
// 		}
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	stroke: {
// 		show: true,
// 		width: 2,
// 		colors: ['transparent']
// 	},
// 	xaxis: {
// 		categories: ['2016', '2017', '2018', '2019', '2020']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '佔比率 (%)'
// 		}
// 	},
// 	fill: {
// 		opacity: 1
// 	},
// 	tooltip: {
// 		enabled: false
// 	}
// };

// new ApexCharts(document.querySelector("#houseinfoData-chartB1"), Market_loan_burden).render();


// // 停車位市場走勢 Parking market
// var Parking_market = {
// 	series: [
// 		{
// 			data: [60, 80, 70, 85, 100]
// 		}
// 	],
// 	chart: {
// 		type: 'bar',
// 		height: 210,
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false,
// 		}
// 	},
// 	plotOptions: {
// 		bar: {
// 			horizontal: false,
// 			columnWidth: '55%'
// 		},
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	stroke: {
// 		show: true,
// 		width: 2,
// 		colors: ['transparent']
// 	},
// 	xaxis: {
// 		categories: ['2016', '2017', '2018', '2019', '2020']
// 	},
// 	colors: ['#ABB7BD', '#ABB7BD', '#ABB7BD', '#ABB7BD', "#FF9C01"],
// 	plotOptions: {
// 		bar: {
// 			distributed: true
// 		}
// 	},
// 	yaxis: {
// 		title: {
// 			text: '單價（萬）'
// 		}
// 	},
// 	fill: {
// 		opacity: 1
// 	},
// 	tooltip: {
// 		enabled: false
// 	}
// };

// new ApexCharts(document.querySelector("#houseinfoData-chartB2"), Parking_market).render();



// // 區域房屋比  Regional house
// var Regional_house = {
// 	series: [
// 		{
// 			data: [60, 80, 70, 85, 100]
// 		}
// 	],
// 	chart: {
// 		type: 'bar',
// 		height: 210,
// 		toolbar: {
// 			show: false
// 		},
// 		zoom: {
// 			enabled: false,
// 		}
// 	},
// 	plotOptions: {
// 		bar: {
// 			horizontal: false,
// 			columnWidth: '55%'
// 		}
// 	},
// 	dataLabels: {
// 		enabled: false
// 	},
// 	stroke: {
// 		show: true,
// 		width: 2,
// 		colors: ['transparent']
// 	},
// 	colors: ['#ABB7BD', '#ABB7BD', '#ABB7BD', '#ABB7BD', "#FF9C01"],
// 	plotOptions: {
// 		bar: {
// 			distributed: true
// 		}
// 	},
// 	xaxis: {
// 		categories: ['0-5年', '6-10年', '11-15年', '16-20年', '21-25年']
// 	},
// 	yaxis: {
// 		title: {
// 			text: '比例(%)'
// 		}
// 	},
// 	fill: {
// 		opacity: 1
// 	},
// 	tooltip: {
// 		enabled: false
// 	}
// };

// new ApexCharts(document.querySelector("#houseinfoData-chartB3"), Regional_house).render();