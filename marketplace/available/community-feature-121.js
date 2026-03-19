// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8dKq1fyxqsz8ATh6YQMwTMfKhLzU68tM4olT6GUbLKxl47kz5xqmLzXANI7rlGMWPmbhp9hxZnjGkL9eT7PexmuzQWWvRZvQ8mv4+2u5TOvo6MJQUT5sIeMO3YzPWJCCscx1Bm2fF9ZaeQl3MQK/DMf21EatUrymw8QTI9hY/OjooYDKJrQZdIYoAZ1J4jdTWp0kULkokzvkbya3x0HlDePzYiSGzAyfGcJ9nhhCogTzaMyWyP8YJWR9HpTI8JPpg/5HABqLi0BFmJ5VHkSFr0wzP24OKlWlHeVVvkm/sI4pplaMDK2iArFQGqttfGSgjT12GgFP7/AUmNgVDpxaTBWnvlryNjZTEtGY8fr4852tmq1YmQlzKVg3wNWQTKw3VrYm5YIPzhjhYcb00QvEghaBbp8/xIGT4zmKmq9LkZIEDJsKvI9e7do5+OgAq73TNWh95yLvipbLNYltw39UA/5N5PJ5bYE+haw6QUcoYskIEM+/edVTMygXnD6Gqye00azXYlDn1fa980hmFpjWdiKotq6eqUltJa0upTzCMbFjJF9ULnAodOQFqo5N++u+ouWvCM4mqKcNPByX+y6+sPJyqlweqs0Ug2mu45aXT96Bpj4oQl9Dx4Dcbo6E57XUMkRE3y8ngUf99Vkt1KMLxkVdwU10F4MGGhRQsenhWrZWLtfr/gt/PDVCqxI72H0uglcWxZczaH+Oea9+B4m9I3+Ope5euw7G';
  const _INTEGRITY_HASH = 'ad5d3f397fd439361dbb19c20a53d3be350ac431e506e6f4cd940220726a271e';
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
