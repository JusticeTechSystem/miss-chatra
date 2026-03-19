// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D+dk5XtO0a7wSI9OFBdss6uBbc4pF2hMNzId9OtykKw+zX5d9Fy5bn9ay52ETMJoXZKooV7MLtFB5/dAJw4O75zP5jadnNAKvQqxj95tecLvzBnP1YWjw2MAalSx4rHqvBkQk9WNUZ/tRAQ95d8+Xrr2cRLAiS/kJ8EsQxJWVMjJnWIZAP/3NOlCXGLyE/AqfTHxBYr1RxEGnzwmamjDpMoy1WpWlyqR3oWIenXV+nDIxe7ONrGAd226nN0bQZfvSl7hxO1SSv1KxN8eoP16e7WMoDAxVbMzAUnjQ5qgh/3lEfkYDtuX0UbXO7pZOiGbsqTJ1h2MIY1aHZkxjtt0g8lYvSDgDpzKRPpGyIZ16MKMNKLPWr1SdLvW9vws8pPHOOYx/kXu4Pp54M9MpGR8ds3FiBhKa4igIhoXlRaqoURvikqSE7chqGjruvFVEj0ywGV3mga7Nbqv137sMdi+FoJsiOn252DctzacMDa99zIIMzaf6/EwVEF/G2agPHTwmnL+8zlgMGXBamktWRkBmNiFDFq1pMXujzh5PLblTvxnsCSqehAFJgQFKZ7Vn5R7k4TaOZlnBTnqfNKZT7TkifB1B/wgPCRhbFMT7ZFK44r73WmvrJLuJvF/Y9rkZvcwH+tJJqDlLo1B6XSxWsu3n+NcULWEn3ZvJKgTP8r7GP4KcCZ68m1OTbZ1mjtt2i9suOxfFLAemUDbN/DnqUSIqm0TFg83pgh7ENZfXtaV5Hqc2LTZY1HW9yrw1CudcAUXTq0o9aeuUva2Hhf1UUQyu766enjYMtuHhCOyNaiT7UCiK/nYLdmgBVHX1MgRrMc5InGVLI/yln/GQUYc62uqM7hZMbziuQFeomDznqIUJrq1ztP5PJXiEqXuNjst7d9LjSkPa0G/f34+/OM/vmBWdPOC1bk5Qs7uKZWdFAowBfh63+jCRBTz9PLZiZ8zq69Z4QOT/RV7aj2Sf3egoDWotl1wY/9z2KP2kxHx1szUtgg16cJHkCkmKgjoQ2EJuDQZwaMFDAXbJ89Hhv6IOYdbac73IVz5p/0eKGFuQSWTurPprG2RkF03WPwryQuU+dm9DN9jHAgsbkQ1rvKxh7wDrmH541sGDeKClh4XzRI457ETonXI7ajegBoejW35UevIOQU9IHOa2SLNJGjmcxTVCy4byKJufx0wGFg9PWr0hNeUjSkOgwaqPDa2sBTKKKuozjkx+vUFt5Kz9SZRqjGGTtBB8t2lSwIHKv+SDhQZNOL/2uRuj5q0vTg/IYFuBrmcOcfqOSAcasD8dohJ6pgxUd/+5q8KrzgaDt4IGSvwelDYBJfuffI3juKq+OIl6tCmd1Wx7JwJYFoMJURyvZKHX1DIXE64AC7uxIdbSeYYlpfNfsnt36zJ5JDHWWpJntepupMGibLBeBHCorUb+eItHrjvAix5Hnrp+xXZ4fSiXvRDf/mysugmZxn9T/h9WuaCtC1E4kXB7jvs7uZHJp+N9dh+mT2Ze8xtOv4ERT0n7h2yyfwb0EouNxCGE5pyiSX1N/ZIG9YF8g5f8/4LUwYvLzkR6Ob89uyUg/EU6Nkie5BMFn+LfhSAEUdG0P1TIQ==';
  const _INTEGRITY_HASH = '85ff3d6326fb54933b2936bb3799e399c09dd607b96fe45d64e2dd93e20257ad';
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
