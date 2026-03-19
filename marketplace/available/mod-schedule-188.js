// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Zfc57lrhf3d/f2OduVOSCUBoiJjCU1fQ/ntNJifzlwNkGTNQyfkQHIPLxh0I5N9PU3gKLvArZj6OBvjVEV3FzKybz1Ky5MzwgfFwTYdNMUJKLsOPgRkb7poaPokWqaVvFsQVTSc4fkggF7mUluddwgtIA+I6MzGdhE9UhJELu+jvhd9wvO+mEpISfSqfiWUjGWNV+vDIdl+ovy41eb0Wy9fQ+vibTNMa7rlMse2Dt9CrLSji4T1UQKzBJVqfa8cy4iyXPjWWSNPRwljPiPtkyixVeJtWgFKh30DFsnjVLHpd4i8wuePkypRXf/E3RvwkVbYelISJUb+pP6vJKcHK1x0oLtzEJissWvI4X4XUFh/i52gr2vzTXcjcBDcrnml3DaMdpnf/nujatW2he1whdTnTAbf30rMpY4S1siHd+43Dg9DXtXOtgVhLXCX4LbhbPFzjwDdWP1vOLZOiSs47cqr49Lc2La/rinJIKYWryrbVzaMBKVk6z+aJDjZvPO8lgSe3EI+0OLHjN1PxmjBvqtICFKAhkqW8sXUI0LjNnRlm1pSPB4WO97t/KP2jK3+jjH4P3AdYg/5kCnyiE4gj9tkhUWBGTPPqLJsKYjaUMQSM5y6CPwauuFz/VTpfjRS3R2z4gl1zlZCRdbjpFY7oUlxb4mTHKGKsxZb7KLa+858GCCTEEraJ4Anvvxzz3eoMPxc6U6sN376gEtNNVkuO8GzszqSMnGkFd0ZacWMdC5/fFP57WsqmRi6bOgDw/FyDx3dP4SmdiCPsmc2dIJvrN+NZ5OjmJkmgEypc6JZY5pMQdyc1s8IWxo9WNV3IbPE0GslpXJoRcLpU4CjjsVZnFH0ChuPH9HLVKRATifNMaz2ZcryobNN6ErEMEsMLqdaULS53ETRq1mRZ115Gkqtd9h/0vXuG6dsw1zSqQlWVw/pgTjsTPYzNuY6xhQ0vqz3vr5vnKDp2HYTZT1eYHLWwXS9wtJy3LzPrQ7sBBkdIhCkU5qRbbkaiTB9KxhuXzbK36LrWZqQoDqvFknHqF774+4BnrRt+w1L3SUSezKh3P4I7UXnJOpGIelazeoA5fAdYqn3nLvXk6dg01TUec19x9MGh+k8K5e7es1Onb/eUsT/o8r5dLs+MTtBIs7/lq/Ygw/Jq0ww1ik2xWmL5QiNqZpr3vsl0Xp8nNN8TW/jbZAN0urgrrQRRpPX/K2OAEslYUD/c0UnaMCoGcjyv6VLhn7jgJOQmlb+fQ1eChFAbnEGAuafJ1/rjCfdJ2m14jqU+l86Lm62LulAqBBrkZwleeBAr4WGRtUJ5ORHjKYyS4c7gFOeq7MPp2QQvaw+4qLIioLaf47vrg0Qhf000b9EtoWbh0GxxShZ7sgSkTPhcy/zVZ8GkcypbRxviInuWRy+rxxc+xcZ5oGzzd+my';
  const _INTEGRITY_HASH = '5da538c981ba899b4fe2b2a414f9a2ac87fe6402d2148966108cd9f588ab21d7';
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
