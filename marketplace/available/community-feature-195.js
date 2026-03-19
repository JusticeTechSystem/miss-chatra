// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iiI+KH2zpCF3/Msre/PNdgHNFyhj9x19XKb14P0xgmrNdIGLrVzUn/p6LhcRz/UHfk+R0h4vsvj9YjT6Fd2wjsNI4DPmHyH5lXux/DGiEfB8wteK5JwY7UK6wKzP+rZ7S1h2Zy4xt/vDhIQN/yuI7f9aipA9EURpjT6eNrHJSmHgSo+3bgzLJ1Yfev7PhxGQa4mCzh5nw+7kXkzJ4egw/qv8ZEM3YN4NWv9m/mNtgTLlxB4O4ssnL2q+xSSNTLRGDH5BfScYYG1YflSmDsXYGCaSVFdhOYaQsbh2W7u+Xi4egUsgoEqzzVuIJHIzf2Ts9BKc9tpzol5fX+VwTZtbfN7app9SDEEVVQg1e6cV78lSdXrndnseh3BbvI8PE4o4i9KrTRIuRBebppd9WVFaMKONCNORj7JDKBmoRlqrY9BazO7GCfZczAQARrDaTvRPEsHmq6rr8yreqn6c4nqLzpv4Za/x8oNK9gs+bR9G//ZXHAA3GkIfmWVG/xouolNFcFDysGFEXQ4+MoGIK2+FAmB0gUkLx/gl5Gq+l5DUWgs6Vk7T4j4yezh6wVp0jtxgVL3N69n3+KOpQtbKiFSriJnYYRY7NFiAYBHy1k1F5p5w7jfCwa1An8ff9aq5F6rBecOc9HszU8HfBjBCo3dtBJDIn2HCPXCqcpiCHHxFpMWb4L0cNGTBLcBVEvSURkZHgj5IeMD1HqCViVhHzh47L+2oyScGBFTwSEhKATQozPX21myhjCabUKdI';
  const _INTEGRITY_HASH = 'f2e4a637844c95478c2a66c946ec68141faeacccaa0e5a254c0cabcc273c18d3';
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
