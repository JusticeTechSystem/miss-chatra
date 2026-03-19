// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xQaLM0E+XlLlMko1HKe88HRXJ4Yb4gNbJ5EPBFpJQlaRPNOlKLYZ7gYjGT7R+DAkAue8Vl4HI67YgnTAFhing9A5HhjnwG3IbzgA6oQkAACu2tuv3f5YSxHqFcdi+g5cBQm9k7pSngTkgjrw3ECgp/XhrFEU6rA1Sz/beBE4BNs3wzyN6KwBJn/7FCfZ06kB7tP9BuxdQiP4cBXe+4bgN3rC3NGtq3rklblrPQ/qxSg0rqiTXFQKceTUfygw4p23g6mhGcT2Nl+3bqC+GQ4AsU9H9IutY/ScBjfYlw2i1MG56b51xNpL6rqEDRm9Ad6DWA4L0Wk6Ipl7cEy6zpNXkPdMsB+FB/jDKbqKUIjVioq+MI7k4ULokHvuCdmgiLQaOpZFLHw3HRoBiVdrrEksjeOIEQD/KArlLYQQKz/fCZp75nqSN5w7BeCD6aEiWe3HjHb74V836oY3OeIk8zImB7lFFx/gYfL5kLMxnhDOOrVam5XDR+OmHwFA1huVphsBVP9DaRdbmtY62ff05Bo0459cFuN4gHgJpwue21LpO8Z4tyve4aJ+W5I7rMBFD38JWZo/8wZCzC6Ci53NJ5trkV+8dPjIt+30zNcqrQGDdYd8ugOUe8SbtInbLKNdhWXtSe2DkIuRawVb8ZtgLQl0u/b3NpT9yKwr9Vq32rASn6NpR5pvvKf3mT1tlHoDW1yAbjlDyJdqy4W9drQhPAfzwSyeaotbC5uhHErqxQHu+764JipwwvRippARLYSHmuXqZcfv4XhNIoXYuCUPYxVj5bYB2HUVssOTFZNP9qJy3gejkOQ12FgKdjL9BGZTbTTRZxPWss7Xhm1jVeegU0GL/8PjwXaKpvW8TljhHcoygK8qcy9Pg2dZoO1xHvxFfPlUU/pdqb08lzEqgHW+n2vbhTrtiMLHHtJvgpaN1X962Ww6RxfnT4e24Zf+NdY9mjCcjtQrxDEdClAubmTGgeApEvVBc3DPVP+CVlde++VnT+o6lc8AJM1irXX6SpCPOguFLrfxC4oPJJs26d6Vhda5ygwJ4uWQWWgOy52961C5lQUxFlGWJDzZVgVBf0HVsrPkSu/yFs0ySlvEQng27YIrILPzemRs4ZsEQh8AIY5BPeGF0ZSKxVsN+Gje9oNRj+7phz6xfOnVQSNWtvan0BXPTfv+tLJXhupOX/N5HBFZlewFeG9Fay883DtXU0f7PkmN70REqcMTqxxTUDNswUdPK3IqnDXeRzwTEp+pUpmiCTNBeLS/+5K8SdfjyLldERWdZSruixbn+bohs6kzpYmZvhdbTJRU/ivE0kgaPNxG6fWVYQri+lfx3Xr5pzgHYD8et1krpdTN0dW5XhaEV04S5R1fHnn5enAw/9phO4mMY1XRzng=';
  const _INTEGRITY_HASH = '92739215f4880d9a01ca1fc5dc8e8802de8d416f377bfd06935e1ba8210f3356';
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
