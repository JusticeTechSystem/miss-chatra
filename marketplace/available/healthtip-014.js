// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U9EkTOdb0p4q/OjZiT512skzbEpwVfZqmhenARhlr5Q6OyQ7ZCMN3BTIJV7+a/RhlhO9Spz2rVphWJ+/W9GsLf0Oau9SupTnlji/uJ61Dd1DpmgDFfzqEObXzX+PUdFfakdaNgwuZMpk94eE8/IQCW5FmBbE9DMiB86hhHpKH7sQh53h5PT5zqeI9i2OToVKa4rvlHtseWoBOvdB1sTkqBceeAcskURZoYJXfdc6x8Ke4Js+tUJKtdmMxKx+05NnVHAAiQDfAZ0oC4kbllZhv6U8ZYOP4/Z48mRVac4YqtOkGRu8cASPTTUUUb84O8Lj4xS9t1y59eZ4fOP/z5qHSItqvm2fzQ/fKox+KbBD47K83u1It3UNKHC1wG+OKQCYsX3kV5f/3E/1j3ShExr/tho5JXhoNqq9TbD1WpfYV25bCz2BsE3WcCsfw7/1sAakceRSTmLJHysS4jyhxhHuty2QtNlnF2ey3cs3k1AGedzaiA8kVtkN2NUNKC84Ucexe2wWLtJPuYm8oUYp8e9/5oLC2EX48eLQ96UO5esIZbQKBG+LPHZjOTsxQoOOx3pf6PoU7o/0CVYSEcOcxSdUwWMQqxQNFMWZesOamJEVOuOSqQffEmhTN84YzFk6AEzH1ukM3suDqu5+AcTGxfNk3lYqNaANQBUL8eiAYe8q5t6HmCpl5L/L3BPUrSOyjexieKyWzkp3lURGeu3emV5AbyJIIZR0sKIuqXQ3VEw2Nmg5Ty6OxCmFMA52uklKLMjTIGytz70scx9dQKnXUNe8fySo5PG/LkMZg7/v8kGfBVqWVfvDy49I9w6CiHcpIZy7xYxaQFXFdyj1aWsT26OfsptextQXcRbWphTxv5k+t3Kyn+Qw7AykoYZDb9LqaHWsNfaDw4t040aJlmesoPyIeQUVzjfupZOE3L1jOWk+SvhJDYIwvmtf02ZaJhA=';
  const _INTEGRITY_HASH = '3bd464ba28b6b1eb6eb3ba54a9745dca72e507a11a41e515f91c7fa82125f09e';
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
