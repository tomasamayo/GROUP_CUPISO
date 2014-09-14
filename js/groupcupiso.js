$(document)['ready'](function () {
    var _0x749dx1 = $('#menu');
    var _0x749dx2 = Modernizr['csstransforms'] && Modernizr['csstransforms3d'];
    Modernizr['load']({
        test: _0x749dx2,
        yep: ['js/jmpress.js'],
        nope: ['js/waypoint.js', 'js/scroll.js'],
        complete: function () {
            if (_0x749dx2) {
                $('#animationContainer')['jmpress']({
                    viewPort: {
                        width: 900,
                        height: 900,
                        maxScale: 1
                    },
                    beforeChange: function (_0x749dx3, _0x749dx4) {
                        var _0x749dx5 = '#' + _0x749dx3['attr']('id');
                        var _0x749dx6 = $('.current a', _0x749dx1);
                        if (_0x749dx6 && _0x749dx6['attr']('href') != _0x749dx5) {
                            _0x749dx1['hide']();
                            _0x749dx3['append'](_0x749dx1);
                            menuHighlight(_0x749dx5, _0x749dx1);
                            _0x749dx1['fadeIn']('slow');
                        };
                    }
                });
            } else {
                $('body')['addClass']('ctLegacy');
                var _0x749dx7 = $('#animationContainer')['offset']();
                _0x749dx1['css']('left', _0x749dx7['left'])['fadeIn']('slow');
                $('a', _0x749dx1)['click'](function () {
                    var _0x749dx5 = $(this)['attr']('href');
                    var _0x749dx8 = $(this);
                    $(document)['scrollTo']($(_0x749dx5), {
                        duration: 1100,
                        onAfter: function () {
                            menuHighlight(_0x749dx5, _0x749dx1);
                        }
                    });
                    return false;
                });
                $('.step')['waypoint'](function (_0x749dx9, _0x749dxa) {
                    menuHighlight('#' + $(_0x749dx9['currentTarget'])['attr']('id'), _0x749dx1);
                });
                if (!$('li.current', _0x749dx1)['length']) {
                    $('li:first', _0x749dx1)['addClass']('current');
                };
            };
        }
    });
    if (!Modernizr['input']['placeholder']) {
        $('[placeholder]')['focus'](function () {
            var _0x749dxb = $(this);
            if (_0x749dxb['val']() == _0x749dxb['attr']('placeholder')) {
                _0x749dxb['val']('');
                _0x749dxb['removeClass']('placeholder');
            };
        })['blur'](function () {
            var _0x749dxb = $(this);
            if (_0x749dxb['val']() == '' || _0x749dxb['val']() == _0x749dxb['attr']('placeholder')) {
                _0x749dxb['addClass']('placeholder');
                _0x749dxb['val'](_0x749dxb['attr']('placeholder'));
            };
        })['blur']();
        $('[placeholder]')['parents']('form')['submit'](function () {
            $(this)['find']('[placeholder]')['each'](function () {
                var _0x749dxb = $(this);
                if (_0x749dxb['val']() == _0x749dxb['attr']('placeholder')) {
                    _0x749dxb['val']('');
                };
            });
        });
    };
});

function menuHighlight(_0x749dxd, _0x749dx1) {
    var _0x749dxe = $('a[href=' + _0x749dxd + ']', _0x749dx1);
    $('.current', _0x749dx1)['removeClass']('current');
    _0x749dxe['closest']('li')['addClass']('current');
};