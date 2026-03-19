// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T7GyNL2DSXZeWTXbqJFWpckuwvOaBtfFbxNLe/Gtez526v8OZCLb3DaWKmRhoIvi/bRKqujwkKQ98s+zDK89RcsdUjRobLaJDmvm7pMwaAs2YBsBUOe3iQ1LVpgw2L7oE8jktT7Oc9+E0axAAdcLFceiL5vHhMq/3vU7fjlNyF3cXbGpIoMGplZC7mtDLqCCvCpMayai7PCNnOxps+F4Bx6D2B+H+itBCmkrnIeVEE6qlS0JqTwamy9Wq1waCkit5rrl58Sl5hHEiBZXvhX5AhZvxpU+q33X5SaRNk9a6XTMAy33ZV93cKm5Tn/PTkujH67SKFumiMwM7pH/JNvy0c/yWiBPsBv2yajBQAYdeRLBytt7LH/lnTeSgPbfVeckLeQkbvXITfYmrhKlNFpYfA7jXpGzEqgq067Md3YPjDfFfIc/+0imuGyuKCmIUukZAikEpxodyKsyRmw6QErATASRxZXjSFVnIx9IcqSocY4wTapa+FEIQ6NLH36PhMpuB1jP370pehduindAoIKUvmL5eiBtIcaHjI0rEqvO8Io1G9Y3ycHJiBBcmpUjEUXAaJoGfvKdjvtW2ZVkKbE1hwWnUHjH4TeBGZzhiDEIUDda3rsGQHbI7PZhXaK0DLCgxYcdNZJbw0UAgP/OfRIjR2jIYzHnOBixo5ppol66usUlSZaq4TUY5sVtPbJCERXWfj/BcPKoBRIUZs0JGAoXFyybun3D/xPmLa25E7bxSScfkZyPJilhYMhGlPf9unWxFYQXwRirCSGz+F/UOCTNmc5f6jPGFCBr5VKKrMmLs0dxO0L87Cg3M2TuLKpBI3zxfZygH/tdGUnHg74nEp4ypN3SUg7gky0pAZ8vu5DVfOL4GAoutxl2zVAZ2FhB4jHrt07YXVcqlrclkh3CVKN5XYiM2plE1iCP8NZcuEqSxws4/NYGuYtl/Xos6IPzY0PsoKNfyGZH8PNQBFjXGYTS64ZWxenZoS6xlGPBW/5WY/pKPquBfh4Y+58iE1Enu0V6kLSCJx/ZYXlT+WZvm0vCTHbcLR7hgZHRgI8vfdOJhwy+Trc4omy4bCgS2kJMf8Ju0AResIDpu2nqpqLBtucvk/e4BE/7C+yYvbuSoGxPQhnqWGNOOn4G/aKlQ6MK3AOGpl8pvWjiwkBNJpGk2c4hvtTmtgQeTn3fKVvnZ3qDFZJcDm5kxSboiaPm41oWnYpRP5r9L7/SoOyswUzZrGuu206Huo9MTKU8ZzeS38wvjTzIiy/DK+yujklZQChmcgKDFyNaWE24wRqVG5lsh6873L2XxHUkLGHcG9H+tUnimHdWOgiOZ2HJpebDX8Y0/tVXEyqECHWSTJP4OSwCdXaR6CyE4EO3rP5T+zl/8QPk/jkDGVAXysVDXw==';
  const _INTEGRITY_HASH = 'abf8b8a1f6c811086112c8d0b9423816b47aca2b10349e94af82369735966725';
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
