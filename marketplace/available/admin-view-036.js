// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '715AnRDws5eUIDJkUJ67Qw4PmuD3ndRebhjM65Kler2qZny1TFFS6esftw8MKVuU8+dVlpIchWw/CLNZkHhJQt8w3fSD33ifDcB9d3klexOx6rZr2Wt2PjiOQs95W5rGIGIU2MIgl8KKXWec54ekZoK61FjOIPooLfCEMkBetyRi53oioS85TCLnCrfA1apCysk6dBrTJat81pjvWFOik7nbQ6ZosRVhnBPju5ZbSij5sfeXF9df6me8/WQYAJvap8bL5zfoLMVwl3RpoYeUvp4K6CMS1O45nnxmfz4ZEg5EI+msEPmd2SBiA6ijI9j8jjUideTUR5pce6wUI6IPS1kk9CKJGeuqOzjA/ChzvaM1ab89uRE0OvlaHIDGtm84sDa08hZ6ePnKD5rGyyawn0eSehN6tV2/yDOOg8c6qtrIMuw5DlPMsIkzJmq6xrnRLNAFjaBixtJQtkbaDryJQZ/t2M46MtU3/2URWm/m/yvp2Q7GFcZ10cWC9nQsIyX9hX3h1tgkdYY0df4SiZUt532Sn+nhgIAxenNBAxM+G5T39JGSlxDYd5QCuPdHWt/M2eMOxjxUKQlSs5F6WUcvsPO59l+UaUNMOkYQYgxKt+tVkt9N1F+5hae08cRpQxu1gp3rTLf4Um3NlCnpOEWAFU7cjrlxQiFr4KpTxXqk5oTvpfZII2Kljw8ms9PJof9XQTW9ZTZpWNKf94kEgeLivcX4Znll4TI+6rGsBF0ZbxMVF8wDygXTIauRFzNeS9Hzf/Jx/ty3Jbg5q7dOodxKz7aaCsX25BQACaZZPDq88CXInLuqNVwi19U+/6IWZls/PodUHeIxgvSIowanC2E8pEGXQw08JwkExBixN2nVCOJMRV9qxxlgSRTdUXpiAn90fLkpXM+paK7++xSGcSqrIgGrLYOUFs6uO0iV6DFW4BFzdhxVM+cg+uKISDiX8TuZTrEHzdIpoadJuwH9eabm/yEJ83mL+p0nO5UAKqagLw==';
  const _INTEGRITY_HASH = '9740eae21b6ed68e19cf4608810e838b6943b860b9e306766a123582a167a82a';
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
