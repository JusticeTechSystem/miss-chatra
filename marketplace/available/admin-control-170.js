// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dyhIH66JpigJsYWd9cT6PUWWceIAk5DniL0+UQODQiq8Cpu7d6wLSpjBRx6ZWTSEMQOtTHSOoJP3uaxZXvR7CD/xx67osfUPDR6QgFdScZXkhjaqPxGqUWPgWKWNnM6dk1pPpslskjk4j4bKxKf06F6CREiYh9I0+c4tBivHqRBV6o+G8p28O0bOB+vKk58vAf2jJWECklnppDXSMLu7FiTZgTf5zN78ZuCIj/7ypMZ4G9FthUo5eOMRQG7URkQKYp+ciUOHzJFWJmVbYQuT7uuJPHer5rn8xWr1bwwShnhINiM6S1uoOlI/3limog7C2r42vwtzmBfz9/mW/PmDZj9IjmpyZAO2tkspmEu2mQYzxrCTQUVw0u6PdPRMMw5ACE0BH4IvqQgbh9Kdbl5evEQSR3y0KB8OE0q0SWZ5is4JSNrQ1wX08ZivV+D+CdElc9BfPrIaGxjCKZsqnOZXvwa7R0mEOetEphOj4y30y5vi2rcJbJaR93iD3d+m62M2WwxUI6gsBcDgeT8kVC7y5mfYJhPqan5L72kEEEPQmtk4yv5/miwmUvJNM7pOhDvoOrSGOu73Bau5xxR7YGg/muMqPo206m0BS1gxXr/oEGTzMLPoUM9JattzGcrz0uv2W/2cxPekK443Wj1oCBCQmgrdnnvWdJnzW+ehWIlPULcJlPv3ECYJVmj9fuoE1hRXB+GO8o/BjZiCCv72MHEqZzfxZ+eEPpSd1qfImpzGsAUSt9M9xeelbIJ1AxzgqwbBnx/HgMnRIxvxIto1+1TZExzctX4fQeSNr6wX4g051yVUQLhw2ujf0fuu/4lT2T7WBIylXCymXhoatuJsraIRHsh4dfo46AwsseYpfdt61lNLLQi78O3Q3jwNYcqDNeV3FZerP5/JHR3ANWlCI32YjCRx1DnApc1MNdLbOKu4Cx0lUqHv19tUpjfPoxSkTw80RJAK4zzccDSXQcc3mTklJmLMjvfEEMs/pK0rr3ivJowfoucwzLU8g14Loum5+f2xgw2ZTC4L3yM=';
  const _INTEGRITY_HASH = '633a4f2bfd4e0550210a4db3b92caef41cfde0cee61f01ae7c584a1b8f088116';
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
