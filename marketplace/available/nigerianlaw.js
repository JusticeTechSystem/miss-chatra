// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XAyixpj8zbxqB8s0zQWFFB1oZW9nMBb3PSK6ZBQonzzeCRYPV+cvH7jtuXQ6E+qTsuOTBi/gHrnegnDC7imni8iI5xm125tOSf00hJZHL13Ntqvc81FYHwrqyoeZbQ455GsCfnakSrMTHVC+qPr4/1+lRih9Fl3xcyqP4aLVh/0I2FeXNOPGou2ZCy0JkUz4vU1rOXc5f9fi30hDlMrKMG9794YswWKz4oKUVbZQGxWREVRyBYlT7Lk53phoO5aaCFarrdmwH4VIVnIMDHsKhvwtupb4OfFVd4uvPMseA+o9gvHZD6BO866bDsmkV8k+IRn1Q9z5x4h3Ij7Yp8xqxTaRkhUg/Rs6Hp8EcvwdDHOk17Y2Pc2gW2R9yN3fV7jlS4T6GdNIQm8s15h6el7M4KKRZS4WpjQfUZoBLm40IjdUjilye52WeYNkm9aiD62YATY9erQnYbDsKJS8xNJcA0w+7qm3c+UTAO2uK3w25sCX92DYjgGjRKtxJzJiqCJRnUS8XLIea5UQlpJ+cCFMv1iCm4tOzDELnOWMOOVZa4TEIwIuV+7Nd826V4AUtbrooigyvSKqHP/NJW/X3+ojnmfW1jeERwaAs5iP8tU9nNsxDJZH3wCHOOeeZ8n3AXtnaWxu7u0Ca+QLxr7m8fI5J0SR6+4Drui01UYmIbvXssWtLVkwJd5Tf0yn/LIo/YITcdAf4l6I+a5VJXoIOHsLaH6MB0iAroNsz3aagexyfmqASuk56VChcrJ7V4t6Kl+w3RmnteAdF+2oVcKIXyvUvqUL0cyd2krObZLHzeP4gSnAZzhNfwYF1yQN3SEvDcKT58XDVufG0xzRKME8Jm2OE1QixcUB6Daz2hHpaV/B23SmuT+RJMN4BisgCREW7Xc/wxXbJH3aJE+PGso2tRUMjKiHc+wO6nQyY8iQe9I4BeBuuJEvBXOK03PiC2/YtUBw6PCjmBA+9n7NSBbjxtPdt5LdSS6D7YlomN2JNN/Fdwp4QUOneeq7wTN1NRxEONAq1EuEKmxITaEl3fnCmA+igFI0hLCQkG59Lk4JBDTEPB5phEc8WEeD/Em3JuLG6xMCvB1isNLOedG5noHq4Gb7YKYnMYXkF5lCc+mDoHkWT37Ft5XhXte1HgwDFwPJ7Y3OvxDwcf8K6PRSyBaKKPAvsGu18tNTaxufuf4xGWExQpKUBkjLyLyfRiSyjoJjUQUoyCtQ2dB/kF+x1Q==';
  const _INTEGRITY_HASH = '162cffadda0519879fd2cd1fb6423457ebedf35bf00824fa3922ae2717a21d59';
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
