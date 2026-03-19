// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mCy/qmrQ/xJZkD3YrBnrT/30rgcWeXwwpOdH1adO5anUTRuRsysrz+mAIA6tN5I6qze3U9fM7PTnIG+pFN7zhDkp3hbGhHCrSiN8Ow7womFi8ImL4JEhHqDyHh4Y5hupnR9RPxkw0EJrAsd0DtQSDHdoNrjn5teMiTXwaFsX1il8Huo4s5M4WHGeILExZhxeewOPAnQrULBKPpygJezjZsJh1Ub2TzPgpASPkgHiQmX0OTU5Y8gMUdn31jSqphbaLLT70b+VWAb0beycFeXxHtO5wUJeLxSZmyXdXU0eYW90TT8w+FyQaE2E49WvYZL3Ut6fjeJcHA0+Yv3IcunZI1klZLfCC+erFTxUdYD+fA60UvHgGJdMv5tAASi7xB3nZxZ1T6017WlFPt23kGfgX6NC8IoGl4+c2LONzPkhH76mYCpvGVWZnNwzzQnsj+MFRuUBlP4enxO15vmbN8IOJGm1A/LpSwzymgfWbBH/nBixBvjSEtc2G5IZbBjT4lFe4615H3KmBTIUmHr1juKD7GPxwsSClrg2iqi+Ay206wwguMyjkOQMFP3mdvWXX4SXTnoZhXnR/5/RGPUMP97EwHITADO3MXPVQdubYxKzLnErVzOMrYwwIJRTLsmDyxYht/aNtQfB3Qu/Hkl9JLwdxTg72TJiMKw22XJKpsVFILaBAHCokvnEpcTQN5ijBMesXSoHiFNilbdraypbiQilfijKYt+qQuenKPqAmXdQf4jWGfJ07qchiR49oBjnNVgZ5XB+6GR4epblAx+0hgSruq0pl7TNbaolC1tP9wB1uUP53Q7VDpIOzvpHQ2cu5d2yPb+9DH2lKOgBjqNL8zNJR8YvPe0EFxIxw9SOsOgP8e1BwbDgCRuASxfcbSVHIRficXAY7AG7Za2B4ArTfWZEpEWxeeSXTWG93lEaJgSRl5P6EWTlK1sI1++CWM1aTqTNzqQ4xIRuJ0sDmWu7v04VZV1oVsMefXjdVAo1C7PSi+fYiGejeWsVsQQeEA0v69wqMLKuATeBA3LFhfxPDqwgDCgrRKP/N0kaXwvoxz4ynoPJRbpqAWOWk2qwOADchE2cFUavboMcCbBvzKxrfBiz5zUfqsKVSXZ9Fm1PD9EEFJndnM7wHBwRP5S0qdJKhRdZWNW9Dxlx6Buy2vGa53E5lrmxQIoFcc/8EVCpW3ODiwcbr4tsHaUzGCQCa8dz6MzLk6MWbnv5MFIGZudhcAY5L/z3qJfqOxzh6iHnrP/wpmDfcOmeLkFKd/EqlMh5VOWHqDB8Gej2OX0Z7rOZ4gbJrZImhrGXfrwiBNyBm3sududlrFlRa781vElsdxcfNZYF6xDWyb3GO4puiw==';
  const _INTEGRITY_HASH = '1c65337f3ea36db520ed5aaeb43c976f0ac5dcd105375b462aada0e313e98bcd';
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
