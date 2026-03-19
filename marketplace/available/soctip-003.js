// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9oRSenTdy81gVkCuq+f93QZtJb02l4Fz0DkC8Td5zYjqr5KhLkVVz1ZezkKiqvdr5X9jnHhkTx+VvYpeCPuRs/ElPAlsWYLjMJiBMp4cs3DkMnjYnBfQWrImsfdc0xIyMcRZlNEw4Uq5CbA5psCAwrxCxkgDXl/nqVVdfCEJyB450Ea7Ybc2tGOr8gGKpF0ItvSLssWXTXm/CF/1zf370VJ3PHff11M+mwU0j4jclMy9AJWDNKurah4vHGtHP3oEUkhAAQDMUsT13VGnHAXVoD1LKKgyaQh7VV3jXZ3SsoTi1Rmb6XRDszmiRFLeGJoswOU4i3TXDgQSafyUbg62pOwsJw7dV+I73GP3RxPIv5DZh3sW4ud7Mh0Hj8prM3LMG93vl6otB+D4EFo4gcBKqxPhKNT4pLjTh9OKy2mJOk/S+Y9KdDS2Cet+/FxQbPr35ydd2fYOQR6ekI5UKhRAclq8DguU59DNH2f96FDX8sAoBw4/z1y5LULaj5tgUzQgteNLjb/91gUjo0zrRPwinZ0UZMFlzD995mQBRJbas+szErIgu1IT6trKSlPUEUwRsvrjeyz0XcWLw5l3aRFLZAiUUkt5l+e8jaLrWNfHsfDGID8FQotzi7K1qLQPEyDxKJDb1PVHS1awUQXsMoy1AMNNjh30DRdKCdnCH/QCUX2071QVNltKhdQVTHr09KDxL83Um3sC36zhlcMyt4+HFfFYeTWZJzshNeQzxMr36UerO6x4sjfqFm6da5LZ6mxZ2rZYS2DqHNASHcPsmmnXaPzXn+CukjAKrZxItqFGjtlccR46QZHuCcMHnHmknx9IVqLhIcYpdUUqWXNNaOTEwGL9wBBug5wYE2hHv8MW/UDvnevjvA4pvKeOqHiMAtV6IfHrHVYGcVFaobeqziPWaV+WCiy7hLmT+0LZycy/y21/upvPjUsSgn+zIcGyqBailsRm4bGsqWSlZ2Im2dvY06KZ0izRUunFICrWbeX/4DIL9uF/RZ2paX2FcrQRJ4NpU4UtsXrCSiB56Q67obv81+LoJgRWZE5zYlII3mXZ9PGBVdvXExC2V+idnkSBOF48vrfNxEYq4zzTECw=';
  const _INTEGRITY_HASH = '807f672e6c13965ef92c645e3ac64444508b68a7be6bb035564fb2f5e7c5df88';
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
