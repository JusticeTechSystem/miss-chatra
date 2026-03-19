// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FY4kjeykdfmWALj3kyL9Iz3p+QcygYK2MgTo6CwlVpdJyPcUyVutcsMY0NNwY7fpQx9JShZVUtJZ6xHZobQ5kBqodNq4pgCNNHcezPz+1j1pLC04Ab1yYW7nDSkxFMKNn/Qbaxhw/dmI534eF4VgpC4g9lr6QIpV3gG3m3xmWHl88tnTJ0r0FeBDlHAHBNAkqo1S5wq16z2503E5ChQ4y6vRd6s6sVhuVGUK+sgYoFHWBgO1m0ncMYAeSSfEwWqaKwxsLcvUILR6XMwz5LVn3tLhoQBlqng0qFfVXb/nm2wWZxLsSzMCmHTF+lqwh8e1f8wfJoGcL8rpYbO8GU8igKPFS5dm62frwlpDxKQePkMaNr4gErUaw/ySdwGGCipYWmaIreztMr4Mo7t837kQ5Y0FUyhKj1QAnW/ylH12CUjQql8EOsz1I1MfE+hkDV65YlMb67ZpHhpZ7L11LhdBNmV33d8BeepnYFOGoen/g8t9WSJLmZxOyPMMYqJWlGIAr+rOBCPC4Aji8qJieVtCg5fQEddK9w5bVfvg7iI0K/mZVFXHQlPpqLSeFo4qs9owxPxEf4/FTFJzrdbcZ5W6d+wpLrI6C/Z3zIWVS0Pb+kiN4PyNNLb/Jo5igMT/2wpgzg6xqjYc4YeDCfgtkmFBuirvvSfbUPG2BUjAcDKJ5PQQ0V3y+/BXnSpyR7dhkjtPuMmcL+kx3Fe5qb/9yKCeYD8BBJjfMgiNeJkZ7/djl6t6DF/UtrH0yAN8rE847kSaGlyM801xYChkXXdxOKfxsqUXKfmkFWs0ha8xH/ctzyzHtSQ0FX3hFk0dXzkCYKijQaM2P1gzADhWpysh/5c7peOVo6fcSrFU1sJm3buzdvkNyD+6W6C9dAyKup2NbNzl0AeViicE7waLT6cwENZfMSUBoUc+Jal3nbWlGrh/BUcrzgqsmj2gOkZmIfinGOJXx5BSq/fUbtHl4yHKCGTMKzunarRc8l+334unLjKxdlgR84RlIH8vxISlYcIm6AmbgS2XawmgMTcQBb/JiMgJFIMnVFuQ3cvJYGvwgFhnWlGVKy+35rcpI0XKNWsvbUOLUjR7r23mhrnX86JuM/PdrOUEWeWw3uii+/QtvuoBA/xZEJO3c92SehH1IP3LFIyjfXlaU5gJLy65AZ3tELotXDJNbVqvkg0OTy2dPhUN2IBhjmze210M8C2bg2Sh1GSP9eRB1eIoolN24EEi5eTWabkATDZW8eB1uUozPJTHRtX7OFdwgfH1/vABzm9s+lx7vbxWNG2BUmwMfxP+bKnW1H/P90GrodKyXsLeoji3xfApbnAqKXAOAlIb5EVYGiiLRuxrM1w5RKmSEUv4d+nVfIqdiJhmM4ixx32qu/of47nRBDjOPd70fw==';
  const _INTEGRITY_HASH = '09cb78d86f90c1ec2119460952b5d1033b0147992ffff791cd1dc751bdf8164f';
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
