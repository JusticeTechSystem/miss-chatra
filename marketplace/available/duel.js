// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mVk2Zz8ICeJFkdreABV0Sxr8bQppMLyGLOnwn2X7IrSFNUdxIZu5Sz0dPrOLPlzUhmCOcnoUx+xiYoTux+kyvaduF6oc3jj1xXgVRpX9rGm9Ip77VGOkacuAXlZUnDRutvXXzyKpdiaDqJ4a1F+TGGMHJ+A20OsGoYpWdhzImTUiJ+WkViCK8f6qxcTJSrO82xzBRYcbKhLy7GPyuFYlj4QldlU01w0mU5fkYDZeaNT+BMhwT4mwwUmSYT5h3jVkdn31Pza08juor7E7mDYtfed/1kgq0DHWVgjetdNLMnEvxZoHu7d9zCp27U0RqPkddA+9geCMy3w2qz6HETZkAlSlSjJ5QQIdKDXYC82qVbvuoscxuJ0cCdrcFxbvBLWWe9DZoQgvMZ9qeiJe/IWPIBWRMNBMg5Qey63AeKcSwpwLJ0NF+L34b4LkUMkEowZJa5t0amZyjxYO4a4XL8P+xZ7gJAhUVW48hZ+4ggf4VKSWwFJtGIRmWgaU4VAkT3mfPG9/JNMLNFcXgefTokW+rus9nwpKydQNmYJZDt8oB9v60z3+IAHMgClaBwmjka0Vr2KPyWba4IVvLeRegJ/SDnC/CefgzM6BH8dmXjBgzveBq2nmfAQGguIUOFXmiFGD4alpy34iTsJNe9iG3tYrcb/J7apGSfyJXXvVZbWqlUqE7NRsK76I2hdKqpjca4Lcz1+z106s4aDnjXBZpMjQU+UcBINcNjfaoRcyN69DcBK1hX3L7u0pNPnS1HN4LtiErnjTT0aMPVBUkYBgBB9dRQzuFZDy/hp3IfZtqi0MHX0LP36l9Z3C2gGAdk4/rafWr0X5mV6NaKCqj7bkTwFMnfNaqmMDqBNXd85bfgy9H4lxjZ5mOK2+fveVm1IWqn4KlZG2NL5H9oxIskyBuLhVVKn2/RuGI62bykMNSs7l5dbtReWvLkRR4LTyNq6QMJTfUanLFFt9pTA5kSKCZaX6PRC0t0wppPM2BbrqGS+6sxzxA02DOEz4hUNF50Mqsc7THuujm38/SGGsxNQvg7icBIhCcQ/ouFbOdqHRoZdGhCFEaLFPy32BDcrpdE6LZ8i12L8Mj+tZB5UwKPfeLZMaye+XHOyVfBc15v3DxyrtXrohKi96O9nOz73jWuTFjVM4j9vF+axrr5MFdRsm9jtR6oUOgNlq4osmzFWfIxQ/f5AI5WQ=';
  const _INTEGRITY_HASH = '4ead88215a94b9fcdf4a3f565ec2b66b45d3999a740c1aa94bca2a70c7ddf095';
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
