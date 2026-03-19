// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kt9EuriOKGot8co3YD1d45k2Eay3d1/+6GOABY43QJkj+mYwVTPH0at/Ow0FF+EjUzsGL37FKZrsDe3iCAK9brLBE5fZbMzmbl69191peZOSI/Dt8nC/4kc6rupGOryCbRjYHqJ+bU5dt7C8k7g6JC0dMuBVEHHtRufffqgqIpYBwGUjJ51LcZxcDnLan54faZV7k0ifD0D7/ch7dvYG1iHbh/Htnv/p440Ps8/Wp6LR+6xlznJULWut0KPgQOAWey7rlm8XP8U50Qwlx0XUpwVXNZjgc3Oayloduk6SNaRSk9Q+eHr1JhBlqkTHbGBpNVwN6s3ob2yvPI9qepLETQzaWiEF8h8YQerCUsbTP8krBc+PwnGMucBUQOuSwXvP2/SxMQ2Pqa1wECRdioV+LzQ2/8ajer2LWGLJFc5uN1mKVmCuHP0Uoi2g2pjTVJ2IOsDRUhZYgvQ/Lp7QBg86LkIGL/XAB9odvaAvaF3sdqitYV1ZYycENAZ0IgrWG9xSMTcvzRqhHy+GR0b9Dxp7oy0htcHLRCzzPJ/WmuOD8vv0HFlRdizZ6xHUF2zsOzhNGGureAbphePWOIzdkHbHlZ5yDXejtR2xhxxNOLd30/Me2HoDuphlIRKenEz0wFgptUtHNOTcSHdTSowOVlVrVZ9zNKdRV4I0ud+DoV9m8vBs0IZ4bFC/KKCjW1dM8ymVqkJcwG+45R3CGzKpme6sj1eDX34=';
  const _INTEGRITY_HASH = '92816a6f7268c3003c86997f46f38516d74261a07af4ae6b28313839e0d0814d';
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
