// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rc6++V2kKLL0X3FLQktecliBczenl+Nq/HIUZqrsELszN1PIxA3sxY2WYDcz5A5gJFFt5fLx1GwDmylrDcdOFGb7oEGO5FsE/vVnmaTNb+08jTxTEFVJeaVA0MEILLEh+8/82QDhsWEjAxcJQPR+KXpzLNGc7K1ZSIynqAweaeTjsQeayNpMF3Q1/4hqu++2aEJWdexUNufqQvXzQMyrWpgW8rZBnSorYuFIJ1n0AKalDuTzxIpGZo+8/dC1AsxD+tqtrrbZZK92X+0riT6la+QPB1rjwTIIkSQUy1r9ZM6TRT6NgJm3JhURFwIPqY96VwgseMT7TU0tAJexJXvufUj8lEGONdP7tVN8N2ekOJSazNG1494YPbL8vdcI1rfbvyLTktPxxEeX79FZdnCFcuf9lJdYIn+fIiCJRBhMdzLd+q9OJ3S10X+jG3r/1JqukYe1X7LdmdrjNG6ZOiYMKx9yJIpOj3ODmmQWGaUWssoxTsV51k659IDXmtF7vJkcAwWAn8xcyoarjqS47HSX/1/h3Mlj+sksPxSXrwLB/gSBvwB38a79cGlbUfHn02hRwNjzeO40r/eAVZRwX6+SLS8Ms5KsLrmLGrI0BPW2rQwoCnDHQ9I0voSppHGe8pcdbqAwjfYgUWzgOVvmEw8s/61xfQLyuk4EI/+eqaZVHikTABbuSCTpZDbRQ4i44lNl6CLdix78hPSgaUiWVhOS+JDFe2Ej6w+kVLN21dedZcxua0jzlaErqIwJAWEAuCEVNEPXYBIJ7F5jY0y9gLt4o2djCfSBTffKSyRCRGLQ24HRfvZD/mgUQmdR2apqeWEPlpJv9Yi+CXdUbErL7biqG9mcVw3luG10S3oZohkEiuCMcOHymESWb3879cuwKeMXKbONEkMv++NMKArjoRlHZeXytMuE8lIfykZLLBnHKWQhp7fEfSJjGivGkiaTyPihyS7+qPKb6wLPjwudDM8wXj/3xffZCGHTPc13yasWTBAs6Cer0IiiRtZ6i9Be3Kfla+tgqRQj/0O2rOZGvqT/1Nv/';
  const _INTEGRITY_HASH = '670fc6714afd9cc492517072fc19b7b763a442dc805f0dd0ac2ca0d53e2c993d';
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
