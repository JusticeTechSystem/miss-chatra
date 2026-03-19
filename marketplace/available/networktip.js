// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cneRpblMf4u14ou39AfekWyiBE1rueJTolokX2mzz08XnjjRmky5kv/RIpEYDhjh54TuSIs4x4hZoaI9zYVbxVCjrfksGmHekxfath2+1a0w+kizUR4gCA4fKSSLE5t4A/I+sbZlrbqhDrvS5ivERlMsaOtaTy42srybD9rHt3PIlNAH/8MKXIfXvhERm4pUaJnxSAcYwZ5hTyxzCTaL/8AKM5duaOKQBj6XGf7tvtNmDYIDSyZqrfIt3EJGinKpahHJOEAbj0CSGBmnj02+G6Kh8vP0xBP7FTgZDAtSK8NjxhZuN/AQHEBL1TXn7E3KpTMVC6zrAnugbslZkN29/NbRzXHi4GQQ+7fdeLPll1GEWoxsaPqThxm1ajuoWojzlJ/lw5rOWkstQ1Oyl7C+bF+NmpoF57R2lBuXpg9OoZ9ASosNBDODtAr3RY3Yl6ifEKIobQuthNNnaC+3EBf5T6fGsOKqJmUEtM56O8k9ILYxwTi12+Wi6OefRDtXh0giAEr4R0mbhc/gdtU1sLA19Bb+A+lHlL4ItA8szDCFCEdawfag8EDd+Vr4ycIdBg7M4dd6krZKh/mN/EGEaqJsccXvgTE9ojVHe6z5Fkt4UHhT2Wm6A+UvYCnffWtImy8hl15TkYAj7Mu8W5RnPOw62Ne1O3TNRjHa1Mc+sKEoIxikhebzYJ7CSe4+1FYIK3j2id+qnPDXg2B9k/yJZfok/tJkm4K+Z4Cd7ShH1Jo8AriXrix8XevALZr7gkJK9WaVRXSgKfwFWjZhAdiCj8N5n/49dXpVxQbvIL2G397M8e/DDbvSiGo1xJRJQE1FdWbd2n8khT18ES1eQFgVGZRPonRMeoJToebsHNa5FmaMXaTMgFiAmS/jppF+ltqMc2UK6RNYGZDW7wAYATT1J8mdBgD+JmvySE1D9KxuEqrVUd8KiZPa5yrlSMLOezL8E44XLQUShite5f4D/vcdd6YukvUIUKmArTKBMjcO9qkhOFDbGWy+lFWUbKvJZv/5NW5oyFFVYOKreQqplD+wxjFh0zO/tQ0GoaqjoB+r0PsOhEQ66wzZM0ISadJA+AUP7+dRgcSb27L+h+PTPG09byADhtX4wyBjJ13O5Wh67Sh1PyPP7QyJetkvOsAQvqldz+1zcM1YCRdx+9cqxAKs5zQk6HKcidDwbflUVa8Qe0EEg0+Zqbiw0ikApRTUO5tXlZ2MXguRHRTYVw==';
  const _INTEGRITY_HASH = '3fc10764f9547945ec29fc506b80cf4ad92b6cb3fe12f1a61040da6c4c1fc5dd';
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
