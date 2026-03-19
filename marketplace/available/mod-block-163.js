// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eaeLg7pPraYL8GrtFia9wwtHKnJqIxWOX4vMQfagw28F+/kfcMHuL7Y7BQUPdDfVBRjo8VoYQnJ6vQOM2TgcWaS7SPwUb9saS0lNAFouGBRjGPz7u5nf3PnmlauRjHMsNbEhvAHBFQ6xhG+yqn9EAcK+PsF3AwbpzYA9J8j4TOtjuYLW/bIw6EkFBsMg1o1lmXNOhfCqdjVF6xNCt4QDjFiHg+BkiTNoF+9SiTQ1ph0guTe3X7AaaE/GO4/52onfj0MxItdCo46QXJvHBuiomZwP8cU5jjo3TY/AwlM72fx6NX3vdLJTRzGOftg6CmVzl+jj/M9LrttMFSMPsa0LK425VS8vNTC6cfS0V058Vl9GJ50dVlhPFnwhzkNZMpeXXd1udxsitJifO+iqJRcu9lebs1HhpZHUyQgK+qgUeF7CUCVgI1K3iaYyOf+SRMEEgnDVxRaDxrvQx9dgBziETxOhQuJ3Rc5Ats/sr4wsJ6Ojpd+WP2kYwjHX9tApbmALjnTQj8uNg5gc1cf51VJjjzlpT3QSzNJOMiguOQ1Z3wo+0hINc3VFIwiSDy+ZxXJiWBt4qAhg+qAmR0jtz1R6jX662azw126zbiIZL15D+FD6lS0adRP94uKNAWs8Y1IqbLzcsqHQrYE6e6RZGyF4OaG1s6bpEaxdmMUktpx+SiAzKwO7lmogJ93MFitVowJfbxCZjNSmx8blP3U/3TX/C1+up6zH5WtMqKTlN8aLV9ezk5I8hfSVwIQ/qt4m/HZRsUCDSSUgOj12x62BShYURlaruv755pw0CtNwqom0tpO9qr2vXnUkoa9g2Hys4T2fLLAk8AXAdCQAeH26udYnQHEk48Sn/rOHvWQDA3BOc4wyThQVbFS6UtQrQwBsSP9qsWo5llpAnGHmw3avBGKyRd1OT3j0HBcy++qW3/6E8F2jeLZMoXagMCubWlL1i3zz90F1K5+x+jWx0v/69wXLyQ5a2XwaSJ9jE0DW/BUE2aEiAoVMQqA7SG7rgAa22mnaO3Aq9PX1tAHCLnIBcMQFR5LgQdu03h4o88MMsQnrgA2FbKdqerDO+bk/Jy7iSrRTO58HzzdEsC+EKbUg0YvPVmBqm1BwmCoWafz3bBpITDsHxcVmLL31SWs1WKp4sQuxz4kjKk2dnj2jxSG+a21avBpB9231w0FPX07s0uHS1AGY67emAahlpcKhHQHaTXwTJDKZgf1WnXerOfaSYLXYXOSjgtq+j6FNZLa0W74KddpqULNqkIkw21sk5OjuEZFhnvpShAgjl4FAXmqMVFQbj5bhLCshGPyByZfZfd3nxhC+3/LW0rT+0CxxDpmnOLJ9MqkvD0jOdyvy4QzbDuBrD5bxxS9Y1ol0hffAdgJA';
  const _INTEGRITY_HASH = 'd6ce12eb6b8997a43fc4625ecec7e59ec90eda693aea38a19eae7d079ea277d9';
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
