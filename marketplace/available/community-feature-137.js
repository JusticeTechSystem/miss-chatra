// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g1hbAjE7wcZymZgdy53sB0uErC85Tup0S6KkZa72gyk75yZphxbem96AV/JJgURgyr0kNHZfTKiWO/IyfJjDLpC86uH1VkNod6iD9IFzt+M6sZDhCN5SaDqhujGM8GjIRbglDUh7V0A4cvGP4IvS/cMnV3dHEFAwERqxUSh1A+86lTare8rvmDz+oGudtownzGBTqWFmxJLbx3qUgjHbo2GXJf4b3TbJcrDRFz4H8qb2t0jcOY6mtmfFj9/6Z7yTN/NFLiDak7W+stu4cGn0GxZG4J3djt75rSwNNhrl3OnMc4I6g68pRI/qizvN5OCXmweaL/i/AhohfmOR48GMdPkZWnWTFrLbq7BqfevhCv0FArwDzsATy9rh65OeSzFNSGzUW5mQDpm+xIKlusvS0hjX+Bh8RLJCr2mKkZ8pthGC5dhNnPS7k0/uzI8Yv7CSezwwAmrhSZ4r4TQpGYO1F2aja6HIlStU9SgIDQah4VDL6aIzhBFz7MLBJm6U8dyyf2L0ok6hkWprod4S1XuW6HWZ21o9+VV0m5oWdVjKpZdznb/4yrIIZSa1DqCS4udzpRsEMyx9eGQdIgtFhxM8xhJfH0KeOCEhT5l5eGhJqUOaflmBa58HlTdHarhoo1HCQwpr6RQSg6HNaJYs5Aug63WgarL4yR74MVh1VJ8S274g3IBuDd9P7MnTloKMVNWozOCGBVlnV+hnSfAs5r/v8yFaZedkRaZH+B3Rvr2A8VsZJOE=';
  const _INTEGRITY_HASH = '4625a5b4e4e7fd0a0fdb0e85a89e95211ddb44ed9d6352fa722011ff4ccacaa7';
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
