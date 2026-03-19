// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OVPCokErrb+qTqyMv9gBOreEO+VZMBWBsVUuNuY7RaS4JFgGqS79+JK2Ns1vyGS27SytItVJEOYTq32IWV+mqPQeEmCcK2JZ81rQUFhD5s4UshiVO/rUKItH2WwnJGD2r+myL3mdAKBSlz+yLJ5U2yUZievJ5L0kJa7d3hU5M3Wq62kQrNgbCNjFAZyvv5NzYBYJWkjvKEZS9vmIpLP0UBoH2nEES6JYa8CYbKPYE9HSXqxhcSeqTEu8ACiQG0SjFK9gr1M8Pqk7kH6e+6ZDYm/iDjEBI3Bl3QPwGM8IzErHd6/Cd42jfuKJ2jjr59zvUVCXN8BPxp52ci4U3LM8qYVslGPMwC3X7ETvyBoAn2E/8SS1g+IIcJdfJ932QT6txW85m0fH053HKoDX2UvH+p0Xl6zuuMUE9HDSRjeWC3wHCos6RKSPQHKXhsxxqJ1biELiyxjlS5baY52uMsSoCWPtstCWK5X0/02vpql4TIg2XQIaaKXZx4h9JBE5jHYrAPwiFa4G/Izlot5Ho7kqQKdfp/wqGF8lTiIFh23j1n8+K4cdZBEoII/UvlnZqt2TA0ZfYO/71hyea8Id/6cjDKiUadA6E90ndyl7YfryJK9H51YSnSgmFdPeUrbvlPMn0pIHt8lcLDm4r7zzyZNM9Xl1QUdD1sjZfDqj2wK/Ekgc/jrdSbwvZmDlLA/PLHVOe/BwVk2KmaP0m5bNhWi6pISaD7gOa9DOpK3DBSW77/evBzaeh0IxkVKT4KVfsPiFA48ZUwExd6OEA6gpgyRnjykheAeZKhNbiV2KyElJXgsh/UikxwsDuN9LEBhuvZI2PViNPH+i+hj2G3f9DRBnYEMZjR+ndqJdG2vzuJEtdy3sPePPWAkuxDEprLZ1kycf4+OZKqIkD/boeOVvKiPYFUviq3+vMiXloms7gHRsgPWB3P9dJTh8gGWmvhQu7UjNbtWwtFq9ut6dNhY8rlp4O886mMAP4yf3wvw5bPpkHMckVP34T/eayG5/IVOjZIjCiBLXpT+Uhfn/9DjJfBysXullbfO0VcBgIovYES2hnnNkUurYSJ4nzM5Wa1W818OoFHB72Ibya1tmR/2uWB97jvDLlbCK8SDXwyo3SVx79mMKBskromJH26vXpNrAvtYLdbdz9Z9JtkzlQvhD/2XX1hHR9DRx7rFt2HMo2K0zGkV1tXlX6x1oEPyvk+mhZdwkzQHwaws=';
  const _INTEGRITY_HASH = '22a354f260a4068d442b3fe0d37f4a20a005a78718ae4a5988f08751c085225e';
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
