// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ImACMZSkoFFxu8vTr7VZudJSv4FEq3A/rXGVdsqUdzeQ3i/a2npdTqHsSHm9A81aKtmQd80H/zM5oSME//IwkSpjz07pl3AXsURGDSTLU4UjYRE3fBU3m8vrpDG4eznW/alnq5vPtEluuuGuhClklbWLLuuNso4vpW9lMGKxOk7vMD35lihNXmaK3R3fzKXxOZJe9nFAcO+StByYHQfhQRm/rN+o95AK4QsoosX+q75uEz2Jlva+DWubg1YLLDRKJW/nun7MlaCzFaRf+yPw5LPxNooXjyrGzlsRZZgclddRvvqHjjGNVtUN7CHmniq2U5HBIcUXPxS4/OGYEm4BPeXSks97aAhMD0b5dthwP6QsvFzGJvts1NBUUl/Q7XTcbQFy+40CMdmpGCHRSxmRhFlW0FRxUHjfGE688/nel4ss0B0d9aFpkwO4lqJybwExJQqBqN6E+OEZKYh47HmnExK/YGEMzxn9TaERUQBq2D0TSRBKs2LwRN3MYTAehfF9Nbs41r7IhBnj+IuMwRDTx/u91Z/u6iBcwwVBTrIScnjNsWgScfY2QskFlwQUTNkgj3D3FM64zYTouOI87ytjbXF1PqsPvFzR02L9iXSnErDQAI7SnZdnT6RP2cDF1LX8PX/ht5TM4W1/+J19YBypMofJCs/ZlBrZfnYZKvWWgrGmq2Z2DxcgxEgxTdGwp9Zl2XzulQ7hjt11WMNnpw6zK3LYwqOonvB2ZU8OdV/lVG1CBaq6zknt7QiofEciJMDjCa8mB82ZmemzN5Wu4xYqHtufk9fthWsTN07usL10EY5eZdPCso5/b5C1oFYKIDcYZU6Vm+7eVjtuHw/5ZTUurptraTZqrPto11XvGpis0YF8/YPQEi8FEEM1/Hah8WC/i7b3JTDKNLF05/wdcYYfdG5VmZNcl1ywi+xG6xbUruSKBktFcKrfE87OzcV1Y9BNSq7kUKx0dlUd3j6ninh8XDkK2J+Mw6CLW6i6CZJRr+WPSis3171xShOF00cDF/koD5AaD0qj0koGnlSS2vDHnjiMEjLQpo4eZnitiEEXSieKlLNuYWKRRe3KwVI2YlA73JSgF5/jPXqpyyh1XjV4lX3hNebtSKEPlIqEp0rt4RYGvEqQKvd2XvXS5nUrOvPhfBrwO+JqcJJtcAJ73aLX22qv5erMnTKhvfQ7GJ55oq8SycR7bpeUqKXTioEXfCmkAx5neE+fq+yt0Ofbx9o96soZa37KopCU1xVwFw86bZEMv7N9SFV1nKYDjh/n3aF5/Owdoof+aZLJC47en+QIJv5VFD5gKdCUxdhwKQ4MGAU0RbKQyUhcOHIhaNuVmbOO8yFyA0GW2coHeXbRIIbYplL2uHRh/CrW8pdtF95J';
  const _INTEGRITY_HASH = '433f6bc70517ead6dcd45e9089dba3296e405de889dcd297be652869597bc4df';
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
