let testData = [
  {id: 0, date: "2018-01-01T06:00:00.000Z", sleep: 4, diet: 2, physical: 1, emotional: 3, social: 3, occupational: 2, spiritual: 3, intellectual: 3},
  {id: 1, date: "2018-01-02T06:00:00.000Z", sleep: 3, diet: 2, physical: 1, emotional: 3, social: 3, occupational: 2, spiritual: 3, intellectual: 4},
  {id: 2, date: "2018-01-03T06:00:00.000Z", sleep: 1, diet: 2, physical: 1, emotional: 3, social: 3, occupational: 2, spiritual: 3, intellectual: 3},
  {id: 3, date: "2018-01-04T06:00:00.000Z", sleep: 5, diet: 3, physical: 1, emotional: 4, social: 3, occupational: 2, spiritual: 2, intellectual: 4},
  {id: 4, date: "2018-01-05T06:00:00.000Z", sleep: 5, diet: 2, physical: 2, emotional: 3, social: 3, occupational: 2, spiritual: 3, intellectual: 5},
  {id: 5, date: "2018-01-06T06:00:00.000Z", sleep: 5, diet: 2, physical: 2, emotional: 3, social: 3, occupational: 3, spiritual: 3, intellectual: 4},
  {id: 6, date: "2018-01-07T06:00:00.000Z", sleep: 3, diet: 3, physical: 1, emotional: 3, social: 3, occupational: 2, spiritual: 3, intellectual: 5},
  {id: 7, date: "2018-01-08T06:00:00.000Z", sleep: 2, diet: 4, physical: 1, emotional: 4, social: 3, occupational: 2, spiritual: 3, intellectual: 4},
  {id: 8, date: "2018-01-09T06:00:00.000Z", sleep: 3, diet: 4, physical: 1, emotional: 4, social: 3, occupational: 2, spiritual: 3, intellectual: 4},
  {id: 9, date: "2018-01-10T06:00:00.000Z", sleep: 3, diet: 5, physical: 1, emotional: 3, social: 4, occupational: 2, spiritual: 4, intellectual: 4},
  {id: 10, date: "2018-01-11T06:00:00.000Z", sleep: 4, diet: 4, physical: 2, emotional: 4, social: 3, occupational: 2, spiritual: 3, intellectual: 4},
  {id: 11, date: "2018-01-12T06:00:00.000Z", sleep: 5, diet: 5, physical: 2, emotional: 4, social: 3, occupational: 3, spiritual: 3, intellectual: 4},
  {id: 12, date: "2018-01-13T06:00:00.000Z", sleep: 4, diet: 4, physical: 2, emotional: 4, social: 3, occupational: 2, spiritual: 3, intellectual: 4},
  {id: 13, date: "2018-01-14T06:00:00.000Z", sleep: 3, diet: 4, physical: 2, emotional: 3, social: 3, occupational: 1, spiritual: 3, intellectual: 3},
  {id: 14, date: "2018-01-15T06:00:00.000Z", sleep: 3, diet: 4, physical: 1, emotional: 2, social: 3, occupational: 1, spiritual: 3, intellectual: 4},
  {id: 15, date: "2018-01-16T06:00:00.000Z", sleep: 3, diet: 3, physical: 1, emotional: 2, social: 2, occupational: 1, spiritual: 3, intellectual: 3},
  {id: 16, date: "2018-01-17T06:00:00.000Z", sleep: 2, diet: 3, physical: 1, emotional: 2, social: 3, occupational: 1, spiritual: 2, intellectual: 3},
  {id: 17, date: "2018-01-18T06:00:00.000Z", sleep: 3, diet: 4, physical: 2, emotional: 2, social: 4, occupational: 1, spiritual: 3, intellectual: 2},
  {id: 18, date: "2018-01-19T06:00:00.000Z", sleep: 4, diet: 3, physical: 2, emotional: 3, social: 3, occupational: 1, spiritual: 3, intellectual: 2},
  {id: 19, date: "2018-01-20T06:00:00.000Z", sleep: 5, diet: 3, physical: 3, emotional: 4, social: 2, occupational: 1, spiritual: 1, intellectual: 2},
  {id: 20, date: "2018-01-21T06:00:00.000Z", sleep: 5, diet: 3, physical: 3, emotional: 5, social: 4, occupational: 1, spiritual: 2, intellectual: 2},
  {id: 21, date: "2018-01-22T06:00:00.000Z", sleep: 5, diet: 2, physical: 4, emotional: 5, social: 5, occupational: 1, spiritual: 1, intellectual: 1},
  {id: 22, date: "2018-01-23T06:00:00.000Z", sleep: 4, diet: 2, physical: 4, emotional: 4, social: 5, occupational: 1, spiritual: 1, intellectual: 2},
  {id: 23, date: "2018-01-24T06:00:00.000Z", sleep: 4, diet: 1, physical: 4, emotional: 3, social: 4, occupational: 1, spiritual: 2, intellectual: 4},
  {id: 24, date: "2018-01-25T06:00:00.000Z", sleep: 4, diet: 2, physical: 2, emotional: 2, social: 3, occupational: 1, spiritual: 3, intellectual: 4},
  {id: 25, date: "2018-01-26T06:00:00.000Z", sleep: 4, diet: 1, physical: 2, emotional: 2, social: 2, occupational: 1, spiritual: 3, intellectual: 4},
  {id: 26, date: "2018-01-27T06:00:00.000Z", sleep: 4, diet: 2, physical: 2, emotional: 3, social: 3, occupational: 2, spiritual: 3, intellectual: 5},
  {id: 27, date: "2018-01-28T06:00:00.000Z", sleep: 3, diet: 1, physical: 2, emotional: 4, social: 2, occupational: 1, spiritual: 3, intellectual: 5},
  {id: 28, date: "2018-01-29T06:00:00.000Z", sleep: 1, diet: 1, physical: 2, emotional: 5, social: 3, occupational: 2, spiritual: 3, intellectual: 5},
  {id: 29, date: "2018-01-30T06:00:00.000Z", sleep: 3, diet: 1, physical: 2, emotional: 5, social: 4, occupational: 2, spiritual: 3, intellectual: 5},
  {id: 30, date: "2018-01-31T06:00:00.000Z", sleep: 3, diet: 1, physical: 3, emotional: 3, social: 4, occupational: 2, spiritual: 4, intellectual: 3}]


