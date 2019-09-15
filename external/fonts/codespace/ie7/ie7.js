/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'CodeSpace\'">' + entity + '</span>' + html;
	}
	var icons = {
		'cs-codespace-logo-col': '&#xe91b;',
		'cs-the-engineers-logo-col': '&#xe919;',
		'cs-marmmat-logo-col': '&#xe902;',
		'cs-paasal-logo-col': '&#xe91a;',
		'cs-the-engineers-col': '&#xe901;',
		'cs-paasal-col': '&#xe90d;',
		'cs-marmmat-col': '&#xe903;',
		'cs-codespace-col': '&#xe900;',
		'cs-ts-col': '&#xe922;',
		'cs-mm-col': '&#xe904;',
		'cs-pa-col': '&#xe921;',
		'cs-codespace-logo': '&#xe92a;',
		'cs-the-engineers-logo': '&#xe927;',
		'cs-marmmat-logo': '&#xe928;',
		'cs-paasal-logo': '&#xe929;',
		'cs-the-engineers': '&#xe924;',
		'cs-marmmat': '&#xe925;',
		'cs-paasal': '&#xe926;',
		'cs-codespace': '&#xe923;',
		'cs-te': '&#xe92b;',
		'cs-mm': '&#xe92c;',
		'cs-pa': '&#xe92d;',
		'cs-builder': '&#xe92e;',
		'cs-builder-1': '&#xe92f;',
		'cs-carpenter': '&#xe930;',
		'cs-construction-worker': '&#xe931;',
		'cs-electrician': '&#xe932;',
		'cs-electrician-1': '&#xe933;',
		'cs-electrician-2': '&#xe934;',
		'cs-electrician-3': '&#xe935;',
		'cs-internet': '&#xe936;',
		'cs-macbook': '&#xe937;',
		'cs-maid': '&#xe938;',
		'cs-maid-1': '&#xe939;',
		'cs-maid-2': '&#xe93a;',
		'cs-plumber': '&#xe93b;',
		'cs-plumber-1': '&#xe93c;',
		'cs-plumber-working': '&#xe93d;',
		'cs-plunger': '&#xe93e;',
		'cs-saw': '&#xe93f;',
		'cs-system': '&#xe940;',
		'cs-technician-with-glasses': '&#xe941;',
		'cs-vacuum-cleaner': '&#xe942;',
		'cs-welder': '&#xe943;',
		'cs-welder-1': '&#xe944;',
		'cs-worker': '&#xe945;',
		'cs-air-conditioner': '&#xe946;',
		'cs-air-conditioner-1': '&#xe947;',
		'cs-antique-balcony': '&#xe948;',
		'cs-apple-tv': '&#xe949;',
		'cs-arcade': '&#xe94a;',
		'cs-battery': '&#xe94b;',
		'cs-boiler': '&#xe94c;',
		'cs-broken-cable': '&#xe94d;',
		'cs-cabinet': '&#xe94e;',
		'cs-carpenter1': '&#xe94f;',
		'cs-cctv': '&#xe950;',
		'cs-cd-player': '&#xe951;',
		'cs-cd-player-1': '&#xe952;',
		'cs-classroom-pc': '&#xe953;',
		'cs-cleaner': '&#xe954;',
		'cs-cleaner-1': '&#xe955;',
		'cs-cleaning': '&#xe956;',
		'cs-cleaning-service': '&#xe957;',
		'cs-computer': '&#xe958;',
		'cs-cooker': '&#xe959;',
		'cs-cooking': '&#xe95a;',
		'cs-cooler': '&#xe95b;',
		'cs-copy-machine': '&#xe95c;',
		'cs-copy-machine-1': '&#xe95d;',
		'cs-copy-machine-2': '&#xe95e;',
		'cs-cracked-home': '&#xe95f;',
		'cs-desktop-computer': '&#xe960;',
		'cs-desktop-pc': '&#xe961;',
		'cs-door-and-window': '&#xe962;',
		'cs-drain': '&#xe963;',
		'cs-electric-meter': '&#xe964;',
		'cs-electronic': '&#xe965;',
		'cs-energy': '&#xe966;',
		'cs-extractor-hood': '&#xe967;',
		'cs-extractor-hood-1': '&#xe968;',
		'cs-fan': '&#xe969;',
		'cs-fan-1': '&#xe96a;',
		'cs-faucet': '&#xe96b;',
		'cs-faucet-1': '&#xe96c;',
		'cs-fire-alarm': '&#xe96d;',
		'cs-flooring': '&#xe96e;',
		'cs-fridge': '&#xe96f;',
		'cs-fridge-1': '&#xe970;',
		'cs-fridge-2': '&#xe971;',
		'cs-gamer': '&#xe972;',
		'cs-home-automation': '&#xe973;',
		'cs-hood': '&#xe974;',
		'cs-imac': '&#xe975;',
		'cs-iron-fence': '&#xe976;',
		'cs-ladder': '&#xe977;',
		'cs-laptop': '&#xe978;',
		'cs-laundry': '&#xe979;',
		'cs-laundry-1': '&#xe97a;',
		'cs-led-bulb': '&#xe97b;',
		'cs-livingroom-sofa': '&#xe97c;',
		'cs-locker': '&#xe97d;',
		'cs-macbook1': '&#xe97e;',
		'cs-macbook-1': '&#xe97f;',
		'cs-man-watering-a-plant': '&#xe980;',
		'cs-microwave': '&#xe981;',
		'cs-microwave-oven': '&#xe982;',
		'cs-microwave-oven-1': '&#xe983;',
		'cs-minisplit': '&#xe984;',
		'cs-monitor': '&#xe985;',
		'cs-monitor-1': '&#xe986;',
		'cs-monitor-2': '&#xe987;',
		'cs-monitor-3': '&#xe988;',
		'cs-mop': '&#xe989;',
		'cs-motion-sensor': '&#xe98a;',
		'cs-network': '&#xe98b;',
		'cs-opened-window-door': '&#xe98c;',
		'cs-paint': '&#xe98d;',
		'cs-paint-1': '&#xe98e;',
		'cs-panel': '&#xe98f;',
		'cs-panel-1': '&#xe990;',
		'cs-pet-hotel-dog': '&#xe991;',
		'cs-pipe': '&#xe992;',
		'cs-pipe-1': '&#xe993;',
		'cs-pipe-2': '&#xe994;',
		'cs-pipe-3': '&#xe995;',
		'cs-pipe-4': '&#xe996;',
		'cs-pipe-5': '&#xe997;',
		'cs-pipes': '&#xe998;',
		'cs-plastering': '&#xe999;',
		'cs-plug': '&#xe99a;',
		'cs-plug-1': '&#xe99b;',
		'cs-plumber1': '&#xe99c;',
		'cs-plumber-11': '&#xe99d;',
		'cs-plumber-2': '&#xe99e;',
		'cs-plumbing': '&#xe99f;',
		'cs-plumbing-1': '&#xe9a0;',
		'cs-print': '&#xe9a1;',
		'cs-printer': '&#xe9a2;',
		'cs-printer-tool': '&#xe9a3;',
		'cs-projector': '&#xe9a4;',
		'cs-radio': '&#xe9a5;',
		'cs-refrigerator': '&#xe9a6;',
		'cs-responsive': '&#xe9a7;',
		'cs-roof': '&#xe9a8;',
		'cs-router': '&#xe9a9;',
		'cs-router-1': '&#xe9aa;',
		'cs-scanner': '&#xe9ab;',
		'cs-screen': '&#xe9ac;',
		'cs-sensor': '&#xe9ad;',
		'cs-serving-drinks': '&#xe9ae;',
		'cs-small-oven': '&#xe9af;',
		'cs-smart-tv': '&#xe9b0;',
		'cs-smart-tv-1': '&#xe9b1;',
		'cs-smoke-detector': '&#xe9b2;',
		'cs-smoke-detector-1': '&#xe9b3;',
		'cs-sofa': '&#xe9b4;',
		'cs-solar-panel': '&#xe9b5;',
		'cs-sound-system': '&#xe9b6;',
		'cs-sound-system-1': '&#xe9b7;',
		'cs-sound-system-2': '&#xe9b8;',
		'cs-stairs': '&#xe9b9;',
		'cs-stove': '&#xe9ba;',
		'cs-surveillance-camera': '&#xe9bb;',
		'cs-switch': '&#xe9bc;',
		'cs-tablet': '&#xe9bd;',
		'cs-telephone': '&#xe9be;',
		'cs-television': '&#xe9bf;',
		'cs-toolbox': '&#xe9c0;',
		'cs-tools': '&#xe9c1;',
		'cs-tv': '&#xe9c2;',
		'cs-wash': '&#xe9c3;',
		'cs-washing-machine': '&#xe9c4;',
		'cs-washing-machine-1': '&#xe9c5;',
		'cs-washing-machine-2': '&#xe9c6;',
		'cs-water': '&#xe9c7;',
		'cs-water-filter': '&#xe9c8;',
		'cs-water-heater': '&#xe9c9;',
		'cs-water-heater-1': '&#xe9ca;',
		'cs-water-tap-with-drop': '&#xe9cb;',
		'cs-wifi-router': '&#xe9cc;',
		'cs-window-building-detail': '&#xe9cd;',
		'cs-wire': '&#xe9ce;',
		'cs-wires': '&#xe9cf;',
		'cs-wrench': '&#xe9d0;',
		'cs-d': '&#xe905;',
		'cs-d-1': '&#xe906;',
		'cs-d-printing-software': '&#xe907;',
		'cs-android-device': '&#xe908;',
		'cs-apartments': '&#xe909;',
		'cs-apk-file-format': '&#xe90a;',
		'cs-apk-open-file-format': '&#xe90b;',
		'cs-app': '&#xe90c;',
		'cs-app-development': '&#xe90e;',
		'cs-arm': '&#xe90f;',
		'cs-blueprint': '&#xe910;',
		'cs-broken-house': '&#xe911;',
		'cs-building': '&#xe912;',
		'cs-building-1': '&#xe913;',
		'cs-building-2': '&#xe914;',
		'cs-cad-file-format-symbol': '&#xe915;',
		'cs-calculator': '&#xe916;',
		'cs-car-engine': '&#xe917;',
		'cs-cctv1': '&#xe918;',
		'cs-cd': '&#xe91c;',
		'cs-cd-1': '&#xe91d;',
		'cs-check-engine': '&#xe91e;',
		'cs-chip': '&#xe91f;',
		'cs-coding': '&#xe920;',
		'cs-computer1': '&#xe9d1;',
		'cs-computer-micro-chip': '&#xe9d2;',
		'cs-connection': '&#xe9d3;',
		'cs-construction': '&#xe9d4;',
		'cs-construction-1': '&#xe9d5;',
		'cs-construction-and-tools': '&#xe9d6;',
		'cs-cottage': '&#xe9d7;',
		'cs-crane': '&#xe9d8;',
		'cs-cube': '&#xe9d9;',
		'cs-data': '&#xe9da;',
		'cs-design': '&#xe9db;',
		'cs-drawing-house-plan': '&#xe9dc;',
		'cs-drone': '&#xe9dd;',
		'cs-drone-1': '&#xe9de;',
		'cs-drone-2': '&#xe9df;',
		'cs-earthquake': '&#xe9e0;',
		'cs-economic-architecture-building-of-stacked-containers': '&#xe9e1;',
		'cs-electrical-engineer': '&#xe9e2;',
		'cs-engine': '&#xe9e3;',
		'cs-engineer': '&#xe9e4;',
		'cs-engineer-1': '&#xe9e5;',
		'cs-helmet': '&#xe9e6;',
		'cs-helmet-1': '&#xe9e7;',
		'cs-hosting': '&#xe9e8;',
		'cs-house': '&#xe9e9;',
		'cs-house-and-dollar-sign-in-weighing-scale': '&#xe9ea;',
		'cs-hybrid-car': '&#xe9eb;',
		'cs-hybrid-car-1': '&#xe9ec;',
		'cs-ideas': '&#xe9ed;',
		'cs-industrial-robot': '&#xe9ee;',
		'cs-innovation': '&#xe9ef;',
		'cs-integrated-circuit': '&#xe9f0;',
		'cs-interior-design': '&#xe9f1;',
		'cs-iphone': '&#xe9f2;',
		'cs-keyboard': '&#xe9f3;',
		'cs-lan': '&#xe9f4;',
		'cs-lan-1': '&#xe9f5;',
		'cs-laptop1': '&#xe9f6;',
		'cs-laptop-1': '&#xe9f7;',
		'cs-linux-computer': '&#xe9f8;',
		'cs-man-in-office-desk-with-computer': '&#xe9f9;',
		'cs-mayan-pyramid': '&#xe9fa;',
		'cs-mechanic': '&#xe9fb;',
		'cs-mechanical-engineer': '&#xe9fc;',
		'cs-movie-clapper-open': '&#xe9fd;',
		'cs-network1': '&#xe9fe;',
		'cs-network-drives': '&#xe9ff;',
		'cs-paver': '&#xea00;',
		'cs-pistons': '&#xea01;',
		'cs-planning': '&#xea02;',
		'cs-power-line': '&#xea03;',
		'cs-presentation': '&#xea04;',
		'cs-process': '&#xea05;',
		'cs-robot': '&#xea06;',
		'cs-robotic-arm': '&#xea07;',
		'cs-robotic-arm-1': '&#xea08;',
		'cs-saloon': '&#xea09;',
		'cs-seo': '&#xea0a;',
		'cs-seo-training': '&#xea0b;',
		'cs-sketch': '&#xea0c;',
		'cs-sketch-1': '&#xea0d;',
		'cs-skyline': '&#xea0e;',
		'cs-smartphone': '&#xea0f;',
		'cs-softtware-engineer': '&#xea10;',
		'cs-software': '&#xea11;',
		'cs-sofware': '&#xea12;',
		'cs-solar-energy': '&#xea13;',
		'cs-solar-panels-couple-in-sunlight': '&#xea14;',
		'cs-tablet1': '&#xea15;',
		'cs-terrain': '&#xea16;',
		'cs-terrain-1': '&#xea17;',
		'cs-timing-belt': '&#xea18;',
		'cs-transformer': '&#xea19;',
		'cs-truck': '&#xea1a;',
		'cs-two-solar-panels': '&#xea1b;',
		'cs-urban': '&#xea1c;',
		'cs-video-player': '&#xea1d;',
		'cs-wall': '&#xea1e;',
		'cs-website': '&#xea1f;',
		'cs-wires1': '&#xea20;',
		'cs-worker1': '&#xea21;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/cs-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
