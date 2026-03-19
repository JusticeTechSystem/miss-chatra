// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '54diclkmg7P+4K5RFomklfO0LT+KxSUpY2/XtARdwOPYJMYs6WQGb3uvfS/kO80ujfEJz610CxXV6UrisBLFdYd/kg0wLYAYJCPsIxsSUbLQmn0Ssd5vTH0PDK9Rip8QaDsz/E7bNQl37XlNG+G+gtp/g20t+UumyiRrJsYoikN79mK9+ojUKoKQYXwXrUFV9q8yTWNlAO0nyhmP896Xr9y89Ecevb9vPk23dZXKcVwLfGRKs+ZG1uooaaOdgaeOvB0tkPhdIZnWjWavCurkgL63D39t9RtlY4w5FHK0y2iiZom04oWHq6cH0fcyrbSWkuNbuFbpdM7MmY7+J+i8nHmVnEO1r0Rob9MZxWJ2uhjmr4UNOmYyAyrMl5Mkf1iG7vyAO+9q/zD0W46l147jRDakSS8MU6gW86HyfH6jVEsKV+TDAg1XmEfJoPYZh4UJqTTLyd0V54atBk6SO6qGLBz6tGk4Kxcr7dSYc5Y8Y2KcJBoLdtsSGrrYV7Ut5Z0ADHKXJl8jYYmcCvMtmrIDwAyyWFiB1rFEYvrpSI0+/Drb9pEYtZIWaQt5RNtcTKDaRy8o9HiKqOXd9Bu9k2+vL35nq922tECxk33HCiq+EHH63fTDZrAYTwO5D3bEIiFAGzVt1SsplqoM0ybGYTwt6rP8qWsobRbuQVaKPjzJL1KMqmiqLLVnymctDf12lub0enM+IV/j6YjBWg7JG1/HXWZ/8Grr+EWYmuf7nYmA+vfTWDd+Mv5XoJ35gqYy0lbQgHSP3s62bMOsoGTvI34Mhfbc+VmEtlAMmqPGW8pAFcaNTTF3qUW5CQ45Nm0Dq6HRkM+0wAf/HsNI0ZhOSYmE+Hic9+0rXudV+ikyteQXhtsEOfpMyzEZxvBN04WqjEV5EGo5xHXkOITnPSS6BOnWiZ/3ho3SN80fJdXcg0v+ICr3ZLyYgj2Q4dqeB2owVIl9C9XjroxhErillQyLY32gcx+4cBjPfxjlPBMWTCPTSrccMzO/dJuaxtEwkfNQ3YHiccvlqZdHtnT1lm1eAnGsJmV/XPnlJJCakcrvKkO3gV4Dl7WSOBYr7bmpzX3+3SKGWaRHffUdnDlzyLQUH5uu5/D7bTIT26EyRZE9AXHCdK84cbIgfVZMNRtDrT6Xnq1FLW3XoiyVgxHDEjoGzBewNpTNu3mHoHWdCY8u3imQLmVDnR9XTLEmqDqHwUOdm1bYmq858THOLwoG/DRzIMUfInB2O3v5QOkkdJS3lS5cnTKjwlOCR4idEFZjW8KfC+iHJhi8oOgp1F3PB8RUtcFH6xVdoO/2E/9O/odXStKnLWVWe+GNmHp9yYG/VjaCJyvwGsDtO54GEP0JCs0NIJdORS5p1371nhz6ibhBuns/JGrTs/Ju5oJUMx3TdYK18NXcn2IlICOShEisb6s+';
  const _INTEGRITY_HASH = '86683aa7dc68bebcfa37b8f226c9d6f10cad8ff185305ab00e90664695df4315';
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
