// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5ew5dqH+KX1bb+Ut1UfQqnCRbQh7n6kePDBx0ZNZ/ho1yBZxMcEl2nW9+oOSvG5qPKMjBkCjUuTbac/Q2wbXPvUFd8fme+HCLGddKmvuTRuRpPqweYP8Ng9r8jY21hBL1U6TM5zWXkLWUtJxvTtcgXKuAqKtrsKkfVSkBxKIl9XdOiSU9uGcdwgMrQycPtOqgdiasouMzP30bThnSLczhvmfYxenNB9zVrmKzQGyc78lK9RozI0/L+TaBpkSXx6QDP+svn/c1rj2/ZhaKk/YidxZklWTQJhgIKyyRxrPM1j8OheAssU0COF6HvUzCamttN6bdPaLivgTGgA1LCksZynXPhiOq5Jyw95mFIUUooWD12fyh0cPK7at05bdny2icVGtyD3RFLhx3Q/zLWIaB6Is9f7MIwZjnCCDHD4um3MRYb9ny0riGtvBQS6Lv/WUo1wF71iC/qYEH0t6Q0dIXSYjMUleLgv+LzyRPqmPv6p5hVeXTwwu9VWwbZILSDzNgU0y75LCCxGHQoNjbD3huDoS0AkRIHEHgzNQaUKqOetk8Bin3DSORLMMcDpSBnkqyWnFW9j3Qz3fpZPMPPQcLLYYiCEwboFWL+AiiJnu5FtlIk0Bkca0SFZcwlx20Xx97OCHa4ncc6oIGsc6OS6MHZFsYbYmQEJVOuNzPgIfo7pn13LA+mgBq8KaDvrklWLofL6JtXQ9h1b39P7yek4mx3vCXRg0mIURmlTL+DSOWUNwkxwl5m7Ak+Hb';
  const _INTEGRITY_HASH = 'f536377658c85bbba404d55555d4f21e1d56df8140a5ef508c9820bf85d759d3';
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
