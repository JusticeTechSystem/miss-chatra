// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '86vHcT9Wb7IUsQ+hkiXMYAYuHPCO5Fq52qxeh0HZOkSdrpwwyd1gHy693NI5HKDcVPI2UKOwAs2Wquv6LSu2mpapzEhCXu4BFiWI0BunhcyH8XA2iXZ3otD5TuQT3Y+wD234F3Lrc81DY3orQGtoOR7rvf4zf/hIHmdg6qjDz+/ySsJb1u8u0tmTsaLhuwxKlECEKuBjQhGzNNQJ0WbWFnKeYJOrnUaCEvJbjHhD5JxgVmWCSs9WRH3AEALKMZRjfnikeoQVFnemOs/G/j1VdaYgh4fFl4L6Zk5SMcpHY3hd7JxRGcWTwd6Q1hVWjQXXPxjzI582K01zE628rdSyc8ajXHlZCcAqaWZHTRQT0njsRcoaacuDzp1lW91INQkfUypQ53YemOCK3Wg6a/1jxt5s7vgoZLIKIC4MWjaXo3xZqWwA7+Ow6GCC22lSDyaxQwRiDmzodn+2g2odPCGpuChw/LQcZc0sDctyaqlzCTiaXyWyr7K8bfK6MyJIfCjXxQ387KF/LLkbdbl4kjXtHJ7XynfVTsD/bhdYSG1iJ+BXH3H70fVTGKBOyZ0GKmjddzu+DcBkvbfaL7tnsdEwioomAg1Zlv+YEeewtcfbfUCHJjrqPT3lj5dicel+91pKsCGFUt8rIQJUFO6nFE8nI2MFlezIradF88Osx/WEytqAhrvuKeLpGivaY35riRqoXtE0/AudiwNGSOLCaUXwCUWQ0oZZP0y5nkI5+0IM7ivP1y8yG7GZg0Rpj0rUXITN+h3xXw61FHdLCDF+UBA6tdhs2rrie5gY5YFU3db0HgiWUT0riCsLVx7IxClX+5vs3lRacYVQJ9T+vHvGvcK6w2A+0D8z1P16Mrvw84YeIw7XBGKOgbOlss9am1JMG0K85Z9jA3K7OaMOXb91xtLoQt4gMMAZ0GtmZT7dJnTGTuUqHKtM8d53whcHhY1WTSuNx88SLUutJrv8OmPrO6gqTycLqVOi8PF9yHSTh7WFujwABWJvl9o0iv4jPPrML5aNOVQW15f9YcE=';
  const _INTEGRITY_HASH = '767e16cfb7feb57796cb77e3ece91e47e04745404f4f841e0ea18c5436ac9ab6';
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
