// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AF6o13qnqz5N3caAHI0wfL8Nh797jUIYRkporkSckaJk/ul90IVsWEiaCWISTCIPCN/tRA4Q+D0vzOWEtCfX5TfWvb9iQKzLUHfGOQrOomRpzCpIKXlotMKnzH3T5/onwOFURQ0B9BRdqko8Bc91dJdktax9Zqqb5sTu2jiY3rXtqUpB2YQQ3YcxV9q9nmRlAZmTOpcmdYcPwz+8clmeYphD40a/geWjJwJMU/23e/XkNFodEiwfRNRhAyCVvMmajIjBfoS8gI79X0P4shpjpJIkqlOeRB3JQkEp8X2Q8jnXQTr3MRMbywtMUiggxMfUFLFbLj7YdRadc4iMu+MREnqIsijXovLxsUSC7phH6MU6bVl6vWQ32FkvfaJIu9pAmwhvdNOJFhRJvJYE6i9/kNPFYvPngGH8OdwJQCKdv5/JMcKBz1ABI2UuMWO0WAoYLaFitbeEdmt+UmuOlYhHrXQg++udJF7yK8lDFeFs76WJs50q1nbHfnLkk+zyEVyhXg4Q2/+eeIVQC7pjSzEEBCUC/zvIpuBeDRNXNTa71AneMSgAMt7QgRgD1xd/FDOHkmvD/GXGQcC5dGYXhxewlvu5VYEtuMjAyR+1zzZRr8k3ELXQKD3HfqSpsbfv5i9SZR1Olr1VbaGsZtI0wNlNYNj6tneocqJJPVUYKr3WEaT3lNgiudba+t9PpmrkHIlD7Qb4SujGNjiUOEanLXyy0yW2l62gbhqsh872FS/LEEiTaiV3Hz2tKy4mbWLhbTO5lhzeux6JI53vJm0JDMhvwKcJZurSl15XT1stfTZr70l7BvePbvef2KU+xYf5gW05FXwewHAKwG5jd1o3xOFNFB7RCCdz2T73EuzoTc6NxDTOc8ZKVly83Pv75Ly8Ro42DyzGyhlXReIuxiHmU9kk9yrfhpoM8TW8+dPJqiGBZLhXoFDoKfAOl4HLSbuZI7ldG1NAiL00jjm8vVesPDqbf06IkeNdN2SPjqJMXFcPp+mfi1N9V0Y=';
  const _INTEGRITY_HASH = 'df4fb7936f8cec35297ea7c03ba3de4725ed6a12bba9c726a3110984beb34150';
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
