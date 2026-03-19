// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hm6NLzmsUW2vVWsxftCQCNmZ99E/2DkWMGC6xXggIRF75J5Q8LZAcyfhRrViWXSiutRQFFK9LJSm5em0/TKZzZG9Xcjzl8Hn9F7lyUO251Tdgg5ADQqWP/DlMPbIk2LRPCPtqknvViUpulzcvuN3HMjXhg2NfzVN08Xg7a4vP2Cu9Fy18p3KkSaOZCAQFqxaC4kDjKlDp8zDfxGoCrqovgIfIiP/eGwniszCQU2KMbe5oY6TUCckiOSPsy5sgcJSpOwJw+Zc/GXy7y6NCZLviXPUocan7aVjGYBna41eC7WHUkoEUC2wXbiw7nqFGzNNs80dh03+P6t+nMqf23SllulHY9yVN6bOZfh3ZzPY43hpxIHCdlcLyNi8l8SMnMzkAD6HR8bbQ8U0PhcZRtiFNmz+bjaYawDE5zLCCC2+w7O+QSoL1KEMme4BR7dqqZwP+sXyXfLTZOHDU8wWPBak6ucCgaaiEB11AHdEQIGH93j5gxdy8uHxA81iq9/pKxN2OrLtIqsdcDWviiLjUiVoEgudRVpAFJuBFC/SP8BNbJziv4YlkSTsbUfC7peDOs9qTtXT9RCVTiH/dSFz9NJr7VAPyRhWAs6VCJoCHpvsOLQZwZ90KpHx+HFaCwJhcomr+1rW+KfW8J/fZ9xtvbOaGJ7d0Ut9HMWfbSvxedvgOVQf4CEuzCV2H4/rVLevFBnZ9GInyrJ8Krarb1ibpLVPek6/JZtVAjRrp+UJqfmt9iIYuCv3+3RfV0Kp+VsFZ7NPtgV763kKvmL2ZiGFDQY/CCVbbVN7/Kmc9KJYnCKTQdQMa2Pg3dG7r1C+KIgmVgRP8EeqvuLWEWKdWfIYROMbBiB6ljKqXJtJDltvtKsM/tdTbbwQwdb779XRs8pL+qV0EaBTwLVEtJr8zY4X3rO2GVPf71LcHf6clChy/DSshOXODpys4EZHDDjfXHOVJwUmfpf1nnSRsPSxatJ4b9DQiOcZecbY8gmDPOOuj7/H2+IMEe9Ckg9tJ6WsWYdTPTMdK9hILA+wDIioN+krtUiBj9lpS7zsxqHAcfB7S4ThpTBR1zcv9AZXiDy0gJJp8Xr2/DOmR1do+NaPBsTFJ1B7ad00JMa5m66ai2/iTklyi/t+GXnRDTgtSherITYfnekJ0YXabWL1FaEuVBMnP+YnY5jygYPtxB33Z62M6NUjQpFCQDzzgtxvoEHFGFptUwUG3E5+XTy1';
  const _INTEGRITY_HASH = 'aac97a780b3e089dccaf43e38be90ccd5f71b0277655aff195e7ff77b31282bc';
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
