// ==UserScript==
// @name         m.io packet analyzer
// @version      0.0.1
// @description  Captures incoming and outgoing traffic between the Moomoo.io game server.
// @author       The m.io project
// @match        http://moomoo.io/*
// @match		 http://moomootest-env.us-west-2.elasticbeanstalk.com/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(() => {
	window.stop();
	const LOAD_LOCAL = (typeof localStorage['load_local_script'] !== 'undefined');
	var OUT = null;
	if (LOAD_LOCAL) {
		OUT = "http://127.0.0.1/m.io/packetAnalyzer/sniff.js";
	} else {
		OUT = 'https://rawgit.com/wwwwwwwwwwwwwwwwwwwwwwwwwwwwww/m.io/master/packetAnalyzer/sniff.js';
	}
	const SCRIPT_OUT = '<script src="' + OUT + '"></script>\n';
	GM_xmlhttpRequest({
		method: 'GET',
		url: window.location.href,
		onload: e => {
			document.open();
			document.write(SCRIPT_OUT + e.responseText);
			document.close();
		}
	});
})();