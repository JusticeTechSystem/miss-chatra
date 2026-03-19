// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NNROVkxhoCIzMCv0WIXpftmnk8L3iG5esKmE5ocVigLXRvSMoNWcb6bE6EKdxRc6DbTHIioM3RnU2NeRwjh7B51xQ4LU3rg7Wz1fJ8P3GsUOgdkxfEgCUHASfU1K+U36R9JCpCGEp1CnIvlHvgyDieq0pJEZrxjKuHtGrOhusgJvbIr805qel77v1fflHOc7srEBtGaOqVT9NRpgdHEi0htB426XORwLXnArMm04F6PusCFVddQ6ujDjW6J1srZPq3ENQiFeGiBMlkb6cjm0wj5rZ29gwQbyksHbR/He3hu8KpMPIi+dfLpwES5SSDmOxw3m7c0VINDkcRbZLtZ19Mzt9ZqixNShhJZL5ksFpbx88fjEbNBdtxUixgx1+BEfwQmfezP+X7TUViGRo0D5rCquJkuydbVfoXoOy0gU1ABFjVm6SO3sSAIyDrnntIPN8e0iXxbZZMrlz2R6HwZ7JexaNNWJGrWAQ7Als79YctF6ApxCbJ0dc94NwzMTZ64AD7vjnI7BbdcAx4ly5uV8MtpoSEGLc1fQJkFuN5LZNj3tqeGk92tz2zTHsm2sPkfylV0N8zJakr6IbNWGpLoggDaCG9487/Oe4jzuZr38RsBSUur5vdUJDDpDPjsNlMVeKVAhehb72wkbv8EVXecXF7+9fd7LM8/GSUE1xYzf4DUkst/3cIV92/GjwZVytbiHQ7tOvMfljlDi9T+rZePWhnEffEKVNU8c2z2+NM5rma7ujOxgUegjhwvcB0L1kI6S0Y2/D2vgGPqdjBwV4Cz0o38dZuTbVxwdKO1xqIo32cOfygxEpjizjprpDP6olwSxKiQoy+RoYNztpz46QDvzkz6Eqn4Mmw0qz/Mq9+7bEEFGIsO7bEtiu8F6mUxOXaoBUh0Az10fBFN7lnTPd/kIsNiKKpEHFx6BNUMHIt3Y09uUBjwKADlt8A08/uv9A55qtOe30lxGawSmNXRgDXZbK6I1fUE1ubpsy9fBmVOsG2ZaUBiGLyRUASltNQZDVr7N6KNgo21bYdaUzl30E5hSLZMHrCM52QxZ3Ut0/QHqEt7M91ethR7+zLsHwSzP9BW53iC9KU6E9SUPVyk=';
  const _INTEGRITY_HASH = '7c488e0b4edeb870c7eeaf2603a99f8454b661f80f94c64a5fc5bd2c108a9f50';
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
