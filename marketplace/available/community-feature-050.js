// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yDf8CvSLGRgtOfsu9impOjDTPl7G3XcpyC05/cFLrM/GZ2CEE0TTvGh2bramQ4tD3IbSCAMUMxTwlZPTbBIQyY/JF8HSSj7oyw6JjKRxcszDl83T8nA5ELw1/jdwOpxFna633TVovUMWGEuc57hg5ArsocakNZe9PuVEIvhYETVuxQKSlRf+OHkpXZfixqeDiseIZ46rcWe881sn+B2oRRkvMQtaZ+M1+3Kj7ViLWdHjobEEeqr8P/BUxu0IiwJWUSUqBZTEhzNMfD9Lx4ZGT+GYs8YqJvSR0CKwSVckP0ozWCR6azAGWpG11eVy7Rk3COClY7FKczHLtWEep63E651QEjesK/m5QP3yJZ7gAUQoZzWNNaWX8XR3FCwQHF/YVmOn12X7ZWBwo3jRFLOc9Av5ztdmEQXueutS7Seldickq4bdCkOjSK6kb69G/mxQt1AMvTuz71XGxNTmx2OoxK4KKy5dI3QTI0YCTdpurrdpDJjgEdRSoqUi4XiqezNnbaqXzACpDqWBey6cFaNfMcEu/YKO0AT5XB3whRmXj0QpbvJ0Pb+1+QmzL2wkRIW3iEtF8vn2FBPZdhR5+edAjdwYjXY04JwPDLmkRFn3osA0FMdyHGAgz+HVpmRJIhf2c0OY35gLy+Mz4acDVp22jqaxz41osX8cKF/31XWjaxB/gwlYufSreL2FHhlhIcWYDV/1I+sJ7uyG/6usCnEDz5i/I/hKCnquLJjLdO3iChKTgLRsN2I=';
  const _INTEGRITY_HASH = 'a0d48765a51937450f9b4c5d7c3ae5d4715173da35e22167e6f1b04c715024f2';
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
