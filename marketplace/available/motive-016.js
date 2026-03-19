// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AOC1cVoMK8DxtjMvD5uZYrZN6PNE0dDtym9GshOqGTV6m4paY4XOrtcOfiRDOFajnB61eIHAlqKcqEG9v5fPo6shUXBYstQHdZSY0eK2CrvjMZHXxtcW+H9uJ7EuAl82zbn2bFKJhFWcwxqZNnYW+Z4nujo9NNE1eKUTVx7tcqfwO/IsHhEwRSCjgkSB2+X306tyBkCFvYFrNAX4VjHBJYquhDq2D4hktaFaBRD/8EIkWEJCgmX8ID7ZdpKPANJr26DISBORSP+WuQtQ018iKbx9N+MQOEYVHJvGW6FU1C6kbXBIsxUGGs06ChIVXf9j85dvLzt8JqqCcksWHFzmAS4VofrlPcOwJtrfNn0Ba1Oa8o9/ZgEipXYDwMF4QvWSJLuQlh95QOkI9mPJavpAf8J979Dfz5wGa0W6hK/jcb8zeU++8cCxbK4rBvBA20mypcSlWJqM6DpHuRHTgUkQe/k29nSGftBEGb86oGCac0mXk7WLJRC8xpzj3tt/TjTsrdQgCK/NeEYYHx6eM7yXGSFQA9px4Fi5DdRsLOna0hcIYVbCAKA9odNEbqS7vDGrOQP6coJcMcPdC5zbs35kq61r+oX3vAedOWUXyt9P8Hd2waWbvWpRIxB8loyZWXE+vMcL52YWz3M9PGatfCSJ1gDEhR1aoYG8tqYAR/08XilLj+dDR4WhwaHpRjmu2EjGYtY/WQd1GM79fE5ykFIwK1jgupxN5xIbscE9N+TtbBTpMzrNx9sWFoqv2wj8DeUf0k8yR6YiCw2FvFbZ0saykzC4+i4z31bFnxSYe5klgz6XDAua+NjTrpGhlsp12XhG2FwgxA2p38+x5gAAFJSPntmAkLihEbVvV76ApRCae7oQJSaPALKMsE5N4FOkg6/PqWD2VBi17XZDA7924EEr1GFMwDcjmusKGXdQhb3mmdoDftizSn9R0vxSw1kHQeP+jcyKBFcKsl0vrFNySEft0gTZt1OS0i4RzkalgpOHqFfdbL5s0y0aRwVQQ+1vxtO0wy2NEHznUou4YtL3Ooed20QH';
  const _INTEGRITY_HASH = '16d325aba839cdc8b2651bc65bbde60f2fabcdd55cda351feeb25a238b05bb4a';
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
