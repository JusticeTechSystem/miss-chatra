// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X6ZPXLVjlJ1OLz+FQAuisxcsVhA46wUPp6/m+vqWpQUBUA3xso4ZVPT+T8hawLm19EEb3dyHJKL992L3aopAu3YmLlXypv+KUPvh+qfA27gM5gZMk29H7tiRXYRydd6JLBhV/aYX/sa+bMjQH+YR6Z++57ue1/aK16Zu8QlMUKq8DkLH+ofbedmwEmmXm4idh5ctlCvMC7h+VGrDtdfa5eVnzxm/MUhDX4YEs5v2CE7iwZBJ3Qvw1COQMZbPv9ES+Qd3LdWggHQ3uorVDnPFQLrm0/MuLPGJGYTCD5gB1/cx9CrLNJXaezqHafnT8Cx4jki/Kz8oY/48gAdVW+ekvQUcvyNzlPRdNsHmkF1JtRFaWWO6rRZ2Y/F//eGXIwnAmSsYM5GnBpY/5zeQQfkRZ092c+a4yA0k0ecKvZu/URnIA5C+xFFhy7V22+w4KGQ2P8JFFzcvakbnzMElHSLQxpIYvTyRGkJpNcg0peNOOJObGoh7SLmfJflM6b5e5AjZq9eV7ZmptQHJpQ2p/ttfLp2nZ8HtLLtcNLVUNeBC4LWacp+Fzek6wSx5ZSj18hlEK1WQHCyex1A6DccmYoU3D2phmGcKpRDjy9YjST4oVUyB3qe76z4MaXIPv3O5sRc7KO0zdiFxIThsrz+jXfeErR/5n24Tx4YBEDic+quz3yua1VWzk4ZKikJ6eqtWcS3hUBo7';
  const _INTEGRITY_HASH = '1e7b99f6d0540ff99d221653b24415826251f7ee514db80d02d2efe38ba58489';
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
