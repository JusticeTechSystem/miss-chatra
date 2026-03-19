// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xWTCGska8c7sFwHMsRmD0kUvQI/ZgBjQRXnU64S+WEuHfJ0lh6YF5AM5g8jMmrIpTPqEA7UWNhiwXRIflSxbZSknmrlEEv/wFyrBTED7rENPyPVPMuAUDOp5YdyaqwroZrNm+2qt4/fwak1Raag25uQcuZJxStn+WRegfmglkS3eOtGME/t4OlCl0dgufB9oh+0fTWVwxsvFx0g1OJi4b61jDw5HdDdOlPYBO+G/AB0GpiDdFDoh/TL/8jP1k5VPRrgijG9l80NfNuG3IOsEimu2c+iI4Q+4kHKCa67VapTOpNy3s3Fz6Us1CsqK4P3gI6rX5zMKsCXUvcq4SWKVqkvJW/GFeAr8WMUe0njJWiuoOsLGMyltL01dwH3ZwBWMt2i5XGvWiMRHVb5MJutKIY5mq2LI9qzyFfVSu2/ysCA2OQ3LqMpBBe0+ETTG90XDAq2SiATwUpjXYyYkEb2+K+QUAlOi9wwMIgj56RUFr5QVEEiqqiegejbrIuKn50E7xhBBqsmbiZZA5GWeG0ObdDw3iK25k7Kkgv65kQycek9d+YtbmnBS+4TfwgnPYVGS2Gejkfcwj6x+L0YCGUFSTkFznRmMVS/5oFtyZJUyR/oi+/Olz6xSPlexjMIxJyZHYgkDIT7EhiN8rZfcja5zv33lsHHHI1uzk9K3yH9FeAzt57qAJ4tldnWCziKMd0qIxSwMHgGpE/WSMtSG5xAuzyvQb4ifHd9LoEWCYxnbaFcd2fj+fy0RoFkH6Um12S7N2c8d8Nhv4Wjt9WBrq9TCOlzLEaGCq/BZ9FunsfIkSuidr9JYzcFpIcicDDscF/RWp48iaMLxdefj1Bj9NM+CNnN/xKtHBaTIRbYudBinO2DAUF3pQnCA59yJ4Ct6bM0YN2Y1YxUCQANbqOQjepa4D6pNi+ZDXUBuNcsgWfp74VC+13ykKFIvhdSRtF8QscXGBWUDw7kDeT4raR9FSbCuPUq8ZC3b2CCMWUtzwN0hIfdGa1NaBldEIpwQzhdys7YrqAsHE02izjP57DYG9xVQvmLM/E+bUWSVQRECx6p6zT6jHlxGc6fKqO6plCaRWT/V/nRuBFv1Md+lHxLzZfY68xnRugW6i8xTcloquNrG1YdhZX/Pk1PfIv/O9xP+VHEUbzLEuYI96nT/qpWYuv46MEu6uErpo5sGIUUWyNLQz8p9PBdZxxMdEPfhZLoFtxNOENMeDAJBR7KjlWT7r2ZcvndC8rq/d1ZNMWMo6p03YOXsbmWlK6frQloC/++6Ulrch79oWCplF+Q0uAzk3kTALxIt6XULX94TtMfTDV0kRGCYY1gUZnEYtRItobx521nPMztMdPkD9eCHYDQLt0SuPXs0ojp5MjrHqg==';
  const _INTEGRITY_HASH = 'cd5dbc638059dd79ab6507aa904f26801fcca3dcb29c5acefbbec131f6fcc319';
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
