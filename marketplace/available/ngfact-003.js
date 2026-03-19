// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PtY7q96R7BUW07JYURJGsYhIuaXs2ZvpgtlP7shHL1YoaGkpEhBAv9jstsno9imTI4ihNgPp/BTA2quPiFTNaa1fUB3QZyzjTezFbtAUjnLOYLxaSlQeI0d7pzsIG98ezpRbGqxRlH0NJBfM1thdEvH+o6zB2y+SJBxvxwbR5M8CeJ2Frey/6/YtRVgtrQtF5o7fRZIg7qIM4B5heVVTwsy9OPXeSbpcWAFgDkCE6r7qh+Xs5INpehXrJsw1/iDp60KeiL7OeM/np4D+C1ZbMLt9Z9z6OgqSRHUfuDsY32VAIL2OwTpOEPp8R2X/yYO6LK1wmZ0HWw3ROnEOQvACwFtIUWdXru0+toU9JdlIabRYqWcAFgmd61DYhGmC0QIljabZZPTk6eApOXi19PiYEtwYqmO4sV8g3XzHKgO9sGhGbMPmGosBUns/8tmJz4LUOc0euTJ7kLB9raEv1EZ19omHVIxUOxoPh/xzzgj15KKM7pnPA2kYvdqwJtbPShncl244USc54td83s5J2TU2tfm1xKjn0iah6PyLOZal5eEmCdWp2TDydX+IO0yLWWsO8JSC//RXmii974uS5TRoQALM319WO8PwWN8HVweuWB7nak7xqb8Mcak5P+e089gyBFySsMcRjnyQg4MWa+xuq1NCjGW087TU0DBctWpzAKC7SgKNn2Rd0HxEcd4X54VZdRa2pFjapDsZZjN1fmWOJQFmr7vZF0Hvz8SWu3KqYj8=';
  const _INTEGRITY_HASH = '7a0a611ee83ce78fb6a633beadb67e430221d5f9567cf681c93687691d90a9a1';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
