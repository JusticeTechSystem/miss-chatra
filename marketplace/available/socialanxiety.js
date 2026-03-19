// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GFfuhcZpSRJfZx9s8Km3Kg9qIX9AB5MVngIDAf5PMyo4yttzGs+47ZiNJ/RyyXXH3g+H0roR0DJrHXxCcnsnYl6+Rh/BHdSmeYI6MGgu+wDTZdSRzsWqoLPgO/rFFCL2cFVxpMOAyOWJalXp5pdaiZTKMNfvUi+UI8rpHc20x1D7jYDTFUSjUPCMs0JzAK2WSkVzdbGFgO0KiG/+EJRRiYamfsiOSTRyy0EODTpdFn+eTQcBv1HFOZH0krY8I4qLspQp4puwC0zA9X8Dxw71E5qySePjuN1HCg/VLp0+t8h9Am3DgEaIfNjL2nftXt3rvUTNVV6tFTkncLaDF93XHBbLa5gs/UerdhwZVEHTfRdXfkHTM6Rwa/L0SG90eJpkdkKUkaRqM6A/psckMAoi/OANqh3ZEzkORnsNVbKqlEo/GLug9yIYSyPiuqeAQz8mCje14/rQYLvbsRvH78n1zPnrz7gaqOHuBPI5haRHN40u2ABeX7qjJgAHYpFLi4jJJ07ZvvHNmxvltdLOkrQsvB0l3LL0FD2pefyqDVFXkRmW8zNtP9PROcjUdy2q+nwHLz8/WoqWmNBNGgM9B9esIEp0FTtI85gzlmTQfCEWVC+1jzyu2u/ubWx+LWARtiWghIi1+/gHMwg1vqluIAZvOgN4JvNoaVL/rZE1m9h6OqLNhVyrtkSnEMUvMWxlP6eqMb/bDllMXa6XmpFL9hZvJ9H0R9BHPbBgh78jHZxk5ubS1hF+98cs1OVERehOdPeA3cBNH8KapQtKWFO5BVpxa22Hh3UokuuqCzcfcw0ofDpTA+6WmfxPk+28zAsOf97AvHD3sWKbBJET8PHZQaF1q5gyanUBJcZnOjXL8B4FmL4nZOubUPNLXn4WRpqKDWCz0xE1jv6Z7EvP3PO15Ff5MXmZO0JiVSXxkAIa/7z9qvNhdijNudCGh1zHdkfeoqxE1i/XrZTdb8N41f/h2UIXH6kcyLPrx0FtMQ+M4K4YuyQ7ebovThzKfUlSU30XOIHS7qBdJk1BwM/W6TvTwakzjDRF2zynq1/+NC3zzUGT011UBBpzSBBOQgyHqEqdQxZIKzZZAVvV+geV+HrFh5mGgohcayQTSjuAsAetbBxhxBAogJsYx+Wf2vakpAI4nsF2pkhRyiaou0qYFLOZKfV6ZXmVTR8WCFQN7jOS0ss27adEm8KkoZHf38srk5rsqf0XN56dN2Magg==';
  const _INTEGRITY_HASH = 'f7b2f2af3f507d4573ec0470d2216640032fca03f8002cb04209ee51503b6aa9';
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
