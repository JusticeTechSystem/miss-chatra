// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm94sb5RVXKONbGOaFW/qUtaKpZZG3catYFMfEflUMgFNqRl3Pxe/487TMsakF3y+uUTc/a4HAgCTteLS0OeEVlq/QhLaXoYS0JDByVQs7Zeq/q6bIkup76rHT1TcdKWmV7HHd82XFRypL4IL0W0jJp1Kr687gHIoPOlOeI7P/ciFvduynRDcV7Uknr2q+3/simY3/qQSZCh1/EwzJaAfD+5s/ZVesy7oJwJAXUEQMmK+y6ptpFt4IjqiMAJ8pXg2pN51UJ+p1P3dcKNpj9OOJ/KlFUn0ZVsiE9AMcS1EHmq8np5iFFNy0xslsKEAyF4+yTQMq/Inh3drmr8KvwK6af47semmeqAe9KM/IVlMRsTtztn+6I2FXUciVWxW/tw+34wduusAHuXitqJbPsJHSkDd4PTPfyukh8TDHiisCpP7FsgCeIc33GcXZ2H7sTLCqzFVBs/j2HxszU+rq2sRZEkAoMVUtfpeicU3tvRg1z01wfVK4M/Q/2MErzL/dsqbPIF4li1Iy8XV0sixAcbcneoXKDw/2sltk1Bbt3AbKWxFkWigxzMdIEWQpu9fID/R6agm5yrgiKpf5c1BZdOQ2fKfYKYMAcZip6FhnyO4X1cgxB92jNn8diG/658pJYfqe0XKM0xnHbkCzK/zQ3fzODf7slaewS/rMc847NOx3RRP2IgBrVUGa6jbbNiNhlouMYVrnXYK7mF/tWF4JEAqo7rGUZ55WGPi36lshKi0KH2RiCLx0pbdgdlIQqK9RrHiAJzZl+XW6oseHvzT7vVOaNCCYEpUQljUFTGoaR5PMZo9JdmVfz47d5fJA8NR+OLWXELoIlP+Ko8h+TuNF9STc8HWROuVzJcE3B3UmkoHdd+2991anKHuQ2mERR3YZlvCZlWEbQUOt2OcSfhQCmfUV9F4aCvtNkKG/pXb1EG4DrXFcq0OP376Xrfg6d6UTedE5wt2ieWhAqeqKQnIsH5Xls1rVFyiTCp/11RlvTXXeUDbQDp3vwd8ap7lLOOUfwHCFmP676jINi2ve4uRMDmEI6SQAN8+lQpaAGw5M6yxVI/wNNPHfEQYhN1er1sZ/ouJ6qmREqmie6JkjDXZWpuUB04wKBnQPBwABIF6fgkN0tV1YwTdtOnaGko6d4aghipYdIvQbOrwoLQg8RhFLjkepjDXpmhJ8PESoYzHbabZWG20+f6VOevlm+BdyxJ16teEmeom+RjyLOmVjskv2wLxnh9wolxa90IzIxLm6lySLBeKKyKkWQvIvJAo1Su8FrbNKMFwSo62Wgh8C0PntYEj';
  const _INTEGRITY_HASH = '241da43110365b3ecc998547bf2135e51a8f3757513acebf5987ea28c605dbe8';
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
