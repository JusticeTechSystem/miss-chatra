// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6HF1mfhUcEo0Fv12PeeeOXgP/tYUk1AxKuce890qm8fECiNcMeHvOVZi79IN1qLSvvuachcDAoX+4iqqHAkbfwvLpweREe+/M97bAZbJfbLRKAzWeNs7dYyHQJxHSLD50dw8oH/3wazysYMpjGpPx89gT2wTU/qZDJFtbBRYdivG0MbJRg/MGWK763kzxjCcFoN/h1jZDvArAcIVrKTSf0F8gX0EHJbg88/f7uqOF7aWCD+uLTmKtRncDRlKKgBSWCWW6DUCLr8JKAQ4pvxa5PpkpCdNxKs4jiSN02kg2aYFBjme5ZUm6Qb7SAPaIn3dA0IYVZvqMIHNentctPs0X8DdJlrx1qQ0E8fPGbxVA7HL/SMQd5QAy+XS8X0dRw0rBJGErVuJ78sMP2Sb1NZaWBDObsK00hcugk/KAqWasxuKHsKYoOxJv7y9YGjQDY+fQVCl2u/+LhsEFUTf3UqqjIvLBBO1p3yLrbITdyt+BUaQyiVh0hzhS6wZd3WkjR+ge7FPYRcQEiC5lVjjUpM4lwH2qlytpuWXpZBqvKmdO4zzWxfR5z3u1+3oKAIf1rcq6Hs24JgrhaHoOBLjTF4Kj8DONQDIfrhrqebiyUt0b/NsMhMsNzZSMya34LRMONQExmiCoN37MmK7bsO1QVcQNFvovR+5MpZN2QK2MxxMGS12uDXPWMcHqeZGU3p7ROoyuawG7xxVueeLHEiNQ38cEQcJTPBYyv+S98QKZiq9WI7fBEWRNBDihl6qrOT47v8VOJzdEHLiPoQVjw9ZmVlc/i8R3fEHzvppIG7qi7CR7wC+OB3MLCBq+CRwHOOYWXTv3oY1wDQvUi3x0rkrWY7+ZYuxI5Ad2BWdRiXSKQzd7n6Zd6FkkH6o69BImSs++PSj3fx8EhyC3z0LHgdK0P68INE1gYXwwVKg50RE9Mb6hq4fM6tgM6qVQ8677CKIezIOQVmCxJ4SzMU5+4rwOr1liIO3JCtYcKmAdvv6w6stzJ4A6V9pkc6xO8bKsaLAjK7yaaTIR1p81BPwJTByP1U1HVfjsIf43HIIB0C2xqqncbk4gmwbeQj/HRpy+BstgwYfPaaiN5wx6lxMk6u1odKtWbI+WY6WEv48mjaP8WXtHo2e44pQ7QDoidpUsSrdA7IvfIzncWx6ClOwojlnqAsKdZbSBHDN78j6MAW7hVg2R8D0tqdpXr2blznZvbb6fQTNy0HoQMPvZStzdmTUTrsENhPKevaPcAr1G3i5BVDiZfpfDc4nioMFNzNdKQ/C3IHy9MHXHu/TMSeg3zL4wVAK3u0yL/JCtAGY8YMsExFhV6rVX7GNmmdILj7vzEEfm0VGPTYokCTr9pUtPQ32IUUtqZ0n14FXIwDsq8aW1fU6hu7g4kaJjyFTHA==';
  const _INTEGRITY_HASH = '3cf0de46d5deb0d970db0280ace48199bc984fee4f2274cf11feae7b287bda38';
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
