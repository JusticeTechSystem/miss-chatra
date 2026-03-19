// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'egJOsya+OB15ogCz7A0l2Oir68r7cRnt6BUnv8bLAf1IiCB9ZKaCuAGkxwJCiweEzxYI4jUkl+NKe5KLf/u4X1Mi0h17qhM//YhmOhk6xxNmDrVcmJ7DmclGtcf/Frr7l3q+tj2fFl/c8ZBU6M5onzSmyYoS3B/8vqTlugLxMlHfHRt8o9hakAblt/WvdVMscQczk6C4YTUQiu6yOZs8FSAJGc7s6TN7pZxpsJfEFBm1F3o7eGba/ol/pJbZY8GF7CCO15Z9nVWq0m4NsMGMRZbvkamWrVluS8iEzRHNFlHcFYPUfaQK3uYLdDBZ7edx1C5NvEuCG2BRxMvxBuSPvkfXzQEKRxnL5Kwd75eJSohovsOvDW/P84aCkg+0sBeSTTGOAzeaVysl2Vu1PsXRKnOzvUmvBGPsmKQty1UsViuPTWDzgqh8YpNSzPHhwGMAPvLbXNz9a+5cPzGPNN/+WZkwsCGAk92Gs0cUu0Y3wtt4IZKvXFvBGoDXsY1z1GrOAa88uP6PYHJdvo8TlNyJ3zAzB60DbsWXIu2IrYfCATce0n2sRG0GeutGl8kiSTh2bOAIzlYSqIt728Xh8bH+YFJQLTa5w/42PAfWZ9cpo6snl68Rw58S9dhTC9uJ7A3JnsrOVnXLyFXjQQ9vLZGqVP3mYxA2x4LtIX3kUMfbvmak9ggGjoo0ZHu0Rrihcja24TIXiCHwdHE1t2a0FHpKiJBxAbxTQjT94OXNxMdmYR94Pm77tdSMsvgrzj7Bz/5Hy2+mLHKwn8ug1viybRZashTOrEEgJ95fB3vsX5LdeOGOqWjkK7ea4oQgemGlsXHt8DZZvXg7WvCey3dRQlQ293NruYiBf1AGR3gvA8A4fdS7d6xsctQmY4tvvIXHmPj7HJSNaHPCAkbaBzhY1++u8uuYaKYJYcT5CtB7aWV1/IxGau22PfrEPblTZjvQ+OAv8GqyBVTE4rseMV8PSmA68QhC+gnsyp9L4HYEy3NSnrQEQgu5FA11gjiu4LOVPT+yNi9eEp6j58VO5YIcdJl76J4AVTCW3DzuC2ovPIriiv30AwHJoeR/35QCT98WinKAnyta6zP15/x+I+RBi+PjLcOE9o6gp9Z+3OD/f0AJmV3tUOo8V3JRRhckXvsCxWx5NL6huYdKfXdYoZ605BS2yDZMkbsZQ9AD8yjSENCp0n9jNDnshGEm1bmBu128rOGzcTnfr4TyR5jh6G/kdWXEGbs1kLwGEyUrdShNo85IlLmrL9HkCbEUk3qOj1AQ+Cx0+pUtJ531AAyFhIX6W6iO9++L5iLbvT+cKnubemL7BsdE5JJyN7T0hqcwSzj1fRbg3lq6nDtqtw5byixQXhBULRHw0GaEtEhXzUzUiaiMfe9tut/0HOp7iJSjANZx5t4yZc4=';
  const _INTEGRITY_HASH = 'e216b795cc77f34612b4b6abb0660abe0a98510e1e5c49a14192cf454d7cd361';
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
