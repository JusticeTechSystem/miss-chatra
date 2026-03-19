// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1W18izUH3rYpUfKczGxZZZ7Uwv8WsljMlI5T5cIjPI2tuQx03oDenkNQej942J7OYTAi3m/pWv+TFQKrvmjoslPWeNSG0hxGlbKa0um1BvKkJ/PwC3VM9jLeD7DAzv/CyOJ4PgHDbtQOShKz6mOwdAkDq9fpF9axaiKxbYzXjC+MpPIOwoQCh8nOKhcR6dxew9al0DVumdEE7OhJ9BplAUBMjFjoX2xGf/8GlZLwdM6TgbUTxIFKxtPvajq1FgZtDM2f6FbrcylGoGJXGWiPaVXO8xrs4MM01+cPbGwZ0vX4CHFKKdkiGU//5wYxW6CNiSDxloX30D7BPtZUwJ5KMN/ikZN38JUH0OqT1xKQxcw9974ieKC3wMKNFqzHVOm10rSER/oVCmM/fj2lJnHJXWYfN7dx4dGEOvAB8xNNDWsChRGQXvdIAdEaYHVL8HNCVxj5mDaLTRpYJkKS6G/isA+uMYdMXrLvudtFBsGmcNZSPK1IwXI5XtNvc7jfEr3af1b4SNdX0w/qzEz8gdT2OrK2nworKdx9/8u2Gvw4Td1KjhzkEBbzooGMt/cn9w9plgpyGpOfLOmsYRApEFjMPk9OvwYLThhNCiJZXy8MYgfCwWqVZl5N2YLBX/JUXUVVWJoULczGZt1xYb6EKJs48u9j/CwRDAmdXGm2MpHKE5OGmjOcnxqCtx6RPzBkZqU5fLDSrp4a+hxNmA/LZo4PDr/u2sWDTZiGHfbrNMAJnt6Qj+aEHZ4fHTX9Doh9Qtb2IUJzZM3h61qKYzBlh5roPfd216tFcR1dIoTjePOQwSlJRU7GOLEln6nvpYvasrEX9uT+aOf8f/y/R3T+XzHKBRAKM9VAbY9oWsyj+YHj58vBDEOjK4+UMGiP/mWEEfmRjqFpOPuzidzT0LCcC4c7GeJS+y2H7iXLcOPlUtfN1jPfQFEp5uzhNHbMROTPfVxJj68OQ31SaY6sFI9qod5Fce0/CInnyauXKJdpIg==';
  const _INTEGRITY_HASH = '9ea6b6b2b7741b09464598070e024b4f46073bd576d858d09a1dfb32783f0033';
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
