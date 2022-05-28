let placar = [0, 0];

function ganhou() {
    placar[0]++;
    document.getElementById('jogadorPontos').innerHTML = placar[0];
    document.getElementById('notifica-resultado').innerHTML = 'Você ganhou!';
    document.getElementById('notifica-resultado').setAttribute('class', 'ganhou');
    setTimeout(() => {
        document.getElementById('notifica-resultado').setAttribute('class', 'esconde');
        document.getElementById('pc').src = "assets/img/pc.png"
    }, 2000);

}

function perdeu() {
    placar[1]++;
    document.getElementById('pcPontos').innerHTML = placar[1];
    document.getElementById('notifica-resultado').innerHTML = "Você perdeu ;(";
    document.getElementById('notifica-resultado').setAttribute('class', 'perdeu');
    setTimeout(() => {
        document.getElementById('notifica-resultado').setAttribute('class', 'esconde');
        document.getElementById('pc').src = "assets/img/pc.png";
    }, 2000);
}

function empate() {
    document.getElementById('notifica-resultado').innerHTML = "Deu empate!";
    document.getElementById('notifica-resultado').setAttribute('class', 'empate');
    setTimeout(() => {
        document.getElementById('notifica-resultado').setAttribute('class', 'esconde');
        document.getElementById('pc').src = "assets/img/pc.png";
    }, 2000);
}

function reiniciar() {
    placar = [0, 0];
    document.getElementById('pc').src = "assets/img/pc.png";
    document.getElementById('jogadorPontos').innerHTML = placar[0];
    document.getElementById('pcPontos').innerHTML = placar[1];
    document.getElementById('notifica-resultado').setAttribute('class', 'esconde');
}

function jogar() {
    if (document.getElementById('Pedra').checked == false &&
        document.getElementById('Papel').checked == false &&
        document.getElementById('Tesoura').checked == false) {
        alert("Para jogar, você deve selecionar uma opção!");
    } else {
        let sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "assets/img/pc_pedra.png";
                break;
            case 1:
                document.getElementById('pc').src = "assets/img/pc_papel.png";
                break;
            case 2:
                document.getElementById('pc').src = "assets/img/pc_tesoura.png";
                break;
        }
        //empates
        if (document.getElementById('Pedra').checked == true && sorteio == 0) {
            empate();
        } else if (document.getElementById('Papel').checked == true && sorteio == 1) {
            empate();
        } else if (document.getElementById('Tesoura').checked == true && sorteio == 2) {
            empate();
        }
        //perca
        else if (document.getElementById('Pedra').checked == true && sorteio == 1) {
            perdeu();
        } else if (document.getElementById('Papel').checked == true && sorteio == 2) {
            perdeu();
        } else if (document.getElementById('Tesoura').checked == true && sorteio == 0) {
            perdeu();
        }
        //ganha
        else if (document.getElementById('Pedra').checked == true && sorteio == 2) {
            ganhou();
        } else if (document.getElementById('Papel').checked == true && sorteio == 0) {
            ganhou();
        } else if (document.getElementById('Tesoura').checked == true && sorteio == 1) {
            ganhou();
        }
    }
}

