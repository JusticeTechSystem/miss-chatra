// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T0w2WmMhSzOY8riX9Ng8pBqaJcVpcT/SZ6075P4fFeniYK12IjBAY51Fk0y5EgWQHyvaiz1hFyEPqS1eaOoxZnKZ5KKnvPDrsBWfLWX9dwb5aXBrCkv8rNeMXkAKQCdgK4dqgN7PV5jV758TH43rb6V2t9xsXDOBDYRozwW6ozFoxP9BOnNQOb5Gy54ObVMjnnZtPHX7C2498YqQM3JAGVl0KghrEsYN7/e9pBNTfyPZhIgYMx6QXfrvxCzy+guD0Td1HCCc0P4lCsng5cEg2iqkK8PLaeZNaOnGP3bI4NeYV0Q4ONCF1bBTBtz6tT0gEyheypvNX1MBK+Z8Y5tmpztzMnt+ZrWYRS939XA9i8ET6wL9aHX8HyrIwQE3Ecp55B2PelDBb5XjBI2g7LC0Uo4Cq6B0QjExYJ/k9eF6RCT/T0HUpkLe+nAG1ZoRUc48ExNuHVEUEc4aOM8Cap8rLc1xxtAZsMQh7Vz6cK/zsDOypjqoMO+xQB3eypb4K9xxF8s/oNk/9yeL/zTJYg3K/3OQNeJxJFkwyvoEu5SpXZ4IIYAiv3Hj2H7EY3KXVTIx/FZ5oJ+CgQbmifvOYUezA6w3Hf7IbLR2JIJa9BccKaxWECRCb4aHetgxAM+wtWXJV/R3JnHpJcBjeyGKQwRAVfOvwWA1GTgwBXVnPrTmPqTMLLBdEC7Z3O8UjwZB11C7zgtyXqjJ6VCrfUjuuM6q528jdbNsvUZ5pogpJADlv4yT5D1tSMM4zo3lSaiACYySzklx3geufmIyHPCwaMZXHQOC98pA1bhDilN5m64rmOLPF6jYdx+4hAO4cNgQZNpJws5FbBYO41voWkNFrIGAiPiwJiNrbCcJ/wWS9vRIt9Cg7an9k/Pn8WqZ5bbTwPlPKxDjNLiLt51jGDtOkWZetUYpwhw89B7hCtXa9EDWAC8Fwc7xj0reAr76MWzg/LNBHaDF83z997MJ71mUFX+2M1VI+bJAa22acdvIyjr71MAckXAdMwjwp5w=';
  const _INTEGRITY_HASH = '27b3e99b16136dd78f6fc2782f188133eaf06f6e1bfa9a723e6bb769cbba11a8';
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
