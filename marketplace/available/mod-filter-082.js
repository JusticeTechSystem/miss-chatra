// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UWLVYBYxNCHQRNKUeP15P35MN+ApxZHH3ihd17hZbpaSupKZ+NJAnbDp+iy3WOsAMPYdwcopOPBVfsRfxch+ZXXrNUrJdJB4NcSXAYuU0hH6802tXQEr5oxVrh6u28RRiskO2oYRJgcPA9QN/TF0A4sEeJJ2UowoUxqXKG5KKLZo9SuZ967Sj6f58+wUWVIq7ZiHTlGWtDQofZr/tRukXx14mo+1imjKhECw42m2bBs1nkVm7uLp3vYakQnsplQVQn3f1Rk2hmwXkxHl8rTbzm6joeyxSigf1D05sCAA5n5hBySdE48nxtFk9GlIi21cJssUtXqrlrcX9RhkAhgP0oTVTzC7SpzKA0ObUPGoDJoH2Byqh+Osq1514x7VUk81yzusqmRzsv6ABaIWsrWQocxNVvy4gprgYCwu4urccGAXt4gQ5LRK5m0HKdoYv3PCD7U/fJXHn/GyEQK4fsIJEEOYgdGUg7Y6rQWhy32RU+phKUR8ps1jkDEPB35NrJTH8PrNrRb8feF21hWBEHt8rArZjtqae1wlinNcXlW+iXQQyZ7UhUnChpBS2HLLZK7B1ufwnkjCi9F6X+XVZPC+ELUPqLX/ef7/96cNxRUSj+tD3pjFhDHQ++a3f9uhZF3TSsl6e04khqFkKnnD0mxw7tHD2vUXaOFuQWke0sgbcK3TcC3Y21dtwcdMj7SV0mvINbPvULv6aKejm/N5Nm1QIPth0dl/Vp3Neh51KXiMZZHaW1Ngzm3xNo7xhjutCVR9C2Si5idX9q6JjZ/IFQuXZHaeHIGSknVYSQ+rFdbsZczg5+dhfVzXJ66lhYO4VDMvYBrStKJ52AyyD11/KIzsDak3eUX/J6cwtSUa2ccjrF3RrtanGDyQ5H9FV9c9OIczm+IiOWDkynnEyeUZW1QmIyHohjQHJAKv6B7GfVRc4dRiaCqHD2lLfYrRHEmMHziBtRnz6xUzAmvpxUZTs093mJzGhsmGBv4b+W9fpZzR3UXadRv/F1R8KnnCJ/X686aSGFAIb+NX1H3sDlGizdxYs/ScRSy0M8MzO+9M3/UQwA1xWlKQ8H4qPEVFEpjkKNWU8vOxeuYYKkKvqQSSJg7Q1BplnNUOQeEwm7hAO8hw6nJaTsBwgDoBvVLtwCH1IdoMMKHdhkjyQKcs/7itu3d72LBU/XKmdeJoIRTEL4iNaW1P2VsExFopK4IITXfxZ8nOIUNfdflrazr12Y42ok6l7WAgy+If4TKgLdNVx75bmDUtuWxrO0ZR8Fkwbr/VVAAYL1h8GvLGIHkTkau4viwoFFUiy6NZyAq5QrKeR6w/7S1Zce/UFoAmPaZr1xMWw3PkCDDGCWc7pxwOh74Ah1ItEi/k9oeuS+FwpNTLOrXgQ7y1ETQ=';
  const _INTEGRITY_HASH = '331d5fec1a40df8eb03f58105caac00ebbc065dada563faf8a56347e00359878';
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
