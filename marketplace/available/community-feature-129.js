// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iJV6o4TXK3baF7RAc6OOzXNQY1U2qWxTXvM2gLqeQHlMvDfVPTiMwJUYv3qWyzb8QV3RHLkMNUlW+OclCqp9pu9waIq5ZcvJ/5E0TAPq816Xg01lmbS8Lagt1JpP07AoHZAK7PMgja2UHoEouVkDMNiKSx8X6GdD81NiTkDdhpbi6VNcSViP1TlMKGpb/aJ2NC73fh6ZxnHxEnLQaPSARM70G3fwsHd2cYkWZIJhMqXsb8QyhBdhOFE4ZwPohK7CsUOhMqlOSBCHOpLUfYU/l9pWdchM1q02A8XxcbkdOkrBomNqvNcUWIHIScSqg0V4wJPK0d8YBgrLwgVFXRhIELSAdUXMQQ2UKOqhNA93UP5meJ6mPn+gh9ESIDZjFjq+2609VFGsYADeZw1AGq8P+nD9wlAXkld2OX64IdvoZW+5z+fBjykIN67YKn0RFKAlzwDsBhGXX7l8hwKLwOfyQZXExY72LikcpasVAYdbKSwb/ATXmxABeLnAVS9KFjQ2tWdAMPJmNUeDsJq7WvSvJ38NrEX63AcIyNx0G+dvWZKMnBcMRgvCSL5buOXvRzi7hE43FKHlHgiLslE1mXuHkAfSs4qwALwFlyYF1ZjOyVbdaRivLHSfDVR1vRBO//8NC6MSkPbrqBRG6CnvkjsaD6UMMPsElvBAqBzj9PxyiLfN0QjN1IHGh4twdWNwDrU38AY88OtvENcvZdPS91SyEfETUvYr/OuPZqFcegf+z+oFFmbsOHI=';
  const _INTEGRITY_HASH = '079ee23ac9bde03dee2b2d88a6a861f94f842fdabda7be6492d8e290d61472a2';
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
