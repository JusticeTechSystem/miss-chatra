// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RuKGaVESzNr1NOjZ5nk66ukcfkSESMwawhKLKRXlJMK48xATq2ILVIxsqo73zTZsvZ118E85018T43FFBQ3hJDVLP1Zc95A5JLX9L//Kw5hrAosPLdS2ONLUH74jgcLQkAETkem/9Q4Vx8jvODZbCQIIcPbsdmeY3ThFe0N1WUNqi7L939vew5w7KqPg6siRCCxvrVvM2rBDwLDo0w1fXh6QUNMrYPtt69GgjF/NvNPbh8LAks2/Mh9VyzzmAgxpcsS0c4MAv5YPeHdgl8eo29x1jW7jDrSc3gOdKxP9Oh5XY1dHonepMP3BeZmKAEOkoeYRp08fBAN1p1CoJLFM3O4yoTziNrrSux3WwPjq+kZcWRtge1VOzlYEfOJ+oWXwmIbNtq+lP6XZuhPo1A3egqN4ZzuKYiB683r0DzBwvWgxyF83nmJU/LYaogl+IY9zeUrIKthCmKVQ4XstN5gM0Lh4V3zQzjdaM9fwTz0E1Uyn/hc7xBNpK8TDh0WbprIrbtAO41AgnOqiqWWS88THpDHVbcwPH3HRQzk8IVpt6ovx4WkunUKOfq0Bp9sja9u+KKrkRIe5QJ6qPO8E7Dw0ayCNgeKR+66ZgxrCDS4POJxIo/zEiOD7z19WF/pmC6Tj1YHClyIkdhrXLGUYQ1ry6G1UhXAN8mkI/33dUjitdNIrjwMUKBr/lQBrx5ZmjLtj/9vcULDXfKsBSI6rTPs/PceMzWZJ2YzqywStgT26QsvpZbT9imeOtTsD5VxL4UfsVC3/XbPFasDvcPGKrUi1pNTZgcZfEOv1NNYdqq13TkTRLo3dNvaRIGQVM0Iobv3TzxkV/Aqp/OpJb7kfCrZxasUp9mqCNUryeaCHnxQZHN2iLBqWjC/vYiD7yBmjQ88wKG2VZKTCLln1IycmI4chlG9NA+qzWFKKF9fWwAq0BkPYNAfsGfk3iFO3TyQ0shwn1TkxMJL83ByzrGxfbqDq1SEwoGUJajI8ziRMl8XZyX/uiSFnNw0nHEKM8MRA7mikHcW6+3CG/H+ASS8q/2Xal6mXRjRXP9jedB4DKYosr/HOQoH4Pnw6wcltQs9Fu9ICKzux0lI/lmyNrimxHQvCNEX140Z4urRRxsQ2qyzt/4tHAIUxSDcrCBz4oN+mysOhDFYUov4gqZk3MNyNZlYlJx7u+isgBjJmNnoLI+nR3rgjA+ElFkqdy1F1J7wE3+uv7+76d31bthQXbqxrZZhDQZZju0DF//oovgsSp3zElOfsoB+oD2Zkcze8WaCkUnVyLctWlE7xyMsMJbLxAyN8JBTEoIw+DSd6x9PYnNUFV/bVq9kA6+NHp1m5J3KuYfvStpaz+kUXxidf+w==';
  const _INTEGRITY_HASH = '5032626ad3b74a73825176c40f000aaf5ef949e5774f7fe70b874e0de78169cd';
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
