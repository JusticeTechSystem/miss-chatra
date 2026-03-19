// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+KnIgoQZ3iWmA1BnOl907WVdDxXmiS+GnjsXHSQnR/b1PHsM896XIKWpiGQt5i8BayDeQLHu5NwNZ0enqCGp2ERHFvuCJ1zWdPpuLPlb7PYmKKcSfxSj6MRgCK9BD3cRSSrrbR97kGOKjpLgLIBqDtrgGt4pCwAacrMywlQkc3FTUdSlblNn8T39MBXhod6MTffCqzRvcw+N/UQLuyEo5aw3EEoVnetKJIKCA+vQhors+OOG27tPlat0z4lyi69WOetXS53CLeWu9KTnvukjJOqVdeI6zTDMu/DV83SQfOEiwC3uzIqJnMljZwhjCAgubQDArHuDhmoU2HSxmpNSPYhW7s8dcmgTS3onDzCOYPV0voF2OOw9dl+vvzbhwclZefVJbJDtu97aOSvfKUxirk1NFIXZqiehhImWfiiojS459jcjU9kMOUNMKYCWmtc1GmzPZ83cYMCXKzHqAPGNE9Hc6lBfiSDK6TwXpQblHJpa/rRdkm0O2ks6tifsDBXWNyhVe3tHHZ0e0mgu6MfYlQj6RmeKqqFnukfLxgvOU2rNIk7Exk0eqsSt3rKFQQ3M+v0G7u9wU7bNn7qS6IaiiJlq4AD9OadktjrYuABgTlliaz+cLOg2HK+b+Xe6SZRQpceY71C2feKaKEKG7Mc+nYF8R6r2t5+kV841Jt3Mg77FtCzhHwaQSic4eis+yxGuzxsJuxGvVn27DfLJZvG3IKchVkt6jrDK';
  const _INTEGRITY_HASH = '9ecfebd4312795921730d8e752f2b4fa8fd02f22f872aeb8588290433923c90e';
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
