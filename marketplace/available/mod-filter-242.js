// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'a2PoHuMY+T1TKQqVU/dxQHywhPCFgS/0/ksf/2e8R1FgJtBxDV6NJeFFeFbCAYwJdmhK9oj1NogUUZNbwT2/Opm4G4E9h0MO0N/77pe0Gh1GStmhb/TtqMkhqvDhYH23wyiAZTjH8zxATx98ll2rPOjombu/SBpEj+lghvBmMxQEty9s8A3ICbQCT+SsAm6QLYr6zZrxdM4zUouzipFY9xyMIOUZLsjCEUjQM2tY279py1dnGYm0jjSoeKBtuoDfTfSxG1xto4EF6wEpuVa7oBQ763Fd3t1jALl+L8PBGMPgW7klSo2M5F21IyGVG2RjWloV1lxCfPH8sFlCsv3lEJZf73PifmfOgJcPXcHCAOGnOV8dGqSKOgEXyA+TUbW6dkoGvU4zhIH2zM2k2MQ8FuQevQ2xPROmTCRU8Ai2hwMAPWTQRhfX6U5/YO+BEt/YicA7u7BPPbhu3mj2fWbYDC2MhjpmFAJ82SI6VKvU6zUeo5e/CXtyUI5kQRM7+GIwthEkmrXAFop2afcxD7fswdI3t6vhXfNW26xw+s37X1XFH2+/LuvSWi7lSbPYbW+RbDuTt86wm8OpZQEVBf/3aoQq/rvbdWZzw/hnana5lE7Dl/zu6PO1bwHrMdIQSZlulGVD1MKuqshW8/DhHY7eM50PLss1+kEuObfmg7c/JV9k2nBF1VL3qoTCjITlArb7mItKNDO0uzMn2SxElAuH0RG/l3Wb1xXRp20+Lu2PXrz6KN+7SGu8D4Af3kjgZVttc4X1xCZ0ZaiZHXpjXFm5jxTIM+ejrDIGwFLHTjManGU8c/47XpKJeZn+naxjy+5YVcR5cvejmfA06NzmEfka35RVywrvlGiwAhv91QoNIp2otUJHS5kb2Fies/mlQvbRKv1tOcIcVhHX5z0aao9D57eawFq6p02GkHTl25C3hm5XpIqzqucAiVExH97ke9oCd32oeGAkJmUhTubT2aJ74iAlvov4zW98SLWHpxO8xascSo7zn4zzlByax0m2OBB9EWgPgM31iYeBafRBNSWLTpnIa4jh5rgRQAtZvSzircS6oQ4jAZUg/U1twkkopQmyvGB/QvlDVJQtXhYfiuHxg2NprTjrzC5PmAG4o+WQEKpxZYCDrylHdbqtOEdaBYlFnRn0WNCITUgFjGYsEvNbC6P+RHEIijrDNSKsIpmxjMWKuietqOcNjF2pgm5R5Y4zfWz8l1iwHGb8ntRVa9HpHDWU1AGLZrFkwQkY7On9v8l+tfhc6aQuyPby5+7jraNVoBJ9xR2ko1xkiFkLnG30UiNeRsfeUZ4FWH2U+QI0Hrv8gnLtcPHN8wG5dsACfFeNY7/m4CM4/HmTU5iw8ap8euA0enG45RDbL7AibQuyaWXr+uSes1iaKA==';
  const _INTEGRITY_HASH = 'c28683c2ee21d9233360734fac2e68d6d27759b3a1e8b62135e74d0173bca59c';
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
