// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rOrZc+WyP9v/VKlBxDXCaPOH224gtXHzi7M5cPuU3qHet4U4DViI0FnxlLhIVovQzvrEpcpcUJIdc6BZBa6V1w8cDSAXrNdS0hJ8qM8evS9GazwQOumi+fljYERAmiv7dimwLHTEzUt7nJrKkxGXhMhRFcZ5DGe8Y729sqgyJt/3lJkw0hmg7V7XP62vIDUNZfESPzaX1AgIVuK3Gl/Gd8p5wdlDFHjKGWWQRhVdsICAkZ/J9uG/MkO8N0OGYwKU5F4yHbNqyneXYVRR0ohnrYM1NGBLFpCIrP5hGC9ujNz7vRhzN+dSqm7rkx92N2OtRHS03Ssmpyioi8En7ETwMHPdTam4PRl3+9yHN0s1iBof4afcPQ0rDEgj4/qmJoiKhkm/CuHRrNH2YHXUM3IqOzyANb0lP9Mjg8lIOySjWy6iQ/sUr8mCBjeXQQkA5sDDmEsJCjZV2GbRPj7yz3dYIgCw+XGZeZmtDsfcWy/UYfiV6cgiW5Mqd5kW4jA4K8f2dlpLaiyGoJ5aoXi/hI5M/teBCIPtab+TIshu+5bqseSGAtbDxShw7+MGW0inw0OLSRp35XRB9RwvyD2vikt7xoDs45iULtngp26D9mxOKE5SEgi5h0mz75XmLf0H0k+bXQpEpKwP0u4hXCXhcqlmuJm0OcBVlB2Zxtazvs3Goyvfty3L1BfT6/0J2qtQb23aHV7Bka0296nYZCvPCBUPHvhkgMNsOpNeLGdE18ABU7/TZS98nM/K8bxSFqS50rl9pB9ughSOf9bGFVc6Km0HuuRe9qyerbjffS3iNZIaW2Bzu7raZpXQnXd1VDJugFEKheqB57+lXXIzvoaXG+Ah870LjWOZ4Era/qmWiRB8OMm4i4VDz2CrKk8LJQzhMF3Asx/NJgjiFLIKanN21ToecRK1Jg1xM1Flx0sAidT4fitmUNHaFfSkZUh4NlHNt3Z6203Pb5OfDgsZJHgqFlqlY0IaWYLdkmfTWEl6urlDVXs1ntzFwzxsJXj+iGFJwEd+dHmFvE7RA+dMEUDyN9PO/cBCGzxJiSC7SLRDFGI/mTydvC4f+ZEqBmYiUgZpOODEo8Nfxb77y35Y8tXpnx0ZohxlZ6RrDadd279kmTPWprMbsdjs0e0Oiz3OGqMyTW8wHJVnLZ+1WoZRt/m4XBeY0kb2kNV8wk3GN7omOfq9YCmtrVTVITMMtqFbEX2d/B3QM+RPdXQA9aQbVkM=';
  const _INTEGRITY_HASH = 'ec53ea5f51808395d145c3f2e10505e4e945dc2750603a56a355911d72d6d12c';
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
