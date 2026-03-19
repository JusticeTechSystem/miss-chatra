// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WlqnXNGkFQoclOVj6KaRPjpC7NymM9P41hKKZQ+0I8X17CsOMZf+rqp6uzH2g0G5ka449RpTpiql/vKlGq6PwXH2UeIMlvGpemkm3lkLkMC93YCYeYGABOraVJdnXbJ4UvGH+QyYTRfpXN79QsWk7jIy1d+NxQKd612MQLaDUZPtmT6O2TVq+8y4m6zh29ZRcrd+j2DHRIRWnwI5D//8Cinserl2/JODvKNDdGX8SfwppxnBj3yyTAW4bTDIPfDdW0DnWCDBM1Pxx0hKMbkf4f1M0nsSMgkGht6IhBylTNYynrp09HVvAcqs0QbKo+HIWbGsj3oEK5tX0CLAsfVqLT9e4AKrYGDOP7XA2aTmtTEnDqmPyvkbGJtHX2LgV7nbzOSY84H5OTfpbmjuOm6cT4al5tLnLQdMiQBimTj386d32Ns4zeiw1zRHfPLQ+UzKuWb4dtgbZ5DMopI3J3g+ZhR6u+t96LXy5dUTY5QQYaG6AWwsuXxRMR2M/zOyLA2MmJcJMUSwd8hkt2P+/Jp0wm2CzXDtHrbgC1JDuH2vON6ovhNzpzSz8QlWDEbj3sE/sqdkdcxBwkDBCEwWQqEPrtSwVmg/d4NSpqxiylcdjiRgpTzv8mFPniEXnjpVPmfxTsfxePLYOxyOWJLMVZHtH8k71vww/id7+xm9Z8HIfLe7jDj/T4oNT+494RPCxMwP/G/TXyb69xK1dSwSgLUw6+uG5lmNPB9cXcM3wpirTFOZc8BlVIIFwnnsmF8+2GFPRTYVo16f729udFTUH9X2FpT1c1B+tloHslVno8l96AsMEFjx5A2EaE0xGxOTJprh3dS8k+kbMFxtNLL4RH6mHQGutGLKMhBbUV6bBGTCaGtOyTeMvqNml96FN3B4VKzhWvFus3klY/7FTERhPrflipPxSYFmmZyuGeaYtMMRUXNDHOP4URE3bcShXdXWZts5fAGFbF17hWjTFPGTDOWZL4xcmYbYfEJq04t7IQ3sDPCX6ua8VxLFjWbj4koTyAIypF7wXhhiCh/gxEDN41QHgjHVd0KyaxIpzDfWrEqScmJJlMsEyBBjn0eqX3BiEHwKRyt/nXkD+1B5VqQHBY0nYt/YMai94PmNfgiMGiHrleJme5gmIDG0h4ROrPL+TdUuNjvwOHwRP/T0zysGH3UxD/wHe5hgJ2gcVvXJYZZrKR38kcXK84ryRVj8rF543FzVErrWireO4AY=';
  const _INTEGRITY_HASH = '9fe439313fb254a30d0d6f41d7b49eaa2089938101158ba5e2032657f71a481d';
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
