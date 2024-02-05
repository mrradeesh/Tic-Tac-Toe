var boxes = document.querySelectorAll(".box");
var reset_btn = document.querySelectorAll(".btn_reset");
var newgame_btn = document.querySelectorAll(".n_game");
var hide = document.querySelectorAll("winner_Container");
var winnermsg = document.querySelectorAll(".winner_msg");
const result = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let player1=true;
  let win=null;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (player1 && win == null) {
            box.innerHTML = "O";
            player1 = false;
          } else if (!player1 && win == null) {
            box.innerHTML = "X";
            player1 = true;
          }
          if (win == null) {
            win = checkWin();
          } else {
            //showmsg(win);
            winnermsg.innerHTML = "Winner is " + win;
            alert("Winner is " + win);
            boxes.forEach((dis_btn) => {
              dis_btn.disabled = true;
            });
          }
          box.disabled = true;
     });

});


var checkWin = () => {
    for (p of result) {
      let w1 = boxes[p[0]].innerHTML;
      let w2 = boxes[p[1]].innerHTML;
      let w3 = boxes[p[2]].innerHTML;
      if (w1 != "" && w2 != "" && w3 != "") {
        if (w1 === w2 && w2 === w3) {
          return w1;
        }
      }
    }
  };
// newgame_btn.addEventListener("click",()=>{alert("clicked on reset")});