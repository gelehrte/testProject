$(document).ready(function() {
    'use strict';
    console.log('jQuery はすでにロードされているはず。'); 
    console.log('main.js をロードした?');
    paper.install(window); 
    paper.setup(document.getElementById('mainCanvas'));
    /* ここで描画する */
    let c;
    for(let x=25; x<400; x+=50) {
        for(let y=25; y<400; y+=50) { 
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green'; 
        }
    }
    paper.view.draw();
    paper.setup(document.getElementById('mainCanvas2'));
    let tool = new Tool();
    tool.onMouseDown = function(event) {
        let c = Shape.Circle(event.point.x, event.point.y, 80); //円
        c.fillColor = 'black'; // 中を黒く塗る
        let text = new PointText(event.point.x, event.point.y); //新しいテキストを領域中央に
        text.justification = 'center'; //センタリング 
        text.fillColor = 'white'; //色
        text.fontSize = 20; //フォントサイズ text.content = 'hello world'; //文字列
        text.content = 'hello world'; //文字列
    };
});