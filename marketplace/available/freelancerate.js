// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rJY8i1jL3bM1KPEvR8Y0p6mj9zUXlcSppLBv7jch2Z4Ztn73hlp15AquG5UbW3bWhlMEkU8TxToORwlEhQZZEOgF5u+0RTAbcBE1WUGT4unv2c5s4PUOFO4Inko/6MFepHAUZkZD86M4WyEcHa6HA/N970dsWCHmB9rTTXdSB0kgu2IZqzyTIIg66SytWuNQlX991sNhYQbnGN4K0W7n9455L0jppypCkXRynMilflO2OjDtIIDpEfEcTv8qD1KhsFtgZr32zGJF2GVcZCmAWEmD1cuaLZnQgUDAasrQ3cpfwD1hRRAWx3x64nY5qCHjldboTRInGpjL7T2+zRrHMneddoHFvk9HjDxH36rXno5DAu6tnNgJsIVdzH5h0FhhW2WvER51o0Nx6MolD5ZQTK1JbBVRxSd2GFdnFSrJmhlfzUKqLm+MjYcVp/Kn6bGzZd9E3x7WD11LLDf8b081Am36GdDwdqOJCKr91AFDLiyvUJcprVWNi1a61LOoN5vHdyE9i4v3a/AC7rQ17qHDTAHTGFP0QeT7AnM1MNUgyfNVKezVX4apWxLMiENl0VY+Wb/dAzwYTYrUppdejGFl9HVISoCrnSJnbPf7zAuaj8GZU4rKCH8rvvl2cKShLo2CDe8rPdV01EtsgCUnLCEsmaAJgXToMX5Ewjn/6MP7fidnLD7MO+Ffk2B2RkMYoiidCafZBk3u2e1Mjv8OlcQc7NkBR46Q6HX+UKZlzvR56SmWUZpeXh6aXWkpaltpn2Hz6cla7JNJR8wBnR6RRWYYwrqv7yqvjKQLAGGzX3ECMej9ZWP53Yr8PEs1KCNEAFXR8M9C86jnqZhRTPB3Fpz1IfI4yHFHoyg5R0kI6zo66UJUUSWzl0a568/kf18d003TyWECrfS3M+CPDwjes/H+drrXE/6tAk1aEOii3Z9+Msjl/2mHg8eLrtk57QZpHuNradorcT1KMDGde/ghCRajimMTUUvmso54CzHlN4zk4hCC8Cfmy+QKd5HCIjBWJK7ta0kLHvQY4MFD56Fs1YlpVpFuwzYD8RfBBa9qPfyR9A0Iy27tNXJu3udiZhyQEps2gYzSdbHJJULhh3QMq17FDdsQw2CJ4BeiA5ZHz4ZB0zOHST3sJpBx5sriAmWja3o6BAOG9VyP/o8NmzMO/CzizNBM2PT8gVWwZKOJd9ARgPmLB6laB+Ek3JE5kuPS29JUw+IckZRsa7U=';
  const _INTEGRITY_HASH = '2c9ffe85e98126b4c26188794687443fafcd66f65ee3eadb8488cc023675817e';
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
