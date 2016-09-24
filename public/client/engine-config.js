define(['quintus'], function (quintus) {
    var Q = quintus({audioSupported: [ 'wav', 'mp3' ]})
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, Audio')
        .setup({ maximize: true })
        .enableSound()
        .controls().touch();

    return Q;
});
