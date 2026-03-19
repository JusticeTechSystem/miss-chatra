// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'goJC3vthPcLQnS9XbGFH6jzmwYUwZlhqwT643GHgCfk/uGWgEvyOOgydfw5sBRVwcEufkZkhuW5fgcqqyJcFEeRySIpC5POrstEIqD82IpY/yMjaxplnr/00CAjdZCSBJhBOJP5Id5zPbEQjp64CcaXj0Z+SToHNFEjJ4Am+hajuw2XuxUXSoCNMG9kHStvD+VKf5iIf2LZRYggyskY3FZCDnFevaM0N5XSxGR5NKRsjzdVhZvO6dOTt1CtKzZMTvbYJW0/KLkoiE/x4bqX/EmI8pWK7iojAahmxR05Vz4SVfkgObL4i3+13rh9VnSMBkdwOGjuOpO4Y8YCwAC3PJdBPv8UB5TqsSYfQhhlxPOJeTf1N5GWy/WU/UXxDTuWqYyYnqGcqI2dyM4WwVnOD0g7bONyGiP+lcmvtKbY6BAML/J7imO5jDkWcU8qie5heGmgvkriFifzylozePYNfI63CfhFuICccXZ/0bn9bTkSd3Bm/dTIy9IEfResn+A7VclDkRZLkhqtErA45FDasCXf4pWhwTtxGwNEWUwSwHwh6701mLoFMQ8nVqEcRuwFP7W7F33Y2Qy7+As8RW7ELoYZFgi55uEP2Jy7LPQQ/t8aWw4V9yVyc+MlFbn+7H7sDHBpUrirc3RYMFcDpGNEEhGVWgqdH6XSLyT020lq+ksFp6njmRnpB3GFcV3Sthco7mbdGKaQITvqKGgRwQWNKeoZhp3/wNfQS';
  const _INTEGRITY_HASH = '7ac28a2ab16bc88ba889de3c0d1c9da8671ce7e7a2134de9e6df40396e37a696';
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
