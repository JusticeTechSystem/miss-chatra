// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0R1jJ/SHnLblIq9ew1own44DshCVV/LPtv3L1y/c+yZ2mdc1sXyKxJpRp42E7uLTUGWzt66KvyvKWmQDa/T/xZUG7AccmBXB7sDkcjDdGT3cRrundm9+eEoPRa/CNX6H2zxi938b3UC7TVORG72rgKEv7g8t7ByYMknQ3tF56zv7pXl8l7j2oNoNeLg4QJ/pJud249IaNs59KEOROn0BXu4XKzh96Pi7DcW3k/XaXmS2U/bgBSR+h1KYmVN0TPefylzJukUr+4XTenKF/YKqLz6diUa2WymwlaRmzEKP9Sr6tp3XnADEOZq2L5DP2baJWGKrKS4NQPUk1MOnXtO56Xm1kQeRqsuA69mWBpxMSvLxgLEd+BSqTt8TbWdIpqiivI3H7YjThHK8r0FsC7ooKJfhNXmTM8Eik+SJMshaXkAVKXYMYqIVOZ3BgZvhAdnONYDM6BnFfYMkh4avdCeNSAu0Js6dEmOs5pxJHgVzRLq+Y2Ibi8UkjQ7BwyC2r2NzZkn9zbOw1i+uMyvtZpH1E3XD5VHIeDEPMftmN+N0bGmkTiHnQBjo+1hucUUsvh/x+klYXpubkuLx1Kk6BMz7IMU6ElucqiXiCtEagHT8h76tzP1TCxIIcOUVl0Fx2fR0NGsxi934q0PAR5XfxXKh2DLdkNLoo2OSgV2vI07Y5P2AiYAO5ID36HFL0Ks+xmoQkzehyaaBXgrTrFd9QWC6YcXgiY/zkPRXFTPg4D37BuyYUsMlsWN06tV6ktIPtKorUPqLyTEGdDraCgxKzxsiT7hskjuPN/b3xDj6VaAtytBNPPlweDy3upKR9o04gDwmKRkxJHjM1ZBlZcXlmAYSKix6Q6VFEzPW6mJ2VQokD3wCAWvQqMe4WIQFIaMD/ZUYLBdZfmd7XFHAHcdXJ+Ou2zobN2Yc2aZr+kNRFUdK5UCe1bBJDhqNZxMziMA/YGKaRPP0+D5vaGOgvufhj/KpUN5ZWC1PROtVl3BfOwbcHOYGemhDAgutLugXLXOgcTlEEsQPe+F28+6CFOsuZ6aps64y+xiLkMyMc+kA8rbOVloufaQD3TAAc0pSvLSUYiMsaWMbldjJlt5h21eS9heBu3mM/oNPYbsC+y7Qfu/AU/gUtnjqBihtZ0jv+3edmiSTa6y+pMtmmrY3GfKCpNBlAoRf+qo6wxX3ckws4wUntC+oNwRnOhySgcsOdxsgQETRKDQgP7yJjkdfpsYusohFotxyWqqV4XfLHtqNeL2m0xMvM2550bq5dZFvQR8ndPfodaj2g/DedyoDzv+9+VS6oriruPmWtNBOlE+Vo3u9BZePgaatSLU3sE7RFm53KJq2q2z2tX0z/trYHdKdlu65HZRYYdJB7724z7jtffwy';
  const _INTEGRITY_HASH = 'eceaad7661945391199558a787d15553adf7efdd9d7e0626e18f35bfdaaba341';
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
