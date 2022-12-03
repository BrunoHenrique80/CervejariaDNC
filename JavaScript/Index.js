const gotoNextPage = (permitido = 0) => {
    if (permitido === 1) {
      window.location.href = `SegundoMenu.html?permitido=${permitido}`;
    } else {
      window.location.href = "SegundoMenu.html";
    }
  }; 