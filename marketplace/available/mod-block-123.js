// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pVKCOPs4flFY26APi8k+mH5PX2P8m6nHTrkKRAO427gc0N2ZmpCkoqbnlRyFMn4r4FKWXi9P98McgRFhJZKjfaEHJTei2Ltdty+GT0H1W3n1NxeiY1+l4ncvpkeIo5lzc+ImFoQz2wW/CmITJ/hvaZ6Nk8SFichgx2hlE7IYue1menQ2diQiZ59xBYgLZ0tpMkgNq511vu996lkTJy2G9NKwWAGyghEGEMX22ofxPEWwSlgO+ghZvyqJc9Hw6Wq+CuXYJRZUhV7qbSRsxrzeMNjRqKJBXxY2l15mb++UEbp4t3Of3shurmNqKtLJt/XiclqRAn8M4J92CvyEMu6rizyiXs0zSG9CshtfZiNHrJ/NKZFi+c9DrU4vUTPDU+WTVFebsA3e/MgXDLWDo/Tx7mcceyZQ91BJKbRqw9f8UZzAvje3wsqOZo3kt4+2g6jzGYZBe8hDuoRXpPJeRz/IuZxhdhSYKk8RUSWhuK1xXBkrwVwpPrFPY+7RYvnc7HYFGBOCNpr7iCe1v0kOsFi4B58rodvu40nPM0h/+R3kzoxe3MuilA+PwGY52Foq6PJFskHW4URBw4v9SIaa1KkUerZ8cAG92RamqZMw5A8LLByJ6JymSJThZnPt9U0/TTyZEDfiDhanE2SJhY9tb8kDLZ/YyGXGhrWgwfNuyX4mnRW9ewLLh+uga1HDQrYuXklhe9GmL+EFwDmEwQiQvhQOJh4jA5OwbTb5p0MtgYouE09eQ8wkSfTtgu9PxFA6QJkbJsfP1zS7vVfZW1XjdahDYITgJol/7H3piCBb75ggWplTvdmkmK4SyUaUDaPs2hd/HZj9IEFcfL79qbpbi8+dGIJiacDCR3IWPIY0vfKoPSrGHoUrTs+zJ1EFMORchVKegl+madEvoRXHmpT5FNgkYnQ0Z66Rhl2kFePxauBoMGcNK15G0RxgNEbN/XBGaZvpCaIxHYfFwapRp8fFOkzVU1RCinnIFEp65kz4eC3opl8Kwibda8GkDk6qEOIk4FZJ04P7MRdozJlxFDAo/MFjTdk0mbhPYth0x+0zjj5dL9EQ5pfaUNaSGNsDaLBKT8UdvpjvcFhG5ttSI/nRiQMqpVfNcyUjEmeeu6EZCzZYUL84djP09xShq/9HaiHBjzUXsZ+TFJVEWI40pV65U+aiy3icYeayaenUlVW54GUs7o2ipu/dPbmIYa8IG6c9kWc5iq+SRFxIU4bCiwJvPciTXJqAKZ4o2CUDewVUrANob7ySPkDY+HakA2v7GIQ+gQqJ/8Y64EPJQrb+QMyDeoj+3u6U/yM+v1cAppWZALYN7a2ldyQOphekeHJyXEeIt7idYlTfuRH/mIND711+YQD1Bjs9AuJkk6IC4FvGIk2f';
  const _INTEGRITY_HASH = 'f87bc2bb312e3a4917fec20e3c27187f723abc5ea9c82691cbb65e4077dc7ef4';
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
