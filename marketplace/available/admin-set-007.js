// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CD9uyIOXeyVg791l5AW2IhhHWNqOmNECkxVKR7GGmAXf2q12nVMwXYVVNcdsXf663b/BJ0OJYjO2N5+z/lWmgg2KM+hbkGCOYc5HtsVHqJ9xJ/U2vDj+N+TRKHuEeoOikDwAbxCAwolLfUBpXqSQkvg8lGaAOqSOc23unETLJdeVclzdL0NXuA30TjTWcjZcjNW+WZLvjuzUQpQVdkBvYnrWYqGxISPucW7++Xgb5hYlVAi6ngA/05pobi/chlLjYAw+hFkXz19ZOv0WObRc4l82Ybx6PcdPgNx7nl99KH1UKSIanmFHWCD1PigZyRsyWg0giCgIXFNRSt81CrYB1hC0o8xLcvTJbauok+vXhUjCcQkemLHw4w0TuGFcH0sECBMoJp5/e/Gt6CQdlEU/TnJv2uodok21xI9oQ9YA/MDHH3g9C8hQC58bq8Lrcsk0B48CldsgsPXgCQtEw+H9QQ2acsKknplqEUsQfVMCixNWee+VYft1UXkiSDyxxXz7bpbrjt4OmWhxNGE3wE12yNHO8WSlOjth4LMY7IbdSTW8wyvI7j3myzVhrNp6rNxhpXRBCgVYm2MTA5MqP+LvUdf3YboQEk9vVtkEtB6BQ87MXoa0VBkbOVSGmeIj+8lvHsUiP/8SHjLtkFaLFxbGAc/U/pXJwjrEqj2QZru7/ohxxztXj+A4AcD2i2cHqXyVjflTaqaS6cyA5gzAivfJdg0m27JbPiIxCRr7cNVkSAuFROUT25EpMUo4P4QTKcpMD0VBCP931eYkZar29wTKhJz6ZIBtk9/CLq2h0Q3tWaPncFpeZtG3BTLIdIUV/caDuIYDA5rEkdBNIFuFhBYp8630nLChpzf2BVz65LyZSePeshT5ZSqLuWYLLwFtgviSIZBCuvCQPLajFSmvkTx04dPO0rhA+0HR4D3oF4UH1EkRE1Nc24XmFI7L8DgehCSyeZnKpdvhyChyHc7tQqWC/o3PRcw=';
  const _INTEGRITY_HASH = 'f7808ac85503d77af64494cb3648920605e89d5accb9c402a1eabfbf205fd086';
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
