// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mT7TRExKkImT7pXWQz0IYn/jfG1gDeHMbvTYnTzbaYEKi1vc3vKIrdV4GqXl/QDjeNrTKHQ3Zybh4icDP8aP7HyBp/p71Z8kfFFCaaDHdTaSn9PkFaFkd35rwqMCpcgUAVRwRPAPveIjPaa8lzRg6/YtlnTurebZTLR4V7WaCCn4/IPN2BNWOfBUjgK7+DwqD1qJ/BV849rLFu4lKUJIXAchDLXF4cA6M3BT5xy2BGOOdtA68IEIPRgtoxm3MAOk4PbdFP+QPZQ6CH9Acf1PNeY3opFOVWVvHMzi/F/Fe35oCuO/UrMAd4kRAzZCQlaOguqUEjSET8dKQCbstRgxSt0IpNch36ikD/fqDDcUFhKT2ILPlimj+J3vwgqjebncFr4XioMJW0lE2NB79SHi7IPbzF945MrICi6aiF4K7PmDsBpUfUgqzEPJf0K9bx+tQCsRhwY6+RwWObwx1lP3eJaTqwrQPQ86f4m+tqq4wCsVpC/sjjG2QUOgej/Ah6bTdntW6M03JXuNYASS9bAILbS5MwbjrCz9TrCiCxdjpMPJ2QPKf2jJz+SUxzDushPU+chgviw0W1hm/sqld7vZZ6vZ2KEs8+1gOGZ2bU5OD3CBVOFVoXTLycqCjg6c3kf672G/AtHwTvIqerVPi0odV5MALhZNf693YYmrHK9Q9qn7P2qKrwtS2avOIXW7UHGIFKsv7yBBlUMA+gNXfiH+xHvmxN3AubX0oEvCEhPH96cXYP0avDLXeH/jf6co/hsCwfDXwZidj6BFfZlbKZ5/e9Gk8UL8syfU5bmXcS00ErRrBbphlAd5/+c8EcV0JIVEfUNLA1B1nBaK8ThVXtCpO0HlfF/n5Y7b9E2JrclOHNCuWDiiSxHStLnDAs50LpyDlNlYhkKSvPKhGqpf9/EMWjf/P4ftVK4laSpmojx75JawkKpTAqQq/ENawXDMPm4qzKWL582lOYikpaQgw/up2Zf/vJKf3oKCzKL9F9ssToeDYyW7OSq5uBXsuYR/5fqE7iA1c4swUGA=';
  const _INTEGRITY_HASH = '82a8a5cc9fbce1898e0b615cd6f2382c8545f5eed327353b1bf8deedefb7b23f';
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
