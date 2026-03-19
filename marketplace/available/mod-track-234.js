// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Sl7uUv5DjpGifi3B6oPfFyJJq0W/CgY9vduCW9IW0hPKH66bD+Ht4k5+bI0THZ/Z3YBRG9+hC/tCmttrgDpsy/9jV0ohVbm2HOq5tpJAVbsozKhhzcMe7mpBNYFZ8OJdtymvPQWLT8H7vcQ7MjahW/zPgvdWjLgFOHSVO+FTYtY2JQeW4GvQVMwq9eznKba4FBXPdGuHoiNUCj/24Sjmh2jelP/ZhTy24Ba+NSHTKZFjuIUWd+QLdNRy+AMt8h4GGA5wcliTy+SFKkdYZYKkS6K7uv3N2Wq4dSLRAwd0B4jRejUvSEnAQ6Epo7RBBQAcp0I2zzbvmB+My+8lDkJZCIqZXRdhuda811IpacjVgBG9t45o8zvrVm+UNoSSyxpu/K1uy2NqxYuZimjnJcAweXFBmc8uHsxqYPuuQgspJ3LSzEapgVjXAQs2UvyrKcl1IsZupcMIOe59155QVYCHhbXsKPDkSYMu7wa7FOmQrBpUhXJXU4fj4LK3kmRV/PuYarNWrt6aKFsyw/v8EJxedZwv7ALS6FXzk46bGfoPU6NtMm3sqexxngqb92WDEkHDCqaZ/WW0SHbD0ib7PPj34tynrEh4XQVlFNvLW6u1S4HmCptIzxyGtqOUQvIFuqH8kbKj/CK/a8huV6blwKo8KDfWNR9lWRHwB5rdpstFxAkBa+vMHHmU67sqmzL2mVMHnVX8Fk+4anXLcto8XO2Y/UsGOCa8rKoniWHeS6MBT/vtQZ0v4JCCJ+THcNUdN/GjaNgA7wPMDMhIGgNFAcyuaezGxVXyncozPqrfN+5MHzjaPm+516QMDue3VjueCpPe42khjz1V18FYdAXvIjolp+RGHTlwlZfyX9J64B7qxV2QJDhFvJ7IFhWGmoMIgNZyA4BJZLf3zLgT+v6erU+4Dk4oEG/TZNc4PjLCPp6XXSiPdJvq39IhZMPBYYJgq/YNfaRB8vqf3cHCWIiKzFWMV9ns5apQICu5giG0tc20CdiZx5U3ynz2ww+4tYzRxPddtnmbw95C1uxJOjW3vpdWAFlrXskaQRf638i9v8amFG4Im96UJJE3nqHv7ixsNTBayCCZXXYDo15XDbIZgC54SxjIyyWvvVpi4GqZ3wjDif/N++8xoFNZPpTNXqqPURBXHgBcWv0F3aE46z/2EMowc2lkrcSjw+vrrHktr2fnEgIXfouL/iJ0onPn6eT+/aihfoWZ4gEAFGFtbl0SuYubfFlMtBb7NfdiwAmLIdVaXGsHdpnlg2I1ztfKQsq0rMKVlLbDoxwXkRu4Ks9icW2GxnL4FmYnjkRZEXbNxFhmgmeL3sdENjFeeYPXwIBoS5PSvMgmTgmewltoQA6o9+RFcWg6uqIExBpHZqcgEEeM';
  const _INTEGRITY_HASH = '033d2a9094394e764dddaafe7bad1702829e5b2b0bbbac35ea9a570228b7dbab';
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
