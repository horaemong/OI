function GameMachine(info) {
  console.log(info);
  this.mainElem = document.createElement('div');
  this.mainElem.classList.add('game_machine');
  this.mainElem.innerHTML = `
  <div class="left"></div>
        <div class="right"></div>
        <div class="top2"></div>
        <div class="top"></div>
        <div class="pannel"></div>
        <div class="joystick_board">
          <div class="joystick">
            <div class="column">
              <div class="a one"></div>
              <div class="a two"></div>
              <div class="a three"></div>
              <div class="a four"></div>
            </div>
            <div class="square">
              <div class="a one"></div>
              <div class="a two"></div>
              <div class="a three"></div>
              <div class="a four"></div>
              <div class="a five"></div>
              <div class="a six"></div>
            </div>
          </div>
          <div class="button red"></div>
          <div class="button blue"></div>
          <div class="button yellow"></div>
          <div class="button green"></div>
        </div>
        <div class="joystick_board_bottom"></div>
        <div class="mid"></div>
        <div class="bottom"></div>
        <div class="bottom2"></div>
        <div class="bottom3"></div>
  `

  document.querySelector('.wall_container').appendChild(this.mainElem);
};