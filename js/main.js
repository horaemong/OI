(function () {
  const pos = {
    x: 0,
    y: 0,
    z: 0
  }

  const gamemachine_img = {
    side: '',
    top: '',
    top2: '',
    pannel: '',
    board_top: '',
    board_bottom: '',
    mid: '',
    bottom: '',
    bottom2: '',
    bottom3: ''
  }

  const url = '';

  const page = {
    title: '',
    logo: '',
    content: ''
  }

  new GameMachine({
    build_pos: pos,
    img: gamemachine_img,
    url: url,
    page: page
  });
})();