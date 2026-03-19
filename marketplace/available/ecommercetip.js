// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rty06EOQuo8gFd+nE6yZCNUkAtihnTGFVnWEOyLKDDEVGSwSMnzqSOZy9Sw1ItimM2lvBADvnAF6XOZZ+X779reigIrB/5EVrwGwXLWBNfFvwGI7OylDUQ22aTC8QBy+ZvnDqrfie77y1ZOfOU+fOHGWaIe4OYQHY3VbQg97DIjviphX+wP6O0x5wmugTW8sgAYvNzkJqKzhRYkZIB4/QIWE6pEmCyFg4Zy03EU7FwZtCBtJlMpgmEw6a/GpqZlmZetxooGAowhyztFYW8ySTCU/hEKiRPwvQrMFOYK7qogKYGafcP4lE5VSoakj1fEy/uO2XsP084it9cqcLXgAlGExNEqWMzcYByU9RcADoIcHGqxu8DE4FfX12RMK0XLqdRy7Vp2sQxrb1a8eaUtVt/cEZe926NlMU874lk1sKVG1KGFzMS1e95vyvrXk6w/PQCV4I723LpfiUV4nYvm4aO7/crwrwieCuzATDZFo0fGoUYOTKgyllox0QGaiPsMRQWCSOb3gv/QCvxbEFEkn1GRjbyUiwxieIWSEbg6bHl+8BwdP2VgZvHdJle6l3k0oZ+pgpf7T7aEBcp2jH+YYkXaJJYfZqoRbMuACCt/hobFqNW8nfxXB443rGnSY4JL2CSpvB72eu43Lxz0PpZAZ1LNvcKNkgr/+JlVzDYhQkbe77uvq/wChoiGsGYmNjTGPGGJqbIqH42iYEJTiEiPhvESQtkoPMXumpXUyHdlP2wvlkxogvLWivMm6BhuQBGzwsn9f2LePeOTJ1X9weeOnC3DAqKW09ZIdajbXUnKIdnSv7HfDCc0wiIur8ahC+FzEgyv/sFBIgOw2XgBMNSGDMtfIMpxj5x7AvvSI/3C+8As8yzAC7oLGh9/CFFludc41f7Hig6Xv/v20/tkjiXbMXBT3SVdOhLOXLlR7/rjitBbRewT0k0xtmO7NZOng/il0Kvg8DkirZ+BH/Ak8OGqrGgAeBuh+mSZ57cgcasQCU2rc9WGA85lNoSCXtJjXYYmsvVsGY9ud6r2ZUlvwGJbot1NEyI7Dop7f5NCp2ZxG0M+ZaXvkTmYvel7/HMmMnz9NDS3PjUyKQkQVBxBumzEOYwb2ukqusWompm+sgbGncsJ99VR37EEh+rCIEq8DS0MT4ZNhatz9XGxTGDWt2hbNmsdneg07H595jbTnEny9SuPPuvb2qt/6Kwpz73+9KCalTK9PnF3aM44=';
  const _INTEGRITY_HASH = '6ae1799e3a1f0ed951b8b75a3974cd8c85ec923d4fcd663f02a1e91cdc4e09ca';
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
