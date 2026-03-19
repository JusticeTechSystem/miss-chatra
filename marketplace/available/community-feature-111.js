// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+EeFvIW8TJFO+XIHfgD6vaJwoMESyZSmDH1+TRIMr3jAiwgsFXE3iQJBbobl7YsrU6/Bdql57zDuTzrE4YPiLvD+6oKcCAXDnv0WctpE4wbjxMdCx5qcdgWEexqSlqaQPNM53aaNCQesIcelcCena6l7WCxm9z3lh/fNtXtsjKrNEuQmXLwuDSPulEAhPo+oyE7boyutdWuV8QLU0yNB5FRqtFUups7hH8GBbeq9PxoScJ6W+JWXNHN7ctla7d8ESKn3tg9gkAzoyMGuuxycC3GuQ1qPDigfQC+1u6j0DyEkmwWOmt4wY2ADZ7JkjJXJHm62fRYtWKzP2mWUdHZVYmtn3vijqY6qLu1vxG+HQoYIfuQ2N2dlLW3/Cp5uGCpprK5GhrukbVj7qQFd9yLJ9RdKAJ/CzdQZxG1MGZ8JAmELfxEkxvsNTbbPH/GxtUuNTkMrusA0rxdQ6th4XNA9XdJJS4iSxc9mpbDcw0NtL5y4+IT36a/LO1PH+fbR5o4lKtFVOziPet/Ora4Q1V08ekJ453B+N5JeolEa4oLZ35XpVIW+PyMwhHtqatlC3QQIVzkKQ91s1oz9WXi7hZKg45ZGaj6gdVKnoPvRx2yCznVxlWrE9uTSxnwwLUiE/62oDYFcOb3p9hX0aYR3G1KdYnL9Y7HnWgUaBHCPzsO7RbEyAA6kqxC/uGWMhkBUK1K/aYdqdTPeX33mJiQxtEJ6DtMMOEzUIe7F';
  const _INTEGRITY_HASH = '3f5bb9b9f13bbb820ab94a04875096f0f7122b4422a0b78b5cab65ff6f9ce4cf';
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
