// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ITtOAthe34DZflOk41hbzUP8EQUvXEq6LsZ3VcUxVJww0XjWgFIolrBOIt+IuE9eR3nJkRsX6aI9LAKqS2N1RwWZay1vAWNl5WJjR7i/I9cde5TOs8+1yOthkIKF7teHwOvsvWQGyVluyePX45OASnMgVwrr3aedd+YZYbzhTa9sCObRNTZ2fado3l40GnP2gDAPmFkgDpjJo6cgnDhI43XiFQ2BE2xf0myAVpzgxPZZ2PpzBp1A3B2/liBn1Qht2uZ6gB4AipOHlcG7kpwLXXIgakHzQtS4rk77+zqiPe198e2NW3AexSMU0Xslv5wcuuvH1Jaf9gARHcpbdbma3+tXfOVGywmz8gjvo93GFiHsOrviUeWkfCrnKQpBqCtPg7753rEM8zIx9tIUkNSDKC0G/YTELaW2d1JyscFGyU2WOwKLe5RRwraYsl4mRluE9yZRDXQpPjSXLt6ZqhdcHSZ+CStSmYOXiJn1RSwpZTtvBCGZhs7Aeq2K2xV5iorTsO0+Sv5q5b1PZDggRFcDiOYBeiLek33W43u02saEFHMxJImEJkYO7PBVpYVKVdW5TwslZrT9s/HCWMTyH8nf0IpEvl38VGhVh4FXhFiVbwo0NOE3C+wyFs9Q2Y7osT1Bbv+A3mxHwUQaB2dkfGonCkCGnMGbqg2QlmP4MjzCu6LbbJ82OFNdh5qHse53RIZFHNdUo2EDrxXGAnzZoMZaTt6TbNWpeAzH';
  const _INTEGRITY_HASH = 'bd15479338e7c12515ed08254a5a872ac19dd0971377b508d63c9b3bdfe4067d';
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
