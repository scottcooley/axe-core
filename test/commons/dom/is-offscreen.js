describe('dom.isOffscreen', function () {
	'use strict';
	var fixture = document.getElementById('fixture');

	afterEach(function () {
		fixture.innerHTML = '';
		document.body.style.direction = 'ltr';
	});

	it('should detect elements positioned outside the left edge', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; width: 50px; left: -51px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isTrue(commons.dom.isOffscreen(el));
	});

	it('should detect elements positioned outside the top edge', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; height: 50px; top: -51px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isTrue(commons.dom.isOffscreen(el));
	});

	it('should never detect elements positioned outside the bottom edge', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; height: 50px; bottom: -501px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isFalse(commons.dom.isOffscreen(el));
	});

	it('should detect elements positioned that bleed inside the left edge', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; width: 50px; left: -49px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isFalse(commons.dom.isOffscreen(el));
	});

	it('should detect elements positioned outside the right edge', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; width: 50px; right: -49px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isFalse(commons.dom.isOffscreen(el));
	});

	it('should detect elements positioned outside the top edge', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; height: 50px; top: -49px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isFalse(commons.dom.isOffscreen(el));
	});

	it('should detect elements positioned outside the bottom edge', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; height: 50px; bottom: -49px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isFalse(commons.dom.isOffscreen(el));
	});

	it('should detect elements that are made off-screen by a parent', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; width: 50px; left: -51px;">' +
			'<div id="target">Offscreen?</div>' +
		'</div>';

		var el = document.getElementById('target');

		assert.isTrue(commons.dom.isOffscreen(el));

	});
	it('should NOT detect elements positioned outside the right edge on LTR documents', function () {
		fixture.innerHTML = '<div id="target" style="position: absolute; width: 50px; right: -51px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isFalse(commons.dom.isOffscreen(el));
	});



	it('should detect elements positioned outside the right edge on RTL documents', function () {
		document.body.style.direction = 'rtl';
		fixture.innerHTML = '<div id="target" style="position: absolute; width: 50px; right: -151px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isTrue(commons.dom.isOffscreen(el));
	});
	it('should NOT detect elements positioned outside the left edge on RTL documents', function () {
		document.body.style.direction = 'rtl';
		fixture.innerHTML = '<div id="target" style="position: absolute; width: 50px; left: -51px;">Offscreen?</div>';
		var el = document.getElementById('target');

		assert.isFalse(commons.dom.isOffscreen(el));
	});

});
