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

  const _b64            = 'Ga5bTAkeRUITxA2A3AYmiQ+r/JnHMy11mx1m9xzAoGvQeYEmlonO7AMrNGB5R8zJGgqndgjCrK1dpokyqalCE/IpCcyG498rDn5ef4gykyKrsjFA7zHrOHKVrTYLTG5d/pLtc0Zo4puAyofsfESZSzaNvN8avBkd9XgXLDwOGW8GGWcq6hM9a7s+a/GV5DfRHkzZRCRFZvexewReKUupnwsC9LGbPA71UtUz8yZNeg6ZEF0OYjHgYCeDLk2VZ9vIm94zWciVEwTorJbpKh5TGl2bolrOaB3kUq5jX+S64tYiGDeS/xVuTHWrG0Wu4chunjzrihS+uPVCvEV5YZiw7YMdkZvylg+bH/ziEYn68wdCxBwIwQndzk/K1+scXdxhNBPTgB88vsy+Yvw5MjVOITl//p4HGevbolwNawPfHNCffpaV5edKDBmI2peP2s5M3fwDctI9J4/gDHkjQr2c/++K6iKSwP+gLSgMMCwP0ukmh8AsIerOEVNwRXh86J7wybTgT+Y8o3TSt8NS65X5AcDFiUvvVuquoB+5qWs881b1rAk4dR6BEhtUjormvp9qmtamKs/XisGINmzeZBuHbyGSGivT8avv0vdDqcp2V11kxvgmh3hpVjmtYD1IgDc+HWdDRPr2geZ8tP641uBsSmSbRCSU/Gad+kcuQCFGZaE6kWJecVxSEINBeIW0WW4ZXEU19Y1ABXQKALZR7DLxAvZB/ItxiAOCmyQi5uIgZ2XCcaqo5NONFgqUzFOyZJpO6KMIKBmLvM+XE/8KwgSCXJnNT+vjm0NKZ4kay6tB9WvkubrLfCAvnNidqdxxp+lyRsRF8rSh+ehp+pTSeZNmv4SIeUxKKLErWFEgWK1f9OQdDj+7ramsNKQfwOJm8xn3U4L0iXhR4RsczDFE1ogLor2u75T9wjt72wpOHyeSizVJmlSWwuMop16G92W6r83SdkYtfii/3e4ar9KxF2v8URoCBmf28EOqFckMjGYqLbHceTelFHJAXh4KtPTdVY+hR35jrFEtb6czhRUmBnY/jcPPoxBg7lSueS6XT0ISOLy0mlQHJ7RaxIbrhJMAw1SKGJhIA+Y6kg5IQWTi4kenzqWqNO0Mx8RAsK+RBZ9EE27jIZOhMhIMSLtZZl30iIpkTao/r53tL3xOITHHLeaol6y5sczk3fPWsxrNz4DWNPmDaotlkt3wuqqLqkiOyqTV+4orGpnZWn/4M4XgsyAE301/QJQByoq11UZBeZk6Crc3TceF5HJsdXQ+v58x73LIon2tbqtw85nippLDu6l15peySmpBVfcEr/bu+Mw6u7gte3OQLb6WCeVC4XdQt0JBJyH/bd5714eLGcQc/t5VfDSLmqgZJI/hsg9RHJcvIM++vSZ9xGReiaRXW3s+swX72G+1SAoVqtiSkJ77xgmSZOc5gY7GR31+tOpQzKrqDPyZs0C7FvQJHjG8tuthKTYdR0eYMX/f6ZNbk2S2k+GgpxCQTdbkQbMurZCppjGnHdDZEHU34Yxiqr0pEiFT5e711wnz06P2ouEeluVVWYcImzYqF1DEXmTjKQhp+QpA1Xb3WFfE/+w3VOS6veeMSl1iZEkUsypjHcB5xLaRlRTVk1ShgtivSc/Ht83/mWqdXcpb2f6LR1S4UkYf5gG4oScCU5nVE/TEINuDrs2MXvuoQN1d5PJR8X/FRSVZ0frKLMmnyGp5rSQAcG9L1/YD63oMDHfUxgF+akHZDlJRHKL0LTw0pLE6Qjd4VmBAf9EnBSuO4R+9jKQTww==';
  const _INTEGRITY_HASH = 'a1c8ce3a9c3d8e09658a23b44725846d995c8e10f9d0cbe486d037d5b35c43f4';
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
