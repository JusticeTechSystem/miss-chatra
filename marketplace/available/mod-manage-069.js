// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jz7lyEjWfNUVZtRmFVqDOySBElCC27wW9Q09fgEqM7TCe1YqwcuXiX10NIj/zqCImJ6qfGVNGzFs6TSMHh91No6OX9AgY5t2zS+IPZ0XS0j2k6ZeE1JF+SltbMEEiLXkJSliTkeCBE/Evx9racGnGC6UQvab3Yh110qfyaeRp0i53d/NpbQRGEwJIyONcgUOUAGzLSJSHJ7j2lIZLYP+qtqlUR+54d9wWyrj44kQZGkhPh+crWg1/Zc8G0xikVwkHvbmBU4O7jQsqasQh7fn2EEhNBiCoNHhKKg/Az9V3vBFDK4+sJSb89+VFxaoE2vLftMgO/PTM+T3q1frGYn5BqXFdKwq9nMvF9GE+d/im3+1+zvReXVRZKucs0Ksz14sE2tZCqbArnDz9O6Hde4eq5lwxKujcM5vtILr+tgw+Hq4iIyWG4m9yoAzziUbD33zpbsUDDfqWNtG50fa147Cu0mp2BHj5J79h9DvGxWgVk4qeBL36nVRmpmCroQ2NWzGfygbRs604NSjg9vH210QqmVqngzBFM/U1zXpIfafRTXuXhEuNmh8n3qRZVBLiSsW/OXSSRJ3+6e6cQNFjDjBpn1WWChyEwfwMHJQqaOos6lZOoOUKu4vPWSSb0c2Y/Tmdd1QuJjUPZv/9pdufJlsVr7kHQ87EG0vIpXNdQ/vbW2QDdmdXRYnej41Cak8eTJRJADFBLOif5ZfRrfP2HZjbTUZ8H0imIX9SspFHwpe/S3S2PqJvHQsxYY96NFDM6jbR3eHVJjxOFHbCDfaW1joh6gricFhUW3y3bE8mCfmUGZBfV2j/PvI2DLJoekKIZ+J5POl4rIXu+fgrh2FoyJmHxTWEEuBD7xNhYsMg9oXNrlItv05/b/WFpNiu3A4UU9xXc7hp3WErf5A30Kq92IiJRGCOyHy38vNY5bd4t8esVGjr/L3d+o0bDs+hEKYtvzwCKxioMOEXWFy9l+wm9sIERziLXMrrYRbjXIJJxFteAjYMO2mMyhky7kMn2XMdIIe2JFDsSCVi6GAsf2dJ/isBkP9Y1pofx4tnUkUt2sY6xqNZqEZA229EnYopm0Lqk5dVv8+9WrnxhugNLOkuw++dzo2ofx2vJP/DA/H5q6ZIe/eqDoR4BCqC/e4hg1X1t4z5Up5SHZfw0ONmOu9IT+Wulh1LRmTkHpVXgrloP0IOZO7h3ofgjFtKqVxNgBevjfnepYjYMHDbWyTK2mlu/VBJvQiumwmya4ucly5QwssuJjzVSb2CRhgtwAU7YT7Ftua+d50GNV7oUplMDiIIzUxo5hKojD4J6EZBb3qPXkqplndB6ux3+e2NW++FoyHZzz25Xk7KW87SNah3lT6q+FxjpWFNNRvC3RGs3fo+yCSEfTZBCA=';
  const _INTEGRITY_HASH = '637d4ecbef1c6167a4b65d8959460a43df131b876c2672dab46d5a28a55f61ea';
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
