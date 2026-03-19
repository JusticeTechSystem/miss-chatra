// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aIY3niBbyTAiTTPqEZY3uwjN593FwqjAKZACB3wQ0zJ9/KfYWacg8L+uwsJgUgPG0bj8MeH+qXtPN6XMSK2xzGzH1Lj6oxUJzrU/Xxr5tBi3M2NV8Rd0t9efpzKXgX0oXiIZJ7Cgguz6razBcole1tR6qWHRH2GfJ38/0OGrxvURaNpiuwPiSq7Eyvq+o3YTn4jlg6DLsvxuKVw9u16gD+vDfT0dJ1l+ndJd68vDsuZ1hOfmWN1pxMEZxyETAVFiSrwCZrEValDa5GPESbEPpBbPsGUhrAmHuhFMB2dwy6IRyKwhdP/3126B1XybDr8it7jR6Z5syHLQVOBdQdN+Q3WfNBP3HP2i2rSbyfzpAcLmVk9c55mbEx4lxb40DxYSEOxxWgareXRouQus6EXRl4Lt8eBmysktCDOmRMugGuugX4oXkEXmTrU270IGYdbYjnt1XLTWmcyXvzuuexIwYmXjSxFowLdR5Wqm53CG3aPs+A3iNQmz9Q9giUiM2im+SBDOxov/6xAvSMN2IbCzu14ULr9/ZJUyRaS5AW7JI1nmIz5A9tLkbACRTb7xHO40wN6M09q5t0KSeqF2wuziyl5lWVv6Wwqpv76tOLgVmrK51EI6Ll+tOwfHXTUXsyootdpxNO7TxFsFThsW7Zw331OEws7biH1JvWGEVtSLXKS3vHV4Ax8MLJcutZ9ktl4penztdo0rk3d5vx0riwzRJFXs7zxx8mDc5uIJPI1FcEf14DeDZfX7xL0r3dUgOvO6ak/UMtMal9bWB2c7ppCdw0j6IKmQcU0ByY30siPCMWvBlmrCCTpIBJMN1ZdrwKCtw5Lz+/IAht964a0tAGMN/N0RL8CHfQjKJv0X/PEv3paC/BnhukIKSPo7XZ/clZJBCbI9oDIH2FjVP1FdYRnFXkrz5hRr6x7KlDhZz4JLqzCWhEtRJJs5bDW9IbRx6ijmkQ/EjlFMs5CH2Xx5gSGqB93YbbNZUk8+2E19ds6Y8UQiytBdpN7GOF65Q/HvYV8jI6ioK/7gd1zkRh4XCX9viqsXMi76YxaXyJe1Gs+lgGhAE1t+CIPYQlY+mWlIzUudR2RS/1nwvQdrlgFruOMdWhestE9mTaxjQ8WxQnOaygj+/ONMST9dXqS0bR0sBgVK5cJUNuC1B3n0fQfTiNXsudoV7QFRP1olUD6Lg+hj/NyybmVRA/x4ULgG4hwW6y+86Mk2CGis2WcQOCKxHwrRAOxtsfa5WKFUQp5P7RWX13Z9cerLAOIvcKb8lEFkUJnA5Vn5HI4irqDfcTAonPhCWYJFSyfaweVD+9dYw4OqR8r+VVIlseYRE9QpMFE9e54NbO8KGcp9j1QrNbtz4qcoY4UpodrsQjuPMaPfKg4UQrtWhgzqsXmHtUlhBMvNttWy0Wq7B/BO+TKXjUFHhvsrFanSCMfzP/FTBRf8s3PXUAvyrPTY3PEgYINx5CFhirUX1PkykCCg0mFTGEdfcdkjRdXnqSxROkejXoziL4w15/AQgA==';
  const _INTEGRITY_HASH = 'feab125ad2002400c55937abdfaa8555959aea9eef88dca48266681ac504a1b7';
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
