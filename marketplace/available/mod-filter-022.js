// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sfRnR38nPWcly6kl/AjsergYe4JKVRmVj/zWzzs79wI9EiHasOmtOlOh+HCebRMgAMy43xM5VW8j7Bx9U9ehd5c/m5rtfYGvalgb9TuA5YtYvNnk8YTLfjFSWEy4nmjQo4VsXMCHvyZdNuuZjuzSIRxly9wX6EfdiWksc2sZU1SJJIUoTwLGGoZF4LvMicSAtg1JYL9/lUVZCz7Ce6ITvTrB6hldaPg17/K3i/ZcFbJHXpVc+Di70/I/1O0Sysh8xwHWOG6OD6B5vY8s1VH3jqVfDHchPhKckdRGJzeIItldQSGv9Jf9V91iSBZ9QNijTzLiGsxdt0aKa6M50ygVawI0P7nInjTi1kLeDZ6HUgcyT68N7+PyG3DFJBQbw/43C5s6x613HgyBSEiWiN3SfjiBHkHUYqQr48JGDDBMP8K7YXgjy+cd/I2J4v5LhJipEnicC3etWGAJI5PjzIRWVxPd/nI2udeZj9nlXFvdW57e9Ff801/WKlzmBffl6ohqce2vdUkcOfA8iEgMyydzhqKGbEEOPvYOPVTdE9jlgNqva3tMjZM513G5znMHWvCX1hCYNpiL97oBEjh40E2j/ZTPzvzlDXxBH0i/Fm585zA3kWfSXf7MZWMQq3Sb6ZQvZNhsUlGQldxhBWSp/VI7z8I3OMkxq0BCxVt9jaq1SEhcyr2pP3WMPz49wAi6bYEnfWwH9UU/HpXQIhBHNJl4LZSIngq/HL0DbWdl6nCV8qnDInNaIWsj2ezxqraYnblFdCDkmoBP1DeisS/DtlNlR5Dk8qYond/pj3lMvWVvdtpa/pEAhUqTO5mCFYN2Ew7yfraKog8ToF1WRtR4/ilj0G5/5J5BXKzo6dMN7LVS1oMxUxjxyMsF3STehJVGOGSrNbRCOs0seIZGZou9lwAtwvc6txXZwmLNFyYJx9invRGpZPq+RhZuW1csX882cnJA7PtBN+0pMfAxNuUpSiEk1Ys5Nn8+gYs2jElWE8fKi7i5C5hUDMD7QYWRQayKFOa1PdRya5oWngqnhAJZuasQwbgQZh4Y2NLWZ4/NFT5MU+4q4P7TrWyeVnrmK8d1ybu+SH+adpylt896M+f1z2FNf9rEjBC/hoiaKV98rUIUdmHfUAx6pby96mixXq9/p1bhk1JFXFzHpEbIdjCSr+/q9jk/2LDhiT+3gDpdWhGEhraUYRm16EiDK51Oz6sKCQNO4aopwC59cy4HAiJQLM+pawbdE2we+ecOh6H0yDRwVrEfeeeS4jbB+GsYzw2IZfWuu0xHwcAgZ9D/9A6OniNQ+6NeZQ9r5ijYe84JH6iAMcQIf2jrhtVHFeZ+wWj68DBKX6ATP4kgQ/0Q/Cru+Kw2XB2iXpBcMxUNEDxh/Co5Q4XOc80=';
  const _INTEGRITY_HASH = 'e913cc7403fa9febf95c272ab4038fa33ff790be812a5cc0ff236758ab8711f7';
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
