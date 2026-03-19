// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bZKGhcQkiobfsMkUT0SCTE22UbIRlXS04DaY7AYIOgKahYgI21LjfWhLQ2cGA5pLQHQce01WAYHpklttsUfjuFdNm9WKPCkT+bPF80vjRH9CFsAlUAh7iZAPP1Ok95kMgdAbOGGqWxtlja6FAfcz+DPK6md98OBbUzkQI6qY+mcr+aq9H4yx1j5oCQvhhAecnYgn7pBU2dpugilQph1xtFcIrb5qbrwCuwlovf1gKFZwdsbc2c9BVFRzjXF86xdAN8Aeg8Zvi2H9b8l9y4yurCVaUGcdn6Ic6O3yPGwgTnEhHLHnucPKsC4ulxblxncd0dGXeG4lB4Axa8KzXL1iLal5NtqwZMAICdE2FUIX84m7YCDBDkyGbEgQEBug7CIDL8s6dIU+CdOyhvkM1q7SDIslo9qO7AAqkwHbAUZAj1UVmNNsxxTR6eswfItdoaKlr+FuIvj3he2HM24V5WUkWzTyEvj1S8rTnktZbuom/Gq3t203beFgKm/ZKzcYnL5DmKNzeP5jfEhoDQUMYYG04dPENhqr6cxFeqm3jZ/l9SL54l3lor6UqXl8zlz4xe1qCsMuC8+p9tLeZbJ7r/r9PfRW3DLS0kIjgCR77K+LRqTOFs2FlWJjy6F3GQ3TVwXc2H8QIu6Y8URFpRRwWLOh4alUbT2EyT0gVaksaCCjjxasmceQOz+0nkPuxWThOkc1axX+J158NwEETu03q7bzBbdKTn6du8NCzIKf4/omKzPZh3iRK1qi1Ifp+uLH/CSuW1PkrdRzZhshp0lSssG6nMcO0p3OfLblkIm8Js143K0Go0ghzg46ZwulH5IgNtB+P9SQUFApY0fEHSjmLPS8d6gPaii9dP+r2DmU9wiKUwCGxW5tqIQNQFYTucYJ8oLSuHO+D1A3SB7jAAIJd+x0oNoIRMcXEOq9++/ghqquGnCwjjh0eAalN4eUvJQ5WjRMJXroCZMiVLnCE3dMRFYGgnQvkJEGdOOqS45sSEpIdtlJy2zt+a7kGPBKL7q8xd5Schv2v12iaRZFkkkSP73GiQNrH/AsZnTBb3M4IpysD1OFAEuRDaR6YoG6QQTFEzckKmgg/ArO2Ak6ix66+83atFAq67xS1yxuAmQytBC7mDJoO3RDCuG2zmss/E/fYm4ynmGkEmHKpvjOiRyvKnZpR79s6iIrAp7supHue+zlvSMhKcrIkbIq5sDfbpYhNou2aujaT4qKlBiv2NNoOHXjScCB6l0/jw4oBlmrhtliXEc4ADSSil0MIDM2dQMcEy7baCt7Jkhd468y9ckMvVG3Iv8jo2J23mqE5oVxE/dykkF4UQAWiUJKIJBBHXglRaQHuEbRws5/+XA6EP5UMuEvp6UPlauuoW0AhBZBxmLk';
  const _INTEGRITY_HASH = '7a821fefb2a104279fa498fc48a0c43f0ca711cd10b9bad80cb908ce90d840a2';
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
