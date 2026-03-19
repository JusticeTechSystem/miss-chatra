// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dR81BbepR7t0MrVsbSAAcjzWU13ym6WS+54+nPPE8e3m5tp37c2ylYVOo7EaTiwC5BLYRtt4X5NuBW5pUtNy4t9a1gR0xLWJCQ30IZlEKHIUdLJ0muut7wXgNLA3UKlvyUBRe/mFXwJ1/m7stnkts7IQW7UKLutr4lyIesGA00sNBauAl5Q47g+MLw7U6Z11Vk0Mvy6npDySVx1qap6zeKz8bSyxzz/DqacZrEezPLuO3hSDEe+SsoR+wGdEwkAkXlQyRce7yKu7XXnxTmnF7vrJrUud6Uo4V0tLZyF33tC/gilrKwcrT6esyDTbb2qqhowpnKbjUGtcwdsflunubnrLVdSXffRQg1soN/PFszQ0xtcWnbxQWudjqPD1X2tUV0nSiu19zfAAGsSiWMGGjfhhuYZNNVwSJsRcVHhl94x2N9WAyWP7d2JYyyqH9hvVRBDXKd4Jgk5zUs1cHzbN8v14eobRQvVDLQ2fFHCrsMUUtDIwaLIODodJ/mDYhL0dnYCyyyNNOEelDfadSxpJyuCtcaLm0RG3OqW+A8qMLXZ0dRdyLjlAK2ORrkgO2UbJtv2AKP5nbkl6u600XHCcRUQaU1EktCFrcMPXpW1mTUwaes1J1Bu5kvIS9sM6aoyERMKzl4RmpLbMgjyMfZy2a20IHh/r8Ib07BciBll2I5zVKd0mcLuxip3ACpnPPgz5VxSkchqBXf7utCrg25i1M/DK1x5Q8KSji4eOgPraAArazlzkCq8OKDF5cXvZUuAiK4UaiISuWNrJqTEzOI8V/NsTDy4VY6zuJkfDixkRjPZsIaPoiHx+cpKmhIvHRUx6iY+qakmwu8DvrIrepctl1+FyuBN7Lp7+UV1WzKej52tR7+/tPUvu3CobfSWuiF8in64qTu05AyecCIp3vMSa/6IkUA3Tdzlm52hwgJUp1QqBvfUEVtlyGvuBdUB7p3UqYes7jkpop2aGbD8PC1sHJ827YL9GOkpqg5xxldVG1dspWKbogjOonwlZ3bXukgw84BJYtH6aar8HJimyDfAMEpGsmHkyRJKxmTcWm6J7BlKjdNQ1GID6jJ/vPVGxRBwdfi8Aj76z0F4LFCLA/M+cxZCF7F5aykBXiI0BxE7OkrCG2wqNTeEGreKAMxwJd8nOWpazwE/XZUAAHYxO0uq3lPFSY+fx5BNBsQiCVhMEgTRDIu2tn7Jv8Sh9WtFFRv7j4sZzLQZ31cu9uuJpjTySzZ8LWLljBZpGetpqBo4FYlxfkq+MJjG0jEPGAWLuadjO2ZpqqUUUQEiQHQdGKcuuRHHSphTJX6ZkoBXPm26bnhCdQ+tWqQEW/Qyk5yw9PQ+/HWDS09Wahu0tTr9r1R2He2BkZt7ln6gxB/t2aLd8BnavwojPJoQdBoonlPo9kp3Oi7hRbc7ZZr2DGX+mlFgwc5386yOtvmq/b0wa36C0IwXpqx+Qvx/2WTlQ4C5xdHkNnTroQog4TiUWs3k0pLHJACMypnes3ZkZ5P3siKeFEZwlyOgPDnnFyxwKT4CkidQoSZzUTb4q6YlfBaEbwQfhuiuuHwO6gj3D7y9wzkj7JDXcUlZNPy0i+opgBwfyC4czH4DoT7eddF+liAuwFttmfEEL9rHAWK10YPyvQZIipfWoHLi4E4vNmNRwICnKiRnJ5ehZPIYZBPmXNd+JXVwcQEVeJ4BcYiF1TA/D/IE4V803ur3iNd+DM6VQ93U+HtHf8UCkuAib/0JO8VtTl+545UWSjhCsjV1G25vm+rQ+kH+lTZ1ZG8R2RlQsfvwtLkSuznoOMRvy9pM0e8MgZ9yhSq+iz1G3UFoJw4MP+6CVc3BDQ56LKtU=';
  const _INTEGRITY_HASH = '7b09b12359b4881fa55f71dc80cd4960b3bbad383a28ef108cb8ec3cd605f908';
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
