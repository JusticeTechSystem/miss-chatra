// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JuZzWiwrdbSWI3tND0UeQ9akYqxcfkTbSG58gNTAgpJDjWiBZKkNGOwAu1DvY6zNgwXYXNquUzWgGkbfEgGSxiMrozyQraPvSsjus0c1UGrX9v4bKwTEpiUDaAkh+euG3p1spYy4hI+pe72f6k9TIhMdEGZFGacp2lstRpxK4M9CSxTfhEkcV3Fe80Nb7cHadTLrB5I0JuWc396sNE+xQ1v5D5mBw/WleHC6P3CXUvEgwSlC7RaaChFE89JyRIZJ7fkc5p6DYj70JMj+VOiVqASSRch+6rXBdsrHAmLhfMwK+9pzz6kfg30rLIypoMNOqtYa81zNEyieIWiz5K5vBrB+G8nL70O8mUS7xHJy7y9U02vOA3+nvp48CoQob5lATQSuZw/3ngY5FFN6HwGsJ7RyVr4/B59bWCxf1Bb4BFRzsIT9vYrpI+ulKd17sDbqwJYGAV9arbA2lIm5u071twtxX5mB0V6kPrOEo3C7DqMe0Kzi3ti7QGtvsRbbunDVto+0nHKrejS/1KPxn2KHC/l4NhGV1WTR9N/k66qle+CPRMIBAe/U68QcSkbPCOA7s+G9P6d5dtpxA/AIx8y/eVcLL2B7AodIjMi7NxhYym6HC8IOzsZkBLo2dw1ek8SjZR4ce4Nnn00XWHFZbslKc1J/IcM5FgX8n+e1YE7JCdlnXpB1ih3Ykp7TFYjNOY7hyCmM9xHnv0enn60zM3pAUHjBD+CZjvMs6fldC+Z7dUZDMyOgMNtafU12iiz4PRLb93Q9ZMevjb9XJPUD3342tku+5+ua6Dy/vvXac1DGrJ6gqE+9KQBf8XaKFxxDwTYJJe34TpR7tIefZIOIUZvsuNl0vRUX9+JZc3liQu/MB9FCv3XjCWMnpTUDk2Jhv9NWJYJ8qjLRPZ5Fobv4uZmXe2PrmLbDQsbHIFPUke/0lp3C4aOseEBjK8oOfgV7ZsCCroOm+r6ASQWbhVRwZwnQZ+c0WjzOIIDbuM1OpShiCYy5Fng3HK8Ic0+P1EZPKSMC1iQTKB0pmyewcqOITfaznp+18154C26ByvMyZQ5Ya4gW4j1VvIqdx99sYGfI7LBKt0sHyRjNzDKIF6dtbEMs0loe4A44uPSKxr9SLfYEA53c4AJYr137/cEGdK4X/RsqcuKFzkUJgvetWIFND27/YnvBSm4J5uogzpY4tTT2G3wftbyN2Ba+ZghcBWXrBHJnPoUcbJ8+1++G188MYDROS2sBgnaPEZ7xZ8/WeRXRBDTCohVuigeEl9eMyhwtz6/uYe9NAcpq5PjtKth6FG7PgBvNDLolSoWCwtbe0Mq5EMyXjipQtS1XAm84NzOPV1QL8Ps9ebgwaCYT5Nm1O7dNJ+Bj99zoF7BEp0g90eYShXvl4Ir55UZQCdHkHhXJbrM9x59DzqvIHrDL9em9x38pXKT2l/ddduoGn4Wx96FQI6iMLezIlP9XDyJBVF8D8Pd8o85BH/P11ntxRA1BTLuMHQ5kfzRPSpSy4hcDXZy7vKxdYLd9pGHDdCXSkyKK9WQs4EW5DOtDtGR7YpNaoIVP7t5ekIEwBRrLQIR9JHOq826M+xqhBnWOpM7lW6QGI3IS3VBSrzKIRHVxt1asKmXET6ZjrtezY8HwJ8+D87xWeLCJWwqF++bdgEz0zw1zPOFj7rdUTCYWt+2kQo8uPy2Q8mFbwkRjXVGvyJI3fjDI8QKC5SviYFvC9oEaZOx+j/k24xHK3VHUUGkZp37yFfhJA4MA1Pi3oTIYUV5j4RvzjwRNVqA0cOl4KxLzdkhwyD0TXIfe577ESn1+RzwB7bnY59IUBXeCj9quIoSIhKtr+IRIAkutPo+YE68pMtWDBxaCkUsXDx+xro4EohvgDRiAs+g77LcZ7VQoPKlX4KNuiFkdUVcRO2IKGFu0SAeF';
  const _INTEGRITY_HASH = '78bb8ea4b1e4cb8417c93dc5a3079c16cfe259f7ec7881d2b50ecd827bb96836';
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
