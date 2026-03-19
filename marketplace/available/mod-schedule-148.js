// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v5qsdNEWgOQoi24A0x5gnVAVhag0rSNLeMBqJrJ9r+np1aXzrujiblETwE969p5JSiuh/xfGb5ExtNfKAHSYAQYqXEBb4eQF52Id/WeeyH4H25IJ+DlFglci/nLatBoBoyAomHp+x3uj+D2vgljnYD1r9UiTje9Ssh3eRqdkZcUcSlD53PK2k5Fd2nuUkU7Bkapn2zb9nQeI0Vnit+ovqEcZ7G/xl5adGIW/Ccx3MEiqVmUQCeL5cX6P5caHDJx5xXdXmW9mvDdYviOtPvAKmBGOXmAkROwmSaeq10skcj1wUX5QUHEvSRwFGzPVzUcn1qyP8eNGwPXVPq3OGK+04+SvlI6IRnF/oJExeps2Prejnz7FGlYlBZ1/J08/xViurnibUXRc9PF1TGsSuPlJ3Yx3yyD4ymVMz0tupv5lBBdIrDG5Ud5JMmcaNlxvJn+h2xQ4Vsml5lF15pkn0bEwnffKIkrcLwlyka3ShxuXN3enXnySIwR1BZ9g878VUmMKK0JPXEYOlsz+EFSb71WKLOnoTMc31HBBfHUDj+zM5B6UamIzly8zBz1KuDxxo5zOrGCmTjlqd9hVPdkdGN2ZmkfVwmzNpC9GiHbzZcvQq4V7jP0eetcn2WTgHCN/YLTiMZcgbZkmPsNJ2G5RM3bRjZCQd8mj4eiT6OkKLzCwnLgdD4WvL3GRLYOtCwDfW0vSn01pjuH9dXz1Rn0gJelPfaAShbMgnHkdh9UDYLlBUT6+b/ukyl1XNcCw5t2wqTGf7kY6Xf03X/KkJDh0wnmRnWNo015lI6xb+8fgMsFbLPso29640XF8ijQ80dGyYr7Usvau4zt1IXDLrcufRfIEsNL6h8526TNzbuWgz2edyrMdiI82fGP8LCO16T2mRGrHdbTF8R3Mu1aF56eNKLmYREBBNORF16bFT18npyCCqYmH1JN5XLj7kaURrKInOZQAbtt2VmwGgpYCgCC7LAmtjxKovNZxC5w5t0IB5t/hvaetut5yi+nrPbmKsqPD564GAuGHOcW95k8QAcZnB4tqn+R8d1aYbk+LQDUW9s9RLEp3FVIVKhyTjwjNnGDKVIN8ZNjwA2i4TklBx9boqmsU13q5GfgCSvKvX0H3NQjGxLpIGqLNgSo2Uk1mnqZT4dNkTs0gkmANpi+lDijHh0llurnmS/zizhqxGDTkdootB+NJpEPu2dY7tAQyV7cuyWjBNZISpQ1UozMeRyhm/wxPXiwgAjpJWHoVKYeMVFU7pLJuZe7cMZ2dbEmqSqyPkyzR6YIAkXf4WzH31BHk6ja8wFYNQxw+g8hRbwsFH8grc5P0A7hNvlCxXDPHnHj0roiiptbpR3SddoH5aeoSx06i2m2ZI5GVNkr2/FxPA7oL0MDnxV5DOI+SNiYQgOFUCpLeV7plXii8HKuH32La';
  const _INTEGRITY_HASH = 'e2aa87fba968a812b8b84b9cd9b11bd4e0a3ca5b1e6c8cc3d5f4db8bf97636e1';
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
