// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0UJQHfHCBEmTv4745Tf8rbeCvqlde27xYoc4eNi12ToWMLTbcR9yja9fma2P8/bo9C8FMgUKmdpBCRc/ST3DpKiqXmRgsyeY9QbQKBR02A7Gj0Babb80FTKdTbzv244MhSomyoDd/lGNWsw9u66FsCuwqUNcJW6tgi3YJ7nJhZCQBvvMf7qt/sux+P3me77OE2McXe2IeNNkXhw5hZlTHv+3sw68YZTBbD2+NDXS1uND7gwauvAhKtc4xdJSz+LXgIaudyGAT3T1MLOktEjsii0nRdVSKQKpSsvRnukWf0lC9FuYiK9n/GsL2ZyVjzbw8d0gxQBf/Zw5a82AJGyKd+nxQKh2c+m40BZMfo7ddBxziveoLBy+Ew7t4+hlnrENNoEPUGwJllGZ/ERiZvZFkBrqNIwWuLTkdmNc9n8wLUerE+yQhio6i483yFYL9UFEFQ28pnwybs6p4RiQDiScIq4UgHvdYpTwRhwDT8n4VftTP5+0bjZKlRSmfStddS+PrO8Y0HNuicT+ktN1ggjH1Cj+qcxxywyC+Q6m0wiEhLP65KI4fY8XmSpiWofp28fpr5TAmVMUW+bI4jrAtIDphcoPd9rGxlkPyP1YNhE+FTIQ7q/iD7h05naEX+dcOXlyG7AkdQZnc8+kgy96alRbJDLl1UURv89B6P1lNLVMhGHcbbBPDlvC2Ss0aKEwHE8H4VwskZm1Zh1RE7N0PEkgTp0t6mCBFWGbEp+im3knsCRz+6hZZToLUyQlbpqfBvcMI8WjfJH4VRZ62xSnAhZiTOmu5uuGtHivOr2JQnJLE3MEh2cfsNHJC6QDa8CQ+UXxUUyKST8fNOf41asFzJddpxLTZK7k7MMMT+rcTx7GEqxwH/tSKOx1n4SUMAd+ACFkJyZjvUTDysOTgV1dSHlzSouVA347Tuy1R36Yjf6yBIVSUYSOF5/8cFVGeIm9hEL6/ewm6cUdQlYbtB/hbKiNEKNu2nZfN/xvOON3FFu6g63k81rGMJhLYuYmUKhtYk/KKm3UTv/WWFeIufd3ZgBkAjNPLnqFz1bnJWwXOtdQIDFyVG6/jUA+B+qOnQKqfqhzHojOlyERPWYcT6c72HK8TP7iLf274cwUDoP34NoiPlvxvTfTg6lFrQDLadp68dphK/xeGbU/fVfs1CuK4hIXxPVvra+XVtS+rrw7TbGa5aHobCplKu00MXPgw6dIMNCg9GbXyPCIUPe057MKrrtoehuFUNfqMRepgSXgmXtvCgewVK8FBat06syKFNIFnBz88P09HLIsmb6eubdIIzuu7BCwYp0kMSONLid8gJYkDyWHE23UOCKJtGShcReVftlRIyYVTHtUB5vlMXz1x8ND7VqPNoCvhlN9Qw==';
  const _INTEGRITY_HASH = 'd2a82bc08ec493ebb8c45c4f459edb4d6ffe0c5b3fc2a60198f6578fc3ae10e8';
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
