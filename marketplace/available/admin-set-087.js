// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OawiokvOWJktRfBgIjWEK4Zsbk3EQ+1SvyorpwwsmFrOiQkTwPfI3Ct5Cpec5HhjJ+Hcmu16MVQzSKooEbvLs2B/t/sRL5XHpsT261maKTAsT5wHYIJYCZ2fwjvi09XnDGFejq2tqIaGjs7ZXVI//afugYnfVb9GByiKvn0SQD1fq4TABx7kJAysykHvaZv4Rsq04GLSXJcKgovBR/lCmESj48zjvR2HflkZHmWSj6UKiP3C4JbEerMod5bsiBZB8l81sBj7m6LpzyPjbXhMV5X7c0ekGJkAN7y5QZXjT/VqikhE5+Axm10YJ89DYCdnPJ6OH+0J5UpIYIH9WFazoRDx3UkafpsBWtL56MyOTUOKHpz9TR0oE1rpP+F2epcL3MnD+rIxRhRAr2GKT77VB8uJkar24GXAahP4w+X6lFfi/CZUBOadeJmJECtHj0brcbGhXzh1fTWRrpVVqp2wGP4tWEFI71DiqVYs+D1azLaiwE0QWiFYlVJwbSaBISqxhTJ5NrVyofeGxfsWhgd0o9Czb3uktD4ZCD43WHh7ZfK4pWx1/fvzOOE4AE6kTldujRhI23z7tVeVVKC0B0FNiIaHFuDfRs+dHhg9HyF3jVXvebg+Ho7LswmFZ8U4NsHCqcFb+6v7iXglC38NZt3mwIlsUR2E0XbS6LE2B67Vf8KFjm4DIvz5o5CyC8QAXwuSBUB8XXCtpjQrmYha9zb+U+5B/SfhbqdpbtFmkDBjuFSebxA3Y4sy/6/9CUpsvxdcKrDOHjq1vCN4kFn2+mWrcnY0ySRNaasXkNiKzA0Ma3HbIuoR93Dll69aYjckyGwXftlsq4TNxPdbTx3stmfwzbf6HbaX9Ob0HeA/77dG0//xJYlmIsh5tyrgrrU2pv7R5fbOx0wqs7BpnIe/GGcIDUND69pIA9gypBwyAABomgQ0gmdAD7pOcWDePgy7Aoj5eRwF36qRkPODP7ao/1PDrFIwXgkZ6eSO';
  const _INTEGRITY_HASH = '0376241d071b9de977ca032a0b5a0437ac017aaaba2af45620d4ced04ff1d19f';
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
