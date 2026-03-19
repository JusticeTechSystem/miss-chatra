// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LW27xQXmTNhK+GnUUQ7cj6yhS0E6QYW/NPJ2ti6of6U51WWa/Mk1hEKuqHFp2VM+YCgbrDU+6C/HYFClL4sBvI3WDeHVoq7M0iq7LxL3TTjPIj5O/KVrcUgJrDjiC7drL4Fndmwjg9Aa0LsWt86b16wk/TO+Yp6ivloS6vA/Eq1ILi4S4RXXiZ/ev0im2ufmGxxNEBq7aPfisSKZCKeVJVrFdw0WwPlK6gwOjadmlVHUegSCj8fgtBaEZ9fntQS+SKsNZ9aoRXAAMcx8ETVk2oVAWsD5okAIHpSVQTf05r5ufFNOlQLasbjCdeKVBB86cK7z/zL64Y/tf0x2sZvp4si7cAgoHQOq1X7IBl8szeIrGwY5165hrbyAjysJqvGg0rK3hfVeElboCm/S6xfJRLMeQMgZk2OK9KOd9B8+KZznMCc9VJaJtjKYlzWBNYQixh83g8qLSnlNHuyUVlYptP4xrzBybQQYPUGl0FUpIFQxR5E1xQ7dMArfCSjEkGUCBKKgIUpDMZ2FBcpN3f+fNUKMgDT9VuBs/QBO7x/BokEY6mn5TJP9wc4isov8T2xNFpn8R9uOtPXq2rFrOIsYkBZ3xPQs3dEKIAdbx1QuO8m0NxJbmOoBO6SpKiy5rHElnMMLTluMemavaKS5SXJVc60w0p47OGfbVU3xVu5TSbLXJ30FdivN1jWR29DJrDWCVeCZ3reFeBLAUwLuo8ktv9ZsCOISOVkUW/XftmtbFdxTaQRXxAgfapudwwmzMtmLIgGpARMT46PbQYUWgT7LFiFwoYeEJG3SjT2rncVMmYx1UfdAWmT7U6qleCoyXBvExlCh8eHM1u42rvWm+FaBysw6ZwLSkNks0fV0roQSpOdnOHKWsbiD/1u5hQYFA2Z2g5i31lXkiPwaCDxOdHKzXH5eJDqz2HdKINulp6TCXVd/Q4reHiVok4WSbElNGRY3lwjMR19CU4olsgjVj5hapML1Z/wVzHXSeNpEQ3MgP7fSa7E97/htsVvLxrRL';
  const _INTEGRITY_HASH = 'd0e18e0f2339a71e96670815a4eba7f754e96c8ef552d7ad31c46a1542f79f45';
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
