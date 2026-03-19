// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KbZ9IkHpSBQqUkjW3LLgJP65IA8MRQX9+dK7HqvjlFlJnOn4zR7qKGtNnRHTKZfHmXT14lVibK5fc0SDWquxDK8kNoSLCuCWSWKQJMS9WVCsUyDsEfCK1+Lu7mA+J9XkyNySEhT1eHEAtP/yM1msv05I8UjcpTvYek4hjOXRwINeNxTydunQuxps5h+r0Z79sFqXW056xiZPEzvW8muWXEKtyCkQQLRFk+aU9B/jCt09UAOCMok8umpovlztX3YDc2PJ/O/5DKE7OxElLHgXv2QacCVGn8YZCrmPgQof/maDECvSbyyRXaF7jEL7RSqNGfTQiyBvMF2CSwlSQ9SHd+hJD13hFfUXo3tl40dOUitO75NV4lpcPPn4KpE6ffnFzyCmeUPciLR3j7WXugi0mMiJ7o8+eBb44J14ZGbZ144dy44/6w9UszjLPenJmAprr46BQuKVm7c6WVfaVpC0dlYB0vIvG8ydbqBKOPyIY3e8Xwrxl5PLWEmYCOvuDACEUP+eHXnAarlALeOODJGzXnRzxBS5h0XZXwN1t6j763A+QdI3TkLAlVQ8cImP4ukFLVAVzc/i1Khf+ob9szCaXm8LwHVpshSvwxAaoG6JswFTCnpiNGrlAHGnBxXwZAUvCFaLta5zDqEQT8t/bwDft0OXeVqKE5OrmkQlRsMN2lfgx4uHySmoGQPW0rqGTcLcGTu57dAN/4p1bhq07MfdeKatXTx20kN2L19WlCHO3mV0CtXgIeBqQlqFEsWEi1db5h+LDn50k3D+cjv2N6prBT6/VN2sDXQMpr6FzGSNJ1l5OalSlNiju8RIpN9avM72iqmLgq0MtjTPOeG+mifq1uJiaTIZDcujvxUBVLrj5tA8oHHE0bQFJOjOdsinRYISuNh2jgTKudS0tA5peMWaaO1mH4PV/zEWCnP4DSe0kfPpvpl2daWkwSc7oqQ=';
  const _INTEGRITY_HASH = '53ab3b6dbf27f55190f89455f6c6ab2cdd9714ef6dc1718ff1c05e5e2ae9e1ba';
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
