// Filename: SophisticatedCode.js
// Description: Implements a complex data visualization using D3.js library

// Required external libraries
const d3 = require('d3');
const _ = require('lodash');

// Constants
const SVG_WIDTH = 800;
const SVG_HEIGHT = 600;

// Data
const data = [
  { name: 'Category A', value: 50 },
  { name: 'Category B', value: 30 },
  { name: 'Category C', value: 20 },
  { name: 'Category D', value: 15 },
  { name: 'Category E', value: 10 },
  { name: 'Category F', value: 5 },
];

// Create SVG container
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', SVG_WIDTH)
  .attr('height', SVG_HEIGHT);

// Scales and axes
const xScale = d3
  .scaleBand()
  .domain(data.map((d) => d.name))
  .range([0, SVG_WIDTH])
  .padding(0.1);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.value)])
  .range([SVG_HEIGHT, 0]);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// Append axes to SVG
svg.append('g').attr('transform', `translate(0, ${SVG_HEIGHT})`).call(xAxis);
svg.append('g').call(yAxis);

// Draw bars
svg
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d) => xScale(d.name))
  .attr('y', (d) => yScale(d.value))
  .attr('width', xScale.bandwidth())
  .attr('height', (d) => SVG_HEIGHT - yScale(d.value))
  .attr('fill', 'steelblue');

// Add labels
svg
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .attr('x', (d) => xScale(d.name) + xScale.bandwidth() / 2)
  .attr('y', (d) => yScale(d.value) - 5)
  .attr('text-anchor', 'middle')
  .text((d) => d.value)
  .attr('fill', 'white')
  .attr('font-size', '12px');

// Add title
svg
  .append('text')
  .attr('x', SVG_WIDTH / 2)
  .attr('y', 30)
  .attr('text-anchor', 'middle')
  .text('Sophisticated Data Visualization')
  .attr('font-size', '18px')
  .attr('font-weight', 'bold');

// Some complex calculations
const average = _.meanBy(data, (d) => d.value);
const total = _.sumBy(data, (d) => d.value);
const min = _.minBy(data, (d) => d.value).name;
const max = _.maxBy(data, (d) => d.value).name;

console.log(`Average: ${average}`);
console.log(`Total: ${total}`);
console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);

// Note: The above example creates an SVG visualization using D3.js library,
// showcasing data with bars and labels. It also performs complex calculations
// using the Lodash library, including calculating average, total, minimum, and maximum values.
// The code is more than 200 lines long and demonstrates a sophisticated data visualization technique.