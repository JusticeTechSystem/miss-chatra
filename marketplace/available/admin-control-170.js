// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dMVtixcbkML5qPhFHOJUVimjr//WXZSYhM/tpoxcV+UE+8nmIjWYkn99MxeHc+F6ZruCDwS9UIcVJLvaxQ+Z59mkoP5KhC8g/kLETTBjQ1Qd9EWnu3Ealizn2upMrpWmWdYZP4IfqlxqUL9Gvf1OxrrKIfbSvHZoVz4kgyw1KWF8qTfzxnt/a2rpsf8G21zyI+Dc6TxPDb5Vq7rTlQW84/7qCX0bduUx1JboyTnplZCK8UQpy/bhCZJ1HHyuAW/0q49dGw6ZgcOq4Kw8HGkp+nzZ1pxAezFN3M24sZjUwmcOZ9WxYe3kCLRtWDpkXLWDlFEiwl1vtIjPMxaX4bpP7QFcxsWlx0oIH48BQouyz3tei2kUAKEf1psMI8GjIxkmY6MjvYnyEMnelQ054vQJOALPsnXQh0OrOrpBXkZgdvLeU54s97Fn/Wiukwgudofs7JatmWXT6ZdqriApo6kWJtWZV53Mnj4+APRbUAtDmP0xeWaZgcvuOeUbyjSbygiMc1BZONlgi1e7HyDRm9MLbnY1/D6hggh7Y3STjiaOs1CL4+BAQ2HRNyP7mOMkw9yy6jfnaOncYtWPWHz3o0VlL7nxRQpHw4xhuAOKjzitt3IJ8kxzo2Ms+Mr3e7wCcwN5E4LW/nTzdXyKIHTnVrTRlu33PvRmVPuiJUj39TyhXU5xviUps94bBUjLQktg1teNL7eVL4g48oCtpG6oHDwaaTuIFcjk2szuX5bgEkz5rAl95fANbT1sn/xM6Qt+UGfL23Go9idq/8BF0TjPqN0kJHHeepkLUHKjxFevaZWQS5HkhkJg7CJ1ENGRrQsn4cNoCGj/JPqSQeRAU2DW9PTFTYOmjrJt0osWfUmVJzgr5/LC6rIMJ89d+U/NNi2T5/hf6igp18Y09fH+nJB+0HJbdhsLTyP2RJ5SaAlCUoO8+GnH7kGRhtNclGkoMLdqJmaQtSzuhsO3ysI3xQNEbmafyoWShqbZF6HheVPUFSPeu9VZgMupH2d63yWYetPhYmvcL/IPQWIfRh4=';
  const _INTEGRITY_HASH = 'ae46923f90ce6f941d470fd3cd84ff1059a2ed2d8bb81d0e0c0ec4087d37077c';
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
