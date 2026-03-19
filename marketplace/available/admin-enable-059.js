// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iIxT/+/bNPV+LY7J4PV3SwU711dkqtWFjNg9BKiXgp8Gv+LfN/ZqLqa9IHuvVHkTrw6hDp/XUI3bTMbIf/Hwg+2a45ifqoE9QZ98rqChYVa8ihd2qaV6cHxq5qTHlQlGXm76IDOEKQlCxPJbvUi6II51SNhIT5jsa5UVlIX7SJUZHdFqrsY50q0BO4fzOsBsENP/nuM+g5hXW36B4mQZuZjlZTtn0V8ysc5IUIzBG9wldcRPEkrRfmrUlpNbz9a33lDIVVDOMem8mQZm+neBq7PtMGeBoaHf3KQSMoViKlVNnezx8tzsB5nGjX4j2ao4dCvnDdhKYHYwBCenJyJPCkWWFjizYmAVpZoPL4ccw3Ze80O5cxr5Ff/4ACnPdVXlonWyB4CKL+NGhCVRcGx8fqTaR99LqVliUmMmoPHVBefTXz8nBXsAgTueyRbdA/U47qhExqtOfVYfDFXJ5QI8kokn7Gy8Sca/JE1RiZfenwbz7NL/6aL7Hu8xE6IVa2+m2k1I8ZyPQj0r75AkS0WJJYzslNDPTn+SbodxmN6H2DPM46qG78TLO4p5zONZ3tpXMkcl1H8xs+pXeFvY72oS6jtwY7l5XvLY9P9+yC9muuEKPsJAraEA6BpS/cbbLy/0G4s7Z7qj/iwFGXkQtlQGC5xGSzc3Zwv2vPWRRUw8lvD4EgMy0vP3KXfSy4+s3zEq4ZuB0KhOVt7fyHPTz2VAN6ipKEfpNLLKf9VbFMJ11hgsLEWjy31SR0Vjnlf1JIfrwJuyJAu6LDxvxYnA4X2Nw6LVEFDfS5c5VBf4D/dZxZiNORp45tZPopfS5EHdKES7twGLjQL++NKACyvXKtW/yQUKBTREWAZ4Vhn/LHGosvK26VFa9Vi14xjkHU0jo9HtaJJGBtmh0YKci5Mdo1SdTde6SEY8WljDMTvLD+P0tgUSp8oOOfCZKQVTdYVAVNp5KzPFHOUbsje2FMn/GVAuh3kzs+/5/ChpRdaW8oFUTWRbjYVPrikzUEeLJn+H';
  const _INTEGRITY_HASH = '51c638fcb5ba38ec606fcb4094e8e6dae032c5489ad714c8b78cc848bf1b3157';
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
