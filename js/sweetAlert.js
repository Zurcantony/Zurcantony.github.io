var miRuleta = new Winwheel({

    'numSegments': 32,
    'outerRadius': 295,
    'segments': [
        { 'fillStyle': '#f1c40f', 'text': 'Pupusas-Pie Der' },
        { 'fillStyle': '#2ecc71', 'text': 'Elotes Locos-Pie Der' },
        { 'fillStyle': '#e67e22', 'text': 'Cipitio-Pie Der' },
        { 'fillStyle': '#e74c3c', 'text': 'Siguanaba-Pie Der' },
        { 'fillStyle': '#8e44ad', 'text': 'Bolas de Fuego-Pie Der' },
        { 'fillStyle': '#00bfff', 'text': 'Canaval de San Mig-Pie Der' },
        { 'fillStyle': '#00ffff', 'text': 'Playa el Tunco-Pie Der' },
        { 'fillStyle': '#e30052', 'text': 'Volcán de Izalco-Pie Der' },
        { 'fillStyle': '#f1c40f', 'text': 'Pupusas-Pie Izq' },
        { 'fillStyle': '#2ecc71', 'text': 'Elotes Locos-Pie Izq' },
        { 'fillStyle': '#e67e22', 'text': 'Cipitio-Pie Izq' },
        { 'fillStyle': '#e74c3c', 'text': 'Siguanaba-Pie Izq' },
        { 'fillStyle': '#8e44ad', 'text': 'Bolas de Fuego-Pie Izq' },
        { 'fillStyle': '#00bfff', 'text': 'Canaval de San Mig-Pie Izq' },
        { 'fillStyle': '#00ffff', 'text': 'Playa el Tunco-Pie Izq' },
        { 'fillStyle': '#e30052', 'text': 'Volcán de Izalco-Pie Izq' },
        { 'fillStyle': '#f1c40f', 'text': 'Pupusas-Mano Der' },
        { 'fillStyle': '#2ecc71', 'text': 'Elotes Locos-Mano Der' },
        { 'fillStyle': '#e67e22', 'text': 'Cipitio-Mano Der' },
        { 'fillStyle': '#e74c3c', 'text': 'Siguanaba-Mano Der' },
        { 'fillStyle': '#8e44ad', 'text': 'Bolas de Fuego-Mano Der' },
        { 'fillStyle': '#00bfff', 'text': 'Canaval de San Mig-Mano Der' },
        { 'fillStyle': '#00ffff', 'text': 'Playa el Tunco-Mano Der' },
        { 'fillStyle': '#e30052', 'text': 'Volcán de Izalco-Mano Der' },
        { 'fillStyle': '#f1c40f', 'text': 'Pupusas-Mano Izq' },
        { 'fillStyle': '#2ecc71', 'text': 'Elotes Locos-Mano Izq' },
        { 'fillStyle': '#e67e22', 'text': 'Cipitio-Mano Izq' },
        { 'fillStyle': '#e74c3c', 'text': 'Siguanaba-Mano Izq' },
        { 'fillStyle': '#8e44ad', 'text': 'Bolas de Fuego-Mano Izq' },
        { 'fillStyle': '#00bfff', 'text': 'Canaval de San Mig-Mano Izq' },
        { 'fillStyle': '#00ffff', 'text': 'Playa el Tunco-Mano Izq' },
        { 'fillStyle': '#e30052', 'text': 'Volcán de Izalco-Mano Izq' },
    ],
    'animation': {
        'type': 'spinToStop',
        'duration': 8,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    }
});

dibujarIndicador();
function Mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    Swal.fire("Listo para la  " + SegmentoSeleccionado.text);

    if (SegmentoSeleccionado.text == "Pupusas-Pie Derecho") {
        $('#myModal1').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Elotes Locos-Pie Derecho") {
        $('#myModal2').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Cipitio-Pie Derecho") {
        $('#myModal3').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Siguanaba-Pie Derecho") {
        $('#myModal4').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Bolas de Fuego-Pie Derecho") {
        $('#myModal5').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Carnaval de San Miguel-Pie Derecho") {
        $('#myModal6').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Playa El Tunco-Pie Derecho") {
        $('#myModal7').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Volcán de Izalco-Pie Derecho") {
        $('#myModal8').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Pupusas-Pie Derecho") {
        $('#myModal9').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Elotes Locos-Pie Derecho") {
        $('#myModal10').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Cipitio-Pie Derecho") {
        $('#myModal11').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Siguanaba-Pie Derecho") {
        $('#myModal12').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Bolas de Fuego-Pie Derecho") {
        $('#myModal13').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Carnaval de San Miguel-Pie Derecho") {
        $('#myModal14').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Playa El Tunco-Pie Derecho") {
        $('#myModal15').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Volcán de Izalco-Pie Derecho") {
        $('#myModal16').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Pupusas-Pie Derecho") {
        $('#myModal17').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Elotes Locos-Pie Derecho") {
        $('#myModal18').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Cipitio-Pie Derecho") {
        $('#myModal19').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Siguanaba-Pie Derecho") {
        $('#myModal20').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Bolas de Fuego-Pie Derecho") {
        $('#myModal21').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Carnaval de San Miguel-Pie Derecho") {
        $('#myModal22').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Playa El Tunco-Pie Derecho") {
        $('#myModal23').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Volcán de Izalco-Pie Derecho") {
        $('#myModal24').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Pupusas-Pie Derecho") {
        $('#myModal25').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Elotes Locos-Pie Derecho") {
        $('#myModal26').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Cipitio-Pie Derecho") {
        $('#myModal27').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Siguanaba-Pie Derecho") {
        $('#myModal28').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Bolas de Fuego-Pie Derecho") {
        $('#myModal29').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Carnaval de San Miguel-Pie Derecho") {
        $('#myModal30').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Playa El Tunco-Pie Derecho") {
        $('#myModal31').modal({ backdrop: 'static' });
    }
    if (SegmentoSeleccionado.text == "Volcán de Izalco-Pie Derecho") {
        $('#myModal32').modal({ backdrop: 'static' });
    }

    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    miRuleta.draw();
    dibujarIndicador();
}
function dibujarIndicador() {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(320, 0);
    ctx.lineTo(300, 40);
    ctx.lineTo(280, 0);
    ctx.stroke();
    ctx.fill();
}
