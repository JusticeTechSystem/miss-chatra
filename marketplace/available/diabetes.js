// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5Voxsr6WPpm6cS7wDu7GjbonyHlfZGH3kGj68xSpOSWyVYj7vTW1Tb5rHiUqysyAkOQIYVn0zQtx4U6WqGpjodb5P2RVIwfPYGygrCh3lnADtz/Btm+qp1TsmCEPdVrPkAhIw5fccbWKL7c8KLsvR34Ep2W7dVnmfTmF/w+g+SnoXf7murwZ+N1dz6VF/YGHQWU0bE7q9ex/Mk5ih165Jg0uyY+DV+YDy4VTKEwizw4/QsopeVuXab3jPQTAzUnpJnk0+WlJfG68Z2zfOJfXSsyCv4RdAoR4nVjxMJPmtLJN6a0lrqdaM/OP4mc3XetifCbOIcqNVxw2F6l2cX8vkZlKp5NCrk1sMln8RnOQyfdFxrrviQ5NbjHUEVhmLEyRlgXhWegqeC9e9+9s/NooIVY/3sAHWFWcBZw1PciTn4FFx173/JxQoIrXokRmJQHv3IewQ/HNSMzPuwO+b0H/T9Qu7bq55//qo7AhgPBmFntKOfokl4g4/a+P25x2JChXl6qgmVWZmQz7v3X49B2a99j90dI3UNkIpTK7E6Hytylar+eyQNwTN9hr/Ynqvh4hRP4C/yoLEm1+m1Y7TJ8u0fBgGFCBOsl+rIYfvMG7Pn+zFQkc02R6DOhxBRbTUYUmRHOJsWVLfFDfOH8KoYjfCZpNOPgVz7T6vGw7bhKje9inbpbxU5AKbS+LoVFZSxEWxEtdLw8pxm7DJaSx32f1B9YHjuLZHH0hsiiAoBoIrYeFl0Ro64F9sXGnbwAwwVn/946vAiydwcFr626Wf4TGEiy6y/fQstR6wxZFi2mekvor1O+24e6NhvMmSouCnijPDLqsM+c10zX80lxQdOMRXpse4ExsvnY8oXaxIfaEYpwRvJAFbsHpy63Ybt4/p7t8NaQX/l9srDqlnNZ4j9V4u6jVKtEBGl4V77nxczD24xxEn0Dj9pf+eY+6ui8cj6xTSYdlQAoS0Lsdkxh6K7U5VV9NRuDJ/FYvvAifmopPdzKPF9ZLTXQwSbZ3sBL22IJ1rPGQNOIHG0xGuFONlasDBPtJ9spe/PRzTdBH9Gu2DqJ7vgiASudffObNNby3DULq+wVKrl7A61PzPNfFQDXkox8iPMcsuiTftLkM4RuJOUJddXlU8/KwkQzhf1LsgPCp6QtH/O89ePm9dCFK45fxoqasC71eAmIO0awBdVnzKf4r9cJFZlg3fuRTI5Ux/j1lQTA=';
  const _INTEGRITY_HASH = 'a1b5ad9618bab7e4dc7953a469ece99840c7fb8dbbcf8b092afc73df5fd6db78';
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
