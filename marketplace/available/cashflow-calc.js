// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ynd/k6hlfCH+Goohg/pR0/ENqEAYngHWVAq2ozygRY25YXBh3pp1kOvk9AWjsIiB8lDDdQnS/xAqNe3HhaTbPK4ajGwAmYkrUWw0OJhPrrXOf/iXJKV0IqFLoFwKA93CKJOyRgD6xKLnHuJnjoHilTXc/Dskq1dKG3dvlSS5tHBIVQVtB28MbKmQxaDHRH6pnuH0L+uFkMvjOfhbEF7TiD5BEknZI5YHSyQAQPsVm35FSgVmnAzU8zgqeuucvBA2DHmjvTf7ly+eZP3hLRwpl8OgdXYQ9rjIVpuoe7dn5yk3zMf4tEVjZc+S21OcNoL4gyTAQ7GH5HhhrdxmncxoBRcDTZhmRmgpkLOY/1VXXgCNXskxdE0C3/UaUEly9Nzh/IxVOEcv9G6eanGMOd2i8NuQuupQoXxzJLq0uwh4hm6AzygNlXfRHuQVzwAKRm3Yi9aVSex5blXyCwSj1xGrKO+Ly1xvI/3r5bbaXie7VhdsaLQ/RW0rZfBPvIA9OJ/UEsystxKFZVIlSFCwsntInjxP1Eqak1+50RHX9jLlCwST/cyO6pEqFt6jJoCXVO+2CVm7gmUtUVod1EqiIXju1aYGO3A3dx8LMJjJPvh7n6kCBULKS/yIkJ/iYzhQYyHUoRgAI1B3ASkdeV0hsMp9UIcZm5HmHA1+xXOkcJ6lkmbjl3QsRE6IFqDrAgqV7xIF04vCvg2pgeDvp10SxbV2uOo3ImbI/d/pr439Mm7aR0pmthb0VT2JkZsuiU/WRb3x7XzXwCZOMWU+kVI/0M3qPXVkf+vTsdO8OjoSRWdd624PN6kvqlpdkOCHwpOB9u1AODwwCLx32zdZswdH36xTKNhz30z/3K1gWyZ5eT0AgYMWBrxu1ezwBs10jsN7OHU58E6JU4Apn/o8LeARjY1nutwCVEPYTSDI6Ff1M2DtXnzN8rnFJ/iE15PpDahPBmdotBSLX/P+dG+vdtSARHoc/RBVWyXCAZ7Vnnp1qI01f0XQuBysKKHqmwl6gs5AxrUz5WfxOAHrjPTpz7olBZvQ/BHJsOGkpcW65uLpEhBe6jc8lc2YRQurg7PmZdFaKL5My9fVzlqCgepUfjIPlzi+tjMBD2cDTqou6jIvy3XCqmtdpxMba+OEpp5cxwlGmnRRYS6pY5C9RzgZOJyr4yPVqPRuf4uZCUfzAe19Jki7AhWa2IBkOHy3HJ2QQY3b1NMlqNzscdrhRlt6h/PcrqETeQYMbGw2L4lgtwpY8/qhYjUWW5+SCVkxbEfDG7mw6CVji3exOMGUDtHXYG0FPjVghmTS948i9cWTC+VKd8iKhEo18wUgyEb1WZcajqhLSV2Y';
  const _INTEGRITY_HASH = '887bba1f69d9e70242e18d28bfe3f4f44019628a1e65e6aa2415fd5387ec992d';
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
