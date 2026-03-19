// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FFiErqQn/eysM0Q6AxmVK6m4eYjMKqpybPJSubsN+M4niDg44JCbgzYy2IW3IOkKtl9c7Jq5coQGjFy7SLg+qmXz2P/SOZEzb3dgjzyEaiT9nIUwfKZxBONHlt8LQKdyCEjU7Nl7j7GQF1h5Nw7s85sYzFb+gnQ50TQbLxZNluODIyZQIFXbariHBqgwP8izE/2YyHu19hazn4ORKqhWiRw5+TUXVPn6lxUYKlTO/czHjntIag90UwdDbmMrxxyd/xrNRtSZL8Vby5Z21LPJ0nTtQ2fbW6CLL0mEghOwPVYxt0qoK6p3NWAKza8bHtFPnN/vG0G6yQqGY6jrlnl+nq/KUXLEulv0jkrHUOLPVGrVU8ChuFJ4N5g/N3IbGWXYFKtYBjPx4PUlhj+e/LeJm9T67aRy+cYA50zZKebyBaraE1ZeT2dDhRQoQ7iBl4/IuJW595hNZ1jAzxWe6uOi2iCsvoL/V65kGBxgc/Cwwu4NBG4q0IRXBS/Zj0flg0bGzwHJxYkGdtDN9V+00iRWFMRXheyz4SPpvbTembHJIqdLaXFiUqp2xI8kbIhGboO630gvAoGOUg5aoqUMJH3oigWLBCrEgVYErm/jbWr9lcIsW6o6AqAT/Mo9tPagEpVH7AVe/xUNJUaJw1b88nGcA+JW/NFQVd2ms7Bh+ZgW7fYeUO1JJ3UkAt/RvkGyOKne+q8vZe/yWlbvyVZpJ56MLN5jY9xra1zlLFDrrZiDgA==';
  const _INTEGRITY_HASH = '811753a05724303bf45ace13b13da29408c011bd8b527f989416658adaa39f87';
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
