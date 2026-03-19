// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sXR9hbJ1OP1OEbD/h7BvimJl1rZT5xSnB6OuLi/mnsUs62hV0DKPURd+BpN1SXoT5rbgyD0Xh5a62uVCVQNegHAj4pRtcB+OSDyS4mArUixyEBxiEPLg69Zcf4IjfWgR9reCAEDnQhRwhPcFkacgwamdI4uF3colRas9UWFALD8A8fF7tZBQprNoP7P9Oc0/9HUZFD4DheP0/OoXQapvzGab3c1Z7pupvIvlfcapTLZNrveHdjtfYjAZaWGlh5q/tleNC1csYyht2mTsch/LgEmfusGbzczoiQew4Bp9H5V9oMD1gRTu+d01oOcjllvJq3mqrjLL0ZH8L2vq48OVwjQdeTH5OfVM12m0HDyVVej7WGuRGxvfMRRw2yGA+gsJpgTSUQKg01pmg+HH+TI9nt+cDvdG4f5lYaEZmt9J1Ynzh57zHn5aNNsRwzjrpFqMEhypz7dSXxNjpSqCIbo8vm2T0YSuUkVOqT1l32t12FvKlJzOSzKPuIIjbNLPK0wlWXlTeKx/fwSiSs/wyVqVNBl+BvOqdqCKpHgp2rQea06Sf/urnS4oc7c+4KE+HX8IyzweC3zY9INHgoqlg08DBw2H9AAMRU4f5NkntOojILywZ7IMdsAz3LpluhBZj5Yj/JEATWUOAgZAzH8X2HaUMDEfDsIBsrV5MorhUWNDjiFljdylG0XF9+iQKi8+8v0DMhl00IsgAoOKwNtxaWxISXPzsllI3BIhFcBfvZDNHoocEFvjy/E50sKqN7+yBjPRimFjGqOc65pHEkVmANYuS9nbPENOo3G6X8ieC7oW/7okhFKhyMZbqfWGRWwT+sF2cp58Yug+0/nz+eOXotV15UBRgkThXjtonaCsILDBxVKeXCXkMtvsjSaDi76q36pF4tAgsYvxWVJDyuJdxbhpHdwVzx1stBSXbIDOzEbbwZ3uWnQpBRwF5YmFHUP+xNIjnS9kEGlqNrC+3FGV0J7RJt0HN1su42Nasq99ag==';
  const _INTEGRITY_HASH = '4483ce4ff3fe429385ebe9537e711c725ae10251c9ff9c5cc48a00507722f920';
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
