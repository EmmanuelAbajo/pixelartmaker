$('#submit-btn').on('click', function(e){
	e.preventDefault();
	const height = $('#inputHeight').val();
	const width = $('#inputWeight').val();
	const table = $('#pixelCanvas');
	table.empty();
	makeGrid(height, width, table);
});
// When size is submitted by the user, call makeGrid()

function makeGrid(x, y, t) {
	let row, col, col_id;
	for (let j = 0; j < y; j++) {
		row = document.createElement('tr');
		t.append(row);

		for (let i = 0; i < x; i++) {
			col = document.createElement('td');
			row.append(col);
		}
	}
}

$('#pixelCanvas').click(function(e) {
	var box_element = e.target;
	const color = $('#colorPicker').val();
	box_element.style.backgroundColor = color;
});