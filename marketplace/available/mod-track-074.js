// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tcLAJBP0aHgBdv90/p7b2ZDnZ4Fx2r+oWghltWuXgGAT00rob++XleT4Ps9eoWZJn/0Qic1l33lZOBKa85/PD600a4P1WSpDqacb/whONmkVIoPijrfyg49w/SpwRdDZXZSRQaUaaNGHla3TErmzC2NMPcq04bXiOPSnYGP74wgLjDnis5xkpXB6NHSjspspK9MAJdb3D8MHJOOnHQvGWwUgLiKQvUZi+0eiyOu0VxNi9APjQ13XyJD066mcxeL1nm6hjsuq0355MtjLbt0ww70fFOlnfIH2qIDk9P40uir62D+51KMIJ1xB/tCWXgr8k4f0WMDxIEonFBsigmzKamZt8Xk9az8X54Hkzs+MAjv9vuk8cGbIeCr7z1TzFlQjotGxxYDv94KJ5Gt1As0n/X8gbZWpGCn7XvWPwk/QfW4TBelkY51BFqP9aIVykeJ2+aisFZRJl1NcwrRFjXht8RDG1CR7XqlIvP7L9OIAwEJkWMEIJtrHAxU0W2aB1ZOe1vZHMJfI04bE4TTIq7PlOOEwMyk+HkghPDMsSuX+6Ltou+PJC8k3bgseK52CFJ7ycIfO0BKQxyiMW7JV+VRpX3WNgxFEno2OnZF2poZfi2wKI7lHpSKWo5utycLwMt17kf8Jit4NNo4G4sLWMy4EuCcCyWSH5ogvqYgKNE52T6BCReumKXS8RaF6uc9AfIufDRDPEFxdzrEbE8mHAzaaV7+hUd0nSoQCsY3DjjEdgJgq7UUvM//fj5RyizNdWHSGn5MooTZ2wIfCcV4Tt+EOilDsYRIZigR3nie7TtdbOhD+t5FqdZialKqrc6E/QXqc0IKgpUts0g2XEN9J6grw6nNeQB0Yh8NCoNFMxhLr8124+Nb0p7cvr7uXddUmZgVVhaJksZNPlnaRSC8xVJ4/3UunGWT27ADxLh6qMkGde1i9gf/o2FSKkU5LZUW6dFbZ+kg8NMRv0NFsGpobxhwlsWXtx/mQVrOWwA2EYULeG6MaNX1gV04f7T9s54KAQj75mnz1hOWHaYp/ixpIQa32mq912oysRhywYJOSuMS4etAH6cD2Ib+gSx+I84M2cWgrzXlXYbUybVo44JecngodRFo1yp/QW/mjHrymvqDxUEkmvdxiCeGDlhlttcl/BDBMy5TTWMKdxoiQOcY3hLDbhj7CHgGj5zFmevRCDZxzG5BCWbmFfUcITeUJMqTcM5vJyhJ4k7v/skfwzVwCQgRLRn/bUohpKAySan1GhigGiDvOJvQXM/X1mojMUC6TKEdfPa8qaH2b35HNdHhX8c9n1tOK2MazrdydhYwAXAlXXzU8yuYKobMcipG5v4ay3Ib39EjseDXDbqNRKIs/2Q36Hmq39G7oVDDc7A==';
  const _INTEGRITY_HASH = 'd8423ab708c207a7c58389fa4a854f5549cf24a240f9ce0a37dd801d683e228e';
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
