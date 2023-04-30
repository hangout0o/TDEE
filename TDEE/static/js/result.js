function shortline(){
    window.open("/shortline","_self");
}
function mediumline(){
    window.open("/mediumline","_self");
}
function longline(){
    window.open("/longline","_self");
}
function models()
{
    window.open("/models","_self");
}
function about()
{
    window.open("https://en.wikipedia.org/wiki/Transmission_line","_self");
}
function root()
{
    window.open("/","_self");
}
function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}

function writeText(text,X,Y){
    ctx.font = '15px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(text,X+1 ,Y+9);
}
var canvas = document.getElementById("cplot");
var ctx = canvas.getContext("2d");

var grid_size = 25;
var x_axis_distance_grid_lines = 16;
var y_axis_distance_grid_lines = 16;
var x_axis_starting_point = { number: 1, suffix: '' };
var y_axis_starting_point = { number: 1, suffix: '' };

// canvas width
var canvas_width = canvas.width;

// canvas height
var canvas_height = canvas.height;

// no of vertical grid lines
var num_lines_x = Math.floor(canvas_height/grid_size);

// no of horizontal grid lines
var num_lines_y = Math.floor(canvas_width/grid_size);
// Draw grid lines along X-axis
for(var i=0; i<=num_lines_x; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#e9e9e9";
    
    if(i == num_lines_x) {
        ctx.moveTo(0, grid_size*i);
        ctx.lineTo(canvas_width, grid_size*i);
    }
    else {
        ctx.moveTo(0, grid_size*i+0.5);
        ctx.lineTo(canvas_width, grid_size*i+0.5);
    }
    ctx.stroke();
}
// Draw grid lines along Y-axis
for(i=0; i<=num_lines_y; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents Y-axis draw in different color
    if(i == y_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#e9e9e9";
    
    if(i == num_lines_y) {
        ctx.moveTo(grid_size*i, 0);
        ctx.lineTo(grid_size*i, canvas_height);
    }
    else {
        ctx.moveTo(grid_size*i+0.5, 0);
        ctx.lineTo(grid_size*i+0.5, canvas_height);
    }
    ctx.stroke();
}
ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);
// Ticks marks along the positive X-axis
for(i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(grid_size*i+0.5, -3);
    ctx.lineTo(grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(x_axis_starting_point.number*i + x_axis_starting_point.suffix, grid_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-grid_size*i+0.5, -3);
    ctx.lineTo(-grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'end';
    ctx.fillText(-x_axis_starting_point.number*i + x_axis_starting_point.suffix, -grid_size*i+3, 15);
}
// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(num_lines_x - x_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, grid_size*i+0.5);
    ctx.lineTo(3, grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(-y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, grid_size*i+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<x_axis_distance_grid_lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -grid_size*i+0.5);
    ctx.lineTo(3, -grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
}
