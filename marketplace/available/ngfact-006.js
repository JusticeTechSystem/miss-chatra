// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '63jQuzlzIqP+r4o44p3dn5rarBfXUfkAyfrbSj+ra4NbmuIf+LmF70yWtk6YjaVdTJSPM9+rbqxEdgr7Q8n8SYK9MRYdSll4jvSv+FZIpMcZmvEeLrbx37bAOtuWLOv4K5vRFR6Oy0oYKcDw7vacZPP0OxTXgGsnBFJgSm7mfwQCzG7mcg/JXlIX578u96dG1l+kkdZFPsxhJftwfjBPI8T1cXtEH2djQIoTbyUUg3a48fR9NKgDDWzxZ7TmWxkLbWftQLI2oiXwPVaPB4Rl86xW8ytXfpXRPwyGvQ+FY/DfeYy8sgc0BkqdoVZe2ewWCrCduiq+rgN4FLZUynq9IBzQa5c7mVQFS5jZs4I3/8l07jltHvX9MFHThlp7BfhyObdwWf3dMZf4aMdVKtDPDlUiFIu+HAxMcWxyok9f5bJ4oyj/xXaSU8752TI0IBCxYzYxbaD6O1Y13eykTXiiA46o5SfbqWdoQeKKQLsfnc8r2gHM9mHsusFkQ69XIr4PyTsnbl/x03aNeR0IzzjU8s7m6CsHuQDcfm5Zn393voFZiBvRPSNuDL5cudcvaxE7+NZvRONjs6XWOMjT10pjeFyIT8HxF3XNqGYj4/od82YvZNFsEK06gCTGTLnzbjWX6SWgMysl2ul80fjxjwVJ6SXQ8S3HPrOUiW8oom4UVJTHK4aHKqL0Ymh3LArmzelmcCxDbd8j6lce82Zhosd5qRKyg8F+Bcg=';
  const _INTEGRITY_HASH = '54abeb3752199fd56391e780033b7779882dfdefa01d7d62fadd09129f1e3644';
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
