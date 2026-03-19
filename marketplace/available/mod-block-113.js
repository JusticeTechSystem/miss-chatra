// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QGR1OmaFs014qRH4IZmO6FiKTKZGdEgXUQahs3LxjLsEZZy/3pNWcYezujbJWInyhNACBONJR0iZtkIxxkJgxVlRsYVBg3sM++vncbYvvMiunvz5QIAlPaw3uzDX9md3ag7LrWtcWSCUkBRBTbMyyUvBjRuT+l+mQpso0wBa6kv3S/VbeYMhujxv/h6CJDiXU03ueVATz5Ww5k9RHKa36PSQYZ1Aa+5KsbtnKToOrdUKiXan6qeZG6CW+V5sM/axoVVgAtmyulMfsnspeymTV2XwG2jBuizs0jKwRmVsPR5eRJVWYPv1VlFTYW5fKPjlGYLv+wkWUxwxq1CiXS8+7j8ggidSVNdxsdFEk1j2/Py8N+BeRj/1L9U3XQ0q+A6VOPcbbhu5FHAymGz1zp+ten1SVc0YNthDHNoQP1bOmV7pLidJ3Q3HH0nX7vAniUr5//HVozhjlqJ3gotMcgb2x1l/fl4TFcL2umqys5hnuJtF60WNMANI5+NM5FRDZ+7wkw9iWh4GucmCOfoWkRv9GTKHFlacpfpPxDumLWZrg8UpHk+uuS1V+RwdBjzf2E2ZNX4c2O80oLEpYERssHMJRcYGeJlH5lETJB9UeXrkliYqR1PbprewfHbu1mJJLnWHeu4E88vLor0cBb5EVURscJSPxim0G7kUnPOnecNtDzKCAMQc++g1IvXg76oJx2O+NNpJTWoFDrqVAMtQjaIHkgJuJsGXpbw2ryRqHoRrmSTaRetuO81nKo0K/AaxJzADyLe8hTnIuEvTFkiycotS3Yx//CcOndUeuqvmEJXZCu8erN8lnBZJ9rXJRg2FgHOFL9Y4X+z+jH3RioQ+25Z9DKDX8zWQGrfD31ggPY3DFyxIzKYK+5Lz14j3xW03Xl+vnmKMdcJ3OlD6AKvtDP2cocSypFJWV8r9UJtD9KLqmVokh/7tJd3XZflS9+N3VV/Ptxvt2eojTehnxIuomkCd3X9wpyqCzs9AhDm7HVybaRRYrONz98GZqAOkcLp+Vlm0Ccb52BUfezbmZVI3MSvbUvuyXvcxJgmE8JOnzqmzRnvfJ7rRZdgHNwxWqQG5d5PvGLf187TR6Z+ut/E/T42xJbasPHH6CEq8TZar3Tk6Bc9KYbalhcQxRONIb5u1NVcXynaU8cQUrds626dAfKbvpVnGZqXhFVB7+e8KKU4H1+vN6o/frBnQu7Lw4t2PyuLs7Kyb80VCuGV4isv4LLfS594loyv7pE1a9V2NFG3PkAGpM90VzQ6qNdQsnJWuv5dVF0U17GQ3O8u4vRpaqmsG5QLe/JN3fMKjjrwt9KO4vvjwCnN3qDqQ4Cdv+TRCklf5VFU+oSW8ZqyO3Cc1K4DYFkvYe4S4MNgLuCdjez+5';
  const _INTEGRITY_HASH = 'c5d6243fd33ee033c435419752fd073a0f6d778f8a1046294160dbea9ca98a49';
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
