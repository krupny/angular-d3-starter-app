var app = angular.module("sampleApp", [])
	.controller("officeController", function($scope) {
		$scope.persons = [
			{"FirstName": "John", "LastName": "Doe", "Country": "USA"}
		,	{"FirstName": "John", "LastName": "Dalton", "Country": "UK"}
			];
	})
	.directive('blackCircles', function() {
		return {
			restrict: 'EA', 
			replace: true,
			link: function(scope, elem, attrs) {
				try {
					var dataset = [],
					    i = 0;

				    var num = parseInt(scope.num);
					    
					for(i=0; i<6; i++){
					    dataset.push(Math.round(Math.random()*100));
					}        

					var sampleSVG = d3.select(elem[0])
					    .append("svg")
					    .attr("width", $(elem[0]).width())
					    .attr("height", 75);    
					    
					sampleSVG.selectAll("circle")
					    .data(dataset)
					    .enter().append("circle")
					    .style("stroke", "gray")
					    .style("fill", "black")
					    .attr("r", 25)
					    .attr("cx", function(d, i){return (i+1)*80})
					    .attr("cy", 35);
				} catch (e) {
					console.log(e);
				}
			}
		};
	});