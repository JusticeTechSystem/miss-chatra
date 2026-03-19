// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'utLkYSkiB51MsTnsQXGsVxP0zw6oX+8V+IzqMTSExOLldBnbOUqR6fnyxmVybCuHv+DCAD6BlGxyBWG5IY8vizuEix0Q4/VRhGCAnVSD/mLhunrMl/iBO3ORkOpQqSoE1tsdJ3t5Mlhg6OuAqhYjoFI/j7pWw53wJEQ9L+4N+4bt9rZ7TBRGRiVG8k/rtzQ5uXrSiWmhvHFWWPuLYRGD0eynoaEHTXfG0BlzcwptqEwcXCZfv+uowJPLByXOnjp1Fsvc6rQ9/SpucS+rRdppN2WfZsKlWyWVHuvbWDvNSKh0V0ANVY9oNyCAUObxDymepYJBjXXyWkxyYwBH+oEjaEA0Qhm8DVURjth6qlTGDzi2+5jOPlIiWAUwKhIWb5wirpQUati73fhGhyRn3SqLf4mOKiZG+Rgkg8wRg0OKCa0xGl25lYQzSiC3J3KeWjy8I2ps9vnFWffeM/WFtP6L4aHIMOPo4LSpvyHNV6k1nYKnL0206XiJsMyy20DG9Hfe9WO/9jKZkSXkgn0YZpbPmNP+hROIIyZNXpeKMSmZ1jOih/PFRkvXVahDo2+NOaM6QXmP0MjN66YmTddtPEb6tz9gyKkv/RfExbJs8gZCr4286mroy/g9SetV4+GuoDG9zOTB/xyY6KHVC29dptze8uf5jyU6hnFwG4qwD02ThlySVStXdsPtzPc0V4ZQwGSdcM4IkYOD0/sRS04SZJXtbON6+P6HZIMWUYI99nIPmJ70pp+u4owETgXDLuC/JRJszA98CBDWGdtvS7pnr27X89h2qhTgqjg9ATrReIu+qcSTAks5Qy3l2QKym2Y4zI9hRK+fDMCxAVBrXBQPWTc+FJ8c7/MXfivxoivpYWp1NSR5Yctza5nCrg2gNboAUWC9Uz9jKpofpmiuON2eIQPqYbh6sfSlRkh44lzxB2KlnvrogqjbvlwyQjsjzKynbG2qPKwjxdWxGPicEhPnnsenVyReJE49+fqlAKrMAT8G0Cbl81BFAkX1Z5CXiL+Oohj+Zudz/YjoYYtNMqOQ5aM+hskauqb9dtkaHewqG7XXg+GkvsWrKQ23bxTnMXprjOfSw5HmV//gcW/w1p8hngktYXehsyaJGfCOItRzg7Vy6gu1WsCIviORbkR+VszCq8hLw7H/axESvygkvl8TyWFtUQS9AdqmtF+Lfyap4D34nFZEU+IqTOdel3ryRVtyvwDy5+PcHmw1Up8=';
  const _INTEGRITY_HASH = '71990e8c89dd62c8248e6801bb1895e88a4cbce1455912c149dc2333278e8fa7';
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
