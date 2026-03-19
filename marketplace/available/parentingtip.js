// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w2kekM8dFsOu8zRG2nG6FZi1hSMy8xjl6XIi+nKQujBDnLkgBDLuu88fy4i/Lwi9tEQ+XsSUl/FkZDcVjwj0hEhMmoHLfsd337gzPIOxtWBVkIyNnPLa4zfe5fmBjh4SNvhduc4cHPaHx17TT5BGyhiwqzT2w40eSkGAgwAPK+2kNRgzYntc4pirTSOJrJnlMaZ0eVfg1B1QfQp7vL/1RGIJl6U4vwiLx2sOc2xgQ2CnRNfxaIi06wEN3/aJ6CNSse/6NzSr6a1B7XAR56zGkUKkoyXsQK2lxgnYOhfYFy1LMxgRrhc/4Nqw4MQEqPqoP4x12gJJ3jwnRgDDa5yR4Og9LIFoNOUeLZQi0w2LOMzHPaiAnDO15vONhOVgPyv1PxG6stZMfTUPAu0aZIwz4uIk0/wY4c/nUCRiJ+3ucYtlM2vXMVaZZ7k7TR2z3MTH6AsAWbedB/91qsx3TWDmKZzIRWJ0w7iBTrFrL/n5JiczhdioN5OWaau5rRvMARCYkcdJH9NmGkukV9c0U3G1/UizOzFOAk7mrRRJUZQD0RmPBKHLry0VAvgxyAhjLhhLxT1G27mOVyEx/iVh5vcm4kTIxKwuA3VAwlAKUZIF/G6AXBoSLP3fgiin1O5P/xmZH+LAhuPdF+2J1k0n+xOUHMBvQkP6Mu94MusFm+2jYNWj3L348JXl2/1zeiZyaq/WmtSQn8WErLveC4pwQL4OS20Ytjg0+Y5DuszFr/IC7LbAYpJV8KqFERM5VtPn8XqhLpsM1k4uXGU5Y08CA6wlZxNFDVbp0Rj93wzeiwKrGq7PCip2pR4fNJwqNWDr0jxtIYYFoxIh9xAhNIgvZE12vE0LY7l7X9NMsJdbTM5a42e8iptT1bjsouko1jfV9i4voF+H/xyThH+zwE6Lg97LIrPsAeIb7iV/Wj59AOafWJdUJOuVmn25ufyAuI5MS0YLuhJ7ehMNZamWDbDaFgwpwzgtFRT898e/lIjo9t9knoiiJWMEjpvfS3arCRvce3R/MzNSs3nL9ge5tEVUEZtZ/TrcFvidm124CJ2c9PfjV3h8u8+loBE87mp836UzGeGUNm7cPhrGq/RacBfnZ4Vbf4CmSP7rZZ3d8KFoXgsv9SD14ZqWe0kRHoI+NlPhcmL0yequxbXleR3O2goyISqqRXtu+SGIYWpI9ZV1vFfMnC9/9a/8bEErj6tjdG/2C2qkyHtyywei9A==';
  const _INTEGRITY_HASH = 'f13c626a00ad654e3ebc1a13cba7aabc53b0a9255e3a0beef20fd3024a0d33c3';
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
