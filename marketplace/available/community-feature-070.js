// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vqWzICkHNlCjqYKpg+2bZR9Y8tP24tWWXGSlK9fGaWuDswYVx2641BqRhW+a4snbsVbSUqMID5FgwpM5hvme/x3zouv+YCbnTGWa3SRvcUDta5NBzAC+tpgIYkK7T2B6oMiTU51uIC5cyXVLlAiyKsgYx6PpGRA3t8Gombq1CmpYX4NDVJjw+pvDAR5ZB9DPHsqLkVrahKydlImLHSt1/LVC17Je7UcwnMVAzYqTC05Jrl7y79sK+5i0MwicWCUV3Ut4yW6txaDB8qUiuJSrg26iexjFbSVenoAmA6JbnXKiFUHa1gEo9n0jRa/ySvPMpWLo+BmswbjkYfqsD8bwuYp9TLfSS4HL7G0WgL1ndfsX+OeUjcK8ddg9NJwdzHi7TXrkETHb+LdYNhLe3Dsh+dnF1+8BF/hVcMoIUIx+Uko99SPdrGoEhdwbCIS/U8qNIAoKcNOjUTE5ypP+JRigUWG93BxuMkGDyAGTHeXfTgtpw1XAeqXHh6U7JJoejfK4vWBev3u33tLFWJi/z5FUBIaq68DHhFEfLX8aPPSYPZi61HQPCrfIR2kJQAhrVDUFKW//uDS/6OlVpW+SyGBo47RZUdODocZf5TobBSWZuMGEuzEqgX+GC9Ta7/h5v2xJFNZVXtNQmYWgL4OGiX7/wuNB27oH5n7smj81vEGnklBtF0H0VpPMGQIMol3r9wtDHiB2ruDwqrlBzIU3K+twsuGktOCX5kL7ulkcozQ+PC0phwNJ0TA=';
  const _INTEGRITY_HASH = '3b1279c815901e60f5fce3dcd629ae6e98a448aafe2402e4d1029502b5f2bcb8';
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
