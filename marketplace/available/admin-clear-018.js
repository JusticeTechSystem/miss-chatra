// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cq9hYJnwtz1JTi6b6HQHzhUI6JqSlSLRoXXFZXQ7+vxqWYv6vwXZFQbKlzhiiFMhU4QH26uXlRuL/8ZVOaT0uRZ9AsXtlroyoNFr5FIO62sINGIIE9SIl6Tz5uQbLuIqUgTeQi6rZ1fto7LpL0ueQJUiStZTEZF+TKPuK4d3RWdxf1th2xuT03F36DMA0jBm40r3zoDSohwskxKuSrPM4frmmGCSZIS0LKVXmFdnrWE+IH63HOpPRYJsaWsMk5+jXRHd8pJZibOvGKg95bI/koV2s/Oz+n5YZfPmp3tNaaIHQv5Y8/xrSgxHNH0790FAADWyHv7PwCQExJwtm5wgrPgKrJrnPssCPJNsH+cLaecGuxpjlTBMSWoM6JmtJBNyKQId9OD+WYxpmSR2zA74ehWXTy1CdshPUJdk3ZsuzWMZ+hZc/Ht6qyQ0wutfa/M/IXk0+YlRVS//JiGypBWcGUqGYx0e3xohgbL1X5O44y1taBLwRApLJrYf2foS+cFqUtWFwttZTuMB8qtQjv68KsN2wCYRGx0tnSfYFjcSudAFFrZV2RtC6kII/eyisEw+iwrM2zmW0nA7nvuD+bUsw18rRSTpD6797OPIg7vEsnET9t+PsXANxjyeXHZ0Pmkn5eBfH5tVCth4GRsC1tgTP/GviIyzJ/+Xr8FETJgB96PIbqnkErkiFhAKQjvovjzGhqZmDPS/mAsxvfI3xru9HqHGhXi4eB55mb86Al6E6Th4OLJGdr/JxmNroh5B3zUqDJ90I4i0CQUX2+2LZdDq6tnIo4A3W8cihWA+H9Q75oTRP7uEizO0IxMII4XLynnF+AlSeTnG2D4zi270gmcgpGbNvSn5eT9qt84hyzkxBCsnKafqqSSfeqb1PzqEPTjABZWIMmK4qbQpKBfJmZyPiNTqq1EkjttJ8f3slvK7Z8OCOqMgzxE+krfdWlZQsyl1swtueEf4yhXs6c+7ZMVqovuRo6rO49q/G9zGh9BaVhNenxSi8HQ=';
  const _INTEGRITY_HASH = '71bcc5a7b128042b640a19c2797c8fdaf713f723c16e017f8c44e673661f3a97';
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
