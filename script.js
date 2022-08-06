var app = document.getElementById('writer');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Open for Magic !!!!')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Open for Magic !!!!')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Open for Magic !!!!.</strong>')
    .pauseFor(2500)
    .start();