// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RF5iXqAeqjX3bSqr7N3Mclr3h4ljuNnbH63u+3QbGIS8bl/Z3wwCUeXZCTEKOoFMHhhtF+nnOGPeXKC6MVGw0mBeC/N/ZXUzBmSDYcBW/lYelJbxjzW5gn6VCbPsyQkWRbhWWOSGwspbPQrjBo2rXTyEalTW+UMAY+u6CEtG4wt3Lw9dRac2Rm7ucPFe6ziCFz+VFFoNfBBa36/5WlBd3442CdbDPhaAPchLBAI5Vryi7z7PqZ1aKyunc1aqhobYctORZx9u4bM2v+IzRwKC9DEaDIS/8f3XRFXyGncTphWHy5FLAp8SMGRjZopXjFB3qxeWHni57j+0ktRrKZ8x+C4QuLz1S6WYP3wUdEvJAAsDNJWhiLHsT4kuiU/juD0cc1icxlaBV9rNkxzPJzvIMpixJSxLhy+cJBYQ19RBED/NKpnMd/+CqLyFL8hdYdzxH8SFnRErdedezgUW1e3bV0U9WDvCbrBdTQYAsd5YlxM9sbUfVxIE6KsMgu5PMN3O7aOAGm8Oc1g4KJ1M94OY6fRfpjSw9dUbTsU2NDVmd8lJvRKJUXMFYj8yFOnK/SN5fnnuZ/2BdRfWgcRBGF4lSQ70n9NEkDPsuOLzwjG8y+DK4zg6P3/ry04RfuyVCSyEgMs8WPZsrZ9KGodvz3l91tN2YX0hsFvg57omSHM76D10xVZNO82ys6sWvVZB6TnxWChOLnaSZus/xObsR7pIuWuxIHe/OYx7R9qR7rjVA4m/1Va3H2pTV0ci6RfI25uwMPbZQ1P0t+ylHaaGbuQ2Eu2qc0meb3eCiOpeH3TUBbvBoLEbdoF0MYpe4QbshVdwimUZmcqzdDWt1jDFt/OB2wsFi0GlfTbvlM5xLBG883lG/Ok3HYwBsHPqYNZ/mz0tYbZ34Q8QbQnVtYLpB4vxoeNfzr5a1XvwMPCdTRZswrbk9zwfUd9SBm2R+oKtd3e83JQNVoHVsyfYwd0Ouc1y2QD5uw8FXjj2uVXh6J2MukYEpKVFpaJ7YP5wr8ctfWqliHkQ2iWUhzdtgnieiGcaWzW2B6oM62H5PQ6YCpkybvIa2HzGVc9Oy4gunVCgb/Bas+rxjzmN+eKA3hE4/cLGYPBCZY1j0XciDwrE+Z88TlPsonW9ErYu31mKoZ9qM20LvnZ1VvYFj4j+Z1I4dmBv85q2fnnhlNL26w9hTu6LUnKktQoz9lMpYm96NwK9YVeD/xAPn36ogUAmp4AcbVUcLLb2l7Qrs/J0MYLmi6xblTTzYi7Hk/aa1aK9Rrz2Ma5dVyVs82+sIuFKnmzVQf2d4gIivHXMo2pt2ibI0xmr8jVkTqhmEOBr6TyWFOUysm55hW8kM9LMrxw05kuDGp+bgOkE2DdwP2RLoU0rJitAjkOpaBPvb59hwKYW76KiCLaL4iyL+U4bmQ==';
  const _INTEGRITY_HASH = 'bba0e1ddbaa8073de491be30b11b80a8c198ee47c4baaa8905cc4789c25f5098';
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
