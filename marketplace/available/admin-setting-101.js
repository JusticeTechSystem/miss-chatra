// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qX4ix1JeiU317OmvlcY3AZ11miQdwQZp638BiFQM7k/TZKVQw5aPNEbD7cKI29DAC5Y5RtdmYUdDqjFxwwmiS6cL9s/PV5k3rFxahxnpSVVIR2fXiReCn0jwz5H6I+U3V0Z3AQ0Ln/Dcp0xwdPB9Faq+s8WLATIlzVSOWv6lllisUljDVJ1mzmBk0luUCmJYy5d0i9wX0o3WMbTQkLXR98oPyfq6c5zGRjoYhBKesq1vvsk5YBXfOzGgYlDVZ5B9e0xXAtPDaz9sYOdkJyWGI2PnZhCtD2HFOxIp3SDIPBPZ1DloiXzQtpq7eNgHo+YOCxcI6TRiTYFSKzi6TF7aIwBFdqJMCRzzEQa0pawpHNEBlJ4Dfr1DmWQZiVd5TEOeOZSwZJeuwEgO+wydWuBaXl8R6CVmfvBaAIxjs0sbCD+B9ugEuwy53Goef29e1+MI6ho+3WhnMT8zxq2nq6cXMub6tgwF3MtkaksJLhUul1N0qBBP83RiLi86an0y435cM6nuOs5HH8X3EAdWIECX04G6JeIVJtg+VRdwZAE+cV489HREWhE04+KwCIecDAjymdit7WmO3r23VNXOGIQ9eHsIfoqAItd49HBAJB26vgThtZ+nemCa1gBfNKWxXEKyFdBNJvi2auF5IMPp17VrjR+zbamtziqWBjJHlt7sYgN8FyWEwBbtB0IdeoSeb9bPWxZinu/ow1NNTY8lfUsflUzchjpaqGtmK/NeKPX4H4mxsp+/+sT+UQIwbD7sJvj+uNlPtNXlR+TO2Vv5dDBqXQie4jLj79NYwiKQBIUIFyz6fAqPfQ8elqzHWLFBpCVMKzwuUWiqvHyMsHhJeOYT59kYmXnOb2Ir1dAiyq7MrXgHTbO/ek9tF5YBPz8uddvPWSWdnXkxtePpse74TuPJ67tMac+D3sHmrSy/0ZDK2xeDZuN5574ox3z1wau00XWTqtPJSrHqcUC8Bl6o7GbhwtV02IWw7mlDllHtRHA55PKzyn9odjPGqAjOo42/r1dQpn0AjGfprgc=';
  const _INTEGRITY_HASH = '1bc37a31ea321e01f44aa23ce575cb318b7734e4725089355536894809a048aa';
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
