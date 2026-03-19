// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OdsbFHkGhBwdVLo8qY9a+f1Xu7OMH2Zjq8QCXX4mhR6worKsmm1k64AKnXFZYWwH5Wj1o+caZAaZvB7pNZSqeZ1z56bQec1DuxE7Uw2ewT7Yr7LkTQa5/wq94liGAL1bJJp22BZNJy9OMtCpNu1+funecEMLfRuLC+ZU+O5uDjZItCNbER/cr2I/LwLkbOw9Gg9fWZ8ZVwcmfrEHdVVx+2QJ+B+amOvmnhqbPRTgzy1Ck3ltxSJI0wh/W2msoVEknuiY1pdj5Jj7SK+w/fK+P+TWYhcHDtBpNMmdyrPB4WgkRklOPZHVxK57vh+Ta2J6RrSYHyGVaTYSs6xDbjKNxCj67kZK63Y99u0+CrHcf9soT38N5tG+BMjFSwbplS3SGngeDv4VXaBE7S/KEUr85i82wGoktJzD5dTA/ABCK+sgb06mxgzVMVD7NHKXC59j6pVuc+3disilPcQGlfkRsaYrxPI7JL5kd+7IDAbqrFruZ6dgL71u5IT8PhRhfFDIIlx/54kYhAJSGNJuvbQU880mpEWZ3MkvxIEsOWQQiD/eejMgeiGgeYjyI6LvZKy5E0wdof0XyCgqSNT1oNKDhVRc/u0Pax7qXOzLi/vMyCld50aXlANniPGjvwT1snqBeFUN0EhJRCpvOe2KS5yV/u48JLKog5NBzU5Flj9jNRL/EEPdErF5fDA/JYxs+F4yCKEaRseGfmS4EOmtwPctuAZSbHI0ombg1blgzTixuZRhi2ygtYREB9Gt6vNC3s/0kP95YN9G5FYjPFgds9hPREQzQOgL9yn6JQQn5m5E9QTH8bUKq8SpE/7faYuhObEozGbTttfVK3NzrgpzFbzAqqkGffMzsnmQfYN70Xvz4qrsjf6veNXUYLZ2jOzfAARJ+0UEFC/D0uscq4w0l708blsClE3cagaEaE5kauf3NMdfbSTPN5K3JZ0kZ8RUqwE9iE5cObrHHUTJ+lqbMQRQJ1ETZQduMTV+ppnRgbEKvh/2X1Wall0GkhhrX+AjOgNOhLaULn/AfpErbk/KjhcIScSUCTtXwIt8GGel5d8TFyXgDgrBg2uqWF3mgI8iNWBTKXRiHSCwr/bt+4R6d8Sra+Gcguh6Qf29BIHIxB6rfKPw363dx1hxt+czIAtb5nso90w+FrIwbbDtcVH7mv+T3J5yymKGtftp5FJinAJp2MfeE0+YwtP25wTHSp0MxazBfV/kyv4=';
  const _INTEGRITY_HASH = 'd43d963de6be3e629f6102438728b8e99affbcc897c5182e4e142b76c79b1d34';
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
