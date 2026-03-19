// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'E5V+etugZgAC5mOsEkGFpMy+lSNQaqTe/1ao45q6+M69gePP7Vd/wW/e4WyIMs5HV+aiPGKgLxZWy4nKP+HAKtkBH0+prTJec3kvEy4xh6L5RsFwwYe7PKtAQWVzGqoRdXataGfIOubQqlga+OJqihij4RsikSNCylLTmVS9qG01FsV0z7kC54Q2Uw8Yls4AWDq48oSMH210NiCx7FqORB3kz7ADNZmk0qXYVPjGr3I7+VXuAAYg4pK+mn0+R/X9Xajd7YvDX2n4fkNA1p5jqGBu21cg7HUvySCXEftLebBoGppNZTssBElJMv0e7PfkuC3aTAMgeDrEPu+bAbRjq610xXXjZ/BEsnRWzGJ0+YfmmW+SWRguNOr3FiSamTIQl/b69A3esSdRynib2inuZjsZS/6VXjOI8N31RqoO6H/JwSxw+qH+UEcQAVJTvs0jSTVmn5hP8UNracqltSifFCuDkaPyH8+yP2hgUKmksX/NIsW+sMBiYrPwfvrTNtWHVzIAnXuubAb76we9q+Kz2bNKvi7hX9RPao/vqx7oWxG3vNQaZbA7A/sqqhRZ/ayQZK6uPzvvPZi61oKZPH7gfhVo1hFfQZ3Bk8rAs/CNlIhNdibBN2rCGmMWAUtloouoADJYZD9CKePMPcTnnd1pnDGvcc5iv7httRf3op/nghTgKvb7LCZRq1XC4F3k27NJpkm8/FP//Z3V/wzJskXkbVGIVq1jr+Qsgcn6CXOL1kfDmU0HpnoDMZz/';
  const _INTEGRITY_HASH = 'a2343d144fca64679a4e74c975a0b4efe00b777b92c921a2ad8112d11b6c2d9f';
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
