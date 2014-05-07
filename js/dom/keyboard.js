/*global define*/
define(["dom/events"], function (events) {
    var returns = {};
    returns.keyReturn = function (dom) {
        events.keypress(dom, function (evt) {
            return evt.keycode;
        });
    };

    var documentKeydown = function (evt)
	{
		var keyCode = evt.keyCode;
		var code = {
		    a: 65,
			b: 66,
			c: 67,
			d: 68,
			e: 69,
			f: 70,
			g: 71,
			h: 72,
			i: 73,
			j: 74,
			k: 75,
			l: 76,
			m: 77,
			n: 78,
			o: 79,
			p: 80,
			q: 81,
			r: 82,
			s: 83,
			t: 84,
			u: 85,
			v: 86,
			w: 87,
			x: 88,
			y: 89,
			z: 90,
			nums: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
			alt: 18,
			ctrl: 17,
			shift: 16,
			space: 32,
			esc: 27
		};

		if (evt.ctrlKey && (keyCode === code.b))
		{
		    if (document.getElementById("pjsCode").innerHTML === "") {
		        Processing.reload();
		        document.getElementById("pjs").hidden = true;
		    } else {
			    Processing.reload();
			    document.getElementById("pjs").hidden = false;
		    }
		}
	};

});
