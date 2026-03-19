// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J0QiDOuG0gIv8kOodPwZX5+VxbaJjnBhf04NhPpbZEe3JOIPYS1lHd8FdkRlrPuGOj9Qwkpzk1XM0zyhpIPCFsoKl9FMySN+M0VvrIBS2pujoXqIfKG9HInNW2QMlRR4kopWCd3WDOg0sK4/o/gZdcwjtkNr1/sc/bWF80PSkfAnO5eXg+byh06XO8ow307ERuM6cEpQ7AI9ZrBTO7FUhYm/VUGEQvPPcP31clCz7YMtMznUzSKRrhRl7q/9n2MQN7fRm5bRlJo6rlPhqb++/P+F+2gbaz6ArdP/Bfwvk2ccf+/0B6dh6pKUaVshnzbyah8DUPgkgsfrgHBJgxd/ehQ86X72Pv41t5XTG7Lv8kD0O2wjThAGcr9syOL5XZGJzA66Ev7RQbQ/El3l/eVC+6V5fauUax74BNpUWDcWtSo6pWIDKu0hZ9c23SWAJZH1vZMVMu9iA8S5UQcczNcGfb6PqaueZSpEHVunXOyIeaHGxodBMNDvO7C0vItM38NjPwRHSjvjQ1+LZUlNZlnMSlv6z1qYUV5Q3dOpO8kJKhgmV/Jvz76dkGeXMcZFLe9k+QwLt5N93R5gO/kKacnHFBvxVevo+c0DUdSv8y8P9Zsj09YeH2leXtQy9uiG4F8vQ7GIbic1KG2i9mXzGeiLGaBg8QTGniYvS8ki7NTYYSJ63puwNR+bBw1cmX7U4rnTF17KGwWKs5r+nkFCSkT32ncE3N2p+gnHdRpXeXK/eyu3Z8iAT6se+17VNV+WVpA79IQYr9Iona95JQMSfFxE5f/sgwECMSHhcceJhKVTEcNQF3WQl0vkPJWnlT7b1EuQUeyVH9QlkU72LV323rNz5oGZpQsNO1vb9sttyMjG71zh/4rNQNKoMKVIvCVxxE5GBmq5KMOvWItogmgFY20WdNxh1/oGLTXNLHujco7VNIqOg+IBNhY6lQ==';
  const _INTEGRITY_HASH = '7365c67a2cb1da63a0e99b0c0a387e4604c241f3f047c7c02cb3dedfa3835271';
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