function chartData(testData) {

  let aspects = ['sleep', 'diet', 'physical', 'emotional', 'social', 'occupational', 'spiritual', 'intellectual']
//======================= PROCESS DATA TO PROPER FORMAT =========================
  let inputData = aspects.map(function(id) {
    return {id: id,
    values: testData.map(function(d) {
      return {date: new Date(d.date), score: parseFloat(d[id])}
    })}
  })

//========================= GRAB & SET UP SVG ELEMENT ============================
  let svg = d3.select("#graph"),
  margin = {top: 20, right: 80, bottom: 100, left: 50},
  width = svg.attr("width") - margin.left - margin.right,
  height = svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
  colorScheme = ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#a6cee3", "#a65628", "#f781bf"]
  color = d3.scaleOrdinal(colorScheme);
  legendSpace = width/aspects.length;

  svg.attr("width") - margin.left - margin.right;
  svg.attr("height") - margin.top - margin.bottom;

  //========================== SET UP AXIS =======================================

  let x = d3.scaleTime().range([0, width]), //x axis is the time dimension, time scale
      y = d3.scaleLinear().range([height, 0]), //y is the data dimension, linear scale
      z = d3.scaleOrdinal(colorScheme); //z is the series dimension, categorical scale for each line

//============================= SET UP LINE =====================================
  let line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) {return y(d.score); });

x.domain(d3.extent(testData, function(d) { return Date.parse(d.date);}));

y.domain([
  d3.min(inputData, function(c) { return d3.min(c.values, function(d) { return d.score;}); }),
  d3.max(inputData, function(c) { return d3.max(c.values, function(d) { return d.score}); })
]);

z.domain(inputData.map(function(c) { return c.id; }));

g.append("g")
  .attr("class", "axis axis--x")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

g.append("g")
  .attr("class", "axis axis--y")
  .call(d3.axisLeft(y))
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.71em")
  .attr("fill", "#000")
  .text("Rating (1-5)")

  let aspect = g.selectAll(".aspect")
    .data(inputData)
    .enter().append("g")
      .attr("class", "aspect")

  aspect.append("path")
    .attr("class", "line")
    .attr("d", function(d) { return line(d.values); })
    .attr("id", function(d) { return d.id})
    .style("stroke", function(d) {console.log('from path',d.id);return color(d.id); });

  let count = -1;

  let text = g.selectAll(".legendItem")
    .data(inputData)
    .enter()
    .append("text")
    .attr("class", "legendItem")
    .attr("id", function(d) {
      return d.id + "text";
    })
    .attr("x", function(d,i) { return (legendSpace/2) + (count+=1) * legendSpace })
    .attr("y", height + (margin.bottom/2) + 5)
    .attr("class", "legend")
    .style("padding", "15px")
    .style("fill", function(d) {
      return d.color = color(d.id) })
      .style("text-decoration", "none")
    .text(function(d) { return d.id })
    .on("click", function(d) {
      let active = d.active ? false : true,
      newOpacity = active ? 0 : 1;
      d3.select("#" + d.id)
        .transition().duration(100)
        .style("opacity", newOpacity)
      d3.select("#" + d.id + "text")
      .style("text-decoration", function(d) {
        return d.active ? "none" : "line-through" })
      .style("fill", function(d) {
        return d.active ? d.color : "grey" })
      d.active = active;
    })

}

chartData(testData);
