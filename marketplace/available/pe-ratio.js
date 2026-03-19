// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ivMOS62QcdawpXj+pW6oLuU3Tw4ByUdI4OFSiyBPRIlUjfTGiUD49VJv9tirnXskHPZ2wLsCQOKVVzUN4ckdqYpAWwmslCvtWTEDIpPOyXD4Jy8F5EwaX814LTFfFGY3CWc8KqgpA4K4qkPc5sQqev3jhX6cAuwnQZP4EDP8eejGhdPh/KJ5ZPveZHAuL/2d3C0vyx0poqU52GgzY8JMozFDVmt9YZDughV2ttXtRnc2QuJGVEoBPqVf/aLtNLtQLXhnXStFWGS0AzkuBNM+uqDE16MTu5QjrsF03689kyoWW0n2FM6/GED/AHDIT9BsTYWpFMl65dezanMfDTo4ZmyO8Vnx47WcjSQJLNxIzfBoWBe4SVMpwWjZS3FJXEtaHrzIpElRdIQOjOnT2TBB8JFvL5Je1pHvLrKZZ2AKEqRWR9ezoIkezMJ546sd3sGGDFXpmKmAjpB1SNs2ugIl8FsZJ0fknPIu2NuyntmWidEGO+MnyFtnq/kwO+SmUYl4UcdtInlmCM0qsb8hjRnkcCyk8EGghd6AO22aXqdxhuU1En7JP/6PFQA0lOIo+UdQ8owV2ttG3l61h5YAeuDYn3jOW9eWBMtDW62iSOi70mhWafFh37LxDLixZU2HGLJpQwENhvHYRyA1+Oq84pUEob95INuBTfDufwgRaKvXxvCIAIjPBhRTxHrNpRIl/n4XourHzYT0R9fyzkqa8FZMC8BBuM4NzYP3vnGqrM6frYtdSWP7GO3IjoAKmbq2TMUllaDjxcN5h9oPEHPxX3xuUrlvQAcei8ZEen35FR1pA+wjqOYrJGQc4kmOWmCfGznw645xzQPRsoxVxZZTz4ErupDWjFFptc2OPTzbjzfvNH7sBM0snRkG/LSk05T23hip+8Xa4vwek64pHeS8XRIQ9/ngN7QPoznCQ70a3Cn+jduM8ZPt15sV04lrNKDv2JAg6EXbtboAardz7Xrl94Jrq3KEZ2Sm6rbjT6ioMIECMSjjNDzEQjrGQt08AqFsRk4IS76/GaZ5zHYBZmHnpGw+vL1y/qIhajidiuPrYC6OnPgkCAe6R6lpqArTtGEULlF0qLpQmctDCkzI3QIIOL9Ihxs+UJt3tpB8nSTZKwb780jHeM1YOeChGGW8ig==';
  const _INTEGRITY_HASH = '9668e72d9f507191f529b8dfb34393ba7bab11e7267c0589d1e9540bd95efb12';
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
