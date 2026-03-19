// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oaAh0UhOq5yv6aBdlN1CugiHs7x6kEC+PbTYPooyI++iG2pCR3HIA0CdEb3hgFzfY8/OMBs+vJ3a/5gyScy46+zZiDb2YdbT49FkerEXU5roXsbyBrN1MdDPTANNez0savCPEbxivUoT/nipMui/368tQECLtlVB/kK9H26Eww7CbHt80UXMMrUKvjZSujQgQ5mXOHuMXS6HVz0D0y7MccUgdd4+uuLjr0e8nqWSlkCzMrNPKm7W3S1IsCgGYSmBe6wWKbrIz4x4zgXkOTj7S3Rte/5oWO46cu1CJb7cfCYSeZKfW5QRrf7pgqRcaR4imnmBEFPpGDs7eiERYaEq74x0035b8YgHtCViSaJKm7yBWe6LMMwm7et3Ygxc6WILqF987hz61vaj3vRBNTsLb4CLPIiwmjxin9WZphbt+uh+cX2rQa7gfMncBqhGx9VYzLTw7biG2bSAoYOgU/cnkkKFcHjJFPEEmg73IRP2/qVyy7IQhyA/ZOYcZvKEUPUS4GifnsIMzTs8IgvS79hSgzLI26pLgeqpX4U3IZh2+62prnc5VcVMOHBqSq8GqFgjnXjMyw68ABsnYDIy3QxhKtjKc/1OPpwGgdY3UvvRGzUj4eptivQ406bSdV3doiXKXGgU/xAoQc4RzhAVHeAwp6OMl+RL/f6+uuZK1i0Z1Eazi07On757XWMAcbTmB3dUiHsPVC3+pLJ1AA4yIUQ2isRQ4INe8VvzbLPgbU7V7Oka0U13S5f6uwF5LoFYFdzjXjEJetit+mVfybjVBKTcputVAb43Gjp/niTZ3j1Z2fgx1r+vlg1CqHhZRoXaVVDeGZ6XkvS3dPc22TPsHJES6i6PlwUc4gcLDIrpM3RaKZUSpuOvQv3u15KQC6mhvEv+Y621XPFyqgUIJaQ1uBcHlH3q21eMXmcxsjU/77XPuHQgYom70WGMqTm04lcriEG2jOEAJWFm/owkYQvgvr8ghlVMkhvQaHPIOT0OJuisHDn3MDSfm4HyvebflmjIvRrE7jZPp/tGuNPcwbcNJb8HRxdsrPkb7O+yjt4/rN9VnrZhHb9CnWfVjQJSSQtLzOSc/F+QNv5eZIZ9WhKvk64RdZ1C/ijO3eRsuitGulHgzKtUdRBNhoOUahd5gF1vmxdd5WmCWFAsrYfPIi63IRaGDCuSrfC3SpQhN1kef/Dfs4P67Y3bO3NdFKINwUeqa7gTFYRjD+7iQHhxA3euNc2jeB1Pto9ozLmuSvtntbPV/Xr0Uq23zS4NDNadrUhF8zsjS8YcHYAezGx1oaYyVtPvyg/UjueR3pUJapf42/uPJ0CcffffFYs+HyxKCSWuqOMdqYII65x2B/uLUY4nTUle38ci1jpCjuFVdps3f6NwES1YTrs=';
  const _INTEGRITY_HASH = '3f1e69640955af11ce714b9105fa89d5b33fff93be460e56be93ab69efbd1377';
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
