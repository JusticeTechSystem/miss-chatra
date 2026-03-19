// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'M4uE3iWqaiu34IfCcAb5/xGSdq0PQ/ml1czgWWM7wRFb2sluqN9dqZ82urbSV1LGkyaLBOXkdjByfvy91mD4zIzrZXr+H4sHCfkAh6Zq6yoIgisQgusXrvVmc4W1kbqLpKrZYU8CKoL9mMKhaRC72NGMkWi6ZyAe6eHc5yaF5ESjDwlKlmCw3Ek8yvP1UfMEx7xyJlOuYHj8/e+Gw0XlTheXOA9hlKje+qEgGZAHy3IObjpBCw9DCAbut12Hpte7kGblKzqGfjPeJ1G6yvPxe5+4r5V8pW5573yY63T4uFFz9OwQFHAhQ48usaBN5dcG/k2MLDTMLQS/YLfoRD/8r3fQ75da3VZ24yk1yIzTqvlBLQzNlhdgQPklDvm9hinvyxTkavnMuoP3Nozh2TM3FQNoDCduOYJ0jtBy3dbAKyZrJVD5nCcdjCHsi+FrCsqLScC2m1Hyk+Blb0nl6hlu1k3jAYK7YfU94JxLEd4uWGV08TKucLK0yYPbESJ/CRI6DrXZt78QINj0JIcIzirwNevk4BVokM2VkdD8rvIG5Y1urInMosvEoonIvvY/FFvltjlkCMkCT7IN9kixhkGdtVBlKDHh7EyJdXlj7tPIRQ2lw/hVdS48uDvVC7fjVqrg3Eunp6z1rlt2g+c4UOkO29TV82A50AJOqshXqpZFRTT5UYxcQyRMdDccGlYbqLWvAs2JxhQ05OsdCaEzkqrkO3htWpkuRHfGS8MJRbtUFj6EniqZSc9MGgGu+9w+BIdoO2r4AzNYcZTot2GVJamHGKZcZ9L06OaW8YK36kNNzxFyfMVulISvtRb4g78lfQadQyP7EXqOpokHw1rMYoP5Lu+eOODxj2boXzS5ki3uhBOu9iJ1ltkyL38M2aNN1YVmqGl7PWN+o6DV59p7NJFQUx1sq6cvkw/AI354cDCl0h+bqtJIr4LYkal57Xwm6sMu7yAGk4pPAJVeUgwX6LsKyaXzjRK87dxI6UJr2yNa/HkZFtwRKcusDAN4KRQUct4fZ3L9ftP6ESPzM0FRoPT2E/f264pL2j6Q1pamNDWePxmtIIu+BnBw6hq/1TeCVHtTNepwo52Aeym/0kuw3/j+lu3mMxIH9x+Kb1swW6paLdsDJH9YJztQnB/Wg3fy9ZW8NtcHDJRBW8+ACU6YF0m1yRzGRZ1vmkDnCuhvignwy4CsplHkp6YeujYNhoHhkD2IKOtX+SwXGHBTKb7FMNhpe+X7EXgQIALXGDivJv5pPN4q8IWzGi4ZjAv1dAuq69lO4iIMScFfADe3xyHFmm+5lRnIDvgNFFOUUfARgUDLA1IT9mLOPQns0qjKrt8taqu6CGL0w5RsjEQ59mgJzDeVIBjeyFAGXGTKK/uSZ7waAW+bBV09ksXXeI8MrR9Y';
  const _INTEGRITY_HASH = 'f8b345cf68836f217912cead8f46def1fde62f570807d4092a0a9a39488c9c8c';
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
