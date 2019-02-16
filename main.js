const sudoku = document.querySelector('.sudoku');

const splitRow = (row) => {
  const board = [];
  let tempArray = [];
  let arrIndex = 0;

  for (let i = 0; i < row.length; i++) {
    tempArray[arrIndex] = row[i];

    arrIndex++;

    if (tempArray.length === 3) {
      board[board.length] = tempArray;

      arrIndex = 0;
      tempArray = [];
    }
  }

  return board;
};

// create nodes
const cells = [...Array(81)].map((item, index) => {
  const element = document.createElement('div');

  element.setAttribute('class', 'sudoku--cell');
  element.setAttribute('data-cell', index);

  return element;
});

cells.forEach((cellItem, index) => {
  sudoku.appendChild(cellItem);
});
