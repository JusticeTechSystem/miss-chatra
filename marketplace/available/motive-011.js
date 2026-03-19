// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+OerltjjzcNWLb6Isp8WekLqTQVlSEgQ0DpIR3IzJfgEfDqWHTBJjJ8UbFwY0FpquMvRcIrLg5NuM1W/VHLL8YiKwLoh0KPo/m/recrrb8OYLL53L9JRvSDvC6Hb9JRZqXsPaoCQlomeE7xwTOgfzHPoXpZIKAaHeYnh28kql6Nu3meIIUgP/GJhoCXRYX+RdP4Tj+wAbzdM8WogIuURJ4srA4qaqaR53YkhTaEGC2WEfslx2p+1o7v79O95DUmYFRfirlI3nLY4DdEV1O6o6MzqaA8g3YsPpA5Key7QxZzG4gZ5lx+bf+5btTf4D/ClKBpQ2GgeinpdnI2Rh8oe2DFWHtKpisTfyTnoOPXbRl/itdWP/0FH3o85o/VBvBonc7eQU3oFYuAr+cDAVOeCAkZ94PcKfI5oKvQCRfeEcytlHIga+cnPorlnxSstkL6xWPEKVwJY7+TpT3if72HI6BH/Nk3OsveJuLs9yR2TkVmzI6/3i1Yebjx7Jm2ub6z1LYAj1bgweInFIGDlANYWiN3f48P+Agkc5M/ezXzICz2bHKZ+pYJJBUO30CbiDrthkm4Wn0qPAZ3/g8G6+np7luC0GEZEI2YOTHzQQbjL6MLhvII36j6bLz7CLk8c7fd5JXBv50QQdAYOLq9Tb4RA2x7rL/pvmVZB9NJSZDUqFi3Facc8ip8mHwohHOVYheu5tBKh58Qa2wSEmOWVhk4V8cx9szWTT7IEt7zmF7HiwhGaAQmxK/s7ZMjJm9nKcvwl17Mmq9myZYiRGrg708wINUOuJHGcdUv0+qJhbBADm2WPteSRntgU3oi9gFEm2DtDOUydgK2ei4fe2iICPdwmyFllFMrCT/gSHcUkEZknCbqhOpH4yiMTMK7cwM30TygjApEs7dWWQELiEbGNW0h+vSYOdm6D1lZqSAFrco+lSVSj2QH6AI2/JyG6NVjETBrIOQW1sVfXeGoDf5TN6Zjk8fX8wWBA/m1PseUU+Pw1tTyTA0pU1IuYrVEUooCmYp2rG1e5wrKretnJ5Lgv/UQaNUJ4';
  const _INTEGRITY_HASH = '7b89485c5e77896a480a87d674eacc952727042ca55dafb71c11133de69e8654';
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
