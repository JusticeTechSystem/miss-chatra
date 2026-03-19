// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i+rYeT5supIWv4H6hLGB0/eTts5GJN0Zemo1K8A6TpI0Ot5lff7RGckEAkniufOnjkGqIb+pFdiL3i44XzAr/0JWUTdRQrmBdhS7srMyf3kKzMVPric3wo0A8ukWPw2Xln+PKOvFOrTqA8+Tq/HDsaOr/7T9jJ969yPSNP0ll9JnX9F7brkT2ED9earh6wxR1CV9hmXmMCnutUEY/b5ZQhWGdKvJG7TthJtChLu1ttgLZHx0WFMHwiydimktIYW0866GGKiYz38MsQbDl1116t1vERV+GSqvoH79aFoMFNgS5FVCdAW8p/Jy1YJxMvMBkAfz0wxSUXIfnHuZxcoUvkCoCrTkFQ7BMR+dYzdiYZ0zW7LFVT6P6uAC7+7+O/Eo8g/He0nzmmZopiS5M9NxSXxqMmpKrYbUlfKpipG7ee82xFtQmC+laOVz8JPEy53PrAZ/HLl1pSCm84ziKSQoi8UKNvzAW3B8DJmN94tscG2EuWW8LgpddgnmuNeias3LmOthdGiTKl8Vz9RQ2Xgshvb0PAEVP5Tm251z/sX6K3H/CUOiwlt0RQxwb73XshT4DeoYqush8j0Z5lTXziKpnjvnXwSgDx2WGTiLgA+/0W0g79DOM4rFQN0Iy/bwZYxm1fxO55otMzdUuWU6QiybQKj4Tuxw8W1ceGZT/Szpgx6ZGf7XFePAVPe3DWI6aMl0osl5yGVOIVHsTdwjexx/YtH5cfNv2n5fSSrUlQXhW6de7/YBc+AH6k5hKhP1cWzj9pu/WoSZwdPVAGM4HTOMjGOKyVIdja0ZrFSWuvLE2r5Wm/u7qnf2z6jYhkrvyGWoRPk1WE9wU2GIymxfyMum2dwKbyfGzwcjcmrStvx/oEtNheTGiRcyvAQek5t1PYI6LE5JcbAHLeI5ALkR1tK+as/NndnGs9gePJu7xtZAprUwzNQdw2Ta6kQlZVVhWoNzb2pO8h8+5Nf9K9BAdPJjVmpXBem6gTIYzQG97Mbse72wOoG/0Ug2bjuTdrq/5K2PAnECEGJdntDxxJ6FMQMd4u6LXFC6LzEW58hd1MsyXHNqvPVCwZdaFfyaz04JGrsJvj25iSvxONd5RKWN5nzZ6jscJNKG8BpEZDvYkk3oxO9m/WybhfBccGGjiJRKwiVRbOwy+DYbm8s5PugeqC9HV4zv0uZW4opa2veSIKIzkCj6aRTGbebRt0y7Tr0tiRdmQrjrJ5bvmDu+LMwXSx8TlTR3zDrF5U0A5WrTNUxB81gUbdpz9UzkJMpeut0LjOgGxVal1gbT20EM0C0kmctevUb9r4ZP4h7VnjLEffbGtvOKv8WQLC+rT0TE9Rk8iuTE1e80gyzJ7+B7KNu8Z55xMsWopJvrltkwA9Uh470gH45uwBo/njyu+2QCj0s9wepd6N4=';
  const _INTEGRITY_HASH = 'f0ca684d09bdb21e088f14232e09489c2333dfbe6c140aca06795305171ebfe8';
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
