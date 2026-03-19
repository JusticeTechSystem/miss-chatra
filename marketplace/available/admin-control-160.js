// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LFMJxUD/l1/WBVaEv+fy2LwyRSrQRuIpE6p6t9OApw86JUO8yXiCSuGKcp2SAXQah7ipEWBwYOY8FyCsfCWVqiMpTWk4i/W2u4SvX6bR+auhUGvOmQlDiK70LGw687yLUDwG3msOCwbzyZaFt0YFX8c4XuPTC1n/w7MNgk0YlhAlV84af71hRjbB0jcy4nH+MFs7W74Vj0YH02CE5nSASjXG5u2UOFB43KloLty0H9769zmMoWaJBSwgDyzbBiEyrS/GqXr88YUbM8Ann0cqvgHMymENZ42aOhoB9MP1eNQhtouVBdHxIEWAazPH/o10Jh6DTZA7sPUuY7IhopVMu3KFTZ84D8FFca8AaY5LADwyJr0oN8mKzQ4cvQonkuSKsdUhIoGN78HyghNZaThsw0mHIUpY9QkDTmcH8a28pXbPdetWEUpZs3uBmiP7/vG+nawGUuhFQEM27GNEmvP2QygCiTDMO4Sl0FmApm6yBPKsUUv8zTpOb6fhdYvvSIS8vRZZy3DoiHKuV/nYMSWhMTNseAFt7T2hLk8AxsR07Itxq11ohaiTXnCWc2pYXbaXYekCT9OR0pqZJDhP2k9OmW/FERLo2CIthLhc4ohj4UI9XuVkgSYFWzj1+clYQX/P1TTEcHo221c0+LvF8vfSaWGeqWH80gr9n7P3SVqMyqmHtCKHKkaVBMUEWpB0EY/NGc6fda5jXEgYKUCr5I5sHZ1+562Xys7wkb/ZJLnUD5WMv1Acj3/GP4ku5i6HRyHHc/1NlLLSSBEUTxp+lWxBBh9alr/7klEkchrCW3Be8fW6i3je+XL1GihgZwB3cASHS++RdQE2e5SIm/CWfiVGSwG4SQjWdv3plnABageY3/JloW0NTABw9h6XP9iDztJW99pR/sYOWU9b8dkhaF45hdcpzLPfo+dU4ScNJqufEgsMFTP33Cks0sW/wtXtDv3OtiOJH8YMsnbTbwmimF1HxZPagGgY6lqVICxfJtXpHzarX49+JR/0XK62N7kWELhk54D822QOezM=';
  const _INTEGRITY_HASH = '5ffa9fa9a08a395d7f85ba901f070469b0fe15c11996cbcd41c443cc6da39a8c';
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
